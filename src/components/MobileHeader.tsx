import { useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, Sparkles, Settings } from 'lucide-react'

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-blue-400" />
        <h1 className="text-lg font-semibold">Blink AI</h1>
      </div>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-gray-950 border-gray-800 text-white w-80">
          <div className="py-6">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold">Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-gray-400">
                Configure your AI preferences and API keys here.
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}