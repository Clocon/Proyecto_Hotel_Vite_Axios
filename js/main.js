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

const saludo =()=>{
  const today=new Date()
  const hora=today.getHours()
  const cabeceroImg =document.getElementById("cabecero")
  const buenosX =document.querySelector("#saludo")
  const saludoColor =document.getElementById("saludo")

  if(hora>=4 && hora<12){
    buenosX.innerHTML="Buenos días"
    saludoColor.style.color ="#9a993";
    cabeceroImg.style.backgroundImage = "url(../img/bDias.jpg)"
    cabeceroImg.style.backgroundSize = "cover"
  }
  if(hora>=12 && hora<20){
    buenosX.innerHTML="Buenas tardes"
    saludoColor.style.color ="#7e3333";
    cabeceroImg.style.backgroundImage = "url(../img/bTardes.jpg)"
    cabeceroImg.style.backgroundSize = "cover"
  }
  if(hora>=20 || hora<4){
    buenosX.innerHTML="Buenas noches"
    saludoColor.style.color ="#654"
    cabeceroImg.style.backgroundImage = "url(../img/bNoches.jpg)"
    cabeceroImg.style.backgroundSize = "cover"
}}
saludo()

document.querySelector("#check").innerHTML="Checking ONLINE"
const el = document.getElementById("check")
el.onclick= ()=>{
  console.log("hola mundo")
  window.alert("Quieres continuar?")
}

