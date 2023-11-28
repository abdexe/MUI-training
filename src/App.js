import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'

function App() {
  const [mode, setMode] = useState(false)
  const toggleMode = () => {
    setMode(prev => !prev)
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
    },
  
  })
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" 
        spacing={4}
        justifyContent="space-between"
      
        >
          <Sidebar mode={mode} toggleMode={toggleMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add/>
      </Box>
      </ThemeProvider>
    </>
  )
}

export default App