let currentModalType = "task";

// --- PERSISTENCIA Y CARGA DE DATOS ---
let tasks = JSON.parse(localStorage.getItem("agenda_tasks")) || [];
let events = JSON.parse(localStorage.getItem("agenda_events")) || [];
let currentTheme = localStorage.getItem("agenda_theme") || "theme-aurora";
let isDarkMode = localStorage.getItem("agenda_dark_mode") === "true";

// --- ENTRADA SEGURA Y AJUSTE DE PREFERENCIAS ---
function applyPreferences() {
  // Aplicar Tema de Fondo
  document.body.className = currentTheme;
  // Aplicar Modo Oscuro si corresponde
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerText = "☀️";
  } else {
    darkModeToggle.classList.remove("dark-mode");
    darkModeToggle.innerText = "🌙";
  }
}

function changeTheme(themeName) {
  currentTheme = themeName;
  localStorage.setItem("agenda_theme", themeName);
  applyPreferences();
  showToast("🎨 Tema Actualizado", "Has cambiado la paleta de fondo.");
}

darkModeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  localStorage.setItem("agenda_dark_mode", isDarkMode);
  applyPreferences();
  showToast(
    isDarkMode ? "🌙 Modo Oscuro" : "☀️ Modo Claro",
    "Interfaz visual adaptada.",
  );
});

function changeTheme(themeName) {
  const validThemes = [
    "theme-aurora",
    "theme-sunset",
    "theme-ocean",
    "theme-forest",
  ];
  if (!validThemes.includes(themeName)) return;
  currentTheme = themeName;
  localStorage.setItem("agenda_theme", themeName);
  applyPreferences();
  showToast("🎨 Tema Actualizado", "Has cambiado la paleta de fondo.");
}

// --- INICIALIZACIÓN DE EVENTOS DEL COMPONENTE ---
function initApp() {
  applyPreferences();

  // Configurar selectores manuales para evitar bloqueos asíncronos
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.onclick = () => {
      isDarkMode = !isDarkMode;
      localStorage.setItem("agenda_dark_mode", isDarkMode);
      applyPreferences();
      showToast(
        isDarkMode ? "🌙 Modo Oscuro" : "☀️ Modo Claro",
        "Interfaz visual adaptada.",
      );
    };
  }

  const copyVerseBtn = document.getElementById("copyVerseBtn");
  if (copyVerseBtn) {
    copyVerseBtn.onclick = () => {
      const text = document.getElementById("dailyQuote").innerText;
      const author = document.getElementById("dailyAuthor").innerText;
      navigator.clipboard.writeText(`${text} — ${author}`).then(() => {
        showToast("📋 Copiado", "El versículo se guardó en tu portapapeles.");
      });
    };
  }

  const fabMainBtn = document.getElementById("fabMainBtn");
  const fabWrapper = document.getElementById("fabWrapper");
  if (fabMainBtn && fabWrapper) {
    fabMainBtn.onclick = () => fabWrapper.classList.toggle("active");
    document.addEventListener("click", (e) => {
      if (!fabWrapper.contains(e.target)) fabWrapper.classList.remove("active");
    });
  }

  const btnSave = document.getElementById("btnSave");
  if (btnSave) {
    btnSave.onclick = () => {
      const title = document.getElementById("inputTitle").value.trim();
      const time = document.getElementById("inputTime").value;
      const categoryEl = document.querySelector(
        'input[name="categoryColor"]:checked',
      );
      const category = categoryEl ? categoryEl.value : "urgent";

      if (!title || !time) {
        showToast("⚠️ Campos vacíos", "Por favor completa la información.");
        return;
      }

      if (currentModalType === "task") {
        tasks.push({
          id: Date.now(),
          text: title,
          time: time,
          category: category,
          completed: false,
          notified: false,
        });
        localStorage.setItem("agenda_tasks", JSON.stringify(tasks));
        renderTasks();
      } else {
        events.push({
          id: Date.now(),
          text: title,
          time: time,
          category: category,
          notified: false,
        });
        localStorage.setItem("agenda_events", JSON.stringify(events));
        renderEvents();
      }
      closeModal();
      showToast("✨ Creado", "Se ha guardado con éxito.");
    };
  }

  updateDailyVerse();
  renderTasks();
  renderEvents();
  setInterval(checkAlarms, 15000);
}

