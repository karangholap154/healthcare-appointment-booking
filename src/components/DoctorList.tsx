import React from 'react';
import { useAppContext } from '../context/AppContext';
import DoctorCard from './DoctorCard';
import SearchBar from './SearchBar';

const DoctorList: React.FC = () => {
  const { doctors, searchTerm } = useAppContext();

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Doctor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book appointments with trusted healthcare professionals in your area
          </p>
        </div>

        <SearchBar />

        {filteredDoctors.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No doctors found matching your search criteria.
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorList;