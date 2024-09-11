const Caneta = require("../model/caneta_model");

const store = async (req, resp) => {
  try {
    await Caneta.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
const index = async (req, resp) => {
  try {
    const content = await Caneta.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const show = async (req, resp) => {
  try {
    const content = await Caneta.findById(req.params.id).exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
const update = async (res, resp) => {
  try {
    await Caneta.findByIdAndUpdate(req.params.id, req.body).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
const destroy = async (req, resp) => {
  try {
    await Caneta.findByIdAndDelete(req.params.id).exec();
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
