import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `AYMEN ANNOUN.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a  
        <strong className="text-stone-100"> Business Intelligence Consultant, Freelancer and Trainer</strong> and Microsoft Certified Professional
        with comprehensive accomplishments applying Data engineering and analytics to optimize the decision-making process.
      
      </p>

    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  Self-directed and driven Business Intelligence Consultant, Freelancer, Trainer, and Microsoft Certified Professional 
  with comprehensive accomplishments applying Data engineering & analytics to optimize the decision-making process. 
  Demonstrated expertise includes developing, maintaining, deploying, and managing reporting platforms for governments 
  and multinational firms. And recognized for executing critical tasks on production environments and performing high-impact 
  data migration operations during IT system transformation projects for leading companies.`,
  aboutItems: [
    {label: 'Location', text: 'Riyadh, Saudi Arabia', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Algerian', Icon: FlagIcon},
    {label: 'Interests', text: 'History, Piano, Guitar, Workout', Icon: SparklesIcon},
    {label: 'Study', text: 'Higher School of Computer Science', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Insight360', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  
  {
    name: 'TECHNICAL SKILLS',
    skills: [
      {
        name: 'BI: MSBI (SSIS, SSAS, SSRS, Power BI), Tableau,Talend',
        level: 9,
      },
      {
        name: 'DBMS:  Microsoft SQL Server, Postgres.',
        level: 7,
      },
      {
        name: 'Programming: Java, Node.js, PL/SQL.',
        level: 7,
      },
      {
        name: 'Operating systems: Linux, Windows.',
        level: 6,
      },
      {
        name: 'ERPs: MS Dynamics 365 Business Central.',
        level: 6,
      },
      {
        name: 'Projects Framework: Agile (Scrum).',
        level: 6,
      },
      {
        name: 'Modeling languages:	UML, BPMN, ArchiMate',
        level: 6,
      },
      {
        name: ' Other: Git, TFS, Jira Trello, Teams, Excel, Power Point.',
        level: 6,
      },


     
    ],
  },
  {
    name: 'SOFT SKILLS',
    skills: [
      {
        name: 'Sales, Purchases, Human ressources',
        level: 5,
      },
      {
        name: 'Problem solving',
        level: 8,
      },
      {
        name: 'Communication',
        level: 5,
      },
      {
        name: 'Team work & Collaboration',
        level: 4,
      },
      {
        name: 'Presentations',
        level: 5,
      },
     
      {
        name: 'Public speaking',
        level: 5,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'French',
        level: 7,
      },
      
    ],
  },
  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'SEP 2018 - OCT 2021',
    location: 'Higher National School of Computer Science (ESI ex INI)',
    title: 'State Engineer and master’s degree.',
    content: <div>
            <b> Major: </b> Information systems and technology  <br></br>
            <b> Grade: </b> Very good honors <br></br>
            <b> Location: </b>Algiers, Algeria
            </div>,
  },
  {
    date: 'SEP 2016 - SEP 2018',
    location: 'Higher National School of Computer Science (ESI SBA)',
    title: 'Preparatory class student',
    content: <div>
    <b> Location: </b>Sidi Bel Abbess, Algeria
    </div>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer 2',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Raouf TOUMI',
      text: 'Aymen is my favorite business analyst! He is always available to help us when needed, he strives for excellence and is a valuable team player. is strongest qualities are data analysis, migration, integration, and visualization, which were very helpful to the project we worked on together. He has the ability to work on multiple tasks and still be focused and deliver quality work. I can easily say he is one of the best in his field',
      image: 'https://media.licdn.com/dms/image/C4D03AQEilEJWezMkVQ/profile-displayphoto-shrink_400_400/0/1596574921657?e=1685577600&v=beta&t=prUWIuqTlIrz28bP2zWi1Z-frSjyX0jT_yiR3RodunM',
    },
    {
      name: 'Ahmed Lakhdari',
      text: 'Aymen has done an excellent job of research, discovery, and implementation around Business Intelligence projects with Microsoft Power BI, I also appreciate his ability to share his knowledge and prepare in advance presentations of his work. A big Bravo and a very good start to his professional career',
      image: 'https://media.licdn.com/dms/image/C4E03AQF7N0lpXLGSGA/profile-displayphoto-shrink_400_400/0/1516244156956?e=1685577600&v=beta&t=MF9blr2GI7jCAlOgmvkKgLOb7ZdL1a0Yb8vRYc51NHI',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
