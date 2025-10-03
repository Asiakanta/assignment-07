import "./App.css";
import Container from "./component/Container";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Box from "./component/Box";
import { Suspense } from "react";
import TicketBox from "./component/ticketBox";
import { ToastContainer } from "react-toastify";

const fetchIssuses = async () => {
  const result = await fetch("/box.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssuses;
  return (
    <div>
      <Container />
      <Navbar />

      <TicketBox />
      <Suspense fallback="loading...">
        <Box fetchPromise={fetchPromise} />
      </Suspense>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
