import { fish } from './fish.js'
import { getFish } from './database.js'
import { getTips } from './database.js'
import { tips } from './tips.js'
import { locations } from './locations.js'


/*const allFish = fish()
    console.log(allFish)


const allTips = getTips()
    console.log(allTips) */


const parentHTMLElement = document.querySelector("#Aquarium")


parentHTMLElement.innerHTML = fish() + tips() + locations()
