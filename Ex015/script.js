
function verificar(){

    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")

    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {window.alert("[ERRO] verifique os dados e tente novamente!")

}else{

    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {genero = "homem"

    if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'criançaM.jpeg')

    }else if(idade < 21) {
        //jovem
        img.setAttribute('src', 'jovemM.jpeg')

    }else if(idade < 50) {
        //adulto
        img.setAttribute('src', 'adultoM.jpeg')  

    }else{
       //idoso
       img.setAttribute('src', 'idosoM.jpeg')

    }}else if (fsex[1].checked) {genero = "mulher"
    
     if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'criançaF.jpeg')

     }else if(idade < 21){
        //jovem
        img.setAttribute('src', 'jovemF.jpeg')

     }else if(idade < 50){
        //adulto
        img.setAttribute('src', 'adultaF.jpeg')

     }else{
        //idoso
        img.setAttribute('src', 'idosaF.jpeg')
        
  }
  }
      res.style.textAlign = 'center'
      res.innerHTML = `detectamos ${genero} com ${idade} anos`
}
}

