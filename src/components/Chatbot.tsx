import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MapPin, Clock, Phone, Utensils, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChatMessage } from '../types';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Welcome to Zaify's! How can I assist you today? Feel free to ask about our menu, location in Satellite Town, opening hours, or table reservations.",
      timestamp: 'Just now',
      quickReplies: ['Popular Dishes', 'Location', 'Opening Hours', 'Book a Table'],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (userQuery: string): ChatMessage => {
    const q = userQuery.toLowerCase().trim();

    // Opening Hours
    if (q.includes('hour') || q.includes('time') || q.includes('timing') || q.includes('open') || q.includes('close')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Zaify's is open daily from 12:00 PM to 1:00 AM (Monday to Sunday) for dine-in, takeaway, and delivery orders.`,
        timestamp: 'Just now',
        quickReplies: ['Popular Dishes', 'Location', 'Book a Table'],
      };
    }

    // Location / Address
    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('direction') || q.includes('map') || q.includes('rawalpindi') || q.includes('satellite town')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `We are conveniently located at 57-B, Commercial Market, Satellite Town, Rawalpindi, Pakistan.`,
        timestamp: 'Just now',
        actionLink: {
          label: 'Open in Google Maps',
          url: RESTAURANT_INFO.mapsUrl,
          isExternal: true,
        },
        quickReplies: ['Opening Hours', 'Phone Number', 'View Menu'],
      };
    }

    // Phone / Contact / WhatsApp
    if (q.includes('phone') || q.includes('contact') || q.includes('number') || q.includes('call') || q.includes('whatsapp') || q.includes('email')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `You can reach Zaify's directly at:\n• Phone: 0300-6165529\n• Email: zaifysrestaurant@gmail.com\n• WhatsApp: 0300-6165529`,
        timestamp: 'Just now',
        actionLink: {
          label: 'Call 0300-6165529 Now',
          url: `tel:${RESTAURANT_INFO.phoneRaw}`,
        },
        quickReplies: ['Book a Table', 'Popular Dishes'],
      };
    }

    // Menu / Food / Dishes / Price
    if (q.includes('menu') || q.includes('dish') || q.includes('food') || q.includes('popular') || q.includes('karahi') || q.includes('bbq') || q.includes('biryani') || q.includes('handi') || q.includes('price')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Our most popular specialties include:\n• Desi Murgh Karahi (Rs. 1,650)\n• Zaify's Special Makhni Handi (Rs. 1,750)\n• Chicken Malai Boti (Rs. 1,050)\n• Reshmi Seekh Kabab (Rs. 950)\n• Zaify's Special Dum Biryani (Rs. 890)\n• Mint Margarita (Rs. 380)\n\nAll prepared fresh to order!`,
        timestamp: 'Just now',
        actionLink: {
          label: 'Jump to Menu Section',
          url: '#menu',
        },
        quickReplies: ['Book a Table', 'Location', 'Opening Hours'],
      };
    }

    // Table Reservation / Booking
    if (q.includes('book') || q.includes('table') || q.includes('reservation') || q.includes('seat') || q.includes('reserve')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `We'd love to host you! For instant table bookings or family arrangements, you can click below to connect with our manager directly on WhatsApp or call 0300-6165529.`,
        timestamp: 'Just now',
        actionLink: {
          label: 'Reserve via WhatsApp',
          url: RESTAURANT_INFO.whatsappUrl,
          isExternal: true,
        },
        quickReplies: ['Location', 'Opening Hours', 'Popular Dishes'],
      };
    }

    // Default polite response
    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: `Thank you for asking! We are located at 57-B, Commercial Market, Satellite Town, Rawalpindi. For immediate assistance or orders, please call 0300-6165529 or tap below.`,
      timestamp: 'Just now',
      actionLink: {
        label: 'Chat on WhatsApp',
        url: RESTAURANT_INFO.whatsappUrl,
        isExternal: true,
      },
      quickReplies: ['Popular Dishes', 'Location', 'Opening Hours', 'Book a Table'],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Instant lightweight reply
    setTimeout(() => {
      const botResponse = generateBotReply(query);
      setMessages((prev) => [...prev, botResponse]);
    }, 300);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          id="chatbot-open-btn"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#B85D19] hover:bg-[#9E4D12] text-white px-4 py-3 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 group cursor-pointer"
          aria-label="Open Zaify's Assistant Chatbot"
        >
          <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="text-xs sm:text-sm font-semibold pr-1">Chat with Zaify's</span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="bg-white rounded-2xl border border-[#E8E1D7] shadow-xl w-[90vw] sm:w-96 max-h-[500px] flex flex-col overflow-hidden animate-in fade-in duration-200"
        >
          {/* Header */}
          <div className="bg-[#FAF8F5] border-b border-[#EDE5DC] p-3.5 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B85D19] text-white flex items-center justify-center font-serif-display font-bold text-sm">
                Z
              </div>
              <div>
                <h4 className="font-serif-display text-sm font-bold text-[#2A2724] leading-tight">
                  Zaify's Assistant
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#2E7D32]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse"></span>
                  <span>Online • Quick Help</span>
                </div>
              </div>
            </div>

            <button
              id="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#665E56] hover:text-[#2A2724] hover:bg-[#EFE8DE] transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Info Ribbon */}
          <div className="bg-[#F6F2EC] px-3 py-1.5 border-b border-[#EAE2D7] text-[11px] text-[#59524A] flex justify-between">
            <span>📍 Satellite Town, Rawalpindi</span>
            <span className="font-semibold text-[#8C3B14]">📞 0300-6165529</span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#FAF8F5]/50 text-xs sm:text-sm max-h-72">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed whitespace-pre-line shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-[#B85D19] text-white'
                      : 'bg-white text-[#2D2A26] border border-[#E8E1D7]'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Optional Action Button */}
                {msg.actionLink && (
                  <a
                    href={msg.actionLink.url}
                    target={msg.actionLink.isExternal ? '_blank' : undefined}
                    rel={msg.actionLink.isExternal ? 'noopener noreferrer' : undefined}
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#8C3B14] hover:underline bg-[#F5EFEB] px-2.5 py-1 rounded-md border border-[#E2D8CC]"
                  >
                    <span>{msg.actionLink.label}</span>
                  </a>
                )}

                {/* Quick replies for bot messages */}
                {msg.quickReplies && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(reply)}
                        className="text-[11px] bg-white hover:bg-[#F2ECE4] text-[#4A443E] border border-[#DDD4C7] px-2.5 py-1 rounded-full transition-colors font-medium shadow-2xs cursor-pointer"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-[#EDE5DC] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about menu, hours, directions..."
              className="flex-1 px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D9D0C3] rounded-xl focus:outline-hidden focus:border-[#B85D19] text-[#2A2724]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-[#B85D19] text-white rounded-xl hover:bg-[#9E4D12] disabled:opacity-50 transition-all cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
