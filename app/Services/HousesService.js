import House from "../Models/House.js"
import STORE from "../store.js"

class HousesService {

  removeHouse



  createHouse(rawHouse) {
    let house = new House(rawHouse)
    STORE.State.houses.push(house)
  }

}

const SERVICE = new HousesService()
export default SERVICE