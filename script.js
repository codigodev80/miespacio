let currentModalType = "task";

// --- PERSISTENCIA Y CARGA DE DATOS ---
let tasks = JSON.parse(localStorage.getItem("agenda_tasks")) || [];
let events = JSON.parse(localStorage.getItem("agenda_events")) || [];
let currentTheme = localStorage.getItem("agenda_theme") || "theme-aurora";
let isDarkMode = localStorage.getItem("agenda_dark_mode") === "true";

// Elementos DOM
const fabWrapper = document.getElementById("fabWrapper");
const fabMainBtn = document.getElementById("fabMainBtn");
const customModal = document.getElementById("customModal");
const modalTitle = document.getElementById("modalTitle");
const btnSave = document.getElementById("btnSave");
const tasksContainer = document.getElementById("tasksContainer");
const eventsContainer = document.getElementById("eventsContainer");
const darkModeToggle = document.getElementById("darkModeToggle");
const copyVerseBtn = document.getElementById("copyVerseBtn");

// --- SISTEMA DE PERSONALIZACIÓN DE USUARIO ---
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

// --- RENDERIZADO INTERFAZ ---
function renderTasks() {
  tasksContainer.innerHTML = "";
  if (tasks.length === 0) {
    tasksContainer.innerHTML =
      '<p class="time" style="text-align:center; padding:10px;">No hay tareas pendientes</p>';
    return;
  }
  tasks.forEach((task) => {
    const item = document.createElement("div");
    item.className = `task-item cat-${task.category || "urgent"}`;
    item.innerHTML = `
            <label class="task-label">
                <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${task.id}, this)">
                <span class="checkmark"></span>
                <div class="task-text">
                    <p class="${task.completed ? "completed" : ""}">${task.text}</p>
                    <span class="time">${task.time} hrs</span>
                </div>
            </label>
            <button class="delete-btn" onclick="deleteItem(${task.id}, 'task')">×</button>
        `;
    tasksContainer.appendChild(item);
  });
}

function renderEvents() {
  eventsContainer.innerHTML = "";
  if (events.length === 0) {
    eventsContainer.innerHTML =
      '<div class="card event-card"><p class="time">No hay reuniones para hoy</p></div>';
    return;
  }
  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = `card event-card cat-${event.category || "urgent"}`;
    card.innerHTML = `
            <div class="event-info">
                <h3>${event.text}</h3>
                <span class="time">${event.time} hrs</span>
            </div>
            <div class="event-right">
                <span class="status-dot"></span>
                <button class="delete-btn" onclick="deleteItem(${event.id}, 'event')">×</button>
            </div>
        `;
    eventsContainer.appendChild(card);
  });
}

function toggleTask(id, checkbox) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = checkbox.checked;
    saveData("tasks");
    renderTasks();
  }
}

fn = deleteItem = (id, type) => {
  if (type === "task") {
    tasks = tasks.filter((t) => t.id !== id);
    saveData("tasks");
    renderTasks();
  } else {
    events = events.filter((e) => e.id !== id);
    saveData("events");
    renderEvents();
  }
};

// --- LOGICA DE VERSICULO DEL DIA Y ALERTAS ---
function updateDailyVerse() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const verseIndex = dayOfYear % BIBLE_VERSES.length;
  const todayVerse = BIBLE_VERSES[verseIndex];

  document.getElementById("dailyQuote").innerText = `"${todayVerse.text}"`;
  document.getElementById("dailyAuthor").innerText = todayVerse.source;
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

// Inicialización global
applyPreferences();
updateDailyVerse();
renderTasks();
renderEvents();
setInterval(checkAlarms, 15000);
