import React from 'react';
import Experience from '../components/sections/Experience';

const About = () => {
  return (
    <div className="animate-fade-in pt-10">
      {/* 페이지 타이틀 */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          About Me
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          &nbsp;&nbsp;&nbsp;&nbsp;저는 로켓 추진 시스템을 중심으로, 아이디어를 실제 시험 가능한 하드웨어로 구현하는데 관심이 많은 엔지니어입니다.<br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;고체 추진에서는 다양한 스케일의 모터를 직접 설계·제작·시험해 왔으며, 노즐·케이싱 등 구성 요소를 통합적으로 최적화해 성능과 신뢰성을 끌어올리는 전 주기 개발을 수행합니다. 또한 여러 규모의 고체 모터 개발에 대해 설계 대행 및 기술 조언을 제공해왔으며, 팀이 성공적으로 지상 시험과 비행(발사)까지 완료하도록 지원한 경험이 있습니다.<br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;액체 추진에서는 주로 인젝터, 연소기 등 엔진 통합 시스템을 설계해 왔으며, 핀틀 인젝터를 포함한 각종 통합 인젝터, 그리고 재생 냉각과 삭마 냉각 등을 설계해본 바 있습니다. 현재는 주로 적층 제조를 이용한 소형 Gas-Gas 연소기를 개발, 시험하는 중입니다. 또한 3kN급 LOX/IPA 연소기의 설계 또한 진행 중 입니다.<br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;또한 DED 기반 Metal 3D 프린터를 운용해본 경험으로부터 Additive Manufacturing 기술에 대해 높은 관심과 이해도를 가지고 있습니다. 이를 액체 연소기 설계 등에 반영하여 AM-friendly 형상 설계와 최적화를 지향하고 있습니다.<br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;제가 실제로 설계하고 시험한 내용은 "Projects" 탭에서 확인해보실 수 있습니다.
        </p>
      </div>

      {/* 업로드한 경력(Experience) 컴포넌트 배치 */}
      <Experience />
    </div>
  );
};

export default About;