// src/pages/Home.jsx
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import ProjectList from '../components/sections/ProjectList';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main className="space-y-32"> {/* 섹션 간 간격 넓게 */}
      <Hero />
      <Experience />
      <ProjectList />
      <Contact />
    </main>
  );
};

export default Home;