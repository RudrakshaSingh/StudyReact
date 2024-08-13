import "./App.css";

function App() {
  // Access environment variable directly

  console.log(import.meta.env.VITE_APPWRITE_URL); // This should print the API key if defined

  return (
    <>
      <h1>A blog with Appwrite</h1>
    </>
  );
}

export default App;
