import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { Box } from '@mui/material';
import { NavBar } from '../atomic/organisms/NavBar/NavBar';



interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ title = 'Cloud Dream', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <NavBar />
      </nav>

      <Box >

        {children}
      </Box>
    </>
  )
}

