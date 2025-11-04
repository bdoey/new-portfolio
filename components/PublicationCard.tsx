import React from 'react';
import { Publication } from '../types';
import { LinkIcon } from './icons';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <div className="p-6 rounded-lg bg-slate-900/70 ring-1 ring-slate-700 hover:ring-teal-400 transition-all">
        <h3 className="font-bold text-slate-200 text-lg leading-tight">
          {publication.title}
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          <span className="font-semibold">{publication.journal}</span> · <span>{publication.date}</span>
        </p>
        <p className="mt-2 text-xs text-slate-500">{publication.authors}</p>
        
        <p className="mt-4 text-sm leading-relaxed text-slate-400 border-l-2 border-slate-700 pl-4">
            {publication.abstract}
        </p>

        <div className="mt-4">
            <a 
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-teal-300 transition"
              href={publication.doiLink}
              target="_blank"
              rel="noreferrer noopener"
            >
                <LinkIcon className="h-4 w-4" />
                <span>DOI: {publication.doi}</span>
            </a>
        </div>
    </div>
  );
};
