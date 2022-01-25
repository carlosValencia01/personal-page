import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AppRouter } from "./routers/AppRouter";

function App() {
  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
