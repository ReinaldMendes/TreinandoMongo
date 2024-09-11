const Refrigerante = require("../model/refrigerante_model");

const store = async (req, resp) => {
  try {
    Refrigerante.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
const index = async (req, resp) => {
  try {
    const content = Refrigerante.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const show = async (req, resp) => {
  try {
    const content = Refrigerante.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const update = async (res, resp) => {
  try {
    Refrigerante.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
const destroy = async (req, resp) => {
  try {
    Refrigerante.findByIdAndDelete(req.params.id).exec();
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
