function agregarFila() {
    let idproducto = document.getElementById("IDproducto").value;
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    
    let table = document.getElementById("tablaproductos").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    cell1.innerHTML = idproducto;
    cell2.innerHTML = nombre;
    cell3.innerHTML = cantidad + " / 30";
    cell4.innerHTML =  ("$" + precio);
    cell5.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';

    // Limpiar el formulario después de agregar los datos a la tabla
    document.getElementById("idformagregadoproductos").reset();
}

