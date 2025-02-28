import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NGOSearch from "./Component/NGOSearch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<NGOSearch></NGOSearch>} />
    </Routes>
  );
}

export default App;
