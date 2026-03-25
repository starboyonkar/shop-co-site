import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Newsletter />
    <Footer />
  </div>
);

export default Layout;
