// funcion que aplica el estilo a la opcion seleccionada en el menu quita previamente seleccionado

function Seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className = 'seleccionado';

    //desaparece el menu una vez que se ha seleccionado una opcion en modo responsive
    var x = document.getElementById('nav');
    x.className = '';
     
}



// funcion para mostrar el menu responsive

function responsiveMenu(){
    var x = document.getElementById('nav');
    if(x.className===''){
        x.className = 'responsive';
    }else{
        x.className = '';
    }
}

