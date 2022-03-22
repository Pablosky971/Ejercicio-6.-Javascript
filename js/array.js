array=[]


function introducirArray() {

    let n = parseInt(introducir.value)
    array.push(n)
    

}

function mostrarArray() {

    arrayTexto.value=array.join("-")
}

function aleatorio() {

    
 
    let index = Math.round((Math.random) * array.length());

    if(index == undefined) {
        index = array.length()
    }

    let nAleatorio=array[index]
    
    extraido.value=nAleatorio
    
}