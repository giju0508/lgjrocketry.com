import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive =
      path === "/"
        ? location.pathname === "/"
        : location.pathname === path || location.pathname.startsWith(`${path}/`);

    return isActive
      ? "border-orange-300/60 bg-orange-400/16 text-orange-50"
      : "border-transparent text-slate-300 hover:border-orange-400/38 hover:bg-orange-400/[0.1] hover:text-orange-50";
  };

  return (
    <nav className="fixed inset-x-0 top-2 z-50 sm:top-4">
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 rounded-[1.75rem] border border-orange-400/34 bg-black/78 px-3 py-2 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-5 sm:py-3">
          <Link
            to="/"
            className="flex items-center gap-3 px-1 py-1 transition hover:text-orange-50"
          >
            <img src="/LGJLogo.png" alt="LGJ Rocketry Logo" className="h-8 w-8 sm:h-9 sm:w-9" />
            <span className="text-sm font-semibold tracking-wide text-white">
              LGJ Rocketry
            </span>
          </Link>

          <div className="grid w-full grid-cols-4 gap-2 sm:w-auto sm:flex sm:flex-wrap sm:items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full border px-3 py-1.5 text-center text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${getLinkClass(item.to)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
