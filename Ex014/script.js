function carregar(){

var msg = document.getElementById("mensagem")
var img = document.getElementById("imagem")
var hora = new Date()
var hora = hora.getHours()

msg.innerHTML = `Agora são ${hora} horas`

 if(hora >= 0 && hora < 12){img.src = "manha.jpg"
    document.body.style.backgroundColor = "#e2cd9f"

}else{

  if(hora <= 18){img.src = "tarde.jpg"
    document.body.style.backgroundColor = "#b9846f"

}else{img.src = "noite.jpg"
    document.body.style.backgroundColor = "#514154"

  }     
 } 
}