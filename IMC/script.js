function calculate() {
    var altura = (document.getElementById("altura").value)/100
    var peso = document.getElementById("peso").value
   
    var imc  = peso / altura ** 2;
    var text=""
    if( imc<18.5){
         text='Você está magro'

    } else if(imc< 24.9){
        text='Você está Normal'

    } else if(imc< 29.9){
        text='Você está com Sobrepeso'

    } else if(imc< 34.9){
        text='Obesidade Grau 1'

    } else if(imc< 39.9){
        text='Obesidade Grau 2'
    } else if(imc > 40){
        text="Obesidade Grau 3 'Morbita'"
    }
    document.getElementById("text_area").innerText = text

    
}