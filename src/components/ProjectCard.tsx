import { Github, ExternalLink, Folder } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string; // Optional: Link to GitHub repo
  liveUrl?: string;   // Optional: Link to live demo
}

const ProjectCard = ({ title, description, stack, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-900/20 border border-transparent hover:border-cyan-500/30 relative group">
      
      {/* Card Header: Folder Icon & Links */}
      <div className="flex justify-between items-center mb-6">
        <Folder className="text-cyan-400" size={40} strokeWidth={1.5} />
        
        <div className="flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition"
              title="View Source Code"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition"
              title="View Live App"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 mb-6 leading-relaxed text-sm">
        {description}
      </p>

      {/* Tech Stack Footer */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
        {stack.map((tech) => (
          <span key={tech} className="text-xs font-mono text-cyan-300/80">
            {tech}
          </span>
        ))}
      </div>
      
    </div>
  );
};

export default ProjectCard;