import React from "react";
import { experiences } from "../../data/experienceData"; // 데이터 불러오기

const Experience = () => {
  return (
    <section className="py-10">
      {" "}
      {/* id 삭제, 상하 여백 추가 */}
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <span className="text-yellow-400">✦</span> WORK HISTORY
      </h2>
      <div className="space-y-8">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="group border-b border-gray-800 pb-8 hover:border-gray-600 transition-colors"
          >
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <span className="text-gray-500">{item.period}</span>
            </div>
            <div className={`${item.color} mb-2`}>@{item.company}</div>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
