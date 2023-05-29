import { getLocations } from './database.js'


export const locations = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="Locations>'

    // Create HTML representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location card">
            <div class="fishtank__tips">${location.location}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}