    // declaring variables
    var myVar;
    var button = document.getElementById("clickme"),
    count = 0,
    limit = 0,
    milliseconds = 5000,    // update time interval in milliseconds
    click_limits = 15;  // click limits greater than or equal


    // button onclick function
    button.onclick = function() {

        // the timer
        myVar = setTimeout(alertFunc, milliseconds);   // milliseconds

        function alertFunc(){
            limit = 0;      // initializing again the variable
        }
    
        // updating variable at every clicks
        count += 1;
        limit += 1;
        button.innerHTML = "Click me: " + count;

        // if clicks exceed the limit
        if(limit >= click_limits){
                location.assign("error.html");
            }

    };
