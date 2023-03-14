import React from 'react'
import { Typography } from '@mui/material'
import { Base } from '../base/base'
import { useSearchParams } from 'react-router-dom'
import { ROUTES } from '../routes'
import { Content } from '../base/content'

const params = {
  center: 'center'
}
export const Map = () => {
  const [searchParams] = useSearchParams()
  const center = searchParams.get(params.center)
  return (
        <Base isProtected={ROUTES.map.isProtected}>
            <Content>
              <Typography variant="h1">Map {center !== null ? `centered on ${center}` : ''}</Typography>
            </Content>
        </Base>
  )
}
