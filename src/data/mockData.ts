import { Doctor } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    specialization: 'Cardiologist',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.9,
    experience: 15,
    education: 'MBBS from AIIMS Delhi, MD from Harvard Medical School, USA',
    about: 'Dr. Priya Sharma is a renowned cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology and has published numerous research papers in leading medical journals.',
    availability: {
      status: 'available',
      nextAvailable: 'Today at 2:00 PM'
    },
    schedule: {
      'Monday': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Tuesday': ['09:00', '10:00', '11:00', '14:00', '15:00'],
      'Wednesday': ['09:00', '10:00', '14:00', '15:00', '16:00'],
      'Thursday': ['09:00', '10:00', '11:00', '14:00', '15:00'],
      'Friday': ['09:00', '10:00', '11:00', '14:00'],
      'Saturday': ['09:00', '10:00', '11:00'],
      'Sunday': []
    },
    consultationFee: 200,
    location: 'Apollo Hospital, Hyderabad'
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Orthopedic Surgeon',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.8,
    experience: 12,
    education: 'MBBS from CMC Vellore, MS Orthopedics from University of Oxford, UK',
    about: 'Dr. Rajesh Kumar is an experienced orthopedic surgeon specializing in sports medicine and joint replacement surgeries. He has successfully performed over 2000 surgeries and is known for his minimally invasive techniques.',
    availability: {
      status: 'busy',
      nextAvailable: 'Tomorrow at 9:00 AM'
    },
    schedule: {
      'Monday': ['08:00', '09:00', '10:00', '14:00', '15:00'],
      'Tuesday': ['08:00', '09:00', '10:00', '14:00', '15:00', '16:00'],
      'Wednesday': ['08:00', '09:00', '14:00', '15:00'],
      'Thursday': ['08:00', '09:00', '10:00', '14:00', '15:00', '16:00'],
      'Friday': ['08:00', '09:00', '10:00'],
      'Saturday': ['08:00', '09:00'],
      'Sunday': []
    },
    consultationFee: 250,
    location: 'Fortis Hospital, Bangalore'
  },
  {
    id: '3',
    name: 'Dr. Anita Patel',
    specialization: 'Pediatrician',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.9,
    experience: 10,
    education: 'MBBS from King George Medical University, MD Pediatrics from Peking University, China',
    about: 'Dr. Anita Patel is a compassionate pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence. She has a special interest in developmental pediatrics and preventive care.',
    availability: {
      status: 'available',
      nextAvailable: 'Today at 11:00 AM'
    },
    schedule: {
      'Monday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'],
      'Tuesday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'],
      'Wednesday': ['08:00', '09:00', '10:00', '11:00', '14:00'],
      'Thursday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'],
      'Friday': ['08:00', '09:00', '10:00', '11:00'],
      'Saturday': ['08:00', '09:00', '10:00'],
      'Sunday': []
    },
    consultationFee: 150,
    location: 'Rainbow Children\'s Hospital, Chennai'
  },
  {
    id: '4',
    name: 'Dr. Vikram Singh',
    specialization: 'Dermatologist',
    image: 'https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.7,
    experience: 8,
    education: 'MBBS from Maulana Azad Medical College, MD Dermatology from University of Tokyo, Japan',
    about: 'Dr. Vikram Singh is a skilled dermatologist specializing in medical and cosmetic dermatology. He is experienced in treating various skin conditions and offers advanced cosmetic procedures with a focus on natural-looking results.',
    availability: {
      status: 'on-leave',
      nextAvailable: 'Next Monday at 10:00 AM'
    },
    schedule: {
      'Monday': ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00'],
      'Tuesday': ['09:00', '10:00', '11:00', '13:00', '14:00'],
      'Wednesday': ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00'],
      'Thursday': ['09:00', '10:00', '11:00', '13:00', '14:00'],
      'Friday': ['09:00', '10:00', '11:00'],
      'Saturday': [],
      'Sunday': []
    },
    consultationFee: 180,
    location: 'Manipal Hospital, Mumbai'
  },
  {
    id: '5',
    name: 'Dr. Meera Reddy',
    specialization: 'Neurologist',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.8,
    experience: 18,
    education: 'MBBS from Kasturba Medical College, MD Neurology from Charité Berlin, Germany',
    about: 'Dr. Meera Reddy is a highly experienced neurologist with expertise in treating neurological disorders including epilepsy, multiple sclerosis, and movement disorders. She is actively involved in clinical research and patient care.',
    availability: {
      status: 'available',
      nextAvailable: 'Today at 3:00 PM'
    },
    schedule: {
      'Monday': ['08:30', '09:30', '10:30', '13:30', '14:30', '15:30'],
      'Tuesday': ['08:30', '09:30', '10:30', '13:30', '14:30'],
      'Wednesday': ['08:30', '09:30', '10:30', '13:30', '14:30', '15:30'],
      'Thursday': ['08:30', '09:30', '10:30', '13:30', '14:30'],
      'Friday': ['08:30', '09:30', '10:30'],
      'Saturday': ['08:30', '09:30'],
      'Sunday': []
    },
    consultationFee: 220,
    location: 'Max Hospital, Gurugram'
  },
  {
    id: '6',
    name: 'Dr. Arjun Gupta',
    specialization: 'General Practitioner',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.6,
    experience: 20,
    education: 'MBBS from Grant Medical College Mumbai, MD Family Medicine from Johns Hopkins University, USA',
    about: 'Dr. Arjun Gupta is a dedicated general practitioner with two decades of experience in family medicine. He provides comprehensive primary care services and focuses on preventive medicine and patient education.',
    availability: {
      status: 'available',
      nextAvailable: 'Today at 1:00 PM'
    },
    schedule: {
      'Monday': ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
      'Tuesday': ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
      'Wednesday': ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00'],
      'Thursday': ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
      'Friday': ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00'],
      'Saturday': ['08:00', '09:00', '10:00', '11:00'],
      'Sunday': []
    },
    consultationFee: 120,
    location: 'Ruby Hall Clinic, Pune'
  }
];