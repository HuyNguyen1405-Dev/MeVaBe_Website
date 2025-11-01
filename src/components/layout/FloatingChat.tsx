"use client";
import { useState } from "react";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function FloatingChat() {
  const [isExpanded, setIsExpanded] = useState(false);

  const chatOptions = [
    {
      id: "phone",
      label: "Gọi điện",
      icon: PhoneIcon,
      href: "tel:0123456789",
      className: "bg-green-500 hover:bg-green-600 text-white",
      description: "Gọi ngay 0123.456.789",
    },
    {
      id: "messenger",
      label: "Messenger",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.262 2 11.5c0 2.847 1.277 5.44 3.5 7.324V22l3.176-1.588C9.746 20.812 10.85 21 12 21c5.514 0 10-4.262 10-9.5S17.514 2 12 2zm1 13l-2.5-2.5L6 15l5.5-6L14 11.5 18.5 9 13 15z" />
        </svg>
      ),
      href: "https://m.me/your-page",
      className: "bg-blue-600 hover:bg-blue-700 text-white",
      description: "Chat qua Messenger",
    },
    {
      id: "zalo",
      label: "Zalo",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.662 1.444 5.173L2 22l4.827-1.444A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.811 13.811c-.478.478-1.253.478-1.731 0l-2.08-2.08-2.08 2.08c-.478.478-1.253.478-1.731 0s-.478-1.253 0-1.731l2.08-2.08-2.08-2.08c-.478-.478-.478-1.253 0-1.731s1.253-.478 1.731 0l2.08 2.08 2.08-2.08c.478-.478 1.253-.478 1.731 0s.478 1.253 0 1.731l-2.08 2.08 2.08 2.08c.478.478.478 1.253 0 1.731z" />
        </svg>
      ),
      href: "https://zalo.me/0123456789",
      className: "bg-blue-500 hover:bg-blue-600 text-white",
      description: "Chat qua Zalo",
    },
    {
      id: "chat",
      label: "Live Chat",
      icon: ChatBubbleLeftRightIcon,
      href: "#",
      className: "bg-[#0BA6DF] hover:bg-blue-600 text-white",
      description: "Chat trực tuyến với tư vấn viên",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Chat Options */}
      {isExpanded && (
        <div className="flex flex-col space-y-3 animate-in slide-in-from-bottom duration-300">
          {chatOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    {option.description}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>

                <a
                  href={option.href}
                  className={`${option.className} w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl animate-in slide-in-from-right`}
                  title={option.description}
                  target={option.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    option.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              </div>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 bg-gradient-to-r from-[#0BA6DF] to-blue-500 hover:from-blue-500 hover:to-[#0BA6DF] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
          isExpanded ? "rotate-180" : "animate-pulse"
        }`}
        title={isExpanded ? "Đóng menu hỗ trợ" : "Liên hệ hỗ trợ"}
        aria-label={isExpanded ? "Đóng menu hỗ trợ" : "Mở menu hỗ trợ"}
      >
        {isExpanded ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <div className="relative">
            <ChatBubbleLeftRightIcon className="w-8 h-8" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        )}
      </button>

      {/* Notification Badge */}
      {!isExpanded && (
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold animate-bounce">
          !
        </div>
      )}
    </div>
  );
}
