  const fs = require('fs');

  const citasJson = () => {
    try {
      return JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    } catch (error) {
      console.error('Error al leer el archivo de citas:', error.message);
      return [];
    }
  };

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  if (!nombre || !edad || !tipo || !color || !endermedad) {
    console.log('Todos los campos son obligatorios para registrar la cita.');
    return;
  }

  conole.log(`Registrando los datos de su mascota:
    Nombre: ${nombre}
    Edad: ${edad}
    Tipo de animal: ${tipo}
    Color: ${color}
    Enfermedad: ${enfermedad}`);

  const citas = citasJson();
  citas.push({ nombre, edad, tipo, color, enfermedad});

  try {
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log(`Cita registrada para: ${nombre}`);
  } catch (error) {
    console.log('Error al escribir en el archivo de citas:', error.message);
  }
};

const leer = () => {
  const citas = citasJson();
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    citas.forEach(({ nombre, edad, animal, color, enfermedad }, index) => {
      console.log(`\n ${index + 1}. Cita Registrada
       ------------------------------
       Nombre del animal: ${nombre}
       Edad: ${edad}
       Tipo de animal: ${tipo}
       Color de animal: ${color}
       Enfermedad: ${enfermedad}`);
        });
    }
};

module.exports = {registrar, leer};





  
