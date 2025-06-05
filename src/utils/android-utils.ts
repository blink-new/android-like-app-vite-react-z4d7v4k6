// Android-specific utilities for web app

export const vibrate = (pattern: number | number[] = 50) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(pattern)
  }
}

export const hapticFeedback = {
  light: () => vibrate(10),
  medium: () => vibrate(50), 
  heavy: () => vibrate(100),
  selection: () => vibrate([10, 10]),
  impact: () => vibrate([100, 50, 100])
}

export const shareContent = async (data: ShareData) => {
  if ('share' in navigator) {
    try {
      await navigator.share(data)
      return true
    } catch (error) {
      console.log('Share cancelled or failed:', error)
      return false
    }
  }
  return false
}

export const copyToClipboard = async (text: string) => {
  if ('clipboard' in navigator) {
    try {
      await navigator.clipboard.writeText(text)
      hapticFeedback.light()
      return true
    } catch (error) {
      console.error('Failed to copy:', error)
      return false
    }
  }
  return false
}

export const isAndroid = () => {
  return /android/i.test(navigator.userAgent)
}

export const isStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         Boolean((window.navigator as Record<string, unknown>).standalone) ||
         document.referrer.includes('android-app://')
}

export const requestFullscreen = async () => {
  if (document.documentElement.requestFullscreen) {
    try {
      await document.documentElement.requestFullscreen()
      return true
    } catch (error) {
      console.error('Fullscreen request failed:', error)
      return false
    }
  }
  return false
}

export const exitFullscreen = async () => {
  if (document.exitFullscreen) {
    try {
      await document.exitFullscreen()
      return true
    } catch (error) {
      console.error('Exit fullscreen failed:', error)
      return false
    }
  }
  return false
}