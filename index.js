// ====== Units Constants
const ONE_METER_TO_FEET = 3.28084
const ONE_GALLON_TO_LITERS = 4.5461
const ONE_KILOGRAM_TO_POUNDS = 2.204623

// ====== Elements that Displays the Results
const inputEl = document.getElementById("input-el") // --> Value to Convert Input
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const popup = document.querySelector(".popup"); // --> Mini-placeholder

// ====== Function that Updates Conversions to Current Value
function updateConversion(valueToConvert) {
    function calculateLength() { // --> Calculates the length (meters and feet)
        let meters = valueToConvert / ONE_METER_TO_FEET
        let feet = valueToConvert * ONE_METER_TO_FEET
        
        return `${valueToConvert} meters = ${feet.toFixed(3)} feet | ${valueToConvert} feet = ${meters.toFixed(3)} meters`
    }

    function calculateVolume() { // --> Calculates the volume (liters and gallons)
        let liters = valueToConvert * ONE_GALLON_TO_LITERS
        let gallons = valueToConvert / ONE_GALLON_TO_LITERS
        
        return `${valueToConvert} liters = ${gallons.toFixed(3)} gallons | ${valueToConvert} gallons = ${liters.toFixed(3)} liters`
    }

    function calculateMass() { // --> Calculates the mass (kilograms and pounds)
        let kilograms = valueToConvert * ONE_KILOGRAM_TO_POUNDS
        let pounds = valueToConvert / ONE_KILOGRAM_TO_POUNDS
        
        return `${valueToConvert} kilograms = ${pounds.toFixed(3)} pounds | ${valueToConvert} pounds = ${kilograms.toFixed(3)} kilograms`
    }
    
    // --> Here we update the values using the private functions above
    lengthEl.textContent = calculateLength()
    volumeEl.textContent = calculateVolume()
    massEl.textContent = calculateMass()
}

// ====== EventListener Caller Function
function convert() {
    const valueToConvert = inputEl.value
    
    if(valueToConvert == "" || valueToConvert == 0) {
        updateConversion(0)
        popup.classList.add("active")
    } else {
        updateConversion(valueToConvert)
        popup.classList.remove("active")
    }
}

// ====== EventListener Placement
updateConversion(0) // --> Loads the interface once, with 0 as convertion value
popup.classList.add("active") // --> On first load, shows the popup

inputEl.addEventListener("input", convert)
