import * as React from "react"
import { useState } from "react"
import {createContext, useEffect} from 'react'

import {
  ChakraProvider,
//  Box,
//  theme
} from "@chakra-ui/react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import { ColorModeSwitcher } from "./ColorModeSwitcher"

import "@fontsource/inter"
import "@fontsource/open-sans"

import theme from './theme'

// Pages
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import Settings from "./Pages/Settings"
// import User from "./Pages/Profile"
import Profile from "./Pages/Profile"
import { tokenContext } from "./Types/Context"
import Comment from "./Pages/Comments"
import { baseUrl } from "./settings"
import Following from "./Pages/Following"

export const TokenContext = createContext(null)
export const UserContext = createContext(null)

export const App = () => {

  const [token, setToken] = useState("") as [string, Function]
  const [user, setUser] = useState(null)
  const value = {token, setToken}

  useEffect(() => {
    if(token === null || user !== null) {
      return
    }

    fetch(`${baseUrl}/auth/user/`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Token ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => alert(err))
  }, [user, token])

  return (
  <Router>
    <ChakraProvider theme={theme}>
      {/* @ts-ignore */} 
      <TokenContext.Provider  value={value as tokenContext}>
        {/* @ts-ignore*/}
        <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/profile/">
              <Route path=":username" element={<Profile></Profile>}></Route>
            </Route>
            <Route path="/tweet/">
              <Route path=":id" element={<Comment></Comment>}></Route>
            </Route>
            <Route path="/following/">
              <Route path=":username" element={<Following></Following>}></Route>
            </Route>
            <Route path="*" element={<p>404 Route</p>}></Route>
          </Routes>
        </UserContext.Provider>
      </TokenContext.Provider>
    </ChakraProvider>
  </Router>)
}
