import React, { Dispatch, SetStateAction } from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, InputAdornment, TextField } from '@mui/material';

import { ArticlesCard } from '../ArticlesCard/ArticlesCard';
import { AccountCircle } from '@mui/icons-material';
import { ArticulosQuery, Exact } from '../../../../generated/index';
import { QueryResult } from '@apollo/client';

export const ArticleGrid= ({articulos, setArticulos, articulosCard, setArticulosCard }:{
  articulos: QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>,
  setArticulos: Dispatch<SetStateAction<QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>>>
  articulosCard: QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>,
  setArticulosCard: Dispatch<SetStateAction<QueryResult<ArticulosQuery, Exact<{[key: string]: never;}>>>>
}
) => {

  return (

    <Grid
      container

      display={'flex'}


      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      
      <ArticlesCard
      articulos={articulos}
      setArticulos={setArticulos}
      articulosCard={articulosCard}
      setArticulosCard={setArticulosCard}
      />
      

    </Grid>
  )
}
