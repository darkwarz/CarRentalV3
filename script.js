var cDealer = { 
    cars: [  
    {
     name: "Midsize",
      price:500,
      available:31
    },    
    {
    name: "Economy Suv", 
    price: 500,
    available: 40
    },
    {
    name: "Economy Sedan",
      price:400,
      available:25
    },
    {                                                                       
    name: "Tesla roadster",
      price:1000,
      available:10
    } 

            ],
    
    name: 'Enterprize Car Rentals'
    };
  
    var uRenter = {
    
        Midsize:[],
        EconomySuv:[],
        EconomySedan:[],
        Tesla:[]
        
    };
    
function Info(val){
    var selection = cDealer[val];
    document.getElementById('Info').innerHTML = val + " $" + selection.price + "<br>" + selection.available + " Available";
}    
    for (var i = 0; i < cDealer.cars.length; i++){
    var option = document.createElement("OPTION");
    var carTp = document.createElement("LABEL");
    document.getElementById("carSelect").appendChild(option);
    //option.setAttribute("type", "option");
    option.setAttribute("name", "cars"); 
    option.setAttribute("value", i); 
    option.setAttribute("id", "car" + i); 
    option.setAttribute("onclick", "myFunction(" + i + ")"); 
    carTp.innerHTML = cDealer.cars[i].name; 
    option.innerHTML = cDealer.cars[i].name; 
    
    document.getElementById("carSelect").appendChild(option);
    //document.getElementById("carSelect").appendChild(carTp);
}
    document.getElementById("reserver").onsubmit = function(event) {
    event.preventDefault();
    
    function rent(){
        
        var size = document.forms["carSelect"]['type'].value;
        var reserver = document.forms["carSelect"]['name'].value;
        
        if( size == "none" && reserver ==""){
            alert("Please choose a car type and enter your name");
        }
        else if( size == "none"){
            alert("Please choose a car type");
        }
        
        else if( reserver == "") {
            alert("Please enter your name");
        } 
        else { 
            uRenter[size].push({name: reserver});
            cDealer[size].available--;
            alert("Thank you, your reservation was succesful!");
            console.log(uRenter);
    }
    return false;
    }
    