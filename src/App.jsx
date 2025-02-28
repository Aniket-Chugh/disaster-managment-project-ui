import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NGOSearch from "./Component/NGOSearch";
import SignUpPage from "./Component/Signuppage";
import ReportPage from "./Component/MakeReport";
import DisasterManagement from "./Component/MakeReport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<NGOSearch></NGOSearch>} />
      <Route path="/signup" element={<SignUpPage></SignUpPage>}/>
      <Route path="/report" element={<DisasterManagement></DisasterManagement>}/>
    </Routes>
  );
}

export default App;
