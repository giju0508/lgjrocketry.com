// src/components/sections/Experience.jsx

const Experience = () => {
  return (
    <section id="experience">
      {" "}
      {/* 이렇게 id 추가 */}{" "}
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <span className="text-yellow-400">✦</span> WORK HISTORY
      </h2>
      <div className="space-y-8">
        {/* 임시 아이템 1 */}
        <div className="group border-b border-gray-800 pb-8 hover:border-gray-600 transition-colors">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <span className="text-gray-500">Aug 2022 — Present</span>
          </div>
          <div className="text-purple-400 mb-2">@OneShield Software</div>
          <p className="text-gray-400">
            I have worked with some of the most innovative industry leaders...
          </p>
        </div>
        {/* 임시 아이템 2 */}
        <div className="group border-b border-gray-800 pb-8 hover:border-gray-600 transition-colors">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold">Founder</h3>
            <span className="text-gray-500">Jan 2023 — Present</span>
          </div>
          <div className="text-blue-400 mb-2">@Design and Code</div>
          <p className="text-gray-400">
            Building a community for developers and designers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
