"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewares = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var middlewares = function middlewares(app) {
  app.use((0, _cors.default)());
  app.use(_bodyParser.default.json());
  app.use(_bodyParser.default.urlencoded({
    extended: false
  }));
  app.use((0, _morgan.default)('dev'));
};

exports.middlewares = middlewares;