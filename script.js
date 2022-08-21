const getWheather = () => {
    if(input.value === ""){
        alert("Please enter a city");
    }
    else{
        // key=1db4640dedd8405b9bd195826221804 (mansoor sir key)
        const city = document.getElementById("input").value;
        fetch( `http://api.weatherapi.com/v1/current.json?q=${city}&key=fc8f40d98cef4e338b053122221908`)
        .then(response => response.json())
        .then((json) =>{
           console.log(json);
            document.getElementById("city").innerHTML = city;
            let temp = json.current.temp_c;
            document.getElementById("temp").innerHTML = temp;
            let condition = json.current.condition.text;
            document.getElementById("description").innerHTML = condition;
            const img = document.createElement("img")
            img.setAttribute("src", json.current.condition.icon);
            document.getElementById("icon").appendChild(img);
            document.getElementById("date").innerHTML = json.location.localtime;
            
       
            
            
            
        }) 
    }
}