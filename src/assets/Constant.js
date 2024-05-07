import Logo from '../assets/images/logo.png'
import heroFood from '../assets/images/IMG_20231017_050256_344.jpg'
import investing from '../assets/images/pexels-anna-nekrashevich-6802048.jpg'
import foodProcessing from '../assets/images/pexels-mark-stebnicki-2255920.jpg'
// import foodProcessing from '../assets/images/pexels-math-21393 2.jpg'




const NavInfo = [
    {
        title: 'Home',
        link: '',
        icon: 'house-fill',
    },
    {
        title: 'About',
        link: 'About',
        icon: 'person-fill',
        sublinks: [
            {
                title: 'About Macmay',
                link: '',
                icon: ''
            },
            {
                title: 'Our Leaders',
                link: 'Leaders',
                icon: ''
            },
        ]
    },
    {
        title: 'Companies',
        link: 'Companies',
        icon: 'people-fill',
        sublinks: [
            {
                title: 'Macmay Multifarious',
                link: '',
                icon: ''
            },
            {
                title: 'Macmay Farms',
                link: 'disputes',
                icon: ''
            },
            {
                title: 'Macmay Foods',
                link: 'disputes',
                icon: ''
            },
        ]
    },
    {
        title: 'Products',
        link: 'statistics',
        icon: 'bar-chart-line-fill',
       
    },
    {
        title: 'Contact',
        link: 'tickets',
        icon: 'telephone-fill',
    },
]

const HeroContent = [
    {
        title: 'Macmay Multifarious Company',
        desc: 'Macmay is carefully positioned to render savings and investment services to clients/members',
        img: investing,
        color: 'blue'
    },
    {
        title: 'Macmay Farms & Agro Company',
        desc: 'Agriculture is a major system that brings about balance in the society and a long aged sector that the world trusts in for continued food production.',
        img: foodProcessing,
        color: 'green'
    },
    {
        title: 'Macmay Foods',
        desc: 'We are engaged with the business of manufacturing nutritious and tasty food made from the best of West Africa’s fruits, herbs, vegetables, and other agricultural produce.',
        img: heroFood,
        color: 'orange'
    }
]




export { NavInfo, Logo, HeroContent }