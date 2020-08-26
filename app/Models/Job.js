import { generateId } from "../utils.js"

export default class Job {
  constructor({ title, location, pay, img, description }) {
    this.id = generateId()
    this.title = title
    this.location = location
    this.pay = pay
    this.img = img
    this.description = description
  }

  get Template() {
    return `
    <div class="col-4 my-2">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.title} - ${this.location}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <p>$${this.pay.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>
    `
  }
}