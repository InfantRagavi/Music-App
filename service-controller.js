const Service = require("../Models/services-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ msg: "No Services found" });
      return;
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = services;   