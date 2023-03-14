import React from 'react'
import { Box, Typography } from '@mui/material'
import { Base } from './base/base'
import { ROUTES } from './routes'

export const Profile = () => {
  return (
        <Base isProtected={ROUTES.profile.isProtected}>
            <Box sx={{
              flexGrow: 1,
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <Typography variant="h3">Profile</Typography>
            </Box>
        </Base>
  )
}
