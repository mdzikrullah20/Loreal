
'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const BookingSystem: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    { id: 'consultation', name: 'Business Consultation', duration: '1 hour', price: '$150' },
    { id: 'strategy', name: 'Strategy Session', duration: '2 hours', price: '$250' },
    { id: 'workshop', name: 'Team Workshop', duration: '3 hours', price: '$450' },
    { id: 'coaching', name: '1-on-1 Coaching', duration: '45 minutes', price: '$120' }
  ];

  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        // Simulate some unavailable slots
        const available = Math.random() > 0.3;
        slots.push({ time, available });
      }
    }
    return slots;
  };

  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots());

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return bookingData.service !== '';
      case 2:
        return bookingData.date !== '' && bookingData.time !== '';
      case 3:
        return bookingData.name !== '' && bookingData.email !== '' && bookingData.phone !== '';
      default:
        return true;
    }
  };

  const getMinDate = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const submitBooking = async () => {
    setIsSubmitting(true);
    try {
      // Simulate Google Sheets API call
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      // Simulate EmailJS integration
      const emailData = {
        to_email: bookingData.email,
        to_name: bookingData.name,
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time,
        message: bookingData.message || 'No additional message'
      };

      // In a real implementation, you would use:
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_PUBLIC_KEY');

      // Simulate success after delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setCurrentStep(5);
    } catch (error) {
      console.error('Booking submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetBooking = () => {
    setBookingData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    setCurrentStep(1);
    setSubmitStatus('idle');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8 flex-wrap sm:flex-nowrap">
    {[1, 2, 3, 4].map((step) => (
      <div key={step} className="flex items-center mb-4 sm:mb-0">
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${
            currentStep >= step
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          {step}
        </div>
        {step < 4 && (
          <div
            className={`h-0.5 mx-1 sm:mx-2 ${
              currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
            } w-8 sm:w-16`}
          />
        )}
      </div>
    ))}
  </div>
  
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Service</h2>
        <p className="text-gray-600">Choose the service you d like to book</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleInputChange('service', service.id)}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              bookingData.service === service.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
            <p className="text-gray-600 mt-1">{service.duration}</p>
            <p className="text-blue-600 font-semibold mt-2">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Date & Time</h2>
        <p className="text-gray-600">Select your preferred date and time slot</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            Select Date
          </label>
          <input
            type="date"
            min={getMinDate()}
            value={bookingData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <Clock className="w-4 h-4 mr-2" />
            Available Time Slots
          </label>
          <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.available && handleInputChange('time', slot.time)}
                disabled={!slot.available}
                className={`p-2 text-sm rounded border transition-all ${
                  bookingData.time === slot.time
                    ? 'bg-blue-600 text-white border-blue-600'
                    : slot.available
                    ? 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Information</h2>
        <p className="text-gray-600">Please provide your contact details</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            value={bookingData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Mail className="w-4 h-4 mr-2" />
          Email Address *
        </label>
        <input
          type="email"
          value={bookingData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email address"
        />
      </div>
      
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <MessageSquare className="w-4 h-4 mr-2" />
          Additional Message (Optional)
        </label>
        <textarea
          value={bookingData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Any additional information or special requests..."
        />
      </div>
    </div>
  );

  const renderStep4 = () => {
    const selectedService = services.find(s => s.id === bookingData.service);
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Booking</h2>
          <p className="text-gray-600">Please review your booking details before confirming</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Details</h3>
            <p className="text-gray-700">{selectedService?.name}</p>
            <p className="text-sm text-gray-600">{selectedService?.duration} - {selectedService?.price}</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Date & Time</h3>
            <p className="text-gray-700">
              {new Date(bookingData.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="text-sm text-gray-600">{bookingData.time}</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-700">{bookingData.name}</p>
            <p className="text-sm text-gray-600">{bookingData.email}</p>
            <p className="text-sm text-gray-600">{bookingData.phone}</p>
          </div>
          
          {bookingData.message && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Message</h3>
              <p className="text-gray-700">{bookingData.message}</p>
            </div>
          )}
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> You will receive a confirmation email shortly after booking. 
            Please check your spam folder if you don t see it in your inbox.
          </p>
        </div>
      </div>
    );
  };

  const renderStep5 = () => (
    <div className="text-center space-y-6">
      {submitStatus === 'success' ? (
        <>
          <div className="flex justify-center">
            <CheckCircle className="w-20 h-20 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Thank you for your booking. We&apos;ve sent a confirmation email to {bookingData.email} 
            with all the details. We look forward to meeting with you!
          </p>
          <button
            onClick={resetBooking}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Another Appointment
          </button>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <AlertCircle className="w-20 h-20 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Booking Failed</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Wewre sorry, but there was an error processing your booking. 
            Please try again or contact us directly.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentStep(4)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={resetBooking}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Start Over
            </button>
          </div>
        </>
      )}
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Appointment</h1>
          <p className="text-lg text-gray-600">Schedule a consultation with our experts</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep <= 4 && renderStepIndicator()}
          
          <div className="mb-8">
            {renderCurrentStep()}
          </div>
          
          {currentStep <= 4 && (
            <div className="flex justify-between items-center pt-6 border-t">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                Previous
              </button>
              
              {currentStep === 4 ? (
                <button
                  onClick={submitBooking}
                  disabled={isSubmitting}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Confirming...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!validateStep(currentStep)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    validateStep(currentStep)
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Need help? Contact us at <span className="text-blue-600">support@example.com</span> or call <span className="text-blue-600">+1 (555) 123-4567</span></p>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;