const NUMERO_WHATSAPP_ACTIVO = "5493512021386";
const MENSAJE_PREDETERMINADO = "Hola, quisiera solicitar una consulta espiritual."

function actualizarNumeroWhatsApp(){
    const botonesWsp = document.querySelectorAll(".wsp")
    const mensajeCodificado = encodeURIComponent(MENSAJE_PREDETERMINADO)
    const urlWSP = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP_ACTIVO}&text=${mensajeCodificado}`

    botonesWsp.forEach(boton => {
        boton.href = urlWSP;
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    actualizarNumeroWhatsApp();
})