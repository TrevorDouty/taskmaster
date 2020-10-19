import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"


export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title;
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {

    return /*html*/`
    <div class="col-3 m-3 shadow-lg border-dark">
    
    <button class=" text-danger position-fixed-top float-right m-3 close" onclick="app.listController.delete('${this.id}')"><span>&times;</span></button>
    
    <h3 class="text-center mt-4">${this.title}</h3>
  <form onsubmit="app.taskController.create(event, '${this.id}')">
  <div class ="form-group">
  <input type="text" name="task" class="form-control" placeholder="New Task Here..."
  aria-describedby="helpId">
<button type="submit" class="btn btn-success">Create Task</button>
  </div>
  </form>
  <h5>Tasks</h5>
  <div class="row">
  ${this.Tasks}</div>
    </div>`

  }

  get Tasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }
}
