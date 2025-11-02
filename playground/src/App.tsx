import React from 'react'
import { MyButton } from '../../src/ui'

export function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Component Playground</h1>
      
      <div className="flex gap-4">
        <MyButton variant="primary">Primary</MyButton>
        <MyButton variant="secondary">Secondary</MyButton>
        <MyButton variant="outline">Outline</MyButton>
      </div>
      
      <div className="flex gap-4">
        <MyButton variant="primary" size="sm">Small</MyButton>
        <MyButton variant="primary" size="md">Medium</MyButton>
        <MyButton variant="primary" size="lg">Large</MyButton>
      </div>
    </div>
  )
}
