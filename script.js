
window.addEventListener("load", function(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
//test button    alert('Submit was clicked');
  let pilotNameInput = document.querySelector("input[name='pilotName']");
  let copilotNameInput = document.querySelector("input[name='copilotName']");
  let fuelLevelInput = document.querySelector("input[name='fuelLevel']");
  let cargoMassInput = document.querySelector("input[name='cargoMass']");

  //need to test for string for first two and are the last two numbers.
  if (
    pilotNameInput.value === "" || 
    copilotNameInput.value === "" ||
    fuelLevelInput.value === "" ||  
    cargoMassInput.value === "" 
   ) {
      alert("All fields are required")
      return;
  
  if (isNaN(Number(fuelLevel)) || isNaN(Number(cargoMass))) {
      alert("Fuel level and cargo mass must be valid numbers");
        return;
      }
   }
      
      formSubmission(
        document,
        document.querySelector("form"),
        pilotNameInput.value,
        copilotNameInput.value,
        fuelLevelInput.value,
        cargoMassInput.value
      );
    });
});


// Fetch planetary data using myFetch() function
myFetch().then(function(result) {
    const planets = result;
     // Pick a random planet using pickPlanet() function
    if (planets) {
    const selectedPlanet = pickPlanet(planets);
    

    // Update mission destination information using addDestinationInfo() function
    addDestinationInfo(
      document,
      selectedPlanet.name,
      selectedPlanet.diameter,
      selectedPlanet.star,
      selectedPlanet.distance,
      selectedPlanet.moons,
      selectedPlanet.image
     );
     }
    });