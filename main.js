var i=0;
var cajaNombre=document.getElementById('txNombre');
nombres=new Array();

function agregar(){	
	nombres[i]=(cajaNombre.value);
	alert(nombres);
	//document.getElementById("lista").append(nombres[i]+",");
	document.getElementById("lista").innerHTML=("ultimo elemento agregado:"+nombres[i]+"<br>");
	//alert(nombres.join());
	i++;
	cajaNombre.value='';
	cajaNombre.focus();
	//return nombres;
}
			
function eliminar(){
	if(nombres.length==0){
		alert('Lista vacia');
		document.getElementById("lista").innerHTML="Ya no hay elementos en la lista";
	}else{
		nombres.pop();
		document.getElementById("lista").innerHTML=nombres.join();
		alert(nombres+' eliminado');
	}	
}
			
function verLista(){
	for(a in nombres){
		alert('Lista completa:'+nombres);
		document.getElementById("lista").innerHTML="Lista completa:<br/>"+nombres+"<br/>";
	}
}