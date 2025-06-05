export function AndroidStatusBar() {
  return (
    <div className="bg-black text-white px-4 py-1 text-xs flex justify-between items-center lg:hidden">
      <div className="flex items-center gap-1">
        <span>9:41</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-2 border border-white/60 rounded-sm">
          <div className="w-3/4 h-full bg-white/80 rounded-sm"></div>
        </div>
        <div className="flex gap-0.5">
          <div className="w-1 h-3 bg-white/80 rounded-full"></div>
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}