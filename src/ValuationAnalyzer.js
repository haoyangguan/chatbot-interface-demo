import React, { useState } from 'react';
import { ChevronDown, Star, Send } from 'lucide-react';

const ValuationAnalyzer = () => {
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', content: 'Hello, I am an AI ChatBot. How can I assist you?' },
    { role: 'user', content: 'I want to know the value of my drug' },
    { role: 'bot', content: 'Which type of patient are you target to treat with this drug?' },
    { role: 'user', content: 'Early stage HER2+ breast cancer' },
    { role: 'bot', content: 'Congratulations on targeting at such important patient group. Here is the Chinese patient population projection in the next few years.' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatHistory([...chatHistory, { role: 'user', content: inputMessage }]);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">Valuation Analyzer</h1>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white p-4 shadow">
          <button className="mb-2 w-full text-left p-2 hover:bg-gray-100 rounded">Country</button>
          <button className="mb-2 w-full text-left p-2 hover:bg-gray-100 rounded">Therapeutic Area</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Valuation Walk-through</button>
        </aside>
        
        <main className="flex-1 p-4 overflow-auto flex flex-col">
          <div className="bg-white rounded-lg shadow p-4 mb-4 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="mr-2">Open AI</span>
                <ChevronDown size={20} />
              </div>
              <div className="flex items-center">
                <span className="mr-2">English</span>
                <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <Star className="ml-2" size={20} />
              </div>
            </div>
            
            <div className="space-y-4 flex-1 overflow-auto">
              {chatHistory.map((message, index) => (
                <div key={index} className={`p-2 rounded-lg ${message.role === 'bot' ? 'bg-gray-200' : 'bg-blue-100 ml-auto'}`}>
                  {message.content}
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <img src="/api/placeholder/600/300" alt="Chart placeholder" className="w-full rounded" />
            </div>
            
            <div className="mt-4 bg-gray-200 p-2 rounded">
              To learn more about the value of your drug in this market, please go to the valuation walk-through
            </div>

            <div className="mt-4 flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </main>
        
        <aside className="w-64 bg-white p-4 shadow">
          <div className="flex justify-between items-center mb-4">
            <span>Chat history</span>
            <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded">New Chat</button>
          <div className="mt-4">
            <p className="text-gray-600">Multiple Myeloma Treatments</p>
            <p className="text-xs text-gray-400">Today</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ValuationAnalyzer;
