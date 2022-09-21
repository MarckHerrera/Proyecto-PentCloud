// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
  EmailAddress: any;
  Hexadecimal: any;
  JSON: any;
  JSONObject: any;
  LocalDate: any;
  URL: any;
  UUID: any;
};

export type Author = {
  __typename?: 'Author';
  id: Maybe<Scalars['UUID']>;
  name: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Maybe<Scalars['UUID']>;
  name: Maybe<Scalars['String']>;
};

export type CreateAuthor = {
  name: Scalars['String'];
};

export type CreateCategory = {
  name: Scalars['String'];
};

export type CreatePost = {
  authorId: Scalars['UUID'];
  body: Scalars['String'];
  categories: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  reactions: Scalars['Int'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Maybe<Author>;
  createCategory: Maybe<Category>;
  createPost: Maybe<Post>;
  deleteAuthor: Maybe<Author>;
  deleteCategory: Maybe<Category>;
  deletePost: Maybe<Post>;
  signIn: Session;
  updateAuthor: Maybe<Author>;
  updateCategory: Maybe<Category>;
  updatePost: Maybe<Post>;
};


export type MutationCreateAuthorArgs = {
  input: CreateAuthor;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategory;
};


export type MutationCreatePostArgs = {
  input: CreatePost;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['UUID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['UUID'];
};


export type MutationSignInArgs = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  input: UpdateAuthor;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategory;
};


export type MutationUpdatePostArgs = {
  input: UpdatePost;
};

export type Options = {
  limit: InputMaybe<Scalars['Int']>;
  order: InputMaybe<Array<Array<Scalars['String']>>>;
  page: InputMaybe<Scalars['Int']>;
  where: InputMaybe<Scalars['JSONObject']>;
};

export type PageAuthor = {
  __typename?: 'PageAuthor';
  length: Maybe<Scalars['Int']>;
  pages: Maybe<Scalars['Int']>;
  rows: Maybe<Array<Maybe<Author>>>;
};

export type PageCategory = {
  __typename?: 'PageCategory';
  length: Maybe<Scalars['Int']>;
  pages: Maybe<Scalars['Int']>;
  rows: Maybe<Array<Maybe<Category>>>;
};

export type PagePost = {
  __typename?: 'PagePost';
  length: Maybe<Scalars['Int']>;
  pages: Maybe<Scalars['Int']>;
  rows: Maybe<Array<Maybe<Post>>>;
};

export type Post = {
  __typename?: 'Post';
  author: Maybe<Author>;
  body: Maybe<Scalars['String']>;
  categories: Maybe<Array<Maybe<Category>>>;
  id: Maybe<Scalars['UUID']>;
  reactions: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  author: Maybe<Author>;
  authors: Maybe<PageAuthor>;
  categories: Maybe<PageCategory>;
  category: Maybe<Category>;
  post: Maybe<Post>;
  posts: Maybe<PagePost>;
  version: Maybe<Scalars['String']>;
};


export type QueryAuthorArgs = {
  id: Scalars['UUID'];
};


export type QueryAuthorsArgs = {
  options?: InputMaybe<Options>;
};


export type QueryCategoriesArgs = {
  options?: InputMaybe<Options>;
};


export type QueryCategoryArgs = {
  id: Scalars['UUID'];
};


export type QueryPostArgs = {
  id: Scalars['UUID'];
};


export type QueryPostsArgs = {
  options?: InputMaybe<Options>;
};

export type Session = {
  __typename?: 'Session';
  token: Scalars['String'];
};

export type UpdateAuthor = {
  id: Scalars['UUID'];
  name: InputMaybe<Scalars['String']>;
};

export type UpdateCategory = {
  id: Scalars['UUID'];
  name: InputMaybe<Scalars['String']>;
};

export type UpdatePost = {
  authorId: Scalars['UUID'];
  body: InputMaybe<Scalars['String']>;
  categories: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  id: Scalars['UUID'];
  reactions: InputMaybe<Scalars['Int']>;
  title: InputMaybe<Scalars['String']>;
};

export type ArticulosQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticulosQuery = { __typename: 'Query', posts: { __typename: 'PagePost', pages: number | null, rows: Array<{ __typename?: 'Post', id: any | null, title: string | null, body: string | null, categories: Array<{ __typename?: 'Category', id: any | null, name: string | null } | null> | null, author: { __typename?: 'Author', id: any | null, name: string | null } | null } | null> | null } | null };


export const ArticulosDocument = gql`
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

/**
 * __useArticulosQuery__
 *
 * To run a query within a React component, call `useArticulosQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticulosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticulosQuery({
 *   variables: {
 *   },
 * });
 */
export function useArticulosQuery(baseOptions?: Apollo.QueryHookOptions<ArticulosQuery, ArticulosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticulosQuery, ArticulosQueryVariables>(ArticulosDocument, options);
      }
export function useArticulosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticulosQuery, ArticulosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticulosQuery, ArticulosQueryVariables>(ArticulosDocument, options);
        }
export type ArticulosQueryHookResult = ReturnType<typeof useArticulosQuery>;
export type ArticulosLazyQueryHookResult = ReturnType<typeof useArticulosLazyQuery>;
export type ArticulosQueryResult = Apollo.QueryResult<ArticulosQuery, ArticulosQueryVariables>;