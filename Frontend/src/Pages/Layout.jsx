import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Header title="Saga Streams"/>
      <main className="container py-3">
        <Outlet />
      </main>
      <Footer title="Footer"
        description="Something here to give the footer a purpose!"/>
    </div>
  );
};

export default Layout;
