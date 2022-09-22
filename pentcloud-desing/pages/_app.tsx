import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import { red } from '@mui/material/colors';

function MyApp({ Component, pageProps }: AppProps) {

  const darkTheme = createTheme({
    palette:{
      mode: 'dark',
        primary: {
          main: '#e14ee4'
        },
        secondary: {
          main: '#e14ee4'
        },
        error: {
          main: red.A400 
        },
      },
  
      components: {
          MuiAppBar: {
            
            defaultProps:{
              elevation: 0
            },
            styleOverrides: {
              root: {
                backgroundColor: '#e14ee444',
              }
            },
          },
      }
  });

  return (
    <>

      <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
