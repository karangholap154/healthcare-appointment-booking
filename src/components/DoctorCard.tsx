import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, DollarSign } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const getAvailabilityBadge = () => {
    switch (doctor.availability.status) {
      case 'available':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
            Available Today
          </span>
        );
      case 'busy':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
            Busy
          </span>
        );
      case 'on-leave':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
            On Leave
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 truncate">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium">{doctor.specialization}</p>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
              </div>
            </div>
            
            <div className="mt-3 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                {doctor.experience} years experience
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {doctor.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <DollarSign className="h-4 w-4 mr-2" />
                ₹{doctor.consultationFee} consultation
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          {getAvailabilityBadge()}
          {doctor.availability.nextAvailable && (
            <span className="text-sm text-gray-500">
              Next: {doctor.availability.nextAvailable}
            </span>
          )}
        </div>

        <div className="mt-4">
          <Link
            to={`/doctor/${doctor.id}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
          >
            View Profile & Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;