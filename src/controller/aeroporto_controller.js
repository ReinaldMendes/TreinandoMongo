const Aeroporto = require("../model/aeroporto_model");

const store = async (req, resp) => {
  try {
    await Aeroporto.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};

const index = async (req, resp) => {
  try {
    const content = await Aeroporto.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const show = async (req, resp) => {
  try {
    const content = await Aeroporto.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const update = async (res, resp, next) => {
  try {
    await Aeroporto.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
const destroy = async (req, resp) => {
  try {
    await Aeroporto.findByIdAndDelete(req.params.id).exec();
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
