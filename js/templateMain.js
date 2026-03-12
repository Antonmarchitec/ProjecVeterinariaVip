let baseSection = document.querySelector("#baseSection")
let baseTemplate = document.querySelector("#baseTemplate").content
let fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    mostrarContenido()
})


const mostrarContenido = async() =>{
    try{
        const dataFech = await fetch("mainTemplate.json")
        const dataRes = await dataFech.json()
        pintarDatos(dataRes)
        pintarDatos2(dataRes)
        pintarDatos3(dataRes)

    }catch(error){
        console.log(" ERROR DE CARGA ")
    }
}

const pintarDatos = (dataRes)=>{
    //console.log(dataRes)
    dataRes.bloque_1.forEach(element => {
       baseTemplate.querySelector("#descTitle").textContent = element.title1
       baseTemplate.querySelector("#descDescription").textContent = element.descripcion1
       baseTemplate.querySelector("#descIMG").setAttribute("src", element.image1)
       baseTemplate.querySelector("#descIMG").setAttribute("alt", element.title1)
       baseTemplate.querySelector("#descBtn").dataset.idBoton = element.id1

       baseTemplate.querySelector("#descTitle2").textContent = element.title2
       baseTemplate.querySelector("#descDescription2").textContent = element.descripcion2
       baseTemplate.querySelector("#descIMG2").setAttribute("src", element.image2)
       baseTemplate.querySelector("#descIMG2").setAttribute("alt", element.title2)
       baseTemplate.querySelector("#descBtn2").dataset.idBoton = element.id2


       const dataClone = baseTemplate.cloneNode(true)
       fragment.appendChild(dataClone)
    });
    baseSection.appendChild(fragment)

    document.addEventListener("click", (e)=>{
        if(e.target.dataset.idBoton === "1"){
            console.log("le diste a uno")
            //window.open("estudios.html")
        }else if(e.target.dataset.idBoton === "2"){
            console.log("le diste a dos")
            //window.open("vacunas.html")
        }
    })//
}

const pintarDatos2 = (dataRes)=>{
    //console.log(dataRes)
    dataRes.bloque_2.forEach(element => {
       baseTemplate.querySelector("#descTitle").textContent = element.title3
       baseTemplate.querySelector("#descDescription").textContent = element.descripcion3
       baseTemplate.querySelector("#descIMG").setAttribute("src", element.image3)
       baseTemplate.querySelector("#descIMG").setAttribute("alt", element.title3)
       baseTemplate.querySelector("#descBtn").dataset.idBoton = element.id3

       baseTemplate.querySelector("#descTitle2").textContent = element.title4
       baseTemplate.querySelector("#descDescription2").textContent = element.descripcion4
       baseTemplate.querySelector("#descIMG2").setAttribute("src", element.image4)
       baseTemplate.querySelector("#descIMG2").setAttribute("alt", element.title4)
       baseTemplate.querySelector("#descBtn2").dataset.idBoton = element.id4


       const dataClone = baseTemplate.cloneNode(true)
       fragment.appendChild(dataClone)
    });
    baseSection.appendChild(fragment)
}

const pintarDatos3 = (dataRes)=>{
    //console.log(dataRes)
    dataRes.bloque_3.forEach(element => {
       baseTemplate.querySelector("#descTitle").textContent = element.title5
       baseTemplate.querySelector("#descDescription").textContent = element.descripcion5
       baseTemplate.querySelector("#descIMG").setAttribute("src", element.image5)
       baseTemplate.querySelector("#descIMG").setAttribute("alt", element.title5)
       baseTemplate.querySelector("#descBtn").dataset.idBoton = element.id5

       baseTemplate.querySelector("#descTitle2").textContent = element.title6
       baseTemplate.querySelector("#descDescription2").textContent = element.descripcion6
       baseTemplate.querySelector("#descIMG2").setAttribute("src", element.image6)
       baseTemplate.querySelector("#descIMG2").setAttribute("alt", element.title6)
       baseTemplate.querySelector("#descBtn2").dataset.idBoton = element.id6


       const dataClone = baseTemplate.cloneNode(true)
       fragment.appendChild(dataClone)
    });
    baseSection.appendChild(fragment)
}