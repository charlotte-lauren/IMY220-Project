"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// /backend/server.js

// Adjust the path if necessary

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5500;

// Middleware
app.use((0, _cors["default"])()); // Enable CORS
app.use(_express["default"].json()); // Parse JSON bodies

// Database connection (adjust the connection string as necessary)
_mongoose["default"].connect('mongodb://localhost:27017/notefy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('MongoDB connected');
})["catch"](function (err) {
  return console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/users', _userRoutes["default"]); // User routes

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});