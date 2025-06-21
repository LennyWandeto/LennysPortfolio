import picture1 from '../public/assets/examprodem.png'
import picture2 from '../public/assets/moringaflix.png'
import picture3 from '../public/assets/peashooterdemo.png'
import picture4 from '../public/assets/chatapppic.png'
import picture5 from '../public/assets/handwritio-demo.png'
import picture6 from '../public/assets/examlectica-demo.png'
import flaskico from '../public/assets/Flask.svg'
import css3ico from '../public/assets/CSS3.svg'
import firebaseico from '../public/assets/Firebase.svg'
import jsico from '../public/assets/JavaScript.svg'
import nodeico from '../public/assets/Node.js.svg'
import socketico from '../public/assets/Socket.io.svg'
import swiftico from '../public/assets/Swift.svg'
import nextico from '../public/assets/nextjs.svg'
import supabaseico from '../public/assets/supabase.svg'
import geminiico from '../public/assets/gemini.svg'
import flutterico from '../public/assets/flutter.svg'
import azureico from '../public/assets/azure.svg'
import paystackico from '../public/assets/paystack.svg'


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
  ];
  
  export const myProjects = [
    {
      title: 'Examlectica - AI Document Analysis & Learning Tool',
      desc: 'Examlectica is an intelligent application that transforms documents into comprehensive learning materials. It automatically generates summaries, creates flashcards, and produces quiz questions to enhance the learning experience.',
      subdesc:
        'Developed using Next.js for the frontend framework, Supabase for database and backend services, and Google Gemini AI for document analysis and content generation. The app streamlines the process of creating study materials from any document. It also uses Paystack for payment integration.',
      href: 'https://examlectica.vercel.app/',
      texture: picture6,
      logo: '/assets/project-logo6.png',
      logoStyle: {
        background: 'linear-gradient(135deg, #E0E7FF 0%, #FED7AA 100%)',
        border: '0.2px solid #A78BFA',
        boxShadow: '0px 0px 60px 0px #A78BFA4D',
      },
      spotlight: '/assets/spotlight1.png',
      referrer: 'Visit Website',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: nextico,
        },
        {
          id: 2,
          name: 'Supabase',
          path: supabaseico,
        },
        {
          id: 3,
          name: 'Gemini AI',
          path: geminiico,
        },
        {
          id: 4,
          name: 'Paystack',
          path: paystackico,
        },
      ],
    },
    {
      title: 'Handwritio - AI Handwriting Recognition App',
      desc: 'Handwritio is an AI-powered application that converts handwritten text to digital text with high accuracy. It leverages advanced machine learning to recognize and transcribe handwritten notes, making them easily editable and searchable.',
      subdesc:
        'Built with Flutter for cross-platform mobile development, Firebase for backend services and user authentication, and Azure AI services for the handwriting recognition capabilities. The app provides a seamless experience for digitizing handwritten content.',
      href: 'https://handwritio.vercel.app/',
      texture: picture5,
      logo: '/assets/handwritio-icon.png',
      logoStyle: {
        backgroundColor: '#FEF3C7',
        border: '0.2px solid #F59E0B',
        boxShadow: '0px 0px 60px 0px #F59E0B4D',
      },
      spotlight: '/assets/spotlight5.png',
      referrer: 'Visit Website',
      tags: [
        {
          id: 1,
          name: 'Flutter',
          path: flutterico,
        },
        {
          id: 2,
          name: 'Firebase',
          path: firebaseico,
        },
        {
          id: 3,
          name: 'Azure AI',
          path: azureico,
        },
      ],
    }, 
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
      referrer: 'Check GitHub Repo',
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
      href: 'https://moringaflix.netlify.app/login',
      texture: picture2,
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      referrer: 'Visit Website',
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
      referrer: 'Check GitHub Repo',
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
      referrer: 'Check GitHub Repo',
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
      name: 'Florida Gulf Coast University',
      pos: 'Computer Software Engineer',
      duration: 'September 2024 - Present',
      title: "I am currently studying software engineering at FGCU to perfect my art for coding. I intend to study the basis of computer studies to learn how to create different types of software, and even integrate software with hardware to easily perform in various situations.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Moringa School',
      pos: 'Web Developer',
      duration: 'February 2024 - August 2024',
      title: "Moringa School is a software engineering bootcamp that is based from the curriculum of Flatiron School. Moringa School was my jumpstart as a software engineer, where I derived most of my projects from, and where I gained the capability to succeed.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
  ];