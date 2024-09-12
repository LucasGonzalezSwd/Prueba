// const Usuario = require('./models/Usuario'); // Asegúrate de importar tu modelo

// const nuevoUsuario = new Usuario({
//     nombre: 'Juan',
//     email: 'juan@example.com',
//     edad: 25
// });

// nuevoUsuario.save()
//     .then(() => console.log('Usuario guardado'))
//     .catch(err => console.log('Error al guardar usuario', err));
// Buscar usuarios:

// js
// Copiar código
// Usuario.find()
//     .then(usuarios => console.log(usuarios))
//     .catch(err => console.log('Error al obtener usuarios', err));
// Actualizar un usuario:

// js
// Copiar código
// Usuario.updateOne({ nombre: 'Juan' }, { edad: 26 })
//     .then(() => console.log('Usuario actualizado'))
//     .catch(err => console.log('Error al actualizar usuario', err));
// Eliminar un usuario:

// js
// Copiar código
// Usuario.deleteOne({ nombre: 'Juan' })
//     .then(() => console.log('Usuario eliminado'))
//     .catch(err => console.log('Error al eliminar usuario', err));
