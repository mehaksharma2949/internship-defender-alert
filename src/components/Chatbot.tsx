
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m InternShield AI. I can help you with internship scam detection. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Scam detection responses
    if (lowerMessage.includes('scam') || lowerMessage.includes('fake')) {
      return 'To identify scam internships, watch for: 1) Upfront payment requests 2) Personal email domains 3) Unrealistic salary promises 4) Poor grammar in communications. Would you like me to analyze a specific internship posting?';
    }
    
    // Payment related
    if (lowerMessage.includes('payment') || lowerMessage.includes('fee') || lowerMessage.includes('money')) {
      return 'Never pay money upfront for an internship! Legitimate companies don\'t charge registration fees. This is a major red flag and likely indicates a scam.';
    }
    
    // Email verification
    if (lowerMessage.includes('email') || lowerMessage.includes('gmail') || lowerMessage.includes('verify')) {
      return 'Be cautious if companies use personal email domains like Gmail or Yahoo. Legitimate companies use their own domain emails (e.g., recruiter@companyname.com).';
    }
    
    // Company verification
    if (lowerMessage.includes('company') || lowerMessage.includes('verify') || lowerMessage.includes('check')) {
      return 'To verify a company: 1) Check their official website 2) Look up company registration details 3) Search for reviews on Glassdoor 4) Verify their LinkedIn presence 5) Check if the job posting matches their actual business.';
    }
    
    // General help
    if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return 'I can help you with: 1) Identifying internship scams 2) Understanding red flags 3) Company verification tips 4) Analyzing suspicious job postings. What specific area would you like guidance on?';
    }
    
    // Default response
    return 'I understand. Could you provide more details about the internship you\'re concerned about? I can help analyze it for potential red flags.';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full w-14 h-14 shadow-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">
          <Card className="h-full flex flex-col shadow-2xl border-primary-200">
            <CardHeader className="bg-primary-600 text-white rounded-t-lg flex-shrink-0 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  InternShield AI
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-primary-700 p-1 h-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-primary-100 text-sm">Scam Detection Assistant</p>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <div className="text-sm">{message.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t p-4 flex-shrink-0">
                <div className="flex gap-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-primary-600 hover:bg-primary-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
