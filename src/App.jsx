
import { Button } from "@mui/joy";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Navigate, Route } from "react-router-dom";
import Home from "./Routes/Home"

import { routes } from "./utils/routes";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";


function App() {
  return (
  <>
  <Routes>
    <Route path={routes.path} element={<Navigate to={routes.home}/>} />
    <Route path={routes.home} element={<Home/>} />
    <Route path={routes.detail} element={<Detail/>} />
    <Route path={routes.favs} element={<Favs/>} />
    <Route path={routes.contact} element={<Contact/>} />
    <Route path={routes.error} element={<Error/>} />
  </Routes>
  </>
  );
}

export default App;
