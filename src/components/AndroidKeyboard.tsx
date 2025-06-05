import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from './ui/button'
import { Send, Mic, Camera, Smile } from 'lucide-react'
import { hapticFeedback } from '../utils/android-utils'

interface AndroidKeyboardProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  isVisible: boolean
}

export function AndroidKeyboard({ value, onChange, onSend, isVisible }: AndroidKeyboardProps) {
  const [showEmoji, setShowEmoji] = useState(false)

  const suggestions = [
    "Build a todo app",
    "Create a landing page", 
    "Design a dashboard",
    "Make a chat bot"
  ]

  const handleSuggestionClick = (suggestion: string) => {
    hapticFeedback.light()
    onChange(suggestion)
  }

  const handleSend = () => {
    hapticFeedback.medium()
    onSend()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50 lg:hidden"
        >
          {/* Suggestions */}
          <div className="p-3 border-b border-gray-800">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {suggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex-shrink-0 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3">
            <div className="flex items-end gap-2">
              {/* Text Input */}
              <div className="flex-1 bg-gray-800 rounded-lg border border-gray-700">
                <textarea
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="Message Blink AI..."
                  className="w-full p-3 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none max-h-32"
                  rows={1}
                  style={{ minHeight: '44px' }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 text-gray-400 hover:text-white"
                  onClick={() => {
                    hapticFeedback.light()
                    setShowEmoji(!showEmoji)
                  }}
                >
                  <Smile className="w-5 h-5" />
                </Button>
                
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 text-gray-400 hover:text-white"
                  onClick={() => hapticFeedback.light()}
                >
                  <Camera className="w-5 h-5" />
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 text-gray-400 hover:text-white"
                  onClick={() => hapticFeedback.light()}
                >
                  <Mic className="w-5 h-5" />
                </Button>

                {value.trim() && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Button
                      size="sm"
                      onClick={handleSend}
                      className="p-2 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Emoji Picker Placeholder */}
          <AnimatePresence>
            {showEmoji && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 200 }}
                exit={{ height: 0 }}
                className="bg-gray-800 border-t border-gray-700 overflow-hidden"
              >
                <div className="p-4 text-center text-gray-400">
                  Emoji picker would go here
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}