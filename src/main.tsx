import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Pokemon from "./routes/pokemon";
import PokemonDetails from "./routes/pokemon.$pokemonId";
import TrainerPage from "./routes/trainer";

import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pokemon",
        element: <Pokemon />,
      },
      {
        path: "/pokemon/:pokemonId",
        element: <PokemonDetails />,
      },
      {
        path: "/trainer",
        element: <TrainerPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
