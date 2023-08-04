require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Access the mission target div element
    const missionTarget = document.getElementById("missionTarget");
  // Create HTML elements to display planet information
    const missionData = `
    <h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
  `;
 // Update the mission target div with the planet information
  missionTarget.innerHTML = missionData;
}

function validateInput(input) {
  // Check if the input is empty
  if (input === "") {
    return "Empty";
  }

  // Check if the input is a valid number
  if (isNaN(Number(input))) {
    return "Not a Number";
  }

  // The input is a valid number
  return "Is a Number";
}


function formSubmission(
  document,
  form,
  pilot,
  coPilot,
  fuelLevel,
  cargoMass
) {
  // Validate pilot name, co-pilot name, fuel level, and cargo mass inputs
  const pilotValidation = validateInput(pilot);
  const coPilotValidation = validateInput(coPilot);
  const fuelValidation = validateInput(fuelLevel);
  const cargoValidation = validateInput(cargoMass);

  // Display an alert if any input is empty
  if (
    pilotValidation === "Empty" ||
    coPilotValidation === "Empty" ||
    fuelValidation === "Empty" ||
    cargoValidation === "Empty"
  ) {
    alert("All fields are required");
    return; // Stop the form submission if any input is empty
  }

  // Display an alert if fuel level or cargo mass is not a valid number
  if (
    fuelValidation === "Not a Number" ||
    cargoValidation === "Not a Number"
  ) {
    alert("Fuel level and cargo mass must be valid numbers");
    return; // Stop the form submission if fuel level or cargo mass is not a valid number
  }

  if (
    pilotValidation === "Is a Number" ||
    coPilotValidation === "Is a Number"
  ){
    alert("Make sure to enter valid information for each field");
    return;
  }
  
  //Update shuttle requirements with pilot and co-pilot names
  const pilotStatus = document.getElementById("pilotStatus");
  const coPilotStatus = document.getElementById("copilotStatus");
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  coPilotStatus.innerHTML = `Co-pilot ${coPilot} is ready for launch`;

  // Check if fuel level and cargo mass inputs are valid
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");

  if (fuelLevel < 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
  } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
  }

  if (cargoMass > 10000) {
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
  } else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }

  // Check if shuttle is ready for launch
  if (fuelLevel >= 10000 && cargoMass <= 10000) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
  }
  // Rest of the code to update shuttle requirements and check if shuttle is ready for launch
  // ... (remaining code)
}

async function myFetch() {
    const url = 'https://handlers.education.launchcode.org/static/planets.json';
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const planetsData = await response.json();
      return planetsData;
    } catch (error) {
      console.error('Error fetching planets data:', error);
      return null;
    }
  }

  function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
  }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
