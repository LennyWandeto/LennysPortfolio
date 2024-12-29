import picture1 from '../public/assets/examprodem.png'
import picture2 from '../public/assets/moringaflix.png'
import picture3 from '../public/assets/peashooterdemo.png'
import picture4 from '../public/assets/chatapppic.png'
import flaskico from '../public/assets/Flask.svg'
import css3ico from '../public/assets/CSS3.svg'
import firebaseico from '../public/assets/Firebase.svg'
import jsico from '../public/assets/JavaScript.svg'
import nodeico from '../public/assets/Node.js.svg'
import socketico from '../public/assets/Socket.io.svg'
import swiftico from '../public/assets/Swift.svg'

export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Steve Otieno',
      position: 'Teacher at Moringa School',
      img: 'assets/review1.png',
      review:
        'Lenny is an excellent student who is absolutely passionate about his work experience, and the things that he does. I would absolutely recommend him for the job.',
    },
    {
      id: 2,
      name: 'Solomon Kitonyi',
      position: 'Teacher at Moringa School',
      img: 'assets/review2.png',
      review:
        'The creativity that Lenny shows in any of his work is amazing. He backs it up with even better work ethic and a sharp intuition for his code. It would be a good choice to hire him. ',
    },
    // {
    //   id: 3,
    //   name: 'John Dohsas',
    //   position: 'Project Manager at UrbanTech ',
    //   img: 'assets/review3.png',
    //   review:
    //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    // },
    // {
    //   id: 4,
    //   name: 'Ether Smith',
    //   position: 'CEO of BrightStar Enterprises',
    //   img: 'assets/review4.png',
    //   review:
    //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    // },
  ];
  
  export const myProjects = [
    {
      title: 'ExamerPro - Exam Management System',
      desc: 'ExamerPro is an advanced managment software for seamless access to making and doing exams. It allows students to do exams efficiently and examiners to easily grade exams. ',
      subdesc:
        'ExamerPro uses React components and CSS for the frontend development, and it uses Flask and Python for backend integration. It uses Stripe for payment integration.',
      href: 'https://github.com/MERCYGATUNE/EXAMERPROfrontend',
      texture: picture1,
      logo: '/assets/logoproj1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: css3ico,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: flaskico,
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
        },
      ],
    },
    {
      title: 'MoringaFlix - Netflix Clone',
      desc: 'MoringaFlix is a website meant to allow a user to seamlessly access a trailer of a movie and watch it in a player. It has secure login credentials that allow each user to safely access the site.',
      subdesc:
        "Built with React and CSS framework, MoringaFlix shines in it's frontend, using certain components such as Toast for easy notifications. It uses a Firebase backend and an open-source API to easily access movies.",
      href: 'https://github.com/MercyOroo1/Silverback-Group-One-React-Project',
      texture: picture2,
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: css3ico,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: firebaseico,
        },
      ],
    },
    {
      title: 'PeaShoot - JavaScript Multiplayer Shooting Game',
      desc: 'PeaShoot was a project inspired by my curiosity to delve into the multiplayer world. I was able to accept this challenge by building a multiplayer shooting game; the cremè de la cremè for multiplayer.',
      subdesc:
        'I used JavaScript on the Frontend and Node.js on the backend together with Socket.io to allow real-time multiplayer functionality. This was paired with other JS frameworks such as Canvas to enhance the frontend.',
      href: 'https://github.com/LennyWandeto/JSGameAttempt',
      texture: picture3,
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: jsico,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: nodeico,
        },
        {
          id: 3,
          name: 'TypeScript',
          path: socketico,
        },
      ],
    },
    {
      title: 'Chatter - SwiftUI Chatting App',
      desc: 'Chatter is a unique chatting application that allows users to easily chat using realtime messaging in a clean interface. This is a demo of what I wanted the chat app to appear.',
      subdesc:
        'This application is a demo that currently uses SwiftUI for the frontend and Firebase for the backend and this was my very first try with making an mobile application on iOS. ',
      href: 'https://github.com/LennyWandeto/ChatAppSwift',
      texture: picture4,
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: swiftico,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: firebaseico,
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];