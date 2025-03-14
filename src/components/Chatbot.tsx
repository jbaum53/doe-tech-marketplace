import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your DOE Tech Assistant. I can help you find the right data visualization tool for your needs. What kind of data are you looking to visualize?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Predefined responses for the demo script
  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('budget') || lowerCaseMessage.includes('cost')) {
      return "Our visualization tools range in price. Tableau has a higher upfront cost but offers enterprise features. PowerBI has a subscription model that may be more cost-effective for smaller teams. sPARC is our in-house solution with no licensing fees but requires more technical expertise.";
    }
    
    if (lowerCaseMessage.includes('tableau')) {
      return "Tableau is excellent for creating interactive dashboards with minimal coding. It's user-friendly and has strong data connection capabilities. Would you like me to show you some Tableau examples?";
    }
    
    if (lowerCaseMessage.includes('powerbi')) {
      return "PowerBI integrates well with other Microsoft products and is great for organizations already using the Microsoft ecosystem. It has a lower learning curve than some alternatives. Would you like to know more about PowerBI's features?";
    }
    
    if (lowerCaseMessage.includes('sparc')) {
      return "sPARC is our custom-built solution that offers maximum flexibility for complex visualizations. It requires more technical knowledge but gives you complete control over your visualizations. Would you like to learn more about sPARC?";
    }
    
    if (lowerCaseMessage.includes('compare') || lowerCaseMessage.includes('difference')) {
      return "Tableau excels at interactive visualizations and is user-friendly but more expensive. PowerBI integrates well with Microsoft products and is more affordable. sPARC offers the most customization but requires more technical expertise. What aspects are most important for your project?";
    }
    
    if (lowerCaseMessage.includes('large') || lowerCaseMessage.includes('big data')) {
      return "For large datasets, Tableau and PowerBI both have good performance optimization. Tableau might have an edge with very large datasets. sPARC can be customized for specific performance needs. How large is your dataset approximately?";
    }
    
    if (lowerCaseMessage.includes('team') || lowerCaseMessage.includes('collaborate')) {
      return "For team collaboration, PowerBI integrates well with Microsoft Teams and SharePoint. Tableau has Tableau Server for sharing. sPARC can be integrated with your existing collaboration tools. How many team members will be working with the visualizations?";
    }
    
    if (lowerCaseMessage.includes('recommend') || lowerCaseMessage.includes('suggest') || lowerCaseMessage.includes('which')) {
      return "Based on our conversation, I'd recommend you take a look at PowerBI. It offers a good balance of features, ease of use, and cost-effectiveness. Would you like me to set up a demo or connect you with a PowerBI specialist?";
    }
    
    // Default response
    return "That's an interesting question about data visualization. Could you tell me more about your specific needs? For example, what kind of data are you working with, what's your technical expertise level, and do you have any budget constraints?";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-[80vw] h-[80vh] max-w-[800px] max-h-[800px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 z-50">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h3 className="font-semibold text-xl">DOE Tech Assistant</h3>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'
            }`}
          >
            <div
              className={`max-w-md md:max-w-xl rounded-lg px-5 py-3 text-base ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none px-4 py-2">
              <div className="flex space-x-1">
                <div className="bg-gray-500 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="bg-gray-500 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="bg-gray-500 rounded-full w-2 h-2 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="border-t border-gray-200 p-5 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-5 py-3 rounded-r-lg hover:bg-blue-700 transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
