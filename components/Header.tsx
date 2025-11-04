import React from 'react';
import { Resume } from '../types';
import { GithubIcon, LinkedInIcon, FacebookIcon, TwitterIcon } from './icons';

interface HeaderProps {
    resume: Resume;
}

const socialLinks = [
    { href: 'https://github.com/bdoey', name: 'GitHub', icon: GithubIcon },
    { href: 'https://www.linkedin.com/in/bdoey', name: 'LinkedIn', icon: LinkedInIcon },
    { href: 'https://twitter.com/bdoey', name: 'Twitter', icon: TwitterIcon },
    { href: 'https://www.facebook.com/bdoey', name: 'Facebook', icon: FacebookIcon },
];

export const Header: React.FC<HeaderProps> = ({ resume }) => {
    return (
        <header className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                    src="https://picsum.photos/seed/avatar/128/128" 
                    alt="Brandon Doey" 
                    className="rounded-full h-32 w-32 ring-2 ring-slate-600"
                />
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
                        {resume.contact.name}
                    </h1>
                    <h2 className="mt-2 text-lg sm:text-xl font-medium tracking-tight text-slate-300">
                        {resume.contact.title}
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto md:mx-0">
                        {resume.summary}
                    </p>
                    <ul className="mt-6 flex items-center justify-center md:justify-start gap-4" aria-label="Social media">
                        {socialLinks.map(link => (
                             <li key={link.name} className="shrink-0">
                                <a className="block text-slate-400 hover:text-teal-300 transition" href={link.href} target="_blank" rel="noreferrer noopener" aria-label={link.name}>
                                    <span className="sr-only">{link.name}</span>
                                    <link.icon className="h-6 w-6" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};
