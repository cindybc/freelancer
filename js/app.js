/*
 * Archivo principal de JS
 */

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

			var img = document.createElement("img");
			    img.setAttribute("src","http://tojaeurope.com/gallery/Close-icon.png");  


                
                title.appendChild(titulo);
                cerrar.appendChild(img);
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