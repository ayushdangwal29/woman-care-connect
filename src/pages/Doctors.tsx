
import { useState } from 'react';
import { Search, Filter, Star, Calendar, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Layout/Header';
import BookingModal from '@/components/Booking/BookingModal';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  degrees: string;
  institute: string;
  rating: number;
  experience: number;
  price: number;
  image: string;
  location: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    specialty: 'Gynecologist & Obstetrician',
    degrees: 'MBBS, MD (OBG)',
    institute: 'AIIMS Delhi',
    rating: 4.9,
    experience: 12,
    price: 1800,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=150&h=150',
    location: 'Delhi'
  },
  {
    id: '2',
    name: 'Dr. Anjali Mehta',
    specialty: 'Reproductive Endocrinologist',
    degrees: 'MBBS, MS, DM',
    institute: 'KEM Hospital Mumbai',
    rating: 4.8,
    experience: 15,
    price: 2200,
    image: 'https://images.unsplash.com/photo-1594824717693-2fd4fcc9c0a3?auto=format&fit=crop&w=150&h=150',
    location: 'Mumbai'
  },
  {
    id: '3',
    name: 'Dr. Ritu Agarwal',
    specialty: 'High-Risk Pregnancy Specialist',
    degrees: 'MBBS, MD, Fellowship',
    institute: 'CMC Vellore',
    rating: 4.7,
    experience: 10,
    price: 1500,
    image: 'https://images.unsplash.com/photo-1609040830967-fbb86a5a9a7a?auto=format&fit=crop&w=150&h=150',
    location: 'Bangalore'
  },
  {
    id: '4',
    name: 'Dr. Sunita Reddy',
    specialty: 'Gynecological Oncologist',
    degrees: 'MBBS, MS, MCh',
    institute: 'Tata Memorial Hospital',
    rating: 4.9,
    experience: 18,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&h=150',
    location: 'Mumbai'
  },
  {
    id: '5',
    name: 'Dr. Kavita Singh',
    specialty: 'Adolescent Gynecologist',
    degrees: 'MBBS, MD, DNB',
    institute: 'PGIMER Chandigarh',
    rating: 4.6,
    experience: 8,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1551884885-4db59d845ac8?auto=format&fit=crop&w=150&h=150',
    location: 'Chandigarh'
  },
  {
    id: '6',
    name: 'Dr. Meera Krishnan',
    specialty: 'Laparoscopic Surgeon',
    degrees: 'MBBS, MS, Fellowship',
    institute: 'Apollo Hospitals',
    rating: 4.8,
    experience: 14,
    price: 2000,
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=150&h=150',
    location: 'Chennai'
  }
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const filteredDoctors = doctors
    .filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = !selectedSpecialty || doctor.specialty.includes(selectedSpecialty);
      const matchesRating = !selectedRating || doctor.rating >= parseFloat(selectedRating);
      const matchesExperience = !selectedExperience || doctor.experience >= parseInt(selectedExperience);
      const matchesPrice = !selectedPrice || (
        selectedPrice === 'low' ? doctor.price <= 1500 :
        selectedPrice === 'medium' ? doctor.price > 1500 && doctor.price <= 2000 :
        doctor.price > 2000
      );
      
      return matchesSearch && matchesSpecialty && matchesRating && matchesExperience && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          return b.experience - a.experience;
        case 'price':
          return a.price - b.price;
        default:
          return 0;
      }
    });

  const handleBookNow = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('');
    setSelectedRating('');
    setSelectedExperience('');
    setSelectedPrice('');
    setSortBy('rating');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-womancare-dark mb-2">Find Your Gynecologist</h1>
          <p className="text-womancare-gray">Connect with verified and experienced women's health specialists</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or specialty"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Specialty Filter */}
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Gynecologist">General Gynecology</SelectItem>
                <SelectItem value="Reproductive">Reproductive Health</SelectItem>
                <SelectItem value="High-Risk">High-Risk Pregnancy</SelectItem>
                <SelectItem value="Oncologist">Gynecological Oncology</SelectItem>
                <SelectItem value="Adolescent">Adolescent Health</SelectItem>
                <SelectItem value="Laparoscopic">Laparoscopic Surgery</SelectItem>
              </SelectContent>
            </Select>

            {/* Rating Filter */}
            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger>
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4.5">4.5+ Stars</SelectItem>
                <SelectItem value="4.0">4.0+ Stars</SelectItem>
                <SelectItem value="3.5">3.5+ Stars</SelectItem>
              </SelectContent>
            </Select>

            {/* Experience Filter */}
            <Select value={selectedExperience} onValueChange={setSelectedExperience}>
              <SelectTrigger>
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15+ Years</SelectItem>
                <SelectItem value="10">10+ Years</SelectItem>
                <SelectItem value="5">5+ Years</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">₹500 - ₹1500</SelectItem>
                <SelectItem value="medium">₹1500 - ₹2000</SelectItem>
                <SelectItem value="high">₹2000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-womancare-gray">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="experience">Experience</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-womancare-gray">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-womancare-dark text-lg">{doctor.name}</h3>
                  <p className="text-womancare-pink font-medium">{doctor.specialty}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-womancare-gray" />
                  <span className="text-sm text-womancare-gray">{doctor.degrees}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-womancare-gray" />
                  <span className="text-sm text-womancare-gray">{doctor.institute}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-sm text-womancare-gray">Experience</span>
                  <p className="font-semibold">{doctor.experience} years</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-womancare-gray">Consultation</span>
                  <p className="font-semibold text-womancare-blue">₹{doctor.price}</p>
                </div>
              </div>

              <Button 
                onClick={() => handleBookNow(doctor)}
                className="w-full bg-womancare-pink hover:bg-pink-600 text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-womancare-gray text-lg">No doctors found matching your criteria.</p>
            <Button onClick={resetFilters} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        doctor={selectedDoctor}
      />
    </div>
  );
};

export default Doctors;
