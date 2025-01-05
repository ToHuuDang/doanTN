import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Chào bạn, Tôi là nhân viên tư vấn phòng trọ, bạn có câu hỏi gì?",
      sender: "bot",
      viewed: true,
      timestamp: new Date()
    },
  ])
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const newMessage = {
        id: Date.now(),
        text: input,
        sender: "user",
        viewed: false,
        timestamp: new Date()
      }
      setMessages(prevMessages => [...prevMessages, newMessage])
      sendMessage(newMessage.text)
      setInput("")
    }
  }
  
  const sendMessage = async (message) => {
    try {
      const res = await fetch('http://127.0.0.1:5000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()

      const newMessage = {
        id: Date.now(),
        text: data.reply,
        sender: "bot",
        viewed: false,
        timestamp: new Date()
      }
      setMessages(prevMessages => [...prevMessages, newMessage])
      setError("")
    } catch (e) {
      setError(`Error: ${e instanceof Error ? e.message : String(e)}`)
    }
  }

  return (
    <div className="tw-fixed tw-bottom-4 tw-right-4 tw-z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            className="tw-mb-4 tw-w-[380px] tw-rounded-2xl tw-bg-white tw-shadow-xl"
          >
            {/* Header */}
            <div className="tw-relative tw-flex tw-items-center tw-justify-between tw-border-b tw-p-4">
              <h2 className="tw-text-base tw-font-semibold tw-text-[#4263EB] tw-m-0">User Support Center</h2>
              <button
                className="tw-absolute tw-right-2 tw-top-2 tw-h-8 tw-w-8 tw-rounded-full tw-text-gray-500 tw-hover:tw-bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-5 tw-w-5 tw-mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="tw-h-[400px] tw-space-y-4 tw-overflow-y-auto tw-p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`tw-flex ${
                    message.sender === "user" ? "tw-justify-end" : "tw-justify-start"
                  }`}
                >
                  <div
                    className={`tw-max-w-[70%] tw-rounded-2xl tw-px-4 tw-py-2 ${
                      message.sender === "user"
                        ? "tw-bg-[#4263EB] tw-text-white"
                        : "tw-bg-gray-100"
                    }`}
                  >
                    {message.senderName && (
                      <div className="tw-mb-1 tw-text-sm tw-font-medium">
                        {message.senderName}
                      </div>
                    )}
                    <p className={`tw-text-sm tw-m-0 ${message.sender === "user" ? "tw-text-white" : "tw-text-black"}`}>
                      {message.text}
                    </p>
                    <div
                      className={`mt-1 tw-text-right tw-text-xs ${
                        message.sender === "user"
                          ? "tw-text-blue-100"
                          : "tw-text-gray-500"
                      }`}
                    >
                      {message.timestamp && (
                        <span>
                          {new Intl.DateTimeFormat('vi-VN', {
                            hour: '2-digit',
                            minute: '2-digit',
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          }).format(new Date(message.timestamp))}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="tw-border-t tw-p-4">
              <div className="tw-flex tw-items-center tw-gap-2">
                <button
                  type="button"
                  className="tw-h-8 tw-w-8 tw-shrink-0 tw-text-gray-500 tw-hover:tw-bg-gray-100 tw-rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-5 tw-w-5 tw-mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                  </svg>
                </button>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="tw-flex-grow tw-rounded-full tw-border tw-border-gray-200 tw-px-4 tw-py-2 tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500"
                />
                <button
                  type="submit"
                  className="tw-h-8 tw-w-8 tw-shrink-0 tw-rounded-full tw-bg-[#4263EB] tw-hover:tw-bg-[#3651BA] tw-text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-4 tw-w-4 tw-mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <div className="tw-flex tw-justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="tw-h-12 tw-w-12 tw-rounded-full tw-bg-[#4263EB] tw-hover:tw-bg-[#3651BA] tw-text-white"
        >
          <svg
            className="tw-h-6 tw-w-6 tw-mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}

