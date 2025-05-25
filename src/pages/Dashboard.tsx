
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  MessageCircle, 
  User, 
  Clock, 
  Heart, 
  Activity, 
  Bell,
  FileText,
  Video,
  Plus,
  ArrowRight,
  Star,
  Phone,
  MapPin,
  CheckCircle,
  TrendingUp,
  Users,
  Shield
} from 'lucide-react';
import Header from '@/components/Layout/Header';

const Dashboard = () => {
  const [userName] = useState('Sarah'); // In real app, this would come from auth context
  
  // Mock data for demonstration
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Priya Sharma',
      specialty: 'Gynecologist',
      date: 'Today',
      time: '3:00 PM',
      type: 'Video Consultation',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Anjali Gupta',
      specialty: 'Reproductive Endocrinologist',
      date: 'Tomorrow',
      time: '10:30 AM',
      type: 'In-person',
      status: 'confirmed'
    }
  ];

  const recentChats = [
    {
      id: 1,
      topic: 'Menstrual cycle concerns',
      date: '2 hours ago',
      severity: 'low',
      resolved: true
    },
    {
      id: 2,
      topic: 'Birth control options',
      date: 'Yesterday',
      severity: 'medium',
      resolved: false
    }
  ];

  const healthStats = {
    cycleDay: 14,
    nextPeriod: '12 days',
    healthScore: 85,
    symptomsLogged: 23
  };

  const quickActions = [
    {
      title: 'Start AI Chat',
      description: 'Get instant health guidance',
      icon: MessageCircle,
      color: 'bg-blue-500',
      link: '/chat'
    },
    {
      title: 'Find Doctors',
      description: 'Book with specialists',
      icon: User,
      color: 'bg-green-500',
      link: '/doctors'
    },
    {
      title: 'Health Journal',
      description: 'Log symptoms & cycle',
      icon: FileText,
      color: 'bg-purple-500',
      link: '/health-journal'
    },
    {
      title: 'Video Consult',
      description: 'Premium feature',
      icon: Video,
      color: 'bg-pink-500',
      link: '/video-consult'
    }
  ];

  const healthTips = [
    'Stay hydrated - aim for 8 glasses of water daily',
    'Regular exercise can help reduce menstrual cramps',
    'Maintain a balanced diet rich in iron and calcium',
    'Practice stress management techniques like meditation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-womancare-dark">
                Welcome back, <span className="text-womancare-pink">{userName}!</span>
              </h1>
              <p className="text-womancare-gray text-lg mt-2">
                Here's your health overview for today
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Badge variant="outline" className="px-4 py-2 text-sm border-green-200 text-green-700 bg-green-50">
                <CheckCircle className="w-4 h-4 mr-2" />
                All systems healthy
              </Badge>
            </div>
          </div>
        </div>

        {/* Health Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100 text-sm">Cycle Day</p>
                  <p className="text-3xl font-bold">{healthStats.cycleDay}</p>
                </div>
                <Heart className="w-8 h-8 text-pink-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Next Period</p>
                  <p className="text-3xl font-bold">{healthStats.nextPeriod}</p>
                </div>
                <Calendar className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Health Score</p>
                  <p className="text-3xl font-bold">{healthStats.healthScore}%</p>
                </div>
                <Activity className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Symptoms Logged</p>
                  <p className="text-3xl font-bold">{healthStats.symptomsLogged}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-womancare-dark mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link} className="group">
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-womancare-dark mb-2">{action.title}</h3>
                    <p className="text-sm text-womancare-gray">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Upcoming Appointments */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-womancare-blue" />
                  Upcoming Appointments
                </CardTitle>
                <Link to="/appointments">
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-womancare-pink to-purple-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-womancare-dark">{appointment.doctor}</p>
                      <p className="text-sm text-womancare-gray">{appointment.specialty}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {appointment.type === 'Video Consultation' ? (
                            <Video className="w-3 h-3 mr-1" />
                          ) : (
                            <MapPin className="w-3 h-3 mr-1" />
                          )}
                          {appointment.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-womancare-dark">{appointment.date}</p>
                    <p className="text-sm text-womancare-gray">{appointment.time}</p>
                    <Badge className="mt-1 bg-green-100 text-green-700">
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-womancare-pink hover:bg-pink-600">
                <Plus className="w-4 h-4 mr-2" />
                Book New Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Recent Chat History */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-womancare-blue" />
                  Recent Conversations
                </CardTitle>
                <Link to="/chat">
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentChats.map((chat) => (
                <div key={chat.id} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-womancare-dark">{chat.topic}</h4>
                    <Badge 
                      variant="outline" 
                      className={`
                        ${chat.severity === 'low' ? 'border-green-200 text-green-700 bg-green-50' : ''}
                        ${chat.severity === 'medium' ? 'border-yellow-200 text-yellow-700 bg-yellow-50' : ''}
                        ${chat.severity === 'high' ? 'border-red-200 text-red-700 bg-red-50' : ''}
                      `}
                    >
                      {chat.severity} priority
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-womancare-gray">{chat.date}</p>
                    <div className="flex items-center space-x-2">
                      {chat.resolved ? (
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Resolved
                        </Badge>
                      ) : (
                        <Badge variant="outline">In Progress</Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-womancare-blue text-womancare-blue hover:bg-womancare-blue hover:text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start New Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Health Tips & Insights */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-womancare-pink" />
                Personalized Health Tips
              </CardTitle>
              <CardDescription>
                Based on your health profile and recent activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-pink-50 rounded-lg">
                    <div className="w-6 h-6 bg-womancare-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-womancare-gray">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-purple-600" />
                Health Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Overall Health</span>
                  <span className="text-sm text-womancare-gray">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Cycle Tracking</span>
                  <span className="text-sm text-womancare-gray">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Symptom Logging</span>
                  <span className="text-sm text-womancare-gray">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <Button variant="outline" className="w-full mt-4">
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium Features Showcase */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Upgrade to WomanCare Premium</h2>
                <p className="text-purple-100 text-lg mb-6">
                  Unlock advanced features including video consultations, unlimited AI chat, 
                  personalized health insights, and priority booking with specialists.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Video className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Video Consultations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Unlimited AI Chat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Priority Booking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Advanced Privacy</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 text-center lg:text-right">
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-purple-100 text-sm mb-2">Starting at</p>
                  <p className="text-4xl font-bold mb-4">₹999<span className="text-lg font-normal">/month</span></p>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 w-full">
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
