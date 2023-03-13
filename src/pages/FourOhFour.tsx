import React from 'react'
import { Box, Typography } from '@mui/material'
import { Base } from './base'

export const FourOhFour = () => {
  return (
        <Base>
            <Box sx={{
              flexGrow: 1,
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <Typography variant="h3">404</Typography>
            </Box>
        </Base>
  )
}
