/*
   Author: Ewan Wilson
   JavaScript for NASA pic
*/

let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let API_KEY = "HRMWjwPfznkeB51X8L53SdIKj6TyifARwSPar5az"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

//function that does something with the data received from the API.
function useApiData(data){
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}