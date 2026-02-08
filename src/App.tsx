import { useState, useEffect } from 'react';
import { personalDetails, skills, projects, services } from './data';
import { Menu, X, Github, Linkedin, Mail, Copyright } from 'lucide-react';
import ProjectCard from './components/ProjectCard';

// Helper function to calculate age
const calculateAge = (dob: string) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- SCROLL ANIMATION LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    // Added 'animate-gradient-xy' to the background
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-black text-slate-100 font-sans selection:bg-pink-500 selection:text-white animate-gradient-xy">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            {personalDetails.name}
          </h1>
          
          <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
            {['About', 'Services', 'Skills', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-400 transition">
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10 p-4 space-y-4">
             {['About', 'Services', 'Skills', 'Projects'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-slate-300 hover:text-pink-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO / INTRO SECTION --- */}
      {/* Added 'reveal' class */}
      <section id="about" className="reveal pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 min-h-[80vh]">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium tracking-wider border border-pink-500/20">
            {personalDetails.role}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Hello, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
              {personalDetails.name}
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            {personalDetails.about}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-4 justify-center md:justify-start">
            <span className="flex items-center gap-2">📍 {personalDetails.location}</span>
            <span className="flex items-center gap-2">🎂 Age: {calculateAge(personalDetails.dob)}</span>
          </div>

          <div className="flex gap-4 pt-4 justify-center md:justify-start">
             <a href={`mailto:${personalDetails.email}`} className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition shadow-lg shadow-pink-500/25 transform hover:scale-105 active:scale-95">
               Contact Me
             </a>
          </div>
        </div>

        {/* --- PHOTO SECTION --- */}
        {/* Added 'animate-float' class */}
        <div className="relative group animate-float">
            {/* Fancy glow effect behind the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The Image */}
            <img 
              src={personalDetails.imgUrl} 
              alt={personalDetails.name} 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-900 shadow-2xl"
            />
        </div>

      </section>

      {/* --- SERVICES / WHAT I DO --- */}
      {/* Added 'reveal' class */}
      <section id="services" className="reveal py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-pink-500 mr-2">/</span> What I Do?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="bg-slate-800/50 backdrop-blur border border-white/5 p-4 rounded-xl hover:bg-slate-800 transition hover:-translate-y-2 duration-300 text-center group hover:shadow-lg hover:shadow-pink-500/10"
                style={{ transitionDelay: `${index * 100}ms` }} // Staggered delay
              >
                <div className="bg-slate-900/50 p-3 rounded-full w-fit mx-auto mb-3 group-hover:bg-pink-500/20 transition duration-300">
                   <service.icon className="text-pink-400 group-hover:scale-110 transition duration-300" size={24} />
                </div>
                <h3 className="font-bold text-sm mb-1">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (LOGOS ONLY) --- */}
      {/* Added 'reveal' class */}
      <section id="skills" className="revealHx py-20 px-4 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-pink-500 mr-2">/</span> Technical Skills
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-slate-800/50 border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-pink-500/50 transition hover:-translate-y-2 group hover:shadow-lg hover:shadow-purple-500/20"
                style={{ transitionDelay: `${index * 50}ms` }} // Staggered delay
              >
                <skill.icon size={48} style={{ color: skill.color }} className="drop-shadow-lg grayscale group-hover:grayscale-0 transition duration-500 transform group-hover:rotate-6" />
                <span className="font-medium text-slate-300 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      {/* Added 'reveal' class */}
      <section id="projects" className="reveal py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-pink-500 mr-2">/</span> Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              stack={project.stack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-black/40 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-2">{personalDetails.name}</h2>
            <p className="text-slate-500 text-sm">Building scalable backend systems & intelligent solutions.</p>
          </div>
          <div className="flex gap-6">
             {/* Uses links from data.ts */}
             {personalDetails.github && <a href={personalDetails.github} className="text-slate-400 hover:text-pink-400 transition hover:scale-110"><Github size={20} /></a>}
             {personalDetails.linkedin && <a href={personalDetails.linkedin} className="text-slate-400 hover:text-pink-400 transition hover:scale-110"><Linkedin size={20} /></a>}
             <a href={`mailto:${personalDetails.email}`} className="text-slate-400 hover:text-pink-400 transition hover:scale-110"><Mail size={20} /></a>
          </div>
        </div>
        <div className="text-center mt-8 text-slate-600 text-sm flex items-center justify-center gap-2">
          <Copyright size={14} /> {personalDetails.copyrightYear} {personalDetails.name}. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
