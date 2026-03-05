import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#040506]" />
        <div className="absolute left-[-8%] top-[-7rem] h-72 w-72 rounded-full bg-orange-500/12 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-10%] h-80 w-80 rounded-full bg-orange-700/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,5,0.9),rgba(4,5,6,0.98))]" />
      </div>

      <Navbar />

      <main className="mx-auto flex w-full max-w-[1080px] flex-col px-4 pb-8 pt-32 sm:px-6 sm:pt-28 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
