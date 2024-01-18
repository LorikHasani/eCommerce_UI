import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
