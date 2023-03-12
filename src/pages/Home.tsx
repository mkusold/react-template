import React from 'react'
import { Box, Typography } from '@mui/material'
import { Base } from './base'

export const Home = () => {
  return (
        <Base>
            <Box sx={{
              flexGrow: 1,
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <Typography variant="h3">Home</Typography>
            </Box>
        </Base>
  )
}
