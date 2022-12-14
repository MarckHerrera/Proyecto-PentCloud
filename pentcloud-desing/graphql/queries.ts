import gql from "graphql-tag"

export const Articulos_QUERY = gql`
query Articulos {
    posts {
      pages
      __typename
      rows {
        id
        title
        body
        categories {
          id
          name
        }
        author {
          id
          name
        }
      }
    }
  }
`;