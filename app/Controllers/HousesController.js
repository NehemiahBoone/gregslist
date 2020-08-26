import housesService from "../Services/HousesService.js";
import STORE from "../store.js";

function _drawHouses() {
  let houses = STORE.State.houses
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(h => template += h.Template)
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {

  }
}