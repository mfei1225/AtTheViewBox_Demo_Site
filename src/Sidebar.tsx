'use client'


import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const sections = [
  { title: 'Introduction', href: '#introduction' },
  { title: 'Getting Started', href: '#getting-started' },
  { title: 'Features', href: '#features' },
  { title: 'API Reference', href: '#api-reference' },
  { title: 'FAQ', href: '#faq' },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(sections[0].href)

  return (
    <ScrollArea className="w-64 border-r bg-card">
      <nav className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-primary">Documentation</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.href}>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setActiveSection(section.href)}
              >
                
                  {section.title}
               
              </Button>
            
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  )
}
