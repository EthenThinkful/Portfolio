import Work1 from "../../assets/assets/restaurantReservations.png";
import Work2 from "../../assets/assets/clinicals.PNG";
import Work3 from "../../assets/assets/weLoveMovies.png";
import Work4 from "../../assets/assets/grubDash.png";
import Work5 from "../../assets/assets/flashCardApp.png";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Restaurant reservations',
        category: 'fullstack',
        url: 'https://periodictables.vercel.app/dashboard',
        url2: 'https://github.com/EthenThinkful/Restaurant-Reservation-App'
    },
    {
        id: 2,
        image: Work2,
        title: 'Clinical Data Logger',
        category: 'fullstack',
        url: 'http://clinicaldataloggerfe.s3-website-us-east-1.amazonaws.com/',
        url2: 'https://github.com/EthenThinkful/ClinicalDataLoggerBackend'
    },
    {
        id: 3,
        image: Work3,
        title: 'Movie reviews',
        category: 'backend',
        url: 'https://we-love-movies-frontend-red.vercel.app/',
        url2: 'https://github.com/EthenThinkful/WeLoveMovies'
    },
    {
        id: 4,
        image: Work4,
        title: 'GrubDash',
        category: 'backend',
        url: 'https://grub-dash-front-end-tawny.vercel.app/',
        url2: 'https://github.com/EthenThinkful/GrubDash'
    },
    {
        id: 5,
        image: Work5,
        title: 'Study card application',
        category: 'frontend',
        url2: 'https://github.com/EthenThinkful/FlashCardApp'
    }
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