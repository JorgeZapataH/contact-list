function InsertarNombre(evt){
 evt.preventDefault();

 var Nombre=document.createElement("div")
 Nombre.innerHTML=document.getElementById("nombre").value;
 Nombre.onclick=Eliminar;
 document.getElementById("ListaNombres").appendChild(Nombre);
 alert("Se ha insertado el nombre");
}
function Eliminar(){
    
    document.getElementById("ListaNombres").removeChild(this);
    alert("Se ha eliminado el nombre");
    

}
function Eliminar1(evt){
    evt.preventDefault();
    alert("Para eliminar dé click en el elemento deseado");
}
function mostrar(){

}



