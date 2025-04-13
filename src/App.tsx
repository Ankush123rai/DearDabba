
import Signup from "./pages/Signup"
import { Route,Routes } from "react-router-dom";
import TermsAndConditions from "./pages/TermsAndConditions";
import Congratulation from "./components/Congratulation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/privacy-policy" element={<TermsAndConditions />} />
      <Route path="/congratulation" element={<Congratulation />} />

    </Routes>
  );
}

export default App;