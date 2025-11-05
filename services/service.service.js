const Service = require('../models/Service');

exports.getServices = async () => {
  return await Service.find();
};

exports.createService = async (requestingUser, data) => {
  if (!requestingUser || requestingUser.role !== 'admin') throw { status: 403, message: 'Forbidden' };
  const service = new Service(data);
  return await service.save();
};

exports.updateService = async (requestingUser, serviceId, updateData) => {
  if (!requestingUser || requestingUser.role !== 'admin') throw { status: 403, message: 'Forbidden' };
  const service = await Service.findByIdAndUpdate(serviceId, updateData, { new: true });
  if (!service) throw { status: 404, message: 'Service not found' };
  return service;
};

exports.deleteService = async (requestingUser, serviceId) => {
  if (!requestingUser || requestingUser.role !== 'admin') throw { status: 403, message: 'Forbidden' };
  const service = await Service.findByIdAndDelete(serviceId);
  if (!service) throw { status: 404, message: 'Service not found' };
};

