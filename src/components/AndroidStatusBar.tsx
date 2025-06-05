export function AndroidStatusBar() {
  return (
    <div className="bg-gray-900 text-white px-4 py-2 text-sm flex justify-between items-center">
      <div className="flex items-center gap-1">
        <span className="font-medium">9:41</span>
      </div>
      <div className="flex items-center gap-2">
        {/* Signal bars */}
        <div className="flex gap-0.5 items-end">
          <div className="w-1 h-3 bg-white rounded-full"></div>
          <div className="w-1 h-2.5 bg-white rounded-full"></div>
          <div className="w-1 h-2 bg-white rounded-full"></div>
          <div className="w-1 h-1.5 bg-white/60 rounded-full"></div>
        </div>
        {/* Battery */}
        <div className="w-6 h-3 border border-white/80 rounded-sm relative">
          <div className="w-4/5 h-full bg-white rounded-sm"></div>
          <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-white/80 rounded-r-sm"></div>
        </div>
      </div>
    </div>
  )
}