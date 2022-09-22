import React, { Dispatch, SetStateAction } from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import SearchIcon from '@mui/icons-material/Search';

import { ArticulosQuery, Exact, useArticulosQuery } from '../../../../generated';
import { QueryResult } from '@apollo/client';

export const ArticlesCard = ({articulos, setArticulos, articulosCard, setArticulosCard }:{
  articulos: QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>,
  setArticulos: Dispatch<SetStateAction<QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>>>
  articulosCard: QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>,
  setArticulosCard: Dispatch<SetStateAction<QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>>>
}
) => {

  const { data } = articulos

  return (
    <>
      {data?.posts?.rows?.map((articulos) =>
        <Grid sm={3} sx={{ padding: '5px' }} key={articulos?.id}>
          <Card sx={{ minWidth: '20%' }} >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Author: {articulos?.author?.name}
              </Typography>
              <Typography variant="h5" component="div">
                {articulos?.title}
              </Typography>
              <Stack direction="row" spacing={1}>


{articulos?.categories?.map((cat) => <Chip label={cat?.name} size="small" key={cat?.id}/>)}
              
                

              </Stack>


            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  )
}


