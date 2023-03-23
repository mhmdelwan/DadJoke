let btnEle = document.getElementById('btn');
let jokeEle = document.getElementById('joke');

let apiKey = "Z4hTy6RKdbMKnWn3Pjvm0A==gB6JIEiMPQFnp1Fw";

let options = {
    method: "GET",
    headers: {
        "X-APi-key": apiKey,
    }
}

let apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEle.innerText = "Updating...";
    btnEle.disabled = true;
    btnEle.innerText = "Loading...";

   let response = await fetch(apiUrl, options)
   let data = await response.json()

   btnEle.disabled = false;
    btnEle.innerText = "Tell me a joke";

   jokeEle.innerText = data[0].joke;
        
    } catch (error) {
        jokeEle.innerText = "An error happened, try again later";
        btnEle.disabled = false;
        btnEle.innerText = "Tell me a joke"
    }

    
}


btnEle.addEventListener('click', getJoke);