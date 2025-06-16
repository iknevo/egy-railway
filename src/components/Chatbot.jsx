import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoIosSend, IoMdTrash } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import { useQueryMutation } from "../lib/useQueryMutation";

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);
  const messagesEndRef = useRef(null);
  const { mutate: sendMessage, isPending } = useQueryMutation("query");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    setIsTyping(isPending);
  }, [isPending]);

  const handleRetry = () => {
    if (!lastMessage) return;
    setError(null);
    setIsTyping(true);
    const messageSent = {
      question: lastMessage,
    };
    sendMessage(messageSent, {
      onSuccess: (data) => {
        if (!data?.data?.answer) {
          throw new Error("Invalid response from server");
        }
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: data.data.answer,
          },
        ]);
        setLastMessage(null);
      },
      onError: (error) => {
        console.error("Chat error:", error);
        setError(error.message);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content:
              "I apologize, but I'm having trouble processing your request. Please try again later.",
          },
        ]);
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim().length) {
      toast.error("Please enter a message");
      return;
    }

    setError(null);
    setMessages((prev) => [...prev, { type: "user", content: inputValue }]);
    setLastMessage(inputValue);
    setInputValue("");
    setIsTyping(true);
    const messageSent = {
      question: inputValue,
    };
    sendMessage(messageSent, {
      onSuccess: (data) => {
        if (!data?.data?.answer) {
          throw new Error("Invalid response from server");
        }
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: data.data.answer,
          },
        ]);
        setLastMessage(null);
      },
      onError: (error) => {
        console.error("Chat error:", error);
        setError(error.message);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content:
              "I apologize, but I'm having trouble processing your request. Please try again later.",
          },
        ]);
      },
    });
  };

  const handleClearChat = () => {
    setMessages([
      {
        type: "bot",
        content: "Hello! How can I help you today?",
      },
    ]);
    setError(null);
    setLastMessage(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed right-4 bottom-4 z-50 w-96 rounded-xl bg-white shadow-2xl"
        >
          {/* Chat header */}
          <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white/20 p-2">
                <RiRobot2Fill className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  EgyRailway bot
                </h3>
                <p className="text-sm text-white/80">I'm here to help</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleClearChat}
                className="cursor-pointer rounded-full p-1 text-white hover:bg-white/20"
                title="Clear chat"
              >
                <IoMdTrash className="h-5 w-5" />
              </button>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-full p-1 text-white hover:bg-white/20"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] rounded-full bg-gray-100 p-3">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col space-y-2"
                >
                  <div className="max-w-[80%] rounded-lg bg-red-100 px-4 py-2 text-center text-red-600">
                    {error}
                  </div>
                  {lastMessage && (
                    <button
                      onClick={handleRetry}
                      className="max-w-[80%] cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm text-white hover:opacity-90"
                    >
                      Try Again
                    </button>
                  )}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 p-4"
          >
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                disabled={isPending}
              />
              <button
                type="submit"
                disabled={isPending}
                className={`cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white hover:opacity-90 ${
                  isPending ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                <IoIosSend className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
