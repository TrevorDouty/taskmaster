import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
import { taskService } from "../Services/TaskService.js";




export default class TaskController {
  create(e, listId) {
    e.preventDefault()
    let tasks = {
      task: e.target.task.value,

      listId
    }
    // console.log(tasks)

    taskService.create(tasks)

    e.target.reset()
    //TODO: Your app will need the ability to create, and delete lists
  }

  delete(byTaskId) {
    let exit = confirm('Are you sure?')
    if (exit == true) {
      taskService.delete(byTaskId)
    }

  }

}

