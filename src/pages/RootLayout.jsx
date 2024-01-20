import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import Subheader from "../components/Subheader/Subheader";

function RootLayout() {
  return (
    <>
      <Header />
      <Subheader />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
