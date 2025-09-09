// Import Apollo hooks and gql (for defining queries)
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";
import Register from "../Components/register";

// Define GraphQL operations (must match schema in backend)

// Query 2: Fetch all ADD_LIST (id, title, createdAt)
const ADD_LIST = gql`
  query {
    todos {
      id
      title
      createdAt
    }
  }
`;

// Mutation: Add a new list (title) and return its id, title, createdAt
const ADD_LIST_MUTATAION = gql`
  mutation ($title: String!) {
    addList(title: $title) {
      id
      title
      createdAt
    }
  }
`;

// Mutation: Delete a todo by id and return its id
const DELETE_TODO = gql`
  mutation ($id: ID!) {
    deleteList(id: $id) {
      id
    }
  }
`;

// Main Home component for the index page
export default function Home() {
  // Query hook to fetch the list
  // - `data`: contains the result of the query (renamed to `list` here)
  // - `refetch`: function to manually refetch the query
  const { data: list, refetch } = useQuery(ADD_LIST);

  // Mutation hook to add a todo
  const [addList] = useMutation(ADD_LIST_MUTATAION);
  const [deleteList] = useMutation(DELETE_TODO);

  // Local state for input form
  const [title, setTitle] = useState("");

  // Handle form submit (insert new list)
  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return; // prevent empty input
    await addList({ variables: { title } }); // call mutation
    setTitle(""); // clear input
    await refetch(); // refresh  list
  }

  // Handle delete button click
  async function handleDelete(id) {
    await deleteList({ variables: { id: id } }); // call mutation
    await refetch(); // refresh  list
  }

  return (
    <div style={{ padding: "2rem" }}>
      {/* Input form for new list */}
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New list"
        />
        <button type="submit">Add</button>
      </form>

      {/* Display list */}
      <ul>
        {list?.todos?.map((t) => (
          <li key={t.id}>
            {t.title}
            <button type="button" onClick={() => handleDelete(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Register />
    </div>
  );
}
