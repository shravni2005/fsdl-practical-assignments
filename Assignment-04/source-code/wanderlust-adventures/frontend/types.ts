export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
}

export interface Booking {
  id?: string;
  packageId: string;
  packageName: string;
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  guests: number;
  message?: string;
  timestamp: number;
}