// Crea el cliente de Supabase correctamente
const supabaseClient = supabase.createClient(
    'https://punmfuzrxbujkosdsdvl.supabase.co',  // URL de tu proyecto
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1bm1mdXpyeGJ1amtvc2RzZHZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODM2Mjk0MSwiZXhwIjoyMDUzOTM4OTQxfQ.fRgOwS1P2XorCdiNZKp-erN8lS28gdqS_lZdU9kTJvM'  // Tu anon key
  );
  
  // Función para obtener datos de la tabla "BB-STORE"
  async function obtenerDatos(id) {
    const { data, error } = await supabaseClient
      .from('BB-STORE')  // Nombre de la tabla
      .select('activo')  // Obtiene solo la columna "activo"
      .eq('id', id)  // Filtra por el id específico
      .single();  // Espera solo un registro (una sola fila)
  
    if (error) {
      console.error('Error:', error);
    } else if (data) {
      alert(data.activo);  // Muestra el valor de "activo" si el registro existe
    } else {
      alert('No se encontró ningún registro con id ' + id);  // Muestra un mensaje si no se encontró el registro
    }
  }
  

  obtenerDatos(1);  // Llamar la función para obtener los datos
  