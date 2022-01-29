import * as React from "react"
import { useState } from "react"
import {createContext} from 'react'

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

export const TokenContext = createContext(null)

export const App = () => {

  const [token, setToken] = useState("ff339d318404f543274cb21c810f2483deb1ce9d") as [string, Function]
  const value = {token, setToken}

  return (
  <Router>
    <ChakraProvider theme={theme}>
      {/* @ts-ignore */} 
      <TokenContext.Provider  value={value as tokenContext}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/profile/">
            <Route path=":username" element={<Profile></Profile>}></Route>
          </Route>
          <Route path="*" element={<p>404 Route</p>}></Route>
        </Routes>
      </TokenContext.Provider>
    </ChakraProvider>
  </Router>)
}
