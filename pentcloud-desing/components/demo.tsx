import type { NextPage } from 'next'

import { getDataFromTree } from '@apollo/client/react/ssr'
/* import { useQuery } from '@apollo/client' */

import withApollo from '../lib/withApollo'
/* import { POSTS_QUERY } from '../graphql/queries' */
import { useArticulosQuery } from '../generated/index';



const Home: NextPage = () => {

  /* const {data} = useQuery(POSTS_QUERY) */
  const {data} = useArticulosQuery()

  console.log(data?.posts?.rows)

  return (
    <div>{data?.posts?.rows?.map((articulos) => <div key={articulos?.id}>{articulos?.title}</div>)}</div>
  )
}

export default withApollo(Home, {getDataFromTree})
