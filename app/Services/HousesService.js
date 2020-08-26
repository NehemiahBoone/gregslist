import House from "../Models/House.js"
import STORE from "../store.js"

class HousesService {

  removeHouse(id) {
    let houseIndex = STORE.State.houses.findIndex(h => h.id === id)
    if (houseIndex == -1) {
      console.error('Invalid id')
      return
    }
    STORE.State.houses.splice(houseIndex, 1)
  }

  createHouse(rawHouse) {
    let house = new House(rawHouse)
    STORE.State.houses.push(house)
  }

}

const SERVICE = new HousesService()
export default SERVICE