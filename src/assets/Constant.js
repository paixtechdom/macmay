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
        desc: 'We are a company which recognises the general lack of proper saving culture and investment practice amongst members of the society and we have stepped in to bridge the gap.',
        img: investing,
        color: 'blue'
    },
    {
        title: 'Macmay Farms & Agro Company',
        desc: 'We are available to render our service to as many people that will be in need of Agricultural products, and also for the purpose of buying and selling locally and internationally as well as investing in any related Agriculture reforms.',
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

const ContactInfo = [
    {
        title: 'No. 85, Orhuvworun Road, Opposite Visa Junction; Udu Delta State, Nigeria',
        icon: 'geo-alt-fill',
        link: ''
    },
    {
        title: '+234 916 124 7130',
        icon: 'telephone-fill',
        link: 'tel:+2349161247130'
    },
    {
        title: 'cec@macmaygroupofcompany.com',
        icon: 'envelope-fill',
        link: 'mailto:cec@macmaygroupofcompany.com'
    },
    {
        icon: 'whatsapp',
        link: '  +2348111779288'
    },
    {
        icon: 'facebook',
        link: '  officialmacmaymultifariousCoLtd'
    },

]




export { NavInfo, Logo, HeroContent, ContactInfo }