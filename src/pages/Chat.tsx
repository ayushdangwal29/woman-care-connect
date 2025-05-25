
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  severity?: 'low' | 'medium' | 'high';
  aiModel?: 'ChatGPT' | 'Gemini' | 'Grok';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your WomanCare AI assistant. I\'m here to help you with women\'s health questions and concerns. How can I assist you today?',
      timestamp: new Date(),
      severity: 'low',
      aiModel: 'ChatGPT'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case 'high':
        return { color: 'bg-red-500', text: 'High Priority' };
      case 'medium':
        return { color: 'bg-yellow-500', text: 'Medium Priority' };
      default:
        return { color: 'bg-green-500', text: 'Low Priority' };
    }
  };

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        {
          content: "I understand your concern. Based on what you've described, this seems like a common issue that many women experience. Here are some general recommendations:\n\n• Stay hydrated and maintain a balanced diet\n• Consider gentle exercise like walking\n• Track your symptoms in a diary\n\nHowever, I'd recommend consulting with a gynecologist for a proper evaluation.",
          severity: 'medium' as const,
          aiModel: 'ChatGPT' as const
        },
        {
          content: "Thank you for sharing this information. While I can provide general guidance, what you're describing might require professional medical attention. I recommend booking an appointment with one of our verified gynecologists for a thorough examination.\n\n**Would you like me to help you find a specialist?**",
          severity: 'high' as const,
          aiModel: 'Gemini' as const
        },
        {
          content: "That's a great question! Here's what current medical research suggests:\n\n• This is quite normal and affects many women\n• Lifestyle factors can play a significant role\n• Regular check-ups are important for monitoring\n\nI'm here to provide support, but remember that personalized medical advice should come from a healthcare professional.",
          severity: 'low' as const,
          aiModel: 'Grok' as const
        }
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'assistant',
        content: randomResponse.content,
        timestamp: new Date(),
        severity: randomResponse.severity,
        aiModel: randomResponse.aiModel
      }]);
      
      setIsTyping(false);
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    simulateAIResponse(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-5rem)]">
        <div className="bg-white rounded-2xl shadow-lg h-full flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-womancare-pink rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-womancare-dark">WomanCare Assistant</h2>
                <p className="text-sm text-womancare-gray">Your personal health companion</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  {message.type === 'assistant' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-medium text-womancare-gray">{message.aiModel}</span>
                      {message.severity && (
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${getSeverityConfig(message.severity).color}`}></div>
                          <span className="text-xs text-womancare-gray">{getSeverityConfig(message.severity).text}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div
                    className={`p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-womancare-pink text-white rounded-br-md'
                        : 'bg-gray-100 text-womancare-dark rounded-bl-md'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    
                    {message.type === 'assistant' && message.severity === 'high' && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link to="/doctors">
                          <Button className="bg-womancare-blue hover:bg-blue-600 text-white text-sm">
                            Book Doctor Appointment
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-xs text-womancare-gray mt-1 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'order-1 ml-3 bg-womancare-blue' : 'order-2 mr-3 bg-gray-300'}`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-gray-600" />
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="p-6 border-t border-gray-100">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your health question here... (max 1000 characters)"
                  maxLength={1000}
                  rows={3}
                  className="resize-none border-gray-200 focus:border-womancare-pink focus:ring-womancare-pink"
                />
                <div className="text-xs text-womancare-gray mt-1 text-right">
                  {inputValue.length}/1000
                </div>
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-womancare-pink hover:bg-pink-600 text-white h-12 px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
