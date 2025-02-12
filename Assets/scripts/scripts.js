document.getElementById('getDataBtn').addEventListener('click', async function() {
    // Llamar a la API del backend
    const response = await fetch('https://backend-bb.vercel.app/');
    const data = await response.json();  // Suponiendo que el backend retorna JSON

    if (data && data.activo) {
        alert('Valor de activo: ' + data.activo);  // Muestra el valor de "activo"
    } else {
        alert('No se pudo obtener datos');
    }
});