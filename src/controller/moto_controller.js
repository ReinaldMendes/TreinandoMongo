const Moto = require("../model/moto_model");

const store = async (req, resp) => {
  try {
    Moto.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
const index = async (req, resp) => {
  try {
    const content = Moto.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const show = async (req, resp) => {
  try {
    const content = Moto.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const update = async (res, resp) => {
  try {
    Moto.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
const destroy = async (req, resp) => {
  try {
    Moto.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
