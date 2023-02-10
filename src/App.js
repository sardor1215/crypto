import Header from "./components/header/Header";
import ListBox from "./components/listbox/ListBox";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Info from "./routes/info/Info";
import Main from "./routes/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info/:id" element={<Info />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
