let db;
const request = indexedDB.open("AgendaPersonalDB", 1);

request.onupgradeneeded = (e) => {
  db = e.target.result;
  if (!db.objectStoreNames.contains("eventos")) {
    db.createObjectStore("eventos", { keyPath: "id" });
  }
};

request.onsuccess = (e) => {
  db = e.target.result;
  cargarVersiculo();
  cargarElementosDelDia();
  verificarEstadoNotificaciones();
  // Escáner de alarmas continuo cada 30 segundos para mayor precisión
  setInterval(verificarAlarmas, 30000);
};

request.onerror = (e) => console.error("Error base de datos:", e.target.error);

function cargarVersiculo() {
  const hoy = new Date();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDate()).padStart(2, "0");
  const llaveFecha = `${mes}-${dia}`;

  fetch("versiculos.json")
    .then((res) => res.json())
    .then((data) => {
      if (data[llaveFecha]) {
        document.getElementById("texto-versiculo").innerText =
          `"${data[llaveFecha].texto}"`;
        document.getElementById("cita-versiculo").innerText =
          data[llaveFecha].cita;
      }
    })
    .catch(() => {
      document.getElementById("texto-versiculo").innerText =
        '"Confía en el Señor con todo tu corazón."';
      document.getElementById("cita-versiculo").innerText = "Proverbios 3:5";
    });
}

function toggleModal() {
  document.getElementById("modal-captura").classList.toggle("hidden");
  document.getElementById("form-fecha").value = new Date()
    .toISOString()
    .split("T")[0];
}

function guardarEvento() {
  const titulo = document.getElementById("form-titulo").value.trim();
  const tipo = document.getElementById("form-tipo").value;
  const fecha = document.getElementById("form-fecha").value;
  const hora = document.getElementById("form-hora").value;
  const alerta = document.getElementById("form-alerta").checked;

  if (!titulo || !fecha || !hora)
    return alert("Por favor escribe un título y hora válidos.");

  const nuevoRegistro = {
    id: Date.now().toString(),
    titulo,
    tipo,
    fecha,
    hora,
    alerta,
    completado: false,
  };

  const transaction = db.transaction(["eventos"], "readwrite");
  store = transaction.objectStore("eventos");

  store.add(nuevoRegistro).onsuccess = () => {
    toggleModal();
    document.getElementById("form-titulo").value = "";
    cargarElementosDelDia();
  };
}

function cargarElementosDelDia() {
  const hoyIso = new Date().toISOString().split("T")[0];
  const reunionesContenedor = document.getElementById("lista-reuniones");
  const tareasContenedor = document.getElementById("lista-tareas");

  reunionesContenedor.innerHTML = "";
  tareasContenedor.innerHTML = "";

  const transaction = db.transaction(["eventos"], "readonly");
  const store = transaction.objectStore("eventos");

  store.getAll().onsuccess = (e) => {
    const todos = e.target.result || [];
    const deHoy = todos.filter((item) => item.fecha === hoyIso);

    deHoy.forEach((item) => {
      if (item.tipo === "reunion") {
        reunionesContenedor.innerHTML += `
                    <div class="w-full glass-panel rounded-2xl p-4 flex justify-between items-center shadow-sm border-l-4 border-l-indigo-500 transition duration-200">
                        <div class="text-left">
                            <p class="font-bold text-sm text-slate-900">${item.titulo}</p>
                            <p class="text-xs text-indigo-600 font-bold mt-0.5">⏰ ${item.hora} hrs</p>
                        </div>
                        <button onclick="eliminarEvento('${item.id}')" class="text-slate-300 hover:text-red-500 p-2 transition cursor-pointer">
                            <svg xmlns="http://w3.org" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>`;
      } else {
        tareasContenedor.innerHTML += `
                    <div class="flex items-center justify-between border-b border-slate-100/80 pb-3 last:border-0 last:pb-0">
                        <label class="flex items-center gap-3 cursor-pointer text-left w-full">
                            <input type="checkbox" ${item.completado ? "checked" : ""} onchange="cambiarEstadoTarea('${item.id}', this.checked)" class="rounded-md border-slate-300 text-indigo-600 w-5 h-5 cursor-pointer">
                            <span class="text-sm font-semibold transition-all ${item.completado ? "line-through text-slate-400 italic" : "text-slate-700"}">${item.titulo}</span>
                        </label>
                        <div class="flex items-center gap-2">
                            <span class="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">${item.hora}</span>
                            <button onclick="eliminarEvento('${item.id}')" class="text-slate-300 hover:text-red-500 p-1 transition cursor-pointer">
                                <svg xmlns="http://w3.org" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    </div>`;
      }
    });

    if (reunionesContenedor.innerHTML === "")
      reunionesContenedor.innerHTML = `<p class="text-xs text-slate-400 py-2">¡Día libre de reuniones! 🎉</p>`;
    if (tareasContenedor.innerHTML === "")
      tareasContenedor.innerHTML = `<p class="text-xs text-slate-400 py-2">No tienes tareas pendientes.</p>`;
  };
}

function cambiarEstadoTarea(id, estado) {
  const transaction = db.transaction(["eventos"], "readwrite");
  const store = transaction.objectStore("eventos");
  store.get(id).onsuccess = (e) => {
    const data = e.target.result;
    if (data) {
      data.completado = estado;
      store.put(data).onsuccess = () => cargarElementosDelDia();
    }
  };
}

function eliminarEvento(id) {
  if (confirm("¿Quieres quitar esta actividad de tu día?")) {
    const transaction = db.transaction(["eventos"], "readwrite");
    const store = transaction.objectStore("eventos");
    store.delete(id).onsuccess = () => cargarElementosDelDia();
  }
}

// 5. MOTOR REPARADO DE ALARMAS NATIVAS VIA SERVICE WORKER
function verificarAlarmas() {
  const ahora = new Date();
  const hoyIso = ahora.toISOString().split("T")[0];
  const horaActual = `${String(ahora.getHours()).padStart(2, "0")}:${String(ahora.getMinutes()).padStart(2, "0")}`;

  const transaction = db.transaction(["eventos"], "readwrite");
  const store = transaction.objectStore("eventos");

  store.getAll().onsuccess = (e) => {
    const eventos = e.target.result || [];
    eventos.forEach((item) => {
      if (
        item.fecha === hoyIso &&
        item.hora === horaActual &&
        item.alerta &&
        !item.completado
      ) {
        // Disparar la alerta nativa usando el hilo seguro de Service Worker
        if (
          "serviceWorker" in navigator &&
          Notification.permission === "granted"
        ) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(`⏰ Alerta de tu Agenda`, {
              body: `Es momento de: ${item.titulo}`,
              icon: "https://flaticon.com",
              badge: "https://flaticon.com",
              vibrate: [200, 100, 200],
            });
          });
        }

        item.alerta = false; // Desactivar para que no repita en el mismo minuto
        store.put(item);
      }
    });
  };
}

function verificarEstadoNotificaciones() {
  if ("Notification" in window && Notification.permission !== "granted") {
    document.getElementById("btn-permiso-alertas").classList.remove("hidden");
  }
}

function solicitarPermisoNotificaciones() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        document.getElementById("btn-permiso-alertas").classList.add("hidden");
        alert("¡Perfecto! Las notificaciones automáticas están activadas.");
      }
    });
  }
}

// 6. REGISTRO DEL SERVICE WORKER (IMPRESCINDIBLE PARA ALARMAS)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("Service Worker de Alertas listo."))
    .catch((err) => console.error("Error Service Worker:", err));
}
