import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import router from "./components/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      <ToastContainer />
    </div>
  );
}

export default App;
