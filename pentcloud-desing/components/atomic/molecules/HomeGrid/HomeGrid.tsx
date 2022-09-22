import React from 'react'
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Texts } from '../../atoms/Text/Texts';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

export const HomeGrid = () => {
    return (


        <Grid
            container


            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}

            sx={{
                width: '100%',
                height: '100%',
            }}
        >

            <Grid
                item

                justifyContent={'flex-start'}
                sm={11}

                sx={{
                    width: '100%',
                    height: 'calc( 100vh - 300px )',
                }}
            >

                <Texts variant='h2' sx={{
                    mb: 3,
                }}>
                    Dream Cloud Literature
                </Texts>

                <Grid sm={7}>
                    <Texts variant='subtitle2' align='justify' >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Texts>
                </Grid>
                <NextLink href='/articles' passHref>
                    <Button variant='outlined'

                        sx={{
                            mt: 6,
                        }}>learn more
                    </Button>
                </NextLink>
            </Grid>
        </Grid>
    )
}
