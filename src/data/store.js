import { info } from 'sass';
import {reactive} from 'vue';
export const store = reactive({
    navArray: [
        'Home',
        'Features +',
        'Achievement',
        'Blog +',
        'Contact'
    ],
    whoweareIcons: {
        firstIcon: 'images/icon-1.png',
        secondIcon: 'images/icon-2.png',
        thirdIcon: 'images/icon-3.png',
    },
    smallLogos: {
        vsLogo: '/images/vs.png',
        ninjaLogo: '/images/team-1.png',
        vikingLogo: '/images/team-2.png',
        dragonLogo: '/images/teamsm-1.png',
        wolvesLogo: '/images/teamsm-2.png',
        frogsLogo: '/images/teammd-3.png',
        monkeyhatLogo: '/images/teamsm-4.png',        
        sharkLogo: '/images/teamsm-5.png',
        lionLogo: '/images/teamsm-6.png',
        robotLogo: '/images/teamsm-7.png',
        witchLogo: '/images/teamsm-8.png',
        skullLogo: '/images/teamsm-9.png',        
        catLogo: '/images/teamsm-10.png',
        redDragonLogo: '/images/teamsm-11.png',
        monkeyLogo: '/images/teamsm-12.png',
        tigersLogo: '/images/teammd-4.png',
        sharkLogo: '/images/teammd-5.png'
    },
    socialLogos: [ 
        '/images/social-1.png',
        '/images/social-2.png',
        '/images/social-3.png',
    ],
    matchesLogos: [
        {
            logo1: '/images/teamsm-1.png',
            logo2: '/images/teamsm-2.png',
        },
        {
            logo1: '/images/teamsm-7.png',
            logo2: '/images/teamsm-8.png',
        },
        {
            logo1: '/images/teamsm-3.png',
            logo2: '/images/teamsm-4.png',
        },
        {
            logo1: '/images/teamsm-9.png',
            logo2: '/images/teamsm-10.png',
        },
        {
            logo1: '/images/teamsm-5.png',
            logo2: '/images/teamsm-6.png',
        },
        {
            logo1: '/images/teamsm-11.png',
            logo2: '/images/teamsm-12.png',
        },
    ],
    slidesCards: [
        {
            logo: '/images/teammd-5.png',
            name: 'Shark Team',
            color: 'blue',
        },
        {
            logo: '/images/teammd-2.png',
            name: 'Viking Team'
        },
        {
            logo: '/images/teammd-1.png',
            name: 'Dragon Team',
            color: 'yellow'
        },
        {
            logo: '/images/teammd-3.png',
            name: 'Frogs Team',
            color: 'green'
        },
        {
            logo: '/images/teammd-4.png',
            name: 'Tigers Team',
            color: 'purple'
        },
        {
            logo: '/images/teamsm-4.png',
            name: 'Monkey Team',
            color: 'orange'
        }
    ],
    shopArray: [
        {
            shirt: '/public/images/01 (1).jpg',
            nameProduct: 'Blue t-shirt',
            price: '380$'
        },
        {
            shirt: '/public/images/02 (1).jpg',
            nameProduct: 'Green t-shirt',
            price: '380$'
        },
        {
            shirt: '/public/images/01 (1).jpg',
            nameProduct: 'Blue t-shirt',
            price: '380$'
        },
        {
            shirt: '/public/images/02 (1).jpg',
            nameProduct: 'Blue t-shirt',
            price: '380$'
        }
    ],
    liveStreaming1: [
        {
            image: '/public/images/01.jpg',
            title: '2022 Lvp Superliga Orange Summer'
        },
        {
            image: '/public/images/livestreaming02.jpg',
            title: 'Lorem Ipsum Dolor Sit Amet'
        }
    ],
    liveStreaming2: [
        {
            image: '/public/images/livestreaming01.jpg',
            title: 'Can i add my local bank'
        },
        {
            image: '/public/images/livestreaming002.jpg',
            title: 'Lorem Ipsum Dolor Sit.'
        },
        {
            image: '/public/images/05.jpg',
            title: 'Where can i redeem'
        }
    ],
    partnersArray1: [
        {
            image: '/public/images/07.png'
        },
        {
            image: '/public/images/08.png'
        },
        {
            image: '/public/images/06.png'
        },
        {
            image: '/public/images/04.png'
        },
        {
            image: '/public/images/05.png'
        }
    ],
    partnersArray2: [
        {
            image: '/public/images/06.png'
        },
        {
            image: '/public/images/07.png'
        },
        {
            image: '/public/images/08.png'
        }
    ],
    PopularBlogPosts: [
        {
            image:'/public/images/01.jpg',
            title:'DISTINCTIVE REDEFINE RESOURCE MAXIMIZING FOR',
            creator:'Admin',
            date:'01 January 2022',
            paragraph:'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        },
        {
            image:'/public/images/02.jpg',
            title:'REDEFINE RESOURCE MAXIMIZING FOR DISTINCTIVE',
            creator:'Admin',
            date:'01 January 2022',
            paragraph:'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        }
    ],
    PopularTestimonials: [
        {
            userImage: '/public/images/01 (2).jpg',
            name: 'Madley Pondor',
            profession: 'UI Designer',
            team: '/public/images/01 (3).png',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae tortor bibendum nunc blandit tristique. Etiam porttitor rutrum efficitur. Aenean.',
        },
        {
            userImage: '/public/images/02 (2).jpg',
            name: 'Oliver Beddows',
            profession: 'UI Designer',
            team: '/public/images/06.png',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae tortor bibendum nunc blandit tristique. Etiam porttitor rutrum efficitur. Aenean.',
        }
    ],
    footerContactInfos: [
        {
            image: '/public/images/01 (4).png',
            info: 'Phone Number:',
            infoDate: ' +88012 345 678 912'
        },
        {
            image: '/public/images/02 (4).png',
            info: 'Email:',
            infoDate: 'youremail@gmail.com'
        },
        {
            image: '/public/images/03 (4).png',
            info: 'Address:',
            infoDate: '30 North West New York 240'
        },
    ],
    footerLeftSide: [
        {
            logo: '/public/images/logo.png',
            paragraph: 'Upropriate brand economca sound technolog after covalent technology enable prospective wastng markets whereas propriate and brand economca sound technolog'
        }
    ],
    footerMiddleSide: [
        {
            advLogo: '/public/images/01 (4).jpg',
            title: 'Free Poker Game',
            details: 'Poker: $230'
        },
        {
            advLogo: '/public/images/02 (3).jpg',
            title: 'Club Poker Game',
            details: 'Poker: $290'
        },
        {
            advLogo: '/public/images/03 (3).jpg',
            title: 'Royal Poker Game',
            details: 'Poker: $330'
        }
    ]
})