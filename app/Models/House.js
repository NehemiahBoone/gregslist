import { generateId } from "../utils.js"

export default class House {
  constructor({ city, zip, price, img, description }) {
    this.id = generateId()
    this.city = city
    this.zip = zip
    this.price = price
    this.img = img
    this.description = description
  }

  get Template() {
    return `
    <div class="col-4 my-2">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.city} - ${this.zip}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>
    `
  }
}