var cDealer = { 
    name: 'Enterprize Car Rentals',  
    Midsize: {
      price:500,
      available:31
    },    
    Economy: {
      price:400,
      available:25
    },
                                                                           
    Tesla: {
      price:1000,
      available:10
    }
    };
  
var uRenter = {
    
        Economy:[],
        Midsize:[],
        Tesla:[]
    };
    
function Info(val){
    var selection = cDealer[val];
    document.getElementById('Info').innerHTML = val + " $" + selection.price + "<br>" + selection.available + " Available";
}    
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
    