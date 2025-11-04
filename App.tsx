import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { PublicationCard } from './components/PublicationCard';
import { ProjectCard } from './components/ProjectCard';
import { CursorSpotlight } from './components/CursorSpotlight';
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
        const listVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.1,
                },
            },
        };

        const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
        };

        switch (activeTab) {
            case Tab.Resume:
                return <Resume resume={RESUME_DATA} />;
            case Tab.Publications:
                return (
                    <motion.div 
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        {/* FIX: Wrap PublicationCard in motion.div to handle animation variants, making the component reusable. */}
                        {PUBLICATIONS.map((pub, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <PublicationCard publication={pub} />
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case Tab.Projects:
                return (
                    <motion.div 
                        className="space-y-12"
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {PROJECT_CATEGORIES.map(({ category, intro, items }) => (
                            <motion.section key={category} variants={itemVariants}>
                                <h3 className="text-xl font-bold text-slate-200 mb-2">{category}</h3>
                                <p className="mb-6 text-slate-400">{intro}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {items?.map((project, index) => (
                                        <ProjectCard key={index} project={project} />
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="fixed inset-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <CursorSpotlight />
            <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <Header resume={RESUME_DATA} />
                    <main className="mt-12">
                        <div className="mb-8 border-b border-slate-700">
                            <nav className="relative flex space-x-6" aria-label="Tabs">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`${
                                            activeTab === tab.id
                                                ? 'text-teal-300'
                                                : 'text-slate-400 hover:text-slate-200'
                                        } relative whitespace-nowrap py-3 px-1 font-medium text-sm transition-colors focus:outline-none z-10`}
                                    >
                                        {tab.name}
                                        {activeTab === tab.id && (
                                            <motion.span
                                                layoutId="bubble"
                                                className="absolute inset-0 border-b-2 border-teal-400"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="rounded-lg bg-slate-800/50 p-6 shadow-lg ring-1 ring-white/10"
                            >
                               {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default App;