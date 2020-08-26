import housesService from "../Services/HousesService.js"
import STORE from "../store.js"

function _drawHouses() {
  let houses = STORE.State.houses
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(h => template += h.Template)
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {
    _drawHouses()
  }

  createHouse() {
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      city: form.city.value,
      // @ts-ignore
      zip: form.zip.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    housesService.createHouse(rawHouse)
    _drawHouses()
  }

  removeHouse(id) {
    housesService.removeHouse(id)
    _drawHouses()
  }
}