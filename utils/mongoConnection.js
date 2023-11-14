const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://root:BfreTsEEySvdpewL@cluster0.pnounqr.mongodb.net/pelicula-db?retryWrites=true&w=majority'
)
.then(() => console.log('Conexion exitosa'))
.catch(err => console.error('Error al conectarse',err));

module.exports = mongoose;