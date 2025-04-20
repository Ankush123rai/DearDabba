import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SecondLayout from "./components/SecondLayout";
import Search from "./pages/Search";


const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Congratulation = lazy(() => import("./components/Congratulation"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<TermsAndConditions />} />
        <Route path="/congratulation" element={<Congratulation />} />

        <Route element={<SecondLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search"element={<Search />} />
          <Route path="/cart" element={<>Cart</>} />
          <Route path="/collection" element={<>Collection</>} />
          <Route path="/profile" element={<>Profile</>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
