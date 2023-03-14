import React, { useEffect, type ReactNode } from 'react'
import { Container, styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/navbar/navbar'
import { useAppSelector } from '../../store/hooks'
import { selectUser } from '../../store/user/user.slice'
import { ROUTES } from '../routes'
import { Footer } from './footer'

const NAVBAR_HEIGHT = {
  lg: '68.5px',
  md: '64px',
  sm: '48px'
}
const FOOTER_HEIGHT = {
  lg: '72px',
  sm: '56px'
}

const Background = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  height: '100vh'
}))

const FullHeightContainer = styled(Container)(({ theme }) => ({
  minHeight: `calc(100vh - ${NAVBAR_HEIGHT.lg} - ${FOOTER_HEIGHT.lg})`,
  [theme.breakpoints.down('md')]: {
    minHeight: `calc(100vh - ${NAVBAR_HEIGHT.md} - ${FOOTER_HEIGHT.lg})`
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: `calc(100vh - ${NAVBAR_HEIGHT.sm} - ${FOOTER_HEIGHT.sm})`
  }
}))

interface Props {
  children: ReactNode
  isProtected?: boolean
}

export const Base: React.FC<Props> = ({ children, isProtected = false }) => {
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
            <Background>
              <Navbar />
              <FullHeightContainer>
                {guardedChildren()}
              </FullHeightContainer>
              <Footer />
            </Background>
        </>
  )
}
