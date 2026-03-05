const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-20 w-full max-w-[1080px] px-4 pb-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-orange-400/30 bg-black/30 px-5 py-5 text-sm text-slate-400 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {year} LGJ Rocketry. All Rights Reserved.</p>
        <p>Propulsion, simulation, and design.</p>
      </div>
    </footer>
  );
};

export default Footer;
