import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex max-w-5xl flex-col items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
