import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-748a7-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")


// Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    console.log(inputValue)
})

//  I'm having some firebase issues. tabling this project for now
// instead I am reviewing notes from previous lesson
// more notes tonight, will update later
// still notes :( 75% done with lectures!
// still working on it
// starfield release <-- STARFIELD STARRFFIELLDDD almost done with starfield like trust me

// notes! 85 percent there 90 now 12 more lessons arguuum