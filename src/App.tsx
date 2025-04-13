import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Congratulation = lazy(() => import("./components/Congratulation"));

function App() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<TermsAndConditions />} />
        <Route path="/congratulation" element={<Congratulation />} />
      </Routes>
    </Suspense>
  );
}

export default App;
