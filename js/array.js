array = [];

function intro() {
    n = parseInt(introducir.value);
    console.log("Valor de n: " + n);
    array.push(n);
    console.log(array)
}

function aleatorio() {
    index = Math.round(Math.random() * (array.length-1) );
    valor = array[index];


    extraido.value=valor;


    
}