import React from 'react';
import { Section } from '../types';
// FIX: Changed import from non-existent 'PROJECTS' to 'PROJECT_CATEGORIES' to align with constants.ts.
import { PUBLICATIONS, PROJECT_CATEGORIES } from '../constants';
import { PublicationCard } from './PublicationCard';
import { ProjectCard } from './ProjectCard';

interface ContentProps {
  sectionRefs: React.MutableRefObject<Record<Section, HTMLDivElement | null>>;
}

export const Content: React.FC<ContentProps> = ({ sectionRefs }) => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-0 lg:pr-24 xl:pr-48">
      <div
        id={Section.Publications}
        // FIX: Corrected ref callback to not return a value, which was causing a TypeScript error.
        ref={(el) => { sectionRefs.current[Section.Publications] = el; }}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Featured Publications"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Publications</h2>
        </div>
        <div>
          <ul className="group/list">
            {PUBLICATIONS.map((pub, index) => (
              <li key={index} className="mb-12">
                <PublicationCard publication={pub} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FIX: Updated logic to iterate over 'PROJECT_CATEGORIES' array instead of 'PROJECTS' object. */}
      {PROJECT_CATEGORIES.map(({ category, intro, items }) => {
          const sectionId = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
          return (
            <div
              key={sectionId}
              id={sectionId}
              // FIX: Corrected ref callback to not return a value.
              ref={(el) => { sectionRefs.current[sectionId as Section] = el; }}
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label={category}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                {/* FIX: Used 'category' instead of non-existent 'title' property. */}
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{category}</h2>
              </div>
              <div>
                <p className="mb-8">{intro}</p>
                {items ? (
                  <ul className="group/list">
                    {items.map((project, index) => (
                      <li key={index} className="mb-12">
                        <ProjectCard project={project} />
                      </li>
                    ))}
                  </ul>
                ) : (
                    <p className="text-center font-semibold text-slate-300 border border-dashed border-slate-600 rounded-lg p-8">
                        Coming Soon!
                    </p>
                )}
              </div>
            </div>
          );
        })}
    </main>
  );
};
