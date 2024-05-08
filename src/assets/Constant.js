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
        // sublinks: [
        //     {
        //         title: 'About Macmay',
        //         link: '',
        //         icon: ''
        //     },
        //     {
        //         title: 'Our Leaders',
        //         link: 'Leaders',
        //         icon: ''
        //     },
        // ]
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
        link: 'Products',
        icon: 'shop',
       
    },
    {
        title: 'Contact',
        link: 'contact-us',
        icon: 'telephone-fill',
    },
]

const HeroContent = [
    {
        title: 'Macmay Group',
        // title: 'Macmay Multifarious Company',
        desc: 'We are a company which recognises the general lack of proper saving culture and investment practice amongst members of the society and we have stepped in to bridge the gap.',
        img: investing,
        color: 'blue',
        text: 'white'
    },
    {
        title: 'Macmay Farms & Agro',
        desc: 'We are available to render our service to as many people that will be in need of Agricultural products, and also for the purpose of buying and selling locally and internationally as well as investing in any related Agriculture reforms.',
        img: foodProcessing,
        color: 'green',
        text: 'white'
    },
    {
        title: 'Macmay Foods',
        desc: 'We are engaged with the business of manufacturing nutritious and tasty food made from the best of West Africa’s fruits, herbs, vegetables, and other agricultural produce.',
        img: heroFood,
        color: 'orange',
        text: 'black'
    }
]
const ServicesList = [
    {
        title: 'Savings',
        desc: 'We create unique and specific savings portfolios tailored to suit the specific needs of target clients'
    },
    {
        title: 'Investments',
        desc: 'We developing easy investment schemes that can be easily keyed into.'
    },
    {
        title: 'Agriculture',
        desc: 'We design strategic ways of investing in Agriculture and General Agriculture Services.'
    },
    {
        title: 'Agro Services',
        desc: 'Giving access to Agricultural Finance and related. We grow high value/quality Agricultural sales'
    },
    {
        title: 'Food Manufacturing',
        desc: 'We design strategic systems to aid quality food production process. We also carry out food Packaging and branding in line with international best practices'
    },
    {
        title: 'Food Supply',
        desc: 'We create a strategic food partnership and investment system that will enhance a more effective food supply chain process management'
    }
]

const FAQs = [
    {
        title: 'Questtion 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus! Laborum iusto aliquam necessitatibus voluptatem expedita obcaecati velit voluptatibus vel pariatur'
    },
    {
        title: 'Questtion 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus! Laborum iusto aliquam necessitatibus voluptatem expedita obcaecat'
    },
    {
        title: 'Questtion 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus! Laborum iusto aliquam necessitatibus voluptatem expedita obcaecati velit voluptatibus '
    },
    {
        title: 'Questtion 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus! Laborum iusto aliquam necessitatibus voluptatem expedita obcaecati velit voluptatibus '
    },
    {
        title: 'Questtion 5',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus! Laborum iusto aliquam necessitatibus voluptatem expedita obcaecati velit voluptatibus '
    },
    {
        title: 'Questtion 6',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus! Laborum iusto aliquam necessitatibus voluptatem expedita obcaecati velit voluptatibus '
    },
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




export { NavInfo, Logo, HeroContent, ContactInfo, ServicesList, FAQs }