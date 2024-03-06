import { ReactElement, useState } from "react"

export function Accordion({ children, title }: { children: ReactElement, title: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="pl-6" onClick={() => setOpen( c => !c)}>
      <div className="flex items-center space-x-2">
        <img className={`accordion-icon ${open ? "rotate" : ""}`} src="/accordion-icon.svg" alt={title} />
        <h3 className="font-bold text-gray-950">{title}</h3>
      </div>
      <div className={`accordion-content ${open ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  )
}
