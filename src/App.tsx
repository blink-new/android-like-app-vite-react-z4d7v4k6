import { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { MobileHeader } from './components/MobileHeader'
import { FloatingActionButton } from './components/FloatingActionButton'
import { ProjectCard } from './components/ProjectCard'
import { AndroidStatusBar } from './components/AndroidStatusBar'
import { MessageSquare, FolderOpen, GitBranch, Eye, EyeOff, Paperclip, Mic, ChevronDown, Sparkles, Code, Globe, Database, Zap } from 'lucide-react'

function App() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState('openai')
  const [selectedModel, setSelectedModel] = useState('gpt-4')
  const [apiKey, setApiKey] = useState('')
  const [prompt, setPrompt] = useState('')

  const projects = [
    {
      title: "AI Todo App",
      description: "A todo app in React using Tailwind CSS with smart categorization",
      status: "active" as const,
      icon: Code
    },
    {
      title: "Blog Platform",
      description: "Build a simple blog using Astro with markdown support",
      status: "completed" as const,
      icon: Globe
    },
    {
      title: "Database Manager",
      description: "Create a database management UI with real-time updates",
      status: "draft" as const,
      icon: Database
    },
    {
      title: "E-commerce Store",
      description: "Full-stack e-commerce with Stripe integration",
      status: "active" as const,
      icon: Zap
    }
  ]

  const handleSendPrompt = () => {
    if (prompt.trim()) {
      // Handle sending the prompt
      console.log('Sending prompt:', prompt)
    }
  }

  const quickActions = [
    { icon: MessageSquare, label: "Import Chat", action: () => {} },
    { icon: FolderOpen, label: "Import Folder", action: () => {} },
    { icon: GitBranch, label: "Clone a Git Repo", action: () => {} }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Android Status Bar */}
      <AndroidStatusBar />
      
      {/* Mobile Header */}
      <MobileHeader />

      {/* Desktop Header */}
      <div className="hidden lg:block p-6 border-b border-gray-800">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-semibold">Blink AI</h1>
            </div>
          </motion.div>

          {/* Provider and Model Selection */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Select value={selectedProvider} onValueChange={setSelectedProvider}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white hover:border-gray-600 transition-colors">
                <SelectValue placeholder="Select AI Provider" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="openai">OpenAI</SelectItem>
                <SelectItem value="anthropic">Anthropic</SelectItem>
                <SelectItem value="google">Google AI</SelectItem>
                <SelectItem value="xai">X.AI</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white hover:border-gray-600 transition-colors">
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                {selectedProvider === 'openai' && (
                  <>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                  </>
                )}
                {selectedProvider === 'xai' && (
                  <>
                    <SelectItem value="grok-2-vision">Grok-2 Vision</SelectItem>
                    <SelectItem value="grok-2">Grok-2</SelectItem>
                  </>
                )}
                {selectedProvider === 'anthropic' && (
                  <>
                    <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                    <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                  </>
                )}
                {selectedProvider === 'google' && (
                  <>
                    <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                    <SelectItem value="gemini-pro-vision">Gemini Pro Vision</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </motion.div>

          {/* API Key Input */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-sm text-gray-400 mb-2">
              {selectedProvider.charAt(0).toUpperCase() + selectedProvider.slice(1)} API Key:
            </label>
            <div className="relative">
              <Input
                type={showApiKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your API key..."
                className="bg-gray-900 border-gray-700 text-white pr-10 hover:border-gray-600 transition-colors"
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
            {apiKey && (
              <motion.div 
                className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.div>
            )}
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
              placeholder="How can Blink help you today?"
              className="bg-gray-900 border-gray-700 text-white min-h-[120px] resize-none pr-20 hover:border-gray-600 focus:border-blue-500 transition-colors"
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
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <Mic className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-3 mt-6"
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
                  className="border-gray-700 bg-gray-900 hover:bg-gray-800 text-white transition-colors"
                >
                  <action.icon className="w-4 h-4 mr-2" />
                  {action.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Compact Interface */}
      <div className="lg:hidden p-4 border-b border-gray-800">
        <div className="space-y-4">
          {/* Quick Chat Input */}
          <div className="relative">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="How can Blink help you today?"
              className="bg-gray-900 border-gray-700 text-white min-h-[80px] resize-none pr-12 text-sm"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute bottom-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-white"
            >
              <Mic className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex-1 p-4 lg:p-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-lg font-medium mb-4 text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Recent Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton 
        onAction={handleSendPrompt}
        hasPrompt={prompt.trim().length > 0}
      />
    </div>
  )
}

export default App