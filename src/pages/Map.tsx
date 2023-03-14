import React from 'react'
import { Box, Typography } from '@mui/material'
import { Base } from './base/base'
import { useSearchParams } from 'react-router-dom'
import { ROUTES } from './routes'

const params = {
  center: 'center'
}
export const Map = () => {
  const [searchParams] = useSearchParams()
  const center = searchParams.get(params.center)
  return (
        <Base isProtected={ROUTES.map.isProtected}>
            <Box sx={{
              flexGrow: 1,
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <Typography variant="h3">Map {center !== null ? `centered on ${center}` : ''}</Typography>
            </Box>
        </Base>
  )
}
