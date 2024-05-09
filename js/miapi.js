function cargarRegiones() {
    fetch('https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json')
        .then(response => response.json())
        .then(data => {
            const selectRegion = document.getElementById('region');
            data.regiones.forEach(region => {
                const option = document.createElement('option');
                option.value = region.region;
                option.textContent = region.region;
                selectRegion.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

window.onload = cargarRegiones;