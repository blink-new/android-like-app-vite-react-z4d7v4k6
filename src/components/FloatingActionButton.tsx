import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Sparkles, Plus, Mic } from 'lucide-react'

interface FloatingActionButtonProps {
  onAction: () => void
  hasPrompt: boolean
}

export function FloatingActionButton({ onAction, hasPrompt }: FloatingActionButtonProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          size="lg" 
          onClick={onAction}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl rounded-full h-14 w-14 p-0 border-2 border-blue-500/20"
        >
          {hasPrompt ? (
            <Sparkles className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </Button>
      </motion.div>
      
      {/* Voice input button */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={hasPrompt ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Button 
          size="sm" 
          variant="outline"
          className="bg-gray-900 border-gray-700 hover:bg-gray-800 text-white rounded-full h-10 w-10 p-0"
        >
          <Mic className="w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}