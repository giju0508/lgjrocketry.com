import React from 'react';
import ProjectList from '../components/sections/ProjectList';

const Projects = () => {
  return (
    <div className="animate-fade-in pt-10">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Projects
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
        제가 참여하거나 진행해 온 프로젝트들입니다 ! <br />
        아래와 같은 업데이트가 예정되어 있어요. <br />
        <br />
        - 각 프로젝트별 도면 혹은 설계 파일 추가 예정<br />
        - 약 3종의 KNSB 기반 고체 모터 추가 예정<br />
        - 약 3종의 Regen-Cooling 액체 엔진 추가 예정<br />
        - 기타 액체 엔진 추가 예정
        </p>
      </div>

      {/* 업로드한 프로젝트 리스트 컴포넌트 */}
      <ProjectList />
    </div>
  );
};

export default Projects;