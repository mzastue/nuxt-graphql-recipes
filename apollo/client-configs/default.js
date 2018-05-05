import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const createLink = (ctx) => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const middlewareLink = new ApolloLink((operation, forward) => {
    const token = process.server ? ctx.req.session : window.__NUXT__.state.session;

    operation.setContext({
      headers: { authorization: `Bearer ${token}` }
    });

    return forward(operation);
  })
console.log(httpLink);
  return middlewareLink.concat(httpLink);
};

export default (ctx) => ({
  link: createLink(ctx),
  cache: new InMemoryCache()
});
