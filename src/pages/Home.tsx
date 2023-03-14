import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel, styled, Typography } from '@mui/material'
import { Base } from './base/base'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { login, selectUser } from '../store/user/user.slice'
import { ROUTES } from './routes'

export const Home = () => {
  return (
        <Base isProtected={ROUTES.home.isProtected}>
          <Typography variant="h1">Home</Typography>
          <Login />
        </Base>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: 8,
  borderRadius: 4
}))

const Login = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const [name, setName] = useState('')

  const submit = () => {
    dispatch(login(name))
  }

  return user.loggedIn
    ? null
    : (
    <>
      <Typography variant="h2">Log In</Typography>
        <Wrapper>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              aria-describedby="name of user"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}/>
            <Button variant="contained" onClick={() => { submit() }}>LogIn</Button>
          </FormControl>
        </Wrapper>
    </>
      )
}
