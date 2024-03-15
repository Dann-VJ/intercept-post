"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _note = _interopRequireDefault(require("./routes/note"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();

//Crear constante routes note

//Crear constante que ejecuta express
var app = (0, _express["default"])();
// Configura CORS para permitir peticiones desde http://localhost:3001
var corsOptions = {
  origin: 'http://localhost:5173'
};
app.use((0, _cors["default"])(corsOptions)); // Aplica la configuración de CORS

//Costante  que especifica el puerto
var port = process.env.PORT || 3000;

//middleware
app.use(_express["default"].json());
app.use('/api', _note["default"]);

//Ruta de home con la respuesta
app.get('/', function (req, res) {
  res.send('Hola mundo');
});
//Conección con mongoose
_mongoose["default"].connect(process.env.MONGODB_URI).then(function () {
  return console.log('Conectado a la base de datos Atlas');
})["catch"](function (error) {
  return console.error(error);
});
//Inicializar el servidor
app.listen(port, function () {
  console.log(" Servidor escuchando en el puerto ".concat(port));
});