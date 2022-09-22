import type { NextPage } from 'next'

import { getDataFromTree } from '@apollo/client/react/ssr'

import withApollo from '../lib/withApollo'
import { Layout } from '../components/layouts/Layout';
import { HomeTemplate } from '../components/atomic/templates/HomeTemplate/HomeTemplate';



const Home: NextPage = () => {

  return (
    <Layout >
      <HomeTemplate/>
    </Layout>
  )
}

export default withApollo(Home, {getDataFromTree})

