const {registrar, leer} = require('./operaciones');

const [operacion, nombre, edad, tipo, color, enfermedad] = process.arvg.slice(2);

if (operacion.toLowerCase() === 'registrar') {
  if (nombre && edad && tipo && color && enfermedad) {
    try { 
        registrar(nombre, edad, tipo, color, enfermedad);
        console.log('Registro exitoso!');
    } catch (error) {
      console.error('Error al registrar:', error.message);
      }
    } else {
      console.log('Faltan datos para registrar a su mascota.');
      }
    } else if (operacion.toLowerCase() === 'leer') {
        try {
        leer();
      } catch (error) {
        console.error('Error al leer:', error.message);
      }
    } else {
      console.log(`No existe la operacion "${operacion}". Operaciones exsistentes: "registrar" y "leer".`);
    };
