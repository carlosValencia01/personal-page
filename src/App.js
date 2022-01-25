import { Footer } from "./components/shared/Footer";
import { NavBar } from "./components/shared/NavBar";
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
