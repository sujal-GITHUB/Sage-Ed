const Button = ({ children, variant = "primary", ...props }) => {
    const baseStyles = "px-4 py-2 font-mono text-sm transition-transform active:translate-y-0.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    const variants = {
      primary: "bg-yellow-300 rounded-lg hover:bg-yellow-400",
      secondary: "bg-white rounded-lg hover:bg-gray-100",
    }
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  
  export default Button
  