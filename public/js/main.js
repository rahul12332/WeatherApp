const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name =document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const tem_rel_val=document.getElementById('tem_rel_val');
const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal=== ""){
          city_name.innerText=`Please write the name before search`
    }
    else{
       try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&unit=standard&appid=d2543525e18d401cc374116eebc57c14`
        const fetchData = await fetch(url);
        // now convert the data into json formate
        const data = await fetchData.json();
        // console.log(data) its working
        // convert data into array of object
        const arrData = [data];
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}` ;
        tem_rel_val.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        if(tempMood=='Clear'){
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>"
        }
        else if(tempMood=='Clouds'){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
        }
        else if(tempMood=='Rain'){
            temp_status.innerHTML=
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
        }

        else {
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>"
        }

       }
       catch{
        city_name.innerText='result not found'
       }

    }
}
submitBtn.addEventListener('click', getInfo);