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
        frogsLogo: '/images/teamsm-3.png',
        monkeyhatLogo: '/images/teamsm-4.png',        
        sharkLogo: '/images/teamsm-5.png',
        lionLogo: '/images/teamsm-6.png',
        robotLogo: '/images/teamsm-7.png',
        witchLogo: '/images/teamsm-8.png',
        skullLogo: '/images/teamsm-9.png',        
        catLogo: '/images/teamsm-10.png',
        redDragonLogo: '/images/teamsm-11.png',
        monkeyLogo: '/images/teamsm-12.png',
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
            logo: '/images/teamsm-5.png',
            name: 'Shark Team'
        },
        {
            logo: '/images/team-2.png',
            name: 'Viking Team'
        },
        {
            logo: '/images/teamsm-1.png',
            name: 'Dragon Team'
        },
        {
            logo: '/images/teamsm-3.png',
            name: 'Frogs Team'
        },
        {
            logo: '/images/teamsm-8.png',
            name: 'Witch Team'
        },
        {
            logo: '/images/teamsm-4.png',
            name: 'Monkey Team'
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
    ]
})