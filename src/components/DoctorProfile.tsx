import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, DollarSign, GraduationCap, Award, Calendar } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import BookingForm from './BookingForm';

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { doctors } = useAppContext();
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Back to Doctor List
          </Link>
        </div>
      </div>
    );
  }

  const getAvailabilityBadge = () => {
    switch (doctor.availability.status) {
      case 'available':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available Today
          </span>
        );
      case 'busy':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
            Busy
          </span>
        );
      case 'on-leave':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
            On Leave
          </span>
        );
    }
  };

  const renderSchedule = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {days.map(day => (
          <div key={day} className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">{day}</h4>
            {doctor.schedule[day] && doctor.schedule[day].length > 0 ? (
              <div className="space-y-1">
                {doctor.schedule[day].map(time => (
                  <span key={time} className="inline-block bg-white px-2 py-1 text-xs rounded mr-2 mb-1">
                    {time}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-500 text-sm">Closed</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Doctors
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
                <p className="text-xl text-blue-100 mb-4">{doctor.specialization}</p>
                <div className="flex flex-wrap items-center gap-4 text-blue-100">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-300 fill-current" />
                    <span>{doctor.rating} rating</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span>₹{doctor.consultationFee} consultation</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                {getAvailabilityBadge()}
                {doctor.availability.nextAvailable && (
                  <p className="text-blue-100 text-sm mt-2">
                    Next: {doctor.availability.nextAvailable}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {doctor.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
                </div>

                {/* Education & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                    </div>
                    <p className="text-gray-700">{doctor.education}</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Award className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
                    </div>
                    <p className="text-gray-700">{doctor.experience} years of professional practice</p>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center mb-3">
                    <MapPin className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  </div>
                  <p className="text-gray-700">{doctor.location}</p>
                </div>

                {/* Schedule */}
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Weekly Schedule</h3>
                  </div>
                  {renderSchedule()}
                </div>
              </div>

              {/* Booking Section */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  {!showBookingForm ? (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Ready to Book?
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Schedule your appointment with {doctor.name} today.
                      </p>
                      <button
                        onClick={() => setShowBookingForm(true)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                        disabled={doctor.availability.status === 'on-leave'}
                      >
                        {doctor.availability.status === 'on-leave' 
                          ? 'Currently Unavailable' 
                          : 'Book Appointment'
                        }
                      </button>
                      {doctor.availability.status === 'on-leave' && (
                        <p className="text-sm text-gray-500 mt-2 text-center">
                          Next available: {doctor.availability.nextAvailable}
                        </p>
                      )}
                    </div>
                  ) : (
                    <BookingForm doctor={doctor} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;