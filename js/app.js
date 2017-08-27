 /***EFECTO SCROLL NAV***/
window.onscroll= function(){cambio()};

function cambio(){
  if(document.body.scrollTop > 100){
   document.getElementById('logo').className= 'tamañoLetra';   
   document.getElementById('nav').className= 'tamañoNav';
   }else{
    
     document.getElementById('logo').className = '';   
     document.getElementById('nav').className= '';
   }
};  

 /****MODAL***/

function modal(){
    //Convierto las imagenes en un array para luego poder recorrerlas.
    var imagenes = Array.from(document.getElementsByClassName("col-4"));
    var modal = document.getElementById("imagenesModal");
    
    //Recorrer array de imaganes.
    imagenes.forEach(function(ele){
        ele.addEventListener("click", function(){
            //vaciar modal para cada llamado.
                modal.innerHTML ="";
            
            //Contenedor de toda la informacion del modal
            var contenedor = document.createElement("div");
                contenedor.classList.add("visible");
                //Le doy al contener la imagen correspondiente al click realizado.
                contenedor.innerHTML = ele.innerHTML;
  
               
            //Titulo Modal.
            var title = document.createElement("h1");
            var titulo = document.createTextNode("PROJECT TITLE");     


            //Creo un span que va a contener el icono de X y luego se le agrega una clase para poder cerrar el modal al hacerle click.
            var cerrar= document.createElement("span");
                cerrar.classList.add("cerrar");

            //Icono de X.
            var icono = document.createElement("i");
                icono.setAttribute("class","fa fa-times");
                icono.setAttribute("aria-hidden","true");     

            //Parrafo del Modal
            var parrafo = document.createElement("p");
            var textParrafo = document.createTextNode("Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!");       
       
            //Boton del modal , que al igual que le icono X permite cerrar el modal
            var botonCerrar = document.createElement("button");
            var textBoton = document.createTextNode("close");
                botonCerrar.classList.add('btnModal')
               


     
                title.appendChild(titulo);
                cerrar.appendChild(icono);
                parrafo.appendChild(textParrafo);
                botonCerrar.appendChild(textBoton);
                contenedor.appendChild(title)
                contenedor.appendChild(parrafo);
                contenedor.appendChild(cerrar);
                contenedor.appendChild(botonCerrar);
                modal.appendChild(contenedor);
                modal.classList.remove("noVisible");  


                //Al hacer click en la X o el boton CLOSE hace que el modal desaparesca.
                cerrar.addEventListener("click", function(){
                    modal.classList.add("noVisible");
                });

                botonCerrar.addEventListener("click", function(){
                    modal.classList.add("noVisible");
                });        
        });
    });
};

modal();


/***VALIDAR CAMPOS***/

function campos(){

    var boton = document.getElementById("submit");

    boton.addEventListener("click", function(event){
         event.preventDefault();


    var nombre= document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var fono = document.getElementById("phone").value;  
    var msg =  document.getElementById("message").value;

    
    if(nombre == ""){
        document.getElementById("validar").innerHTML= "Please enter your name.";
    }
    else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail))){
        document.getElementById("validar").innerHTML= "Please enter your email address.";
    }   
    else if(!(/^\d{9}$/.test(fono))){
        document.getElementById("validar").innerHTML= "Please enter your phone number.";
    }
    else if(msg == ""){
        document.getElementById("validar").innerHTML= "Please enter a message.";
    }
    else{
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("phone").value= "";
        document.getElementById("message").value= "";
        document.getElementById("validar").innerHTML= "";
    }
 });
};

campos();