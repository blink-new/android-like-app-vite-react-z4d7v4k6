import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { AndroidStatusBar } from './components/AndroidStatusBar'
import { FolderOpen, GitBranch, Edit, Paperclip, Sparkles, Mic, ChevronDown, Download } from 'lucide-react'

function App() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState('OpenAILike')
  const [selectedModel, setSelectedModel] = useState('x-ai/grok-2-vision-1212')
  const [prompt, setPrompt] = useState('')

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

  const projectExamples = [
    "A todo app in React using Tailwind",
    "Build a simple blog using Astro", 
    "Create a cookie consent form using Material UI"
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Android Status Bar */}
      <AndroidStatusBar />
      
      {/* Main Content Container */}
      <div className="flex-1 max-w-2xl mx-auto w-full p-4">
        
        {/* Main Content Card */}
        <motion.div 
          className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* Provider and Model Selection */}
          <div className="grid grid-cols-2 gap-3">
            <Select value={selectedProvider} onValueChange={setSelectedProvider}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white h-10 rounded-lg text-sm">
                <SelectValue placeholder="Select AI Provider" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 rounded-lg">
                <SelectItem value="OpenAI">OpenAI</SelectItem>
                <SelectItem value="OpenAILike">OpenAILike</SelectItem>
                <SelectItem value="Anthropic">Anthropic</SelectItem>
                <SelectItem value="Google">Google AI</SelectItem>
                <SelectItem value="XAI">X.AI</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white h-10 rounded-lg text-sm">
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 rounded-lg">
                <SelectItem value="x-ai/grok-2-vision-1212">x-ai/grok-2-vision-1212</SelectItem>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* API Key Input */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">
              OpenAILike API Key:
            </label>
            <div className="relative">
              <Input
                type="password"
                value="•••••••"
                readOnly
                className="bg-gray-700 border-gray-600 text-white pr-10 h-10 rounded-lg font-mono text-sm"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-gray-400 hover:text-white"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                <Edit className="w-3 h-3" />
              </Button>
            </div>
            
            {/* Progress Bar */}
            <motion.div 
              className="mt-2 h-0.5 bg-gray-600 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="h-full bg-orange-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
          </div>

          {/* Chat Input */}
          <div className="relative">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="How can Bolt help you today?"
              className="bg-gray-700 border-gray-600 text-white min-h-[120px] resize-none pr-20 rounded-lg text-sm placeholder:text-gray-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  handleSendPrompt()
                }
              }}
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-gray-400 hover:text-white rounded-md"
              >
                <Paperclip className="w-3 h-3" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-gray-400 hover:text-white rounded-md"
              >
                <Sparkles className="w-3 h-3" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-gray-400 hover:text-white rounded-md"
              >
                <Mic className="w-3 h-3" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-gray-400 hover:text-white rounded-md"
              >
                <ChevronDown className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap gap-3 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
                className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-white transition-colors rounded-lg h-9 px-3 text-sm"
              >
                <action.icon className="w-3 h-3 mr-2" />
                {action.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Examples */}
        <motion.div 
          className="space-y-3 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 gap-2">
            {projectExamples.map((example, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer text-xs text-gray-300"
              >
                {example}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App