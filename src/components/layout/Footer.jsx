const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-20 w-full max-w-[1080px] px-4 pb-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p>© {year} LGJ Rocketry. All Rights Reserved.</p>
        <p>Propulsion, simulation, and design.</p>
      </div>
    </footer>
  );
};

export default Footer;
