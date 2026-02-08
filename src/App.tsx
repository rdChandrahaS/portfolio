import { useState } from 'react';
import { personalDetails, skills, projects, services } from './data';
import { Menu, X, Github, Linkedin, Mail, Copyright, Sun, Moon } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
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
  const [darkMode, setDarkMode] = useState(true); // Default to Dark Mode

  // Toggle Theme Function
  const toggleTheme = () => setDarkMode(!darkMode);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // --- THEME COLORS ---
  const theme = {
    bg: darkMode ? "bg-slate-950" : "bg-slate-50",
    text: darkMode ? "text-slate-100" : "text-slate-900",
    textSecondary: darkMode ? "text-slate-400" : "text-slate-600",
    nav: darkMode ? "bg-slate-900/80 border-white/10" : "bg-white/80 border-slate-200",
    card: darkMode ? "bg-slate-800/50 border-white/5" : "bg-white border-slate-200 shadow-sm",
    cardHover: darkMode ? "hover:shadow-pink-500/10" : "hover:shadow-lg",
    iconBg: darkMode ? "bg-slate-900/50" : "bg-slate-100",
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden transition-colors duration-300 ${theme.bg} ${theme.text}`}>
      
      {/* Clean Background (No more purple blobs) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Optional: Very subtle gradient for light mode */}
          {!darkMode && <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />}
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme.nav}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            {personalDetails.name}
          </motion.h1>
          
          <div className="flex items-center gap-6">
            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-8 font-medium ${theme.textSecondary}`}>
              {['About', 'Services', 'Skills', 'Projects'].map((item, i) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:text-pink-500 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button className={`md:hidden ${theme.text}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`md:hidden border-b overflow-hidden ${darkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <div className="p-4 space-y-4">
               {['About', 'Services', 'Skills', 'Projects'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`block hover:text-pink-500 ${theme.textSecondary}`}
                  onClick={() => setIsMenuOpen(false)}
                >
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
            <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium tracking-wider border border-pink-500/20">
              {personalDetails.role}
            </span>
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tight ${theme.text}`}>
              Hello, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
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
            <p className={`text-lg leading-relaxed max-w-xl mx-auto md:mx-0 ${theme.textSecondary}`}>
              {personalDetails.about}
            </p>
            
            <div className={`flex flex-wrap gap-4 text-sm mt-4 justify-center md:justify-start ${theme.textSecondary}`}>
              <span className="flex items-center gap-2">📍 {personalDetails.location}</span>
              <span className="flex items-center gap-2">🎂 Age: {calculateAge(personalDetails.dob)}</span>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4 flex justify-center md:justify-start"
            >
               <a href={`mailto:${personalDetails.email}`} className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-shadow">
                 Let's Talk
               </a>
            </motion.div>
          </motion.div>

          {/* --- PROFILE IMAGE (Corrected) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                 {/* REMOVED 'rotate-3' class to make it straight */}
                 <img 
                  src={personalDetails.imgUrl} 
                  alt={personalDetails.name} 
                  className={`w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border-2 shadow-2xl ${darkMode ? 'border-slate-700' : 'border-white'}`}
                />
              </motion.div>
              {/* Subtle Glow behind image */}
              <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-20 transition duration-500 ${darkMode ? 'bg-pink-600' : 'bg-pink-400'}`} />
          </motion.div>

        </section>

        {/* --- SERVICES --- */}
        <section id="services" className={`py-20 px-4 transition-colors duration-300 ${darkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
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
                  whileHover={{ y: -5 }}
                  className={`${theme.card} backdrop-blur p-4 rounded-xl text-center cursor-default transition-all duration-300 ${theme.cardHover}`}
                >
                  <div className={`${theme.iconBg} p-3 rounded-full w-fit mx-auto mb-3 transition-colors`}>
                     <service.icon className="text-pink-500" size={24} />
                  </div>
                  <h3 className={`font-bold text-sm mb-1 ${theme.text}`}>{service.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SKILLS --- */}
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
                  whileHover={{ scale: 1.1 }}
                  className={`${theme.card} p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ${theme.cardHover}`}
                >
                  <skill.icon size={48} style={{ color: skill.color }} />
                  <span className={`font-medium text-sm ${theme.textSecondary}`}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className={`py-20 px-4 max-w-6xl mx-auto`}>
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
                // Pass theme prop if needed, or handle inside ProjectCard with Context (Simpler to just let Card inherit text color)
              />
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className={`py-12 border-t ${darkMode ? 'bg-black/20 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className={`text-xl font-bold mb-2 ${theme.text}`}>{personalDetails.name}</h2>
              <p className={`text-sm ${theme.textSecondary}`}>Building scalable backend systems & intelligent solutions.</p>
            </div>
            <div className="flex gap-6">
               {personalDetails.github && <a href={personalDetails.github} className={`${theme.textSecondary} hover:text-pink-500 transition hover:scale-110`}><Github size={20} /></a>}
               {personalDetails.linkedin && <a href={personalDetails.linkedin} className={`${theme.textSecondary} hover:text-pink-500 transition hover:scale-110`}><Linkedin size={20} /></a>}
               <a href={`mailto:${personalDetails.email}`} className={`${theme.textSecondary} hover:text-pink-500 transition hover:scale-110`}><Mail size={20} /></a>
            </div>
          </div>
          <div className={`text-center mt-8 text-sm flex items-center justify-center gap-2 ${theme.textSecondary}`}>
            <Copyright size={14} /> {personalDetails.copyrightYear} {personalDetails.name}. All Rights Reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
