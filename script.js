var cars = {
  type: [{
      name: "Econo SUV",
      price: "$350.00",
      available: 6
    },
    {
      name: "Mid-Size",
      price: "$120.00",
      available: 10
    },
    {
      name: "Economy Sedan",
      price: "$250.00",
      available: 25
    },
    {
      name: "Tesla roadster",
      price: "$1000.00",
      available: 5
    }
  ],
  name: "Jabier's Honda dealer"
}

var grabSelectorID = document.getElementById("carSelect");
for (var i = 0; i < cars.type.length; i += 1) {
  var car = document.createElement("OPTION");
  var carName = cars.type[i].name;
  car.value = i;
  car.innerHTML = carName; 
  grabSelectorID.appendChild(car);
 

}

function Display() {
  var c = [parseInt(document.getElementById("carSelect").value)];
  document.getElementById("available").innerHTML = cars.type[c].available;
  document.getElementById("price").innerHTML = cars.type[c].price;
}

function agreeToTerms() {
  // check available
  var rental = [];
  var j = [parseInt(document.getElementById("carSelect").value)]; 
  cars.type[j].available -= 1;
  document.getElementById("available").innerHTML = cars.type[j].available;
  document.getElementById("price").innerHTML = cars.type[j].price;
  event.preventDefault()
  var carName = cars.type[j].name; // checks for name of car type
  var carAvailable = cars.type[j].available;  // pulls data from car type for available
  var checkName = document.forms["reservationForm"]["name"].value; // checks for names
  if (carAvailable <= 0) { alert("Choice Another Car Type.") } // checks if the car type is available
  // check for selection
  else if (carName == "") { // checks if the field is blank
    alert("Choose A Car Type."); // popup choose a car type message
  }
  // Check for name
  else if (checkName == "") { alert("Enter Your Name.") } else { 
    rental.push(checkName); // checks name
    rental.push(carName); // checks Car Name
    alert("Thank you") // popup Thank you message
  }
}