// src/pages/ProjectDetail.jsx
import { Link, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams(); // 나중에 이걸로 데이터 찾을 거야

  return (
    <div className="animate-fade-in">
      {/* 뒤로 가기 버튼 */}
      <Link to="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">
        ← Back to Projects
      </Link>

      {/* 헤더: 제목 & 버튼 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-5xl font-bold">iPhone 15 Pro</h1>
        <a href="#" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          Check it out
        </a>
      </div>

      {/* 설명 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-gray-300">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed">
            Recreating the Apple iPhone 15 Pro website, with custom animations using GSAP...
            (데이터 연결 전 임시 텍스트)
          </p>
          
          {/* 기술 스택 뱃지 */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['ReactJS', 'GSAP', 'Three.js'].map(tech => (
              <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 메타 정보 (Role, Client 등) */}
        <div className="space-y-4 text-sm">
          <div>
            <span className="block text-gray-500 mb-1">Year</span>
            <span>2024</span>
          </div>
          <div>
            <span className="block text-gray-500 mb-1">Role</span>
            <span>Full-stack Developer</span>
          </div>
        </div>
      </div>

      {/* 프로젝트 이미지 영역 */}
      <div className="w-full h-96 bg-gray-900 rounded-xl flex items-center justify-center text-gray-600">
        Project Image Placeholder
      </div>
    </div>
  );
};

export default ProjectDetail;