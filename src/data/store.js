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
        vsLogo: '/public/images/vs.png',
        ninjaLogo: '/public/images/team-1.png',
        vikingLogo: '/public/images/team-2.png',
        dragonLogo: '/public/images/teamsm-1.png',
        wolvesLogo: '/public/images/teamsm-2.png',
        frogsLogo: '/public/images/teamsm-3.png',
        monkeyhatLogo: '/public/images/teamsm-4.png',        
        sharkLogo: '/public/images/teamsm-5.png',
        lionLogo: '/public/images/teamsm-6.png',
        robotLogo: '/public/images/teamsm-7.png',
        witchLogo: '/public/images/teamsm-8.png',
        skullLogo: '/public/images/teamsm-9.png',        
        catLogo: '/public/images/teamsm-10.png',
        redDragonLogo: '/public/images/teamsm-11.png',
        monkeyLogo: '/public/images/teamsm-12.png',
    },
    socialLogos: {
        vimeoLogo: '/public/images/social-1.png',
        youtubeLogo: '/public/images/social-2.png',
        twitchLogo: '/public/images/social-3.png',
    }
})

