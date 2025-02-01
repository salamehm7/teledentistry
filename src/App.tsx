import React from 'react';
import { Clock, Pill, Phone, Shield, MessageSquare, CreditCard, Video, Star, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - Redesigned with split layout */}
      <div className="relative min-h-[700px] bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 h-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-purple-700/30 rounded-full mb-6">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Available 24/7 for Emergencies</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Virtual Dental Care When You Need It Most</h1>
              <p className="text-xl mb-8 text-purple-100">Instant access to licensed dentists via secure video calls. Get prescriptions and relief from dental pain, anytime.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                  Start Video Consultation
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80" 
                alt="Person experiencing severe tooth pain"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Call Feature Section */}
      <div className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80" 
                  alt="Person holding jaw in pain"
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white">
                      <p className="font-semibold">Live Consultation</p>
                      <p className="text-sm opacity-80">HD Video • Secure • Private</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Advanced Video Consultations</h2>
              <p className="text-gray-600 mb-8">Connect with licensed dentists through our secure, HD video platform. Get professional evaluations, prescriptions, and treatment plans from the comfort of your home.</p>
              <div className="space-y-4">
                <Feature 
                  icon={<Shield className="w-5 h-5 text-purple-600" />}
                  title="HIPAA Compliant"
                  description="Secure, encrypted video calls ensuring your privacy"
                />
                <Feature 
                  icon={<Star className="w-5 h-5 text-purple-600" />}
                  title="HD Quality"
                  description="Crystal clear video and audio for accurate diagnoses"
                />
                <Feature 
                  icon={<Users className="w-5 h-5 text-purple-600" />}
                  title="Multi-party Calls"
                  description="Include family members or specialists when needed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid - Redesigned */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Emergency Care</h2>
            <p className="text-gray-600">Get immediate relief with our complete virtual dental care solution</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-purple-600" />}
              title="24/7 Availability"
              description="Access professional dental care anytime, day or night. We're always here when you need us."
            />
            <FeatureCard 
              icon={<Pill className="w-8 h-8 text-purple-600" />}
              title="Prescription Services"
              description="Get necessary prescriptions for antibiotics and pain medication when appropriate."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-purple-600" />}
              title="Licensed Professionals"
              description="Connect with qualified dentists who are licensed to practice in your state."
            />
          </div>
        </div>
      </div>

      {/* Process Steps - Redesigned */}
      <div className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Start Your Virtual Visit</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Step 
              number="1"
              title="Request a Video Call"
              description="Connect with an available dentist within minutes through our secure platform."
              icon={<Video className="w-6 h-6 text-purple-600" />}
            />
            <Step 
              number="2"
              title="Virtual Assessment"
              description="Share symptoms and receive professional evaluation via HD video chat."
              icon={<MessageSquare className="w-6 h-6 text-purple-600" />}
            />
            <Step 
              number="3"
              title="Get Treatment"
              description="Receive prescriptions and care instructions immediately when needed."
              icon={<CreditCard className="w-6 h-6 text-purple-600" />}
            />
          </div>
        </div>
      </div>

      {/* CTA Section - Redesigned */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready for Your Virtual Consultation?</h2>
          <p className="text-xl text-purple-100 mb-8">Connect with a dentist now and get the care you need</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg">
              Start Video Call
            </button>
            <button className="bg-purple-800/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-800/40 transition-colors backdrop-blur-sm">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-purple-100 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
      <div className="p-3 bg-purple-50 rounded-xl w-fit mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Step({ number, title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
        {icon}
      </div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;