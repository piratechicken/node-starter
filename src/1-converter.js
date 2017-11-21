function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8
}

function formatCelsius(celsius) {
  return `${Math.round(celsius)} °C`
}

function hottestTemperature(array) {
  return Math.max(...array)
}

let fahrenheit

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${mondayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

// Wed

const wedTemperature = 72
console.log(`On Tuesday it is ${wedTemperature} °F`)
celsius = convertFahrenheitToCelsius(wedTemperature)
console.log(`The Aussies would think of that as ${formatCelsius(celsius)}`)


arrOfTemps = [23, 46, 88, 23, 67, 2, 768, -4, 34]

console.log("The hottest temp in the list is", hottestTemperature(arrOfTemps))

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/