/*
   Author: Ewan Wilson
   JavaScript for NASA webpage
*/

let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})

//An asynchronous function to fetch data from the API for Apod pic
async function sendApiRequest(){
  let API_KEY = "foM4VMhci7spFf4ZUaVhLxl6Wmd3QmGeJxPbJPRQ"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

//function that does something with the data received from the API.
function useApiData(data){
  document.querySelector("#content").innerHTML += data.explanation
  document.querySelector("#content").innerHTML += `<img src ="${data.url}">`
}

//other API call

let searchButton1 = document.querySelector("#search1")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton1.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest1()
})

//An asynchronous function to fetch data from the API for Mars Rover photo
async function sendApiRequest1(){
  let API_KEY = "EdIxwVe9NwEkRoZpNeBdxNd5ZcnQsLdfpceMiGl0"
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData1(data)
}

// function that does something with the data received from the API.
function useApiData1(data){
 document.querySelector("#contenta").innerHTML += `<img src ="${data.photos[0].img_src}">`
}
