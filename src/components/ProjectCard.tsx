import { Github, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt'; // Import Tilt
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, stack, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        className="h-full"
      >
        <div className="bg-slate-800/50 backdrop-blur border border-white/10 rounded-xl p-6 h-full flex flex-col justify-between hover:border-pink-500/30 transition-colors shadow-lg">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {stack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs font-medium bg-slate-900/50 text-pink-300 rounded border border-pink-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
              )}
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
