import {reactive} from 'vue';
export const store = reactive({
    navArray: [
        'Home',
        'Features +',
        'Achievement',
        'Blog +',
        'Contact'
    ],
    navButtons: [
        '<i class="fa-solid fa-user"></i> Login',
        '<i class="fa-solid fa-users"></i> Sign Up'
    ]

})

