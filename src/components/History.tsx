import { useState, useEffect } from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';

export default function History() {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: 'How to build a website',
      preview: 'Can you help me build a responsive website using React?',
      date: '2024-03-10',
    },
    {
      id: 2,
      title: 'JavaScript basics',
      preview: 'What are the fundamental concepts in JavaScript?',
      date: '2024-03-09',
    },
  ]);

  const deleteChat = (id) => {
    setChats((prev) => prev.filter((chat) => chat.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Chat History</h1>
      <div className="space-y-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-medium">{chat.title}</h3>
                <p className="text-sm text-gray-500">{chat.preview}</p>
                <p className="text-xs text-gray-400 mt-1">{chat.date}</p>
              </div>
            </div>
            <button
              onClick={() => deleteChat(chat.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}