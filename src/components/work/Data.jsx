//tech stack logos
import reactSvg from "../../assets/assets/logos/react.svg";
import nodeSvg from "../../assets/assets/logos/nodejs.svg";
import javascriptSvg from "../../assets/assets/logos/javascript.svg";
import typescriptSvg from "../../assets/assets/logos/typescript.svg";
import nextjsSvg from "../../assets/assets/logos/nextjs.svg";
import postgresqlSvg from "../../assets/assets/logos/postgresql.svg";
import springSvg from "../../assets/assets/logos/spring.svg";
import javaSvg from "../../assets/assets/logos/java.svg";
import jestSvg from "../../assets/assets/logos/jest.svg";
import dockerSvg from "../../assets/assets/logos/docker.svg";
import awsSvg from "../../assets/assets/logos/aws.svg";
import expressSvg from "../../assets/assets/logos/express.svg";
import bootstrapSvg from "../../assets/assets/logos/bootstrap.svg";
import knexSvg from "../../assets/assets/logos/knex.svg";
import tailwindSvg from "../../assets/assets/logos/tailwindcss.svg";
import cssSvg from "../../assets/assets/logos/css3.svg";
import html5Svg from "../../assets/assets/logos/html5.svg";

import Work1 from "../../assets/assets/restaurantReservations.png";
import Work2 from "../../assets/assets/poke.PNG";
import Work3 from "../../assets/assets/weLoveMoviesRe.png";
import Work4 from "../../assets/assets/clinicals.PNG";
import Work5 from "../../assets/assets/flashCardAppRe.png";
import Work6 from "../../assets/assets/grubDashRe.png";
import Work7 from "../../assets/assets/arbibabesPortfolio.PNG";
import work8 from "../../assets/assets/localLibrary.PNG";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: `Restaurant Reservations`,
        category: 'fullstack',
        url: 'https://periodictables.vercel.app/dashboard',
        url2: 'https://github.com/EthenThinkful/Restaurant-Reservation-App', 
        description: "Manage your restaurant's reservations and tables.",
        stack: [reactSvg, nodeSvg, postgresqlSvg, jestSvg, expressSvg, knexSvg, cssSvg]
    },
    {
        id: 2,
        image: Work2,
        title: 'Poke Booklets',
        category: 'fullstack',
        url: 'https://candid-tiramisu-895796.netlify.app/',
        url2: 'https://github.com/EthenThinkful/PokemonAPIject', 
        description: 'Interact and share your Pokemon card collectibles.',
        stack: [reactSvg, postgresqlSvg, javaSvg, springSvg, dockerSvg, tailwindSvg]
    },
    {
        id: 3,
        image: Work3,
        title: 'Movie Reviews',
        category: 'backend',
        url: 'https://we-love-movies-frontend-red.vercel.app/',
        url2: 'https://github.com/EthenThinkful/WeLoveMovies',
        description: "Created an API to demonstrate my understanding of backend code and RESTful principles.",
        stack: [nodeSvg, postgresqlSvg, expressSvg, knexSvg]
    },
    {
        id: 4,
        image: Work4,
        title: 'Clinical Data Logger',
        category: 'fullstack',
        url: 'http://clinicaldataloggerfe.s3-website-us-east-1.amazonaws.com/',
        url2: 'https://github.com/EthenThinkful/ClinicalDataLoggerBackend',
        description: 'Clinical data logger used to log and track patient details.',
        stack: [reactSvg, javaSvg, springSvg, awsSvg, cssSvg]
    },
    {
        id: 5,
        image: Work5,
        title: 'Study Card Application',
        category: 'frontend',
        url2: 'https://github.com/EthenThinkful/FlashCardApp', 
        description: 'Flashcard project that got me out of the React learning curve by using a plethora of React hooks.',
        stack: [reactSvg, javascriptSvg, bootstrapSvg]
    },
    {
        id: 6, 
        image: Work6,
        title: 'GrubDash',
        category: 'backend',
        url: 'https://grub-dash-front-end-tawny.vercel.app/',
        url2: 'https://github.com/EthenThinkful/GrubDash', 
        description: "built an API with complex validation & connected it to a frontend that was developed by the frontend team.",
        stack: [nodeSvg, postgresqlSvg, expressSvg, knexSvg]
    },
    {
        id: 7,
        image: Work7,
        title: 'NFT Promo Site',
        category: 'frontend',
        url: 'https://optichads.vercel.app/babes',
        description: 'Frontend Developer for an NFT project.',
        stack: [reactSvg, nextjsSvg, typescriptSvg, tailwindSvg]
    },
    {
        id: 8,
        image: work8,
        title: 'Local Library',
        category: 'frontend',
        url: 'https://ethenthinkful.github.io/local-library/public/',
        url2: 'https://github.com/EthenThinkful/local-library', 
        description: 'Visualize data about your library.',
        stack: [javascriptSvg, html5Svg]
    },
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'frontend',
    },
    {
        name: 'backend',
    },
    {
        name: 'fullstack',
    }
]