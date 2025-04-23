import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="mt-4">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;