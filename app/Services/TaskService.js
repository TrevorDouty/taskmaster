import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

class TaskService {
  constructor() {
    ProxyState.on("tasks", saveState)
  }
  create(task) {

    ProxyState.tasks = [...ProxyState.tasks, (new Task(task))]
    console.log(ProxyState.tasks);
  }

  delete(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id);
    console.log(ProxyState.tasks)
  }
}

export const taskService = new TaskService();