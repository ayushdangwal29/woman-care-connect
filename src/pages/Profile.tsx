
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { User, Calendar, MessageCircle, Bell, Shield, CreditCard, Save } from 'lucide-react';
import Header from '@/components/Layout/Header';
import { toast } from 'sonner';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    dateOfBirth: '1990-05-15',
    phone: '+1 (555) 123-4567'
  });

  const [preferences, setPreferences] = useState({
    showAllAIModels: true,
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true
  });

  const sidebarItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'history', label: 'Medical History', icon: Calendar },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'chat', label: 'Chat Settings', icon: MessageCircle },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard }
  ];

  const handleSaveProfile = () => {
    console.log('Saving profile:', profileData);
    toast.success('Profile updated successfully!');
  };

  const handleSavePreferences = () => {
    console.log('Saving preferences:', preferences);
    toast.success('Preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-womancare-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-womancare-dark">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-womancare-gray">{profileData.email}</p>
              </div>
              
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-womancare-pink text-white'
                        : 'text-womancare-gray hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-womancare-dark mb-2">Profile Information</h2>
                    <p className="text-womancare-gray">Update your personal details and preferences</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={(e) => setProfileData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleSaveProfile} className="bg-womancare-pink hover:bg-pink-600 text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Update Profile
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Chat Settings Tab */}
              {activeTab === 'chat' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-womancare-dark mb-2">AI Assistant Preferences</h2>
                    <p className="text-womancare-gray">Customize your chat experience</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div>
                        <h3 className="font-medium text-womancare-dark">Show all AI models in chat</h3>
                        <p className="text-sm text-womancare-gray">Display ChatGPT, Gemini, and Grok model labels</p>
                      </div>
                      <Switch
                        checked={preferences.showAllAIModels}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, showAllAIModels: checked }))
                        }
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleSavePreferences} className="bg-womancare-blue hover:bg-blue-600 text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save Preferences
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Appointments Tab */}
              {activeTab === 'appointments' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-womancare-dark mb-2">My Appointments</h2>
                    <p className="text-womancare-gray">View and manage your upcoming appointments</p>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-womancare-dark">Dr. Priya Sharma</h3>
                          <p className="text-womancare-pink">Gynecologist & Obstetrician</p>
                          <p className="text-sm text-womancare-gray mt-2">
                            Tomorrow, March 15, 2024 at 10:30 AM
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            Confirmed
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-womancare-dark">Dr. Anjali Mehta</h3>
                          <p className="text-womancare-pink">Reproductive Endocrinologist</p>
                          <p className="text-sm text-womancare-gray mt-2">
                            March 22, 2024 at 2:00 PM
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            Upcoming
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Medical History Tab */}
              {activeTab === 'history' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-womancare-dark mb-2">Medical History</h2>
                    <p className="text-womancare-gray">Your health records and consultation history</p>
                  </div>

                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-womancare-gray">No medical history available yet.</p>
                    <p className="text-sm text-womancare-gray mt-2">
                      Your consultation records will appear here after your first appointment.
                    </p>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-womancare-dark mb-2">Notification Preferences</h2>
                    <p className="text-womancare-gray">Manage how you receive updates and reminders</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div>
                        <h3 className="font-medium text-womancare-dark">Email Notifications</h3>
                        <p className="text-sm text-womancare-gray">Receive updates via email</p>
                      </div>
                      <Switch
                        checked={preferences.emailNotifications}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, emailNotifications: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div>
                        <h3 className="font-medium text-womancare-dark">SMS Notifications</h3>
                        <p className="text-sm text-womancare-gray">Receive updates via text message</p>
                      </div>
                      <Switch
                        checked={preferences.smsNotifications}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, smsNotifications: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div>
                        <h3 className="font-medium text-womancare-dark">Appointment Reminders</h3>
                        <p className="text-sm text-womancare-gray">Get reminded about upcoming appointments</p>
                      </div>
                      <Switch
                        checked={preferences.appointmentReminders}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, appointmentReminders: checked }))
                        }
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleSavePreferences} className="bg-womancare-blue hover:bg-blue-600 text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save Preferences
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-womancare-dark mb-2">Security Settings</h2>
                    <p className="text-womancare-gray">Manage your account security</p>
                  </div>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="font-medium text-womancare-dark mb-2">Change Password</h3>
                      <p className="text-sm text-womancare-gray mb-4">Update your account password</p>
                      <Button variant="outline">Change Password</Button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="font-medium text-womancare-dark mb-2">Two-Factor Authentication</h3>
                      <p className="text-sm text-womancare-gray mb-4">Add an extra layer of security to your account</p>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-womancare-dark mb-2">Billing & Payments</h2>
                    <p className="text-womancare-gray">Manage your payment methods and billing history</p>
                  </div>

                  <div className="text-center py-12">
                    <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-womancare-gray">No payment methods added yet.</p>
                    <Button className="mt-4 bg-womancare-blue hover:bg-blue-600 text-white">
                      Add Payment Method
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
