import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./utils/routes";

import Home from "./Routes/Home"
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Error404 from "./Routes/Error404";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.path} element={<Layout />} >
          <Route path={routes.path} element={<Navigate to={routes.home} />} />
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.error} element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
