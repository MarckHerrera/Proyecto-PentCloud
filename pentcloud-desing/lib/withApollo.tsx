
import {
    ApolloClient,
    ApolloProvider,
    DefaultOptions,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client";
  import { useRouter as routers } from "next/router";
  import nextWithApollo from "next-with-apollo";
  
  const withApollo = nextWithApollo(
    ({ initialState, headers }) => {
      return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
          uri: "https://blog-backend-blush.vercel.app/graphql",
        }),
        headers: {
          ...(headers as Record<string, string>),
        },
        cache: new InMemoryCache().restore(initialState || {}),
      });
    },
    {
      render: ({ Page, props }) => {
        const router = routers();
        return (
          <ApolloProvider client={props.apollo}>
            <Page {...props} {...router} />
          </ApolloProvider>
        );
      },
    }
  );
  
  export default withApollo;