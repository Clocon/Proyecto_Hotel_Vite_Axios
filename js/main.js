async function GET(url){
  try{ 
  const request =await fetch(url)
  const data = await request.json()
  document.querySelector("#titulo").innerHTML=data.header.title
  document.querySelector("#titulo-des").innerHTML=data.header.description
  document.querySelector("#historia").innerHTML= data.history.title
  document.querySelector("#historia-des").innerHTML=data.history.description
  document.querySelector("#location").innerHTML=data.location.title
  document.querySelector("#location-des").innerHTML=data.location.description
  document.querySelector("#food").innerHTML=data.meals.title
  document.querySelector("#food-des").innerHTML=data.meals.description
  document.querySelector("#gym").innerHTML=data.fitness.title
  document.querySelector("#gym-des").innerHTML=data.fitness.description
  document.querySelector("#pie").innerHTML=data.footer.text
  }
  catch{
    console.warn("No ha sido posible descargar la información")
  } 
} 
GET("https://practica-eoi.alexdw.com/contents")
document.querySelector("#check").innerHTML="Checking ONLINE"

const saludo =()=>{
  const today=new Date()
  const hora=today.getHours()

  if(hora>=4 && hora<12){
    document.querySelector("#saludo").innerHTML="Buenos días"
    document.getElementById("saludo").style.color =" #9ab755";
  }
  if(hora>=12 && hora<20){
    document.querySelector("#saludo").innerHTML="Buenos tardes"
    document.getElementById("saludo").style.color ="#7e3333";
  }
  if(hora>=20 || hora<4){
    document.querySelector("#saludo").innerHTML="Buenos noches"
    document.getElementById("saludo").style.color ="#000"
}}
saludo()