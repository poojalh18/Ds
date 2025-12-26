import React from 'react'

const Button = React.forwardRef(({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
  const variants = {
    default: 'bg-white text-black hover:bg-zinc-200',
    secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    ghost: 'hover:bg-zinc-800 hover:text-zinc-200',
    outline: 'border-2 border-zinc-700 bg-transparent hover:bg-zinc-800'
  }

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10'
  }

  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
