import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

    this.task = data.task
    this.id = data.id || generateId();
    this.listId = data.listId
  }

  get Template() {

    return /*html*/`
    <div class="col-12 m-2">
    <p>${this.task}<button class="text-danger close float-right mb-2 " onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button></p>
    </div>`
  }
  //Be sure to add the methods needed to create the view template for this model

}
