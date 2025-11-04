import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { LinkIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.a 
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        className="block p-6 rounded-lg bg-slate-900/70 ring-1 ring-slate-700 transition-all group h-full shadow-lg hover:shadow-teal-400/10 hover:ring-teal-400/80"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
        <img
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="rounded-md object-cover w-full h-32 mb-4 border border-slate-700"
            src={project.imageUrl}
        />
        <h3 className="font-bold text-slate-200 group-hover:text-teal-300 transition">
            {project.title}
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>
        <div className="mt-4">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-300">
                <LinkIcon className="h-4 w-4" />
                <span>View Project</span>
            </div>
        </div>
    </motion.a>
  );
};