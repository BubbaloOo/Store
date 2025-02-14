async function pedirDatos() {
    try {
        const response = await fetch('https://backend-bb.vercel.app/');
        const data = await response.json(); // Asumiendo que el backend devuelve JSON correctamente

        if (data && data.activo !== undefined) {
            alert('Valor de activo: ' + data.activo);
        } else {
            alert('No se pudo obtener datos');
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        alert('Hubo un error al conectar con el backend');
    }
}

document.getElementById('getDataBtn').addEventListener('click', pedirDatos);
