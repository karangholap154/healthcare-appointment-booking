import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Mail, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Doctor } from '../types';

interface BookingFormProps {
  doctor: Doctor;
}

const BookingForm: React.FC<BookingFormProps> = ({ doctor }) => {
  const navigate = useNavigate();
  const { addAppointment } = useAppContext();
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      addAppointment({
        doctorId: doctor.id,
        patientName: formData.patientName,
        email: formData.email,
        date: formData.date,
        time: formData.time,
      });
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const getAvailableTimeSlots = () => {
    if (!formData.date) return [];
    
    const selectedDate = new Date(formData.date);
    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    return doctor.schedule[dayName] || [];
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Appointment Confirmed!
        </h3>
        <p className="text-gray-600 mb-6">
          Your appointment with {doctor.name} has been successfully booked for{' '}
          {new Date(formData.date).toLocaleDateString()} at {formData.time}.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          A confirmation email has been sent to {formData.email}
        </p>
        <div className="space-y-3">
          <button
            onClick={() => navigate(`/doctor/${doctor.id}`)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Back to Doctor Profile
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Find More Doctors
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Book Appointment with {doctor.name}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="h-4 w-4 inline mr-2" />
            Patient Name
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.patientName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.patientName && (
            <p className="mt-1 text-sm text-red-600">{errors.patientName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="h-4 w-4 inline mr-2" />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 inline mr-2" />
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={getMinDate()}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="h-4 w-4 inline mr-2" />
            Preferred Time
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={!formData.date}
          >
            <option value="">Select a time</option>
            {getAvailableTimeSlots().map(time => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time}</p>
          )}
          {formData.date && getAvailableTimeSlots().length === 0 && (
            <p className="mt-1 text-sm text-yellow-600">
              No available time slots for the selected date
            </p>
          )}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Appointment Summary</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>Doctor: {doctor.name}</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Consultation Fee: ₹{doctor.consultationFee}</p>
            <p>Location: {doctor.location}</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;