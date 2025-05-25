
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, UserCheck, Calendar, Shield, Star, Clock } from 'lucide-react';
import Header from '@/components/Layout/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-womancare-dark leading-tight">
                Connect with
                <span className="text-womancare-pink block">Top Gynecologists</span>
              </h1>
              <p className="text-xl text-womancare-gray leading-relaxed">
                Get personalized healthcare support with our AI assistant and book appointments 
                with verified gynecologists. Your health, our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/chat">
                  <Button className="bg-womancare-pink hover:bg-pink-600 text-white px-8 py-4 text-lg h-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with AI Assistant
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="outline" className="border-womancare-blue text-womancare-blue hover:bg-womancare-blue hover:text-white px-8 py-4 text-lg h-auto">
                    Find a Doctor
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-womancare-pink to-purple-400 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Woman consulting with doctor" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-womancare-green rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-womancare-dark">500+ Verified Doctors</p>
                    <p className="text-sm text-womancare-gray">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-womancare-dark mb-4">
              Why Choose WomanCare?
            </h2>
            <p className="text-xl text-womancare-gray max-w-3xl mx-auto">
              We provide comprehensive women's health support through technology and verified medical professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-pink-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-womancare-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-womancare-dark mb-4">AI Health Assistant</h3>
              <p className="text-womancare-gray">
                Get instant answers to your health questions with our intelligent AI assistant available 24/7.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-womancare-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-womancare-dark mb-4">Verified Doctors</h3>
              <p className="text-womancare-gray">
                Connect with certified gynecologists who are thoroughly verified and highly experienced.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-green-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-womancare-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-womancare-dark mb-4">Easy Booking</h3>
              <p className="text-womancare-gray">
                Book appointments seamlessly with our simple and intuitive booking system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-womancare-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-womancare-pink mb-2">500+</div>
              <p className="text-womancare-gray">Verified Doctors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-womancare-blue mb-2">10K+</div>
              <p className="text-womancare-gray">Happy Patients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-womancare-green mb-2">24/7</div>
              <p className="text-womancare-gray">AI Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-womancare-amber mb-2">4.9★</div>
              <p className="text-womancare-gray">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-womancare-pink to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Start your journey with WomanCare today. Get instant AI support or book with a verified gynecologist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-white text-womancare-pink hover:bg-gray-100 px-8 py-4 text-lg h-auto">
                Get Started Free
              </Button>
            </Link>
            <Link to="/doctors">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-womancare-pink px-8 py-4 text-lg h-auto">
                Browse Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-womancare-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-womancare-pink rounded-full flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-xl font-bold text-white">WomanCare</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 WomanCare. Empowering women's health with technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
