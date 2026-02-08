import { useState } from 'react';
import { personalDetails, skills, projects, services } from './data';
import { Menu, X, Github, Linkedin, Mail, Copyright } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

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

  // Animation Variants (The "Dynamic" Logic)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Stagger effect for children
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 } // Spring physics
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-900/20 blur-[120px]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            {personalDetails.name}
          </motion.h1>
          
          <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
            {['About', 'Services', 'Skills', 'Projects'].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-pink-400 transition"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
            >
              <div className="p-4 space-y-4">
               {['About', 'Services', 'Skills', 'Projects'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-slate-300 hover:text-pink-400" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section id="about" className="pt-40 pb-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 min-h-[85vh]">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium tracking-wider border border-pink-500/20">
              {personalDetails.role}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Hello, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
                 {/* DYNAMIC TYPING EFFECT */}
                 <TypeAnimation
                    sequence={[
                      personalDetails.name,
                      1000,
                      'A Developer',
                      1000,
                      'A Creator',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              {personalDetails.about}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-4 justify-center md:justify-start">
              <span className="flex items-center gap-2">📍 {personalDetails.location}</span>
              <span className="flex items-center gap-2">🎂 Age: {calculateAge(personalDetails.dob)}</span>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4 flex justify-center md:justify-start"
            >
               <a href={`mailto:${personalDetails.email}`} className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-pink-500/20">
                 Let's Talk
               </a>
            </motion.div>
          </motion.div>

          {/* Floating Image with Physics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                 <img 
                  src={personalDetails.imgUrl} 
                  alt={personalDetails.name} 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl rotate-3 border-2 border-slate-700 shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500" />
          </motion.div>

        </section>

        {/* --- SERVICES (Staggered Entry) --- */}
        <section id="services" className="py-20 px-4 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              <span className="text-pink-500 mr-2">/</span> What I Do?
            </h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {services.map((service) => (
                <motion.div 
                  key={service.title} 
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                  className="bg-slate-800/40 backdrop-blur border border-white/5 p-4 rounded-xl text-center cursor-pointer"
                >
                  <div className="bg-slate-900/50 p-3 rounded-full w-fit mx-auto mb-3">
                     <service.icon className="text-pink-400" size={24} />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{service.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SKILLS (Pop-in Animation) --- */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              <span className="text-pink-500 mr-2">/</span> Technical Skills
            </h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6"
            >
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="bg-slate-800/50 border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-pink-500/10 cursor-default"
                >
                  <skill.icon size={48} style={{ color: skill.color }} />
                  <span className="font-medium text-slate-300 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
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
    </div>
  );
}

export default App;
