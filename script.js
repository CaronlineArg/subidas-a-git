//console.log('correcto');
document.querySelector('#botoncito').addEventListener('click', traerDatos);
function traerDatos(){
const nuevaxhttpreq =new XMLHttpRequest();
nuevaxhttpreq.open('GET', 'datos.json', true);
nuevaxhttpreq.send();
nuevaxhttpreq.onreadystatechange = function(){
 if(this.readyState ==4 && this.status == 200){
    let datitos = JSON.parse(this.responseText); 
    let contenido = document.querySelector('#contenido');
    contenido.innerHTML = '';
    for (let item of datitos){
contenido.innerHTML += `<tr>
<th scope="row">${item.ID}</th>
<td>${item.NOMBRE}</td>
<td>${item.APELLIDO}</td>
<td>${item.TELEFONO}</td>
<td>${item.EMAIL}</td>
</tr>

`
    };
};
};
};