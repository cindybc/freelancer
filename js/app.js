/*
 * Archivo principal de JS
 */


 /****MODAL***/

 function modal(){
    var imagenes = Array.from(document.getElementsByClassName("col-4"));
    var modal = document.getElementById("imagenesModal");

    imagenes.forEach(function(ele){
        ele.addEventListener("click", function(){
                 modal.innerHTML ="";
            var divcito = document.createElement("div");
                divcito.classList.add("modalcito");
                divcito.innerHTML = ele.innerHTML;

                modal.appendChild(divcito);
                modal.classList.remove("claseModal");

            var cerrar= document.createElement("div");
                cerrar.classList.add("cerrar");

            var title = document.createElement("h1");
                titulo = document.createTextNode("PROJECT TITLE"); 

            var parrafo = document.createElement("p");
                parrafito = document.createTextNode("Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!")       
       

            var botonExtra = document.createElement("button");
                botoncito= document.createTextNode("close");
                botonExtra.classList.add("close");

            var icono = document.createElement("i");
                icono.setAttribute("class","fa fa-times");
                icono.setAttribute("aria-hidden","true"); 

     
                title.appendChild(titulo);
                cerrar.appendChild(icono);
                parrafo.appendChild(parrafito);
                botonExtra.appendChild(botoncito);
                modal.appendChild(title)
                modal.appendChild(parrafo);
                modal.appendChild(cerrar);
                modal.appendChild(botonExtra);

                cerrar.addEventListener("click", function(){
                    modal.classList.add("claseModal");
                });        
        });
    });
};

modal();


/***VALIDAR CAMPOS***/ /*NO FUNCIONA PERFECTO PERO EN ALGU SI :P*/

function campos(){

    var boton = document.getElementById("submit");

    boton.addEventListener("click", function(event){
         event.preventDefault();


    var nombre= document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var fono = document.getElementById("phone").value;  
    var msg =  document.getElementById("message").value;

    
    if(nombre == ""){
        document.getElementById("valName").innerHTML= "<li>"+ "Please enter your name." + "</li>";
    } 

    if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail))){
        document.getElementById("valEmail").innerHTML= "<li>"+ "Please enter your email address." + "</li>";
    }   

    if(!(/^\d{9}$/.test(fono))){
        document.getElementById("valPhone").innerHTML= "<li>"+ "Please enter your phone number." + "</li>";
    }

    if(msg == ""){
        document.getElementById("valMessage").innerHTML= "<li>"+ "Please enter a message." + "</li>";
    }
    else{
        document.getElementById("name").value= "";
        document.getElementById("valName").innerHTML= "";
        document.getElementById("email").value= "";
        document.getElementById("valEmail").innerHTML= "";
        document.getElementById("phone").value= "";
        document.getElementById("valPhone").innerHTML= ""
        document.getElementById("message").value= "";
        document.getElementById("valMessage").innerHTML= "";
    }
 });
};

campos();