import { motion } from 'framer-motion'
import { MessageSquare, Settings, History, Plus } from 'lucide-react'
import { hapticFeedback } from '../utils/android-utils'

interface AndroidBottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function AndroidBottomNavigation({ activeTab, onTabChange }: AndroidBottomNavigationProps) {
  const tabs = [
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'new', icon: Plus, label: 'New' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ]

  const handleTabChange = (tabId: string) => {
    hapticFeedback.light()
    onTabChange(tabId)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-2 py-1 lg:hidden z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
              activeTab === tab.id 
                ? 'text-blue-400 bg-blue-400/10' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                layoutId="activeIndicator"
                style={{ x: '-50%' }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}