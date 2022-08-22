const getWheather = () => {
    if(input1.value === ""){
        alert("Please enter a city");

    }
    else{
        // key=1db4640dedd8405b9bd195826221804 (mansoor sir key)
        const city = document.getElementById("input1").value;
        fetch( `http://api.weatherapi.com/v1/current.json?q=${city}&key=4399da57406e4970905171525222108`)
        .then((response) => {
            if (!response.ok) {
              alert('No weather found.')
              throw new Error('No weather found.')
            }
            return response.json()
          })
          .then((json) => {
          // console.log(json);
          //current location
          const location = json.location.country;
            document.getElementById("city").innerHTML = "<br>"+ city +" , "+location;
            // current temperature
            let temp = json.current.temp_c;
            document.getElementById("temp").innerHTML =  temp + " °C";
            // current condition
            let condition = json.current.condition.text;
            document.getElementById("description").innerHTML = "Condition = " + condition;
            // current icon
            const img = document.createElement("img")
            img.setAttribute("src", json.current.condition.icon);
            document.getElementById("icon").appendChild(img);
            // humidity
            const humidity = json.current.humidity;
            document.getElementById("humidity").innerHTML = "Humidity = " + humidity + " %";
            // wind speed
            const wind = json.current.wind_kph;
            document.getElementById("wind").innerHTML = "Wind Speed = " + wind + " km/h";
            // current date and time
            const date = json.location.localtime;
            // const newDate = date.
            document.getElementById("date").innerHTML = "Date = " + date  ;      
            //result section
            const result = document.querySelector("#result");
            result.setAttribute("style", "width: 400px; height: 300px; margin-left: 370px;  background-color: white; border: 2px solid black; border-radius: 25px;")        
           // button disabled
            document.querySelector(".btn").disabled = true;
        }) 


       
    }
}