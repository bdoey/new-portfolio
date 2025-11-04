import React from 'react';
import { motion } from 'framer-motion';
import { Resume } from '../types';
import { BriefcaseIcon, AcademicCapIcon, LinkIcon, EnvelopeIcon, PhoneIcon } from './icons';

interface ResumeProps {
  resume: Resume;
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
      opacity: 1,
      transition: {
          when: "beforeChildren",
          staggerChildren: 0.15,
      },
  },
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Section: React.FC<{title: string, icon: React.ReactNode, children: React.ReactNode}> = ({ title, icon, children }) => (
    <motion.section 
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-300 mb-4">
            {icon}
            {title}
        </h3>
        <motion.div 
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            {children}
        </motion.div>
    </motion.section>
);

export const ResumeComponent: React.FC<ResumeProps> = ({ resume }) => {
  return (
    <div>
      <motion.section 
          className="mb-8 p-4 bg-slate-900/50 rounded-lg ring-1 ring-slate-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
      >
        <h3 className="text-lg font-bold text-slate-300 mb-2">Contact Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <a href={`mailto:${resume.contact.email}`} className="flex items-center gap-2 hover:text-teal-300 transition"><EnvelopeIcon className="h-4 w-4"/> {resume.contact.email}</a>
          <a href={`tel:${resume.contact.phone.replace(/\./g, '-')}`} className="flex items-center gap-2 hover:text-teal-300 transition"><PhoneIcon className="h-4 w-4"/> {resume.contact.phone}</a>
          <a href={resume.contact.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-300 transition"><LinkIcon className="h-4 w-4"/> {resume.contact.website}</a>
          <p className="flex items-center gap-2">{resume.contact.location}</p>
        </div>
      </motion.section>

      <Section title="Professional Experience" icon={<BriefcaseIcon className="h-5 w-5" />}>
          {resume.experience.map((job, index) => (
              <motion.div key={index} variants={itemVariants} className="pl-4 border-l-2 border-slate-700">
                  <h4 className="font-bold text-slate-200">{job.title}</h4>
                  <p className="text-sm text-slate-400">{job.company} | {job.dates}</p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                      {job.description.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
              </motion.div>
          ))}
      </Section>

      <Section title="Education" icon={<AcademicCapIcon className="h-5 w-5" />}>
        {resume.education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="pl-4 border-l-2 border-slate-700">
                <h4 className="font-bold text-slate-200">{edu.degree}</h4>
                <p className="text-sm text-slate-400">{edu.institution}</p>
                <p className="mt-1 text-sm">{edu.description}</p>
            </motion.div>
        ))}
      </Section>
      
      <Section title="Core Competencies" icon={<BriefcaseIcon className="h-5 w-5" />}>
         <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {resume.skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <h4 className="font-bold text-slate-200 mb-2">{skill.title}</h4>
                    <div className="flex flex-wrap gap-2">
                        {skill.points.map((point, i) => (
                           <span key={i} className="bg-teal-400/10 text-teal-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{point}</span>
                        ))}
                    </div>
                </motion.div>
            ))}
         </motion.div>
      </Section>
    </div>
  );
};

export { ResumeComponent as Resume };