/**
 * Conditions in Javascript are if, if else, if else if, switch
 */

let myAge = 20

/**
 * Let me know if I am a teen, adult or elder
 */

let ageTitle = "";
if (myAge < 18) {
    ageTitle = "teen"
} else if (myAge > 18 && myAge < 35) {
    ageTitle = "adult"
} else {
    ageTitle = "elder"
}

console.log("My age title with if condition is ", ageTitle)


switch(ageTitle) {
    case "teen" : {
        ageTitle = "I am teen"
        break;
    }
    case "adult" : {
        ageTitle = "I am adult"
        break;
    }

    case "elder" : {
        ageTitle = "I am elder"
        break;
    }

    default: {
        ageTitle = "Invalid age"
    }
}

console.log("My age title with switch condition is ", ageTitle)
