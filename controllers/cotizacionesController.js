const Cotizacion = require("../model/Cotizacion");

exports.createCotizacion = async (req, res, next) => {
  console.info("Creating Cotización and uploading to database")
  const cotizacion = await Cotizacion.create(req.body);
  res.status(201).json({ cotizacion });
};

exports.getCotizacionById = async (req, res, next) => {
  const { id } = req.params;
  const cotizacion = await Cotizacion.findOne({ _id: id });
  if (!cotizacion) {
    throw new Exception("La cotización no existe: " + id);
  }
  res.status(200).json({ cotizacion });
};
