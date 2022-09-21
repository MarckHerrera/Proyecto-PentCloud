import { Grid, InputAdornment, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { ArticleGrid } from '../../molecules/ArticleGrid/ArticleGrid';
import { AccountCircle } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { ArticulosQuery, Exact, useArticulosQuery } from '../../../../generated';
import { QueryResult } from '@apollo/client';
import { Author, Category, ArticulosQueryResult } from '../../../../generated/index';

export const ArticlesTemplate = () => {

  const [articulos, setArticulos] = useState(useArticulosQuery());
  const [articulosCard, setArticulosCard] = useState(useArticulosQuery());
  const [busquedaA, setBusquedaA] = useState("");
  const [busquedaC, setBusquedaC] = useState("");


  const handleChangeC = (e: any) => {
    setBusquedaC(e.target.value);
    /* filtrarC(e.target.value);  */

  }

  const handleChangeA = (e: any) => {
    setBusquedaA(e.target.value);
    /* filtrarA(e.target.value); */

  }

  /* ******Intento de Filtrado Fallido******** */

  /*  const filtrarC = (terminoBusqueda: any) => {
     var resultadosBusqueda = articulosCard.data?.posts.rows.filter((elemento:any) => {
 
       var elemento2 = elemento.categories.toString() || '';
 
       if (elemento2.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
         console.log(elemento)
         return elemento;
       }
     })
 
     setArticulos(resultadosBusqueda)
   }
 
 
   const filtrarA = (terminoBusqueda: any) => {
 
     var resultadosBusqueda: any = articulosCard.data.posts.rows.filter((elemento:any) => {
 
       if (elemento.author.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
 
         return elemento;
       }
     })
     console.log(resultadosBusqueda)
     setArticulos(resultadosBusqueda)
   } */



  return (
    <Grid
      container
      xs={false}
      sm={'auto'}
      md={'auto'}


      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}

      sx={{
        backgroundColor: '#030c1b',
        backgroundPosition: 'center',
        height: '91vh',
      }}
    >

      {/* **************Intento para filtrado Fallido********** */}

      {/* <TextField
        sx={{
          mr: '100px'
        }}
        value={busquedaC}
        onChange={handleChangeC}
        id="input-with-icon-textfield"
        label="Categories"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBalanceIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

      <TextField
        value={busquedaA}
        onChange={handleChangeA}
        id="input-with-icon-textfield"
        label="Authors"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      /> */}


      <ArticleGrid
        articulos={articulos}
        setArticulos={setArticulos}
        articulosCard={articulosCard}
        setArticulosCard={setArticulosCard}
      />


    </Grid>
  )
}