import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login></Login>}></Route>

            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single></Single>}></Route>
              <Route path="new" element={<New></New>}></Route>
            </Route>

            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<Single></Single>}></Route>
              <Route path="new" element={<New></New>}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
