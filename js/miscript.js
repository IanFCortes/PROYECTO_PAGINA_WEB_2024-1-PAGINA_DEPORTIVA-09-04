function agregarFila() {
    let idproducto = document.getElementById("idproducto").value;
    let nombre = document.getElementById("idnombreproducto").value;
    let cantidad = document.getElementById("idcantidadproducto").value;
    let precio = document.getElementById("idprecioproducto").value;
    
    let table = document.getElementById("tablaproductos").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    cell1.innerHTML = idproducto;
    cell2.innerHTML = nombre;
    cell3.innerHTML = cantidad;
    cell4.innerHTML = precio

    // Limpiar el formulario después de agregar los datos a la tabla
    document.getElementById("idformagregadoproductos").reset();
}