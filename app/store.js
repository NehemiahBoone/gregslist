import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  /** @type {House[]} */
  houses: [
    new House({ city: 'Meridian', zip: '83646', price: 500000, img: 'https://photos.zillowstatic.com/p_e/ISvknwyf8hner21000000000.jpg', description: "It's gonna keep goin up!" }),
    new House({ city: 'Boise', zip: '83701', price: 250000, img: 'https://ap.rdcpix.com/b42b7e812d2eb088342bcac523ffb071l-m4193156025od-w480_h360.jpg', description: 'Real quaint.' }),
    new House({ city: 'Meridian', zip: '83646', price: 1000000, img: 'https://photos.zillowstatic.com/p_e/ISnisg5pmkd3aq0000000000.jpg', description: "Luxury!" })
  ],
  /** @type {Job[]} */
  jobs: [
    new Job({ title: 'High School Teacher', location: 'Meridian', pay: 18, img: 'https://elearningindustry.com/wp-content/uploads/2019/10/professional-development-tools-for-teachers.jpg', description: 'This will not be fun.' }),
    new Job({ title: 'Nuclear Scientist', location: '???', pay: 400, img: 'https://www.iaea.org/sites/default/files/images/2012/01/nuclear-women-330x220.jpg', description: 'Dangerous!!!' }),
    new Job({ title: 'Cook', location: 'Boise', pay: 10, img: 'https://thumbor.thedailymeal.com/8p9NSrKL_yHizw6p_eJVLukPOHw=/870x565/https://www.thedailymeal.com/sites/default/files/story/MAIN-skillsperfect-istock_thinkstock.jpg', description: 'No experience required.' })
  ]
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state
  }
}

const STORE = new Store()
export default STORE
