import React, { useState } from 'react';
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { PublicationCard } from './components/PublicationCard';
import { ProjectCard } from './components/ProjectCard';
import { Tab } from './types';
import { PUBLICATIONS, PROJECT_CATEGORIES, RESUME_DATA } from './constants';

const TABS = [
    { id: Tab.Resume, name: 'Resume' },
    { id: Tab.Publications, name: 'Publications' },
    { id: Tab.Projects, name: 'Projects' },
];

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.Resume);

    const renderContent = () => {
        switch (activeTab) {
            case Tab.Resume:
                return <Resume resume={RESUME_DATA} />;
            case Tab.Publications:
                return (
                    <div className="space-y-6">
                        {PUBLICATIONS.map((pub, index) => (
                            <PublicationCard key={index} publication={pub} />
                        ))}
                    </div>
                );
            case Tab.Projects:
                return (
                    <div className="space-y-12">
                        {PROJECT_CATEGORIES.map(({ category, intro, items }) => (
                            <section key={category}>
                                <h3 className="text-xl font-bold text-slate-200 mb-2">{category}</h3>
                                <p className="mb-6 text-slate-400">{intro}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {items?.map((project, index) => (
                                        <ProjectCard key={index} project={project} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <Header resume={RESUME_DATA} />
                    <main className="mt-8">
                        <div className="mb-8 border-b border-slate-700">
                            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`${
                                            activeTab === tab.id
                                                ? 'border-teal-400 text-teal-300'
                                                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
                                        } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors focus:outline-none`}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                        <div className="rounded-lg bg-slate-800/50 p-6 shadow-lg ring-1 ring-white/10">
                           {renderContent()}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default App;