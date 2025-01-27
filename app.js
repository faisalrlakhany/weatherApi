
    const input = document.querySelector('#city-input');
    const btn = document.querySelector('#search-btn');

  
    async function checkWeather() {
        
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=791d24279525411483f120422241811&q=${input.value}&aqi=no`);
        var data = await response.json();

        console.log(data);
        document.querySelector('.city-name').innerHTML = data.location.name;
        document.querySelector('.temp').innerHTML = Math.round(data.current.temp_c) +"°C" ;
        document.querySelector('.humidity').innerHTML = data.current.humidity + "%" ;
        document.querySelector('.wind').innerHTML = data.current.wind_kph + " km/h" ;
        document.querySelector('.img').src = data.current.condition.icon;
        document.querySelector('.text').innerHTML = data.current.condition.text;
        
    }


    btn.addEventListener('click' , () => {

        checkWeather();


        input.value = ''


    })
    


