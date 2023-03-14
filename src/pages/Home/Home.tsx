import React from 'react'
import { Typography } from '@mui/material'
import { useAppSelector } from '../../store/hooks'
import { selectUser } from '../../store/user/user.slice'
import { Base } from '../base/base'
import { ROUTES } from '../routes'
import { Login } from './login'
import { mockParagraph } from '../../utils/mock'
import { Content } from '../base/content'

export const Home = () => {
  const user = useAppSelector(selectUser)
  return (
        <Base isProtected={ROUTES.home.isProtected}>
          <Content>
            {user.loggedIn
              ? (
            <>
              <Typography variant="h1">Home</Typography>
              <Typography variant="body1">{mockParagraph(3)}</Typography>
            </>)
              : (<Login />)
          }
          </Content>
        </Base>
  )
}
