import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { AndroidStatusBar } from './components/AndroidStatusBar'
import { FolderOpen, GitBranch, Eye, EyeOff, Paperclip, Mic, ChevronDown, Download } from 'lucide-react'

function App() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState('OpenAI')
  const [selectedModel, setSelectedModel] = useState('x-ai/grok-2-vision-1212')
  const [apiKey, setApiKey] = useState('sk-••••••••')
  const [prompt, setPrompt] = useState('How can Bolt help you today?')

  const handleSendPrompt = () => {
    if (prompt.trim()) {
      console.log('Sending prompt:', prompt)
    }
  }

  const quickActions = [
    { icon: Download, label: "Import Chat", action: () => {} },
    { icon: FolderOpen, label: "Import Folder", action: () => {} },
    { icon: GitBranch, label: "Clone a Git Repo", action: () => {} }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Android Status Bar */}
      <AndroidStatusBar />
      
      {/* Main Content Container */}
      <div className="flex-1 max-w-2xl mx-auto w-full p-6 space-y-6">
        
        {/* Provider and Model Selection */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Select value={selectedProvider} onValueChange={setSelectedProvider}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:border-gray-600 transition-colors rounded-lg">
              <SelectValue placeholder="Select AI Provider" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 rounded-lg">
              <SelectItem value="OpenAI">OpenAI</SelectItem>
              <SelectItem value="OpenAILike">OpenAILike</SelectItem>
              <SelectItem value="Anthropic">Anthropic</SelectItem>
              <SelectItem value="Google">Google AI</SelectItem>
              <SelectItem value="XAI">X.AI</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white hover:border-gray-600 transition-colors rounded-lg">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 rounded-lg">
              <SelectItem value="x-ai/grok-2-vision-1212">x-ai/grok-2-vision-1212</SelectItem>
              <SelectItem value="gpt-4">GPT-4</SelectItem>
              <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
              <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
              <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* API Key Input */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label className="block text-sm text-gray-400">
            OpenAILike API Key:
          </label>
          <div className="relative">
            <Input
              type={showApiKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key..."
              className="bg-gray-800 border-gray-700 text-white pr-10 hover:border-gray-600 transition-colors rounded-lg"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-gray-400 hover:text-white"
              onClick={() => setShowApiKey(!showApiKey)}
            >
              {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
          
          {/* Progress Bar */}
          <motion.div 
            className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </motion.div>

        {/* Chat Input */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="How can Bolt help you today?"
            className="bg-gray-800 border-gray-700 text-white min-h-[120px] resize-none pr-20 hover:border-gray-600 focus:border-blue-500 transition-colors rounded-lg"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                handleSendPrompt()
              }
            }}
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-gray-400 hover:text-white rounded-md"
            >
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-gray-400 hover:text-white rounded-md"
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-gray-400 hover:text-white rounded-md"
            >
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {quickActions.map((action) => (
            <motion.div
              key={action.label}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                onClick={action.action}
                className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-white transition-colors rounded-lg"
              >
                <action.icon className="w-4 h-4 mr-2" />
                {action.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Examples */}
        <motion.div 
          className="space-y-3 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
              <div className="text-white">A todo app in React using Tailwind</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
              <div className="text-white">Build a simple blog using Astro</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
              <div className="text-white">Create a cookie consent form using Material UI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App