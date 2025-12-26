import React from 'react'

const Badge = React.forwardRef(({ className = '', variant = 'default', children, ...props }, ref) => {
  const variants = {
    default: 'bg-zinc-800 text-zinc-200 border-zinc-700',
    outline: 'border-2 border-white/10 bg-transparent text-zinc-400',
    secondary: 'bg-zinc-700 text-zinc-200 border-zinc-600'
  }

  return (
    <span
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
})

Badge.displayName = 'Badge'

export { Badge }