// --- VENTANA MODAL ---
function openModal(type) {
  currentModalType = type === "task" ? "task" : "event";
  const modalTitle = document.getElementById("modalTitle");
  if (modalTitle)
    modalTitle.innerText =
      currentModalType === "task" ? "Nueva Tarea" : "Nueva Reunión";

  document.getElementById("inputTitle").value = "";
  document.getElementById("inputTime").value = "";
  const defRadio = document.querySelector(
    'input[name="categoryColor"][value="urgent"]',
  );
  if (defRadio) defRadio.checked = true;

  const customModal = document.getElementById("customModal");
  if (customModal) customModal.classList.add("active");

  const fabWrapper = document.getElementById("fabWrapper");
  if (fabWrapper) fabWrapper.classList.remove("active");
}

function closeModal() {
  const customModal = document.getElementById("customModal");
  if (customModal) customModal.classList.remove("active");
}

// --- RENDERIZADO VISUAL EXCLUSIVO TEXT-CONTENT (ANTI-XSS) ---
function renderTasks() {
  const tasksContainer = document.getElementById("tasksContainer");
  if (!tasksContainer) return;
  tasksContainer.innerHTML = "";

  if (tasks.length === 0) {
    const fallback = document.createElement("p");
    fallback.className = "time";
    fallback.style.cssText = "text-align:center; padding:10px; width:100%;";
    fallback.textContent = "No hay tareas pendientes";
    tasksContainer.appendChild(fallback);
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement("div");
    item.className = `task-item cat-${task.category || "urgent"}`;

    const label = document.createElement("label");
    label.className = "task-label";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = task.completed;
    input.onchange = () => {
      task.completed = input.checked;
      localStorage.setItem("agenda_tasks", JSON.stringify(tasks));
      renderTasks();
    };

    const checkmark = document.createElement("span");
    checkmark.className = "checkmark";

    const taskTextDiv = document.createElement("div");
    taskTextDiv.className = "task-text";

    const p = document.createElement("p");
    if (task.completed) p.className = "completed";
    p.textContent = task.text;

    const timeSpan = document.createElement("span");
    timeSpan.className = "time";
    timeSpan.textContent = `${task.time} hrs`;

    taskTextDiv.appendChild(p);
    taskTextDiv.appendChild(timeSpan);
    label.appendChild(input);
    label.appendChild(checkmark);
    label.appendChild(taskTextDiv);

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "×";
    delBtn.onclick = () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      localStorage.setItem("agenda_tasks", JSON.stringify(tasks));
      renderTasks();
    };

    item.appendChild(label);
    item.appendChild(delBtn);
    tasksContainer.appendChild(item);
  });
}

function renderEvents() {
  const eventsContainer = document.getElementById("eventsContainer");
  if (!eventsContainer) return;
  eventsContainer.innerHTML = "";

  if (events.length === 0) {
    const fallback = document.createElement("div");
    fallback.className = "card event-card";
    fallback.style.cssText = "justify-content:center; width:100%;";
    fallback.innerHTML = '<p class="time">No hay reuniones para hoy</p>';
    eventsContainer.appendChild(fallback);
    return;
  }

  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = `card event-card cat-${event.category || "urgent"}`;

    const infoDiv = document.createElement("div");
    infoDiv.className = "event-info";

    const h3 = document.createElement("h3");
    h3.textContent = event.text;

    const timeSpan = document.createElement("span");
    timeSpan.className = "time";
    timeSpan.textContent = `${event.time} hrs`;

    infoDiv.appendChild(h3);
    infoDiv.appendChild(timeSpan);

    const rightDiv = document.createElement("div");
    rightDiv.className = "event-right";

    const dot = document.createElement("span");
    dot.className = "status-dot";

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "×";
    delBtn.onclick = () => {
      events = events.filter((e) => e.id !== event.id);
      localStorage.setItem("agenda_events", JSON.stringify(events));
      renderEvents();
    };

    rightDiv.appendChild(dot);
    rightDiv.appendChild(delBtn);
    card.appendChild(infoDiv);
    card.appendChild(rightDiv);
    eventsContainer.appendChild(card);
  });
}

// --- CONTROL DEL VERSÍCULO DIARIO ---
function updateDailyVerse() {
  if (typeof BIBLE_VERSES === "undefined" || BIBLE_VERSES.length === 0) {
    setTimeout(updateDailyVerse, 50);
    return;
  }

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const verseIndex =
    (dayOfYear - 1 + BIBLE_VERSES.length) % BIBLE_VERSES.length;
  const todayVerse = BIBLE_VERSES[verseIndex];

  const quoteEl = document.getElementById("dailyQuote");
  const authorEl = document.getElementById("dailyAuthor");

  if (todayVerse && quoteEl && authorEl) {
    quoteEl.textContent = `"${todayVerse.text}"`;
    authorEl.textContent = todayVerse.source;
  }
}
function checkAlarms() {
  const now = new Date();
  const currentTimeString = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  tasks.forEach((task) => {
    if (!task.completed && !task.notified && task.time === currentTimeString) {
      showToast("⏰ Alerta de Tarea", task.text);
      task.notified = true;
      saveData("tasks");
    }
  });

  events.forEach((event) => {
    if (!event.notified && event.time === currentTimeString) {
      showToast("📅 Reunión Iniciando", event.text);
      event.notified = true;
      saveData("events");
    }
  });
}

function showToast(title, message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<h4>${title}</h4><p>${message}</p>`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// --- MENÚ DESPLEGABLE Y VENTANA MODAL ---
fabMainBtn.addEventListener("click", () =>
  fabWrapper.classList.toggle("active"),
);
document.addEventListener("click", (e) => {
  if (!fabWrapper.contains(e.target)) fabWrapper.classList.remove("active");
});

function openModal(type) {
  currentModalType = type;
  modalTitle.innerText = type === "task" ? "Nueva Tarea" : "Nueva Reunión";
  document.getElementById("inputTitle").value = "";
  document.getElementById("inputTime").value = "";
  document.querySelector(
    'input[name="categoryColor"][value="urgent"]',
  ).checked = true;
  customModal.classList.add("active");
  fabWrapper.classList.remove("active");
}

function closeModal() {
  customModal.classList.remove("active");
}

btnSave.addEventListener("click", () => {
  const title = document.getElementById("inputTitle").value.trim();
  const time = document.getElementById("inputTime").value;
  const category = document.querySelector(
    'input[name="categoryColor"]:checked',
  ).value;

  if (!title || !time) {
    showToast("⚠️ Campos vacíos", "Por favor completa la información.");
    return;
  }

  if (currentModalType === "task") {
    tasks.push({
      id: Date.now(),
      text: title,
      time: time,
      category: category,
      completed: false,
      notified: false,
    });
    saveData("tasks");
    renderTasks();
  } else {
    events.push({
      id: Date.now(),
      text: title,
      time: time,
      category: category,
      notified: false,
    });
    saveData("events");
    renderEvents();
  }
  closeModal();
  showToast("✨ Creado", "Se ha guardado con éxito.");
});

function saveData(type) {
  if (type === "tasks")
    localStorage.setItem("agenda_tasks", JSON.stringify(tasks));
  if (type === "events")
    localStorage.setItem("agenda_events", JSON.stringify(events));
}

// --- FUNCIÓN COPIAR VERSÍCULO ---
copyVerseBtn.addEventListener("click", () => {
  const text = document.getElementById("dailyQuote").innerText;
  const author = document.getElementById("dailyAuthor").innerText;
  const fullText = `${text} — ${author}`;

  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      showToast("📋 Copiado", "El versículo se guardó en tu portapapeles.");
    })
    .catch(() => {
      showToast("⚠️ Error", "No se pudo copiar el texto.");
    });
});

// Inicialización global
applyPreferences();
updateDailyVerse();
renderTasks();
renderEvents();
setInterval(checkAlarms, 15000);
