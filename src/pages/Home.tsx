
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, UserCheck, Calendar, Shield, Star, Clock, ArrowRight, Heart, Users, Award, Sparkles, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Header from '@/components/Layout/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-24 overflow-hidden">
        {/* Floating Elements Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-womancare-pink/10 rounded-full animate-[fade-in_3s_ease-in-out_infinite_alternate]"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-womancare-blue/10 rounded-full animate-[fade-in_4s_ease-in-out_infinite_alternate]"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-womancare-green/10 rounded-full animate-[fade-in_5s_ease-in-out_infinite_alternate]"></div>
          <Sparkles className="absolute top-1/3 right-1/3 w-8 h-8 text-womancare-pink/20 animate-pulse" />
          <Heart className="absolute bottom-1/4 right-1/4 w-6 h-6 text-womancare-pink/30 animate-bounce" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in">
              {/* Enhanced Logo Display */}
              <div className="flex items-center space-x-4 lg:hidden">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-womancare-pink to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Heart className="w-7 h-7 text-womancare-pink" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-womancare-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-womancare-pink to-purple-600 bg-clip-text text-transparent">
                    WomanCare
                  </h3>
                  <p className="text-sm text-womancare-gray">Empowering Women's Health</p>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-womancare-dark leading-tight">
                  Your Health,
                  <span className="block bg-gradient-to-r from-womancare-pink to-purple-600 bg-clip-text text-transparent">
                    Our Priority
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-womancare-pink to-purple-600 rounded-full"></div>
                <p className="text-xl md:text-2xl text-womancare-gray leading-relaxed max-w-2xl">
                  Connect with verified gynecologists and get instant AI-powered health support. 
                  Experience healthcare that understands and empowers women.
                </p>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 py-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-womancare-green" />
                  <span className="text-sm font-medium text-womancare-gray">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-womancare-blue" />
                  <span className="text-sm font-medium text-womancare-gray">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-womancare-pink" />
                  <span className="text-sm font-medium text-womancare-gray">10K+ Happy Patients</span>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/chat" className="group">
                  <Button className="bg-gradient-to-r from-womancare-pink to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-6 text-lg h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:shadow-pink-500/25">
                    <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                    Chat with AI Assistant
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/doctors" className="group">
                  <Button variant="outline" className="border-2 border-womancare-blue text-womancare-blue hover:bg-womancare-blue hover:text-white px-10 py-6 text-lg h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <UserCheck className="w-6 h-6 mr-3" />
                    Find a Doctor
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Enhanced Hero Visual */}
            <div className="relative animate-fade-in">
              <div className="relative">
                <div className="bg-gradient-to-br from-womancare-pink via-purple-400 to-blue-500 rounded-3xl p-1 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-white rounded-3xl p-8">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                      alt="Professional female doctor consulting with patient in modern healthcare setting" 
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl animate-[slide-in-right_1s_ease-out]">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-womancare-green to-emerald-400 rounded-full flex items-center justify-center">
                      <UserCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-womancare-dark">500+</p>
                      <p className="text-sm text-womancare-gray">Verified Doctors</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl animate-[fade-in_1.5s_ease-out]">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-womancare-blue to-blue-500 rounded-full flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-womancare-dark">24/7</p>
                      <p className="text-sm text-womancare-gray">AI Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-womancare-dark mb-6">
              Why Choose <span className="bg-gradient-to-r from-womancare-pink to-purple-600 bg-clip-text text-transparent">WomanCare?</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-womancare-pink to-purple-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-womancare-gray max-w-4xl mx-auto leading-relaxed">
              Experience the future of women's healthcare with our cutting-edge technology and compassionate medical professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: MessageCircle,
                title: "AI Health Assistant",
                description: "Get instant, personalized health guidance powered by advanced AI technology, available 24/7 for your peace of mind.",
                color: "from-womancare-pink to-pink-400",
                bgColor: "pink-50",
                delay: "0s"
              },
              {
                icon: UserCheck,
                title: "Verified Specialists",
                description: "Connect with board-certified gynecologists who are thoroughly vetted for their expertise and compassionate care.",
                color: "from-womancare-blue to-blue-400",
                bgColor: "blue-50",
                delay: "0.2s"
              },
              {
                icon: Calendar,
                title: "Smart Booking",
                description: "Book appointments seamlessly with our intelligent scheduling system that adapts to your preferences and availability.",
                color: "from-womancare-green to-green-400",
                bgColor: "green-50",
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group text-center p-10 rounded-3xl bg-${feature.bgColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: feature.delay }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-womancare-dark mb-6 group-hover:text-womancare-pink transition-colors">
                  {feature.title}
                </h3>
                <p className="text-womancare-gray leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-r from-womancare-light to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-womancare-dark mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-womancare-gray">Real results from real women across the country</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Verified Doctors", icon: UserCheck, color: "womancare-pink" },
              { number: "10K+", label: "Happy Patients", icon: Heart, color: "womancare-blue" },
              { number: "24/7", label: "AI Support", icon: Clock, color: "womancare-green" },
              { number: "4.9★", label: "Average Rating", icon: Star, color: "womancare-amber" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-5xl font-bold text-${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-womancare-gray text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-womancare-dark mb-6">What Our Patients Say</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-womancare-pink to-purple-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Working Mother",
                content: "WomanCare's AI assistant helped me understand my symptoms before my appointment. The booking process was seamless!",
                rating: 5
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Healthcare Professional",
                content: "As a doctor myself, I appreciate the quality of specialists on this platform. Highly recommended for women's health.",
                rating: 5
              },
              {
                name: "Maya Patel",
                role: "College Student",
                content: "The 24/7 chat support gave me peace of mind during late-night health concerns. Truly life-changing service.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-womancare-amber fill-current" />
                  ))}
                </div>
                <p className="text-womancare-gray mb-6 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-womancare-pink to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-womancare-dark">{testimonial.name}</p>
                    <p className="text-sm text-womancare-gray">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-womancare-pink via-purple-600 to-blue-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full"></div>
          <Heart className="absolute top-1/3 left-1/4 w-8 h-8 text-white/10" />
          <Sparkles className="absolute bottom-1/3 right-1/4 w-12 h-12 text-white/10" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Take Control of 
            <span className="block">Your Health Journey?</span>
          </h2>
          <p className="text-xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of women who trust WomanCare for their health needs. 
            Start with our AI assistant or book directly with a specialist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/signup" className="group">
              <Button className="bg-white text-womancare-pink hover:bg-gray-100 px-10 py-6 text-lg h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 group-hover:shadow-white/25">
                <Heart className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/doctors" className="group">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-womancare-pink px-10 py-6 text-lg h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <UserCheck className="w-6 h-6 mr-3" />
                Browse Specialists
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-2 text-pink-100">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-100">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-100">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-womancare-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-womancare-pink to-purple-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-womancare-green rounded-full"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">WomanCare</span>
                  <p className="text-gray-400 text-sm">Empowering Women's Health</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Revolutionizing women's healthcare through AI-powered assistance and verified medical professionals. 
                Your health, our priority.
              </p>
              <div className="flex space-x-4 mt-6">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Find Doctors', 'AI Assistant', 'Book Appointment', 'Health Resources'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {['Help Center', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 WomanCare. Empowering women's health with technology.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Serving patients nationwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
