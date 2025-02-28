import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NGOSearch from "./Component/NGOSearch";
import SignUpPage from "./Component/Signuppage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<NGOSearch></NGOSearch>} />
      <Route path="/signup" element={<SignUpPage></SignUpPage>}/>
    </Routes>
  );
}

export default App;
