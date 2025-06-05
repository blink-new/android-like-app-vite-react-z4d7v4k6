import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { MoreVertical, Play, Eye } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

interface ProjectCardProps {
  title: string
  description: string
  status: 'active' | 'completed' | 'draft'
  icon: React.ComponentType<{ className?: string }>
  index: number
}

export function ProjectCard({ title, description, status, icon: Icon, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-200 cursor-pointer overflow-hidden group">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <motion.div 
                className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-750 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-4 h-4 text-blue-400" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-white truncate">{title}</h3>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{description}</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 text-gray-400 hover:text-white">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-gray-700">
                <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
                  <Play className="w-4 h-4 mr-2" />
                  Run Project
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge 
              variant={status === 'active' ? 'default' : status === 'completed' ? 'secondary' : 'outline'}
              className={
                status === 'active' 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : status === 'completed'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border-gray-600 text-gray-400'
              }
            >
              {status}
            </Badge>
            <div className="text-xs text-gray-500">
              2 hours ago
            </div>
          </div>
        </div>
        
        {/* Progress bar for active projects */}
        {status === 'active' && (
          <div className="h-1 bg-gray-800">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
        )}
      </Card>
    </motion.div>
  )
}