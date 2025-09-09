// Import Apollo Client and provider components
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Create a new Apollo Client instance
// - `uri`: GraphQL API endpoint (from env variable or fallback localhost)
// - `cache`: InMemoryCache stores query results to speed up future queries
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:4001",
  cache: new InMemoryCache()
});

// Next.js custom App component
// - Wraps all pages in ApolloProvider so GraphQL hooks (useQuery/useMutation) work anywhere
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      {/* Render the current page with its props */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
