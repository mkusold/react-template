import React, { useEffect, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/navbar/navbar'
import { useAppSelector } from '../store/hooks'
import { selectUser } from '../store/user/user.slice'
import { ROUTES } from './routes'

interface Props {
  children: ReactNode
  isProtected: boolean
}

export const Base: React.FC<Props> = ({ children, isProtected }) => {
  const user = useAppSelector(selectUser)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.loggedIn && location.pathname !== ROUTES.home.path) {
      navigate(ROUTES.home.path)
    }
  }, [user.loggedIn, location])

  const guardedChildren = () => {
    if (isProtected) {
      return user.loggedIn ? children : null
    } else {
      return children
    }
  }
  return (
        <>
            <Navbar />
            {guardedChildren()}
            <div>Footer!</div>
        </>
  )
}
