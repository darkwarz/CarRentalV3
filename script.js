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

function decrementDisplay() {
  var j = [parseInt(document.getElementById("carSelect").value)];
  cars.type[j].available -= 1;
  document.getElementById("available").innerHTML = cars.type[j].available;
  document.getElementById("price").innerHTML = cars.type[j].price;
}

function agreeToTerms() {
  // check available
  var rental = [];
  var j = [parseInt(document.getElementById("carSelect").value)];
  var carName = cars.type[j].name;
  var carAvailable = cars.type[j].available;
  var checkName = document.forms["reservationForm"]["name"].value;
  if (carAvailable <= 0) { alert("Choice Another Car Type.") }
  // check for selection
  else if (carName == "") {
    alert("Choose A Car Type.");
  }
  // Check for name
  else if (checkName == "") { alert("Enter Your Name.") } else {
    rental.push(checkName);
    rental.push(carName);
    alert("Thank you")
  }
}