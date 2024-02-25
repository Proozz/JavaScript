
function verificar(){

    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var img = document.getElementById("imagem")

    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {window.alert("[ERRO] verifique os dados e tente novamente!")

}else{

    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ""

    if (fsex[0].checked) {genero = "homem"

    if(idade >= 0 && idade < 10){
        //criança
        img.src = 'criançaM.jpeg'

    }else if(idade < 21) {
        //jovem
        img.src = 'jovemM.jpeg'

    }else if(idade < 50) {
        //adulto
        img.src ='adultoM.jpeg'

    }else{
       //idoso
       img.src = 'idosoM.jpeg'

    }}else if (fsex[1].checked) {genero = "mulher"
    
     if(idade >= 0 && idade < 10){
        //criança
        img.src = 'criançaF.jpeg'

     }else if(idade < 21){
        //jovem
        img.src = 'jovemF.jpeg'

     }else if(idade < 50){
        //adulto
        img.src = 'adultaF.jpeg'

     }else{
        //idoso
        img.src = 'idosaF.jpeg'

  }
  }
      res.style.textAlign = 'center'
      res.innerHTML = `detectamos ${genero} com ${idade} anos`
}
}

