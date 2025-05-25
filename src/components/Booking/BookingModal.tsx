
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, Clock, Calendar, CheckCircle, Star } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  price: number;
  image: string;
  rating: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}

type BookingStep = 'date' | 'time' | 'summary' | 'success';

const BookingModal = ({ isOpen, onClose, doctor }: BookingModalProps) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    age: ''
  });

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const timeSlots = {
    morning: ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    afternoon: ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
    evening: ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM']
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = () => {
    console.log('Booking confirmed:', {
      doctor: doctor?.name,
      date: selectedDate,
      time: selectedTime,
      patient: patientInfo
    });
    setCurrentStep('success');
  };

  const handleClose = () => {
    setCurrentStep('date');
    setSelectedDate(null);
    setSelectedTime('');
    setPatientInfo({ name: '', phone: '', email: '', age: '' });
    onClose();
  };

  const handleNewBooking = () => {
    setCurrentStep('date');
    setSelectedDate(null);
    setSelectedTime('');
    setPatientInfo({ name: '', phone: '', email: '', age: '' });
  };

  if (!doctor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-womancare-dark">
            Book Appointment
          </DialogTitle>
        </DialogHeader>

        {/* Doctor Info Header */}
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl mb-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg text-womancare-dark">{doctor.name}</h3>
            <p className="text-womancare-pink">{doctor.specialty}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm">{doctor.rating}</span>
              <span className="text-sm text-womancare-gray">• ₹{doctor.price}</span>
            </div>
          </div>
        </div>

        {/* Step 1: Date Selection */}
        {currentStep === 'date' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-womancare-pink" />
              Select Date
            </h3>
            
            <div className="grid grid-cols-7 gap-2">
              {generateDates().map((date, index) => {
                const isSelected = selectedDate?.toDateString() === date.toDateString();
                const isToday = date.toDateString() === new Date().toDateString();
                
                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      isSelected
                        ? 'bg-womancare-pink text-white border-womancare-pink'
                        : 'border-gray-200 hover:border-womancare-pink hover:bg-pink-50'
                    }`}
                  >
                    <div className="text-xs text-gray-500">
                      {date.toLocaleDateString('en', { weekday: 'short' })}
                    </div>
                    <div className={`font-semibold ${isToday ? 'text-womancare-blue' : ''}`}>
                      {date.getDate()}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => setCurrentStep('time')}
                disabled={!selectedDate}
                className="bg-womancare-pink hover:bg-pink-600 text-white"
              >
                Select Time <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Time Selection */}
        {currentStep === 'time' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center">
                <Clock className="w-5 h-5 mr-2 text-womancare-pink" />
                Select Time
              </h3>
              <p className="text-sm text-womancare-gray">
                {selectedDate?.toLocaleDateString('en', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {Object.entries(timeSlots).map(([period, slots]) => (
              <div key={period}>
                <h4 className="font-medium text-womancare-dark mb-3 capitalize">
                  {period} ({slots.length} slots available)
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`p-3 rounded-lg border text-sm transition-colors ${
                          isSelected
                            ? 'bg-womancare-pink text-white border-womancare-pink'
                            : 'border-gray-200 hover:border-womancare-pink hover:bg-pink-50'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep('date')}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={() => setCurrentStep('summary')}
                disabled={!selectedTime}
                className="bg-womancare-pink hover:bg-pink-600 text-white"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Summary & Patient Info */}
        {currentStep === 'summary' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Appointment Summary</h3>
            
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-womancare-gray">Date:</span>
                  <p className="font-semibold">
                    {selectedDate?.toLocaleDateString('en', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div>
                  <span className="text-womancare-gray">Time:</span>
                  <p className="font-semibold">{selectedTime}</p>
                </div>
                <div>
                  <span className="text-womancare-gray">Doctor:</span>
                  <p className="font-semibold">{doctor.name}</p>
                </div>
                <div>
                  <span className="text-womancare-gray">Fee:</span>
                  <p className="font-semibold text-womancare-blue">₹{doctor.price}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Patient Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={patientInfo.name}
                    onChange={(e) => setPatientInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={patientInfo.phone}
                    onChange={(e) => setPatientInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={patientInfo.email}
                    onChange={(e) => setPatientInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    value={patientInfo.age}
                    onChange={(e) => setPatientInfo(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="Enter your age"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep('time')}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button
                onClick={handleConfirmBooking}
                disabled={!patientInfo.name || !patientInfo.phone || !patientInfo.email || !patientInfo.age}
                className="bg-womancare-green hover:bg-green-600 text-white"
              >
                Confirm Appointment
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {currentStep === 'success' && (
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 bg-womancare-green rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-womancare-dark mb-2">
                Appointment Confirmed!
              </h3>
              <p className="text-womancare-gray">
                Your appointment with {doctor.name} is confirmed for{' '}
                {selectedDate?.toLocaleDateString('en', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })} at {selectedTime}
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <p className="text-sm text-green-800">
                You will receive a confirmation email and SMS shortly with all the details.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleNewBooking}
                variant="outline"
                className="border-womancare-pink text-womancare-pink hover:bg-pink-50"
              >
                Book Another
              </Button>
              <Button
                onClick={handleClose}
                className="bg-womancare-blue hover:bg-blue-600 text-white"
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
