import React, { type ReactNode } from 'react'
import { Navbar } from '../components/navbar/navbar'

interface Props {
  children: ReactNode
}

export const Base: React.FC<Props> = ({ children }) => {
  return (
        <>
            <Navbar />
            {children}
            <div>Footer!</div>
        </>
  )
}
