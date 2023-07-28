// Write your JavaScript code here!

window.addEventListener("load", function() {


document.getElementById('formSubmit').addEventListener('click', function(event){
    event.preventDefault();
    //test button to see how it is working
   // confirm("All fields are required");
    
        const nameInput = document.getElementById('pilotName');
        const copilotName = document.getElementById('copilotName');
        const fuelInput = document.getElementById('fuelLevel');
        const cargoInput = document.getElementById('cargoMass');
    
        // Checking to see if the form is blank
        if (!nameInput || !copilotName || !fuelInput || !cargoInput) {
            alert('Please fill in all fields.');
            return;
        }
          
         // Validating names to contain only letters and spaces
        if (!/^[a-zA-Z ]+$/.test(nameInput)) {
            alert('Invalid response. Please enter text for pilot.');
            return;
        }
          
        if (!/^[a-zA-Z ]+$/.test(copilotName)) {
            alert('Invalid response. Please enter text for copilot.');
            return;
        }
          
        // Validating fuel and cargo input to be numbers
        if (isNaN(fuelInput) || isNaN(cargoInput)) {
            alert('Invalid response, please enter a number for fuel and cargo.');
            return;
        }
    
        confirm('Form Successful!');
});


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});