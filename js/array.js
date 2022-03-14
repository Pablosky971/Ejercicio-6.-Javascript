array=[]

function introducir() {

    var valorintro= introducir.value()
    parseInt(valorintro)
    array.push("valorintro")

}

function aleatorio() {

    var nAleatorio
    var longitud = array.length()
    var index = Math.round(Math.random * 100) * array.length();

    if(index == undefined) {
        index = array.length()
    }

    nAleatorio=array["index"]
    
    return nAleatorio
    
}