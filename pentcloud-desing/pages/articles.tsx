import type { NextPage } from 'next'

import { getDataFromTree } from '@apollo/client/react/ssr'

import withApollo from '../lib/withApollo'
import { Layout } from '../components/layouts/Layout';
import { ArticlesTemplate } from '../components/atomic/templates/ArticlesTemplate.tsx/ArticlesTemplate';





const Articles: NextPage = () => {

  return (
    <Layout >
      <ArticlesTemplate/>
    </Layout>
  )
}

export default withApollo(Articles, {getDataFromTree})