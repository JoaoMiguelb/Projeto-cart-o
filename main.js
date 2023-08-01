// textos cartão
const codText = document.querySelector(".cod__cartao")
const numText = document.querySelector(".num__cartao")
const nomeText = document.querySelector(".nome__cartao")
const dataText = document.querySelector(".data__cartao")

// inputs 
const cod = document.querySelector("#cod")
const mes = document.querySelector("#mes")
const ano = document.querySelector("#ano")
const nome = document.querySelector("#nome")
const num = document.querySelector("#num")

// evento
const botao = document.querySelector("#botao")

botao.addEventListener("click", function (){
    if (cod.value.length !== 3){
        cod.classList.add("errado")
        return
    } else if (num.value.length !== 16){
        num.classList.add("errado")
        return
    } else if (mes.value.length !== 2 || ano.value.length !== 2 ) {
        mes.classList.add("errado")
        ano.classList.add("errado")
        return
    }else{
        cod.classList.remove("errado");
        num.classList.remove("errado");
        mes.classList.remove("errado");
        ano.classList.remove("errado");
    }
    codText.textContent = cod.value 
    numText.textContent = num.value
    nomeText.textContent = nome.value
    dataText.textContent = `${mes.value}/${ano.value}`
})

