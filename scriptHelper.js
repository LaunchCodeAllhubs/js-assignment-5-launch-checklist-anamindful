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

// Helper function to validate input
function validateInput(input) {
  const pilotName = pilotNameInput.value;
  const copilotName = copilotNameInput.value;
  const fuelLevel = fuelLevelInput.value;
  const cargoMass = cargoMassInput.value;

  // Check if any of the fields are empty
  if (
    pilotName === "" ||
    copilotName === "" ||
    fuelLevel === "" ||
    cargoMass === ""
  ) {
    alert("All fields are required");
    return;
  }

  // Check if the fuel level and cargo mass are valid numbers
  if (isNaN(Number(fuelLevel)) || isNaN(Number(cargoMass))) {
    alert("Fuel level and cargo mass must be valid numbers");
    return;
  }
}

function formSubmission(document, form, pilot, coPilot, fuelLevel, cargoMass) {

  // Check if the fuel level and cargo mass are valid numbers
  if (isNaN(Number(fuelLevel)) || isNaN(Number(cargoMass))) {
    alert("Fuel level and cargo mass must be valid numbers");
    return; // Stop the form submission if fuel level or cargo mass is not a valid number
  }
  // Update shuttle requirements with pilot and co-pilot names
    const pilotStatus = document.getElementById("pilotStatus");
    const coPilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    coPilotStatus.innerHTML = `Co-Pilot ${coPilot} is ready for launch`;
  
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
      document.getElementById("faultyItems").style.visibility = "hidden";
      document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
      document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
    }
  
   form.reset();
  }
  
  // Rest of the code...
  

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
