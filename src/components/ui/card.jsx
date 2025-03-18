
export function Card({ className = "", ...props }) {
  return <div className={`bg-card text-card-foreground rounded-lg border shadow-sm ${className}`} {...props} />
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
}

export function CardTitle({ className = "", ...props }) {
  return <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
}

export function CardDescription({ className = "", ...props }) {
  return <p className={`text-muted-foreground text-sm ${className}`} {...props} />
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />
}

export function CardFooter ({ className = "", ...props }) {
  return <div className={`flex items-center p-6 pt-0", ${className})`} {...props} />
}