import { GrGraphQl } from 'react-icons/gr'
import {
    DiJavascript1,
    DiReact,
    DiSass,
    DiHtml5,
    DiMysql,
} from 'react-icons/di'
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiPhp,
    SiGithub,
} from 'react-icons/si'

export const data = {
    bio: {
        title: 'Front End Developer',
        quality: 'All about high quality,',
        performance: 'high preformance,',
        optimize: 'SEO optimized websites',
        email: 'contact@nasrah.dev',
    },
    about: {
        title: 'About',
        paragrah:
            'A London based Junior front-end developer looking for projects to work on, I build fun, responsive, and dynamic websites, and believe in creating code that is readable, modular and organised. I like to work with different technology stacks to build applications that are scalable and efficient.',
    },
    skills: [
        {
            icon: DiJavascript1,
            title: 'Javascript',
        },
        {
            icon: DiReact,
            title: 'React.js',
        },
        {
            icon: SiNextdotjs,
            title: 'Next.js',
        },
        {
            icon: SiTypescript,
            title: 'Typescript',
        },
        {
            icon: DiSass,
            title: 'SCSS',
        },
        {
            icon: SiTailwindcss,
            title: 'Tailwindcss',
        },
        {
            icon: GrGraphQl,
            title: 'Graphql',
        },
        {
            icon: DiHtml5,
            title: 'HTML5',
        },
        {
            icon: SiPhp,
            title: 'PHP',
        },
        {
            icon: DiMysql,
            title: 'MySQL',
        },
        {
            icon: SiGithub,
            title: 'Github',
        },
    ],
    projects: [
        {
            id: '1',
            title: 'Portfolio',
            image: 'images/gallery-1.png',
            description:
                'Portfolio website, designed and developed using next.js, typescript, nexus, apollo',
            website: 'https://nasrah.dev',
            code: 'https://github.com/nasrah01/nextjs-react-portfolio',
        },
        {
            id: '2',
            title: 'YouTube Clone',
            image: 'images/youtube-1.png',
            description:
                ' built with React, duplicating functionalities found on youtube, making api requests to retreive data for the most popular videos to include on the recommended videos section, search for videos, and play selected videos.',
            website: 'https://youtube-clone-bx5dkw75o-nasrah01.vercel.app/',
            code: 'https://github.com/nasrah01',
        },
        {
            id: '3',
            title: 'YouTube Clone',
            image: 'images/youtube-1.png',
            description:
                ' built with React, duplicating functionalities found on youtube, making api requests to retreive data for the most popular videos to include on the recommended videos section, search for videos, and play selected videos.',
            website: 'https://youtube-clone-bx5dkw75o-nasrah01.vercel.app/',
            code: 'https://github.com/nasrah01',
        },
    ],
}
