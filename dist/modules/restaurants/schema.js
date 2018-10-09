"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _index = require("../shared-schemas/index.js");

var RestaurantSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: _index.PointSchema,
    required: true
  }
});

var _default = _mongoose.default.model('Restaurant', RestaurantSchema);

exports.default = _default;