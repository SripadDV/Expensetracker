import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Container from "./Components/Container/Container";
import Menubar from "./Components/Menubar/Menubar";
import WorkArea from "./Components/WorkArea/WorkArea";

function App() {
  console.log("Let's begin!!");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Menubar />
          <WorkArea>
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
            </Routes>
          </WorkArea>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
