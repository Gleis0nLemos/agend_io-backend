import Appointment from './model';

class AppointmentController {
  async getAppointments(req, res) {
    try {
      const query = {}

      if (req.user.role === 'client') {
        query.userId = req.user.id;
      } else if (req.user.role === 'company') {
        query.companyId = req.user.id;
      }

      const appointments = await Appointment.find(query)
        .populate('userId', 'name email')
        .populate('companyId', 'name')
        .populate('serviceId', 'name price');
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createAppointment(req, res) {
    try {
      const appointment = new Appointment(req.body);
      await appointment.save();
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new AppointmentController();