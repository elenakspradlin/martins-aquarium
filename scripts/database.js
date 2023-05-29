/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Wolfie",
            species: "Wolf Cichlid",
            length: 28,
            food: "Other fish, crustaceans and insects",
            location: "Central America",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/Wolf_Cichlid_large.jpg"
        },
    
        {
            name: "Bitey",
            species: "Vampire Tetra",
            length: 12,
            food: "Other fish",
            location: "South America",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/Vampire_Tetra_large-1.jpg"
        },
    
        {
            name: "Big Red Tex",
            species: "Red Texas Cichild",
            length: 12,
            food: "Live food",
            location: "South America",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/RedTexasCichlid4_large-1.jpg"
        },
   
        {
            name: "Stripey",
            species: "African Cichild",
            length: 7,
            food: "Algae",
            location: "East Africa",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/1876f0e93e4ed206e8b2943c6a845521_large-1.jpg"

        },
  
        {
            name: "Flowerchild",
            species: "Flowerhorn Cichild",
            length: 15,
            food: "Other fish, crustaceans",
            location: "Thailand, Taiwan, Malaysia",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/FH_Cichlid_large-1.png"
        },
 
        {
            name: "Zeb",
            species: "Pleco",
            length: 18,
            food: "Earthworms, bloodworms, shrimp",
            location: "Central and South America",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/L250_Pleco_large-1.jpg"
        },
  
        {
            name: "Arrow",
            species: "Arowana",
            length: 36,
            food: "Pellets, frozen fish, krill, worms, or shrimp",
            location: "The Amazon",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/Snow_Arowana_large-1.jpg"
        },
  
        {
            name: "Pancake",
            species: "Freshwater Stingray",
            length: 3,
            food: "Crustaceans and other invertebrates",
            location: "The Amazon",
            imageSrc: "https://aquariumstoredepot.com/wp-content/uploads/FW_Stingray_large-1.jpg"
        }
    ],

    tips: [
        {
            tip: "Make sure your tank is large enough for all your fish"

        },
        {
            tip: "Be sure to change your water filter"
        },
        {
            tip: "Don't let your fish eat each other"
        }


    ],

    locations: [
        {
            location: "Central America"

        },
        {
            location: "South America"
        },
        {
            location: "Thailand"
        }
    ]

}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}






export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishes) {
        if (length % 3 === 0) {
            holyFish.push(fish.name)
        }
        

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishes) {
        if (length % 5 === 0) {
            soldiers.push(fish.name)
        }
        
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishes) {
        if (length % 3 !== 0 && length % 5 !== 0) {
            regularFish.push(fish.name)
        }
    }

    return regularFish
}



/*const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]

// Only display even numbers
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
} */




/*What is the data type of the database variable?: Object
What is the data type of the fish property? String
What is the data type of the name property? String
What is the data type of the size property? Number
What data types will the fish array contain? Strings and numbers
*/