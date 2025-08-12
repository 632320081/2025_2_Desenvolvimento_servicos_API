function add(){
   const txtNome = document.getElementById("txtNome")
   const nome = txtNome.value
    if(nome ==""){
        alert("Digite um Nome!")
    }else{
        var divLista = document.getElementById("lista")
        var conteudo = divLista.innerHTML
        conteudo += nome + "<br>"
        divLista.innerHTML = conteudo
        txtNome.value = ""
   }
}
function validar()
    const valor = document.getElementById("txtNumero").value
    if( valor== ""){
        alert("O campo valor é Obrigatório!")
        return false
    }else if( isNaN (valor  )){
        alert("É permitido apenas números!")
        return false
    }else if(valor > 0 && valor < 11){
        return true
    }else{
        return false
}