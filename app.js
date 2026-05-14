const STORAGE_KEY = "fluxboard.tasks.v1";

const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("titleInput");
const notesInput = document.getElementById("notesInput");
const dueInput = document.getElementById("dueInput");
const priorityInput = document.getElementById("priorityInput");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");
const taskTemplate = document.getElementById("taskTemplate");

const totalCount = document.getElementById("totalCount");
const activeCount = document.getElementById("activeCount");
const doneCount = document.getElementById("doneCount");

const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));

let tasks = loadTasks();
let currentFilter = "all";

render();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  if (!title) {
    return;
  }

  const task = {
    id: crypto.randomUUID(),
    title,
    notes: notesInput.value.trim(),
    dueDate: dueInput.value,
    priority: priorityInput.value,
    done: false,
    createdAt: Date.now(),
  };

  tasks = [task, ...tasks];
  saveTasks();
  taskForm.reset();
  priorityInput.value = "keskmine";
  render();
  titleInput.focus();
});

searchInput.addEventListener("input", render);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

taskList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-id]");
  if (!card) {
    return;
  }

  const taskId = card.dataset.id;

  if (event.target.matches(".toggle-btn")) {
    tasks = tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task);
    saveTasks();
    render();
  }

  if (event.target.matches(".delete-btn")) {
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks();
    render();
  }
});

function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : sampleTasks();
  } catch {
    return sampleTasks();
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function sampleTasks() {
  return [
    {
      id: crypto.randomUUID(),
      title: "Koosta sprinti backlog",
      notes: "Vali esimesed funktsioonid, mida tiim reaalselt vajab.",
      dueDate: tomorrow(),
      priority: "korge",
      done: false,
      createdAt: Date.now() - 1000 * 60 * 60 * 4,
    },
    {
      id: crypto.randomUUID(),
      title: "Loo lihtne UI kujundus",
      notes: "Kasuta kontrasti, kaarte ja selget infovoogu.",
      dueDate: "",
      priority: "keskmine",
      done: true,
      createdAt: Date.now() - 1000 * 60 * 60 * 10,
    },
  ];
}

function tomorrow() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

function formatDueDate(value) {
  if (!value) {
    return "Tahtaeg puudub";
  }

  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("et-EE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleTasks = tasks.filter((task) => {
    const matchesFilter =
      currentFilter === "all" ||
      (currentFilter === "active" && !task.done) ||
      (currentFilter === "done" && task.done);

    const haystack = `${task.title} ${task.notes}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);

    return matchesFilter && matchesSearch;
  });

  totalCount.textContent = String(tasks.length);
  activeCount.textContent = String(tasks.filter((task) => !task.done).length);
  doneCount.textContent = String(tasks.filter((task) => task.done).length);

  taskList.innerHTML = "";

  if (visibleTasks.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        Midagi ei leitud. Lisa uus ulesanne voi muuda filtrit.
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  visibleTasks.forEach((task) => {
    const element = taskTemplate.content.cloneNode(true);
    const card = element.querySelector(".task-card");
    const title = element.querySelector("h3");
    const badge = element.querySelector(".badge");
    const notes = element.querySelector(".task-notes");
    const meta = element.querySelector(".task-meta");
    const toggleButton = element.querySelector(".toggle-btn");

    card.dataset.id = task.id;
    card.classList.toggle("is-done", task.done);

    title.textContent = task.title;
    badge.textContent = task.done ? "Tehtud" : "Tegemisel";
    badge.dataset.priority = task.priority;

    notes.textContent = task.notes || "Sonum puudub.";
    meta.innerHTML = `
      <span>${formatDueDate(task.dueDate)}</span>
      <span>Prioriteet: ${task.priority}</span>
      <span>${new Intl.DateTimeFormat("et-EE", { dateStyle: "medium" }).format(new Date(task.createdAt))}</span>
    `;

    toggleButton.textContent = task.done ? "Valmis tagasi" : "Marki tehtuks";

    fragment.appendChild(element);
  });

  taskList.appendChild(fragment);
}