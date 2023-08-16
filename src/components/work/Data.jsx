import Work1 from "../../assets/assets/restaurantReservations.png";
import Work2 from "../../assets/assets/pokemonAPIject.png";
import Work3 from "../../assets/assets/weLoveMoviesRe.png";
import Work4 from "../../assets/assets/clinicals.PNG";
import Work5 from "../../assets/assets/flashCardAppRe.png";
import Work6 from "../../assets/assets/grubDashRe.png";
import Work7 from "../../assets/assets/arbibabesPortfolio.PNG";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Restaurant Reservations',
        category: 'fullstack',
        url: 'https://periodictables.vercel.app/dashboard',
        url2: 'https://github.com/EthenThinkful/Restaurant-Reservation-App', 
        description: 'PERN Stack Application developed for restaurant personnel to keep track of reservations and seating.'
    },
    {
        id: 2,
        image: Work2,
        title: 'PokemonAPIJect',
        category: 'fullstack',
        url: 'https://candid-tiramisu-895796.netlify.app/',
        url2: 'https://github.com/EthenThinkful/PokemonAPIject', 
        description: 'Passion project primarily being developed as a learning tactic for resourcing documentation as opposed to stack overflow and tutorials.'
    },
    {
        id: 3,
        image: Work3,
        title: 'Movie Reviews',
        category: 'backend',
        url: 'https://we-love-movies-frontend-red.vercel.app/',
        url2: 'https://github.com/EthenThinkful/WeLoveMovies',
        description: "Created an API to demonstrate my understanding of backend code and RESTful principles."
    },
    {
        id: 4,
        image: Work4,
        title: 'Clinical Data Logger',
        category: 'fullstack',
        url: 'http://clinicaldataloggerfe.s3-website-us-east-1.amazonaws.com/',
        url2: 'https://github.com/EthenThinkful/ClinicalDataLoggerBackend',
        description: 'After learning Java & Spring, built a full stack app with a Spring Boot API, React, & AWS.'
    },
    {
        id: 5,
        image: Work5,
        title: 'Study Card Application',
        category: 'frontend',
        url2: 'https://github.com/EthenThinkful/FlashCardApp', 
        description: 'Flashcard project that got me out of the React learning curve by using a plethora of React hooks.'
    },
    {
        id: 6, 
        image: Work6,
        title: 'GrubDash',
        category: 'backend',
        url: 'https://grub-dash-front-end-tawny.vercel.app/',
        url2: 'https://github.com/EthenThinkful/GrubDash', 
        description: "built an API with complex validation & connected it to a frontend that was developed by the frontend team."
    },
    {
        id: 7,
        image: Work7,
        title: 'Arbibabes (NFT Promo Site)',
        category: 'frontend',
        url: 'https://optichads.vercel.app/babes',
        description: 'Learned Typescript & Next.js, by contributing to frontend tickets per the development team.'
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