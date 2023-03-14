import React from 'react'
import { Typography } from '@mui/material'
import { Base } from '../base/base'
import { ROUTES } from '../routes'
import { mockParagraph } from '../../utils/mock'
import { Content } from '../base/content'

export const Profile = () => {
  return (
        <Base isProtected={ROUTES.profile.isProtected}>
           <Content>
              <Typography variant="h1">Profile</Typography>
              <Typography variant="body1">{mockParagraph(3)}</Typography>
            </Content>
        </Base>
  )
}
