import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
import Carousel from "./components/Carousel";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { Provider } from "react-redux";
import randomStore from "./utils/randomStore.jsx";
import Cart from "./components/Cart.jsx";

// import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="app">
      <Provider store={randomStore}>
        <Header />
        {/* <Carousel/> */}
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export { App, appRouter };
