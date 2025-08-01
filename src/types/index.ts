export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  experience: number;
  education: string;
  about: string;
  availability: {
    status: 'available' | 'busy' | 'on-leave';
    nextAvailable?: string;
  };
  schedule: {
    [key: string]: string[];
  };
  consultationFee: number;
  location: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface AppContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}