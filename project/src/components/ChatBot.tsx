import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Danilo's assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Danilo will get back to you soon.",
        isBot: true
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-[calc(100vw-2rem)] sm:w-80 h-96 flex flex-col">
          <div className="p-3 sm:p-4 bg-gray-50 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold text-black text-sm sm:text-base">Chat with DV-web</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 text-xl">
              ×
            </button>
          </div>
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-3 sm:mb-4 ${msg.isBot ? 'text-left' : 'text-right'}`}>
                <div className={`inline-block p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                  msg.isBot ? 'bg-gray-100 text-black' : 'bg-black text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 sm:p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black text-sm sm:text-base"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-black text-white rounded-lg hover:bg-gray-900"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-gray-900 transition-colors"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;