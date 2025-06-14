import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SecondLayout from "./components/SecondLayout";
import BrandLogo from "./components/BrandLogo";


const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Congratulation = lazy(() => import("./components/Congratulation"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const SearchParams =lazy(()=> import("./pages/SearchParams"))

//group order flow
const GroupOrderFlow1 = lazy(() => import("./pages/group-order-flow/page1"));
const GroupOrderFlow2 = lazy(() => import("./pages/group-order-flow/Page2"));
const GroupOrderFlow3 = lazy(() => import("./pages/group-order-flow/Page3"));
const GroupOrderFlow4 = lazy(() => import("./pages/group-order-flow/Page4"));
const GroupOrderFlow5 = lazy(() => import("./pages/group-order-flow/Page5"));

//Tiffin service order flow
const TiffinServiceOrderFlow1 = lazy(() => import("./pages/tiffin-service-order-flow/page1"));
const WeeklyMenu = lazy(() => import("./pages/tiffin-service-order-flow/WeeklyMenu"));

//catering service flow
const CateringService = lazy(()=>import('./pages/catering-service/CateringService'))
const CateringService2 = lazy(()=>import('./pages/catering-service/page2'))


//ProfileDashboard
const ProfileDashboard = lazy(()=>import('./pages/ProfileDashboard'))

// Home chefs order flow
const HomeChefOrder = lazy(()=>import('./pages/Home-chefs-order-flow/Page1'))
const WeeklyMenu2 = lazy(() => import("./pages/Home-chefs-order-flow/WeeklyMenu"));

//healthy-order
const HealthyOrder = lazy(()=>import('./pages/healthy-order/HealthyOrder'))

//dining
const Dinning = lazy(()=>import('./pages/dining/Dining'))
const DinningDetails = lazy(()=>import('./pages/dining/DinningDetail'))
const DinningBooking = lazy(()=>import('./pages/dining/DinningBooking'))

//coupon 
const CouponPage = lazy(() => import("./pages/CouponPage"));

//delivery
const Delivery = lazy(() => import("./pages/delivery/Delivery"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <BrandLogo/>
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
          <Route path="/search/:name"element={<SearchParams />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/collection" element={<>Collection</>} />
          <Route path="/profile" element={<ProfileDashboard/>} />

          {/* Group Order Flow */}
          <Route path="/group-order-flow" element={<GroupOrderFlow1 />} />
          <Route path="/group-order-flow/2" element={<GroupOrderFlow2 />} />
          <Route path="/group-order-flow/3" element={<GroupOrderFlow3 />} />
          <Route path="/group-order-flow/4" element={<GroupOrderFlow4 />} />
          <Route path="/group-order-flow/5" element={<GroupOrderFlow5 />} />

          {/* Tiffin Service Order Flow */}
          <Route path="/tiffin-service-order-flow" element={<TiffinServiceOrderFlow1 />} />
          <Route path="/tiffin-service-order-flow/weekly-menu" element={<WeeklyMenu />} />

          {/* catering service flow */}
          <Route path="/catering-service" element={<CateringService />} />
          <Route path="/catering-service/:name" element={<CateringService2 />} />

          {/* Home chefs order flow */}
          <Route path="/home-chef-order" element={<HomeChefOrder/>}/>
          <Route path="/home-chef-order/weekly-menu" element={<WeeklyMenu2 />} />

          {/* //healthy-order */}
          <Route path="/healthy-order" element={<HealthyOrder />} />

          {/* Dining */}
          <Route path="/dinning" element={<Dinning />} />
          <Route path="/dinning/:id" element={<DinningDetails />} />
          <Route path="/dinning/:id/booking" element={<DinningBooking />} />
          {/* Coupons */}
          <Route path="/coupons" element={<CouponPage />} />

          {/* Delivery */}
          <Route path="/delivery" element={<Delivery />} />

        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
