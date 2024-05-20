import Logo from '../assets/images/logo.png'
import LogoMultifarious from '../assets/images/logoMultifarious.png'
import LogoFarms from '../assets/images/logoFarms.png'
import LogoFoods from '../assets/images/logoFood.png'
import LogoGroup from '../assets/images/LogoGroup.png'
import heroFood from '../assets/images/IMG_20231017_050256_344.jpg'
import investing from '../assets/images/pexels-anna-nekrashevich-6802048.jpg'
import agroinvesting from '../assets/images/agroinvesting.jpg'
import mfac from '../assets/images/mfac.png'
import foodProcessing from '../assets/images/pexels-mark-stebnicki-2255920.jpg'
import farm from '../assets/images/pexels-math-21393.jpg'
import flour from '../assets/images/IMG_20231017_050251_923.jpg'
import pap from '../assets/images/IMG_20231017_051342_945.jpg'
import img from '../assets/images/IMG_20231017_051604_314.jpg'
import soya from '../assets/images/IMG_20231017_051535_375.jpg'
import tumeric from '../assets/images/IMG_20231017_051554_980.jpg'
import ginger from '../assets/images/IMG_20231017_051604_314.jpg'
import potato from '../assets/images/potato.jpg'
import salt from '../assets/images/salt.jpg'
import juice from '../assets/images/juice.jpg'
import biscuit from '../assets/images/biscuit.jpg'
import milk from '../assets/images/milk.jpg'
import beverage from '../assets/images/beverage.jpg'

import ceo from '../assets/images/ceo.jpeg'
import coo from '../assets/images/coo.jpeg'
import mercy from '../assets/images/mercy.jpeg'
import elijah from '../assets/images/elijah.jpeg'
import prosper from '../assets/images/prosper.jpeg'
import destiny from '../assets/images/destiny.jpeg'
import samuel from '../assets/images/samuel.jpeg'
import charlotte from '../assets/images/charlotte.jpeg'
import services2 from '../assets/images/services-2.jpg'



const NavInfo = [
    {
        title: 'Home',
        link: '',
        icon: 'house-fill',
    },
    {
        title: 'About',
        link: 'About',
        icon: 'person-circle -fill',
        // icon: 'info-circle',
    },
    {
        title: 'Companies',
        link: 'Companies',
        icon: 'people-fill',
        sublinks: [
            {
                title: 'Macmay Multifarious',
                link: 'Macmay-Multifarious',
                icon: ''
            },
            {
                title: 'Macmay Farms',
                link: 'Macmay-Farms',
                icon: ''
            },
            {
                title: 'Macmay Foods',
                link: 'Macmay-Foods',
                icon: ''
            },
        ]
    },
    {
        title: 'Products',
        link: 'Products',
        icon: 'grid',
    },
    {
        title: 'Contact',
        link: 'Contact',
        icon: 'telephone-fill',
    },
]

const HeroContent = [
    {
        title: 'Macmay Group',
        desc: 'Macmay Group is a fast growing indigenous company with principal focus on delivering professional support services in the upstream subsector of the Finance, Agro-Agriculture, Food Chain Distribution, Real Estates And General Merchants in Nigeria and Africa at large.',
        img: agroinvesting,
        color: 'blue',
        text: 'white'
    },
    {
        title: 'Macmay Multifarious Company',
        desc: 'is a company which recognises the general lack of proper saving culture and investment practice amongst members of the society and we have stepped in to bridge the gap.',
        img: investing,
        color: 'blue',
        text: 'white'
    },
    {
        title: 'Macmay Farms & Agro',
        desc: 'We render our service to as many people that are in need of Agricultural products, and also for the purpose of buying and selling locally and internationally as well as investing in any related Agriculture reforms.',
        img: farm,
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
        title: 'Low cost savings',
        desc: 'We create unique and specific low savings portfolios tailored to suit the specific needs our clients.'
    },
    {
        title: 'Real estates investments',
        desc: 'We develop easy real estates investment schemes that can be easily keyed into.'
    },
    {
        title: 'Agriculture',
        desc: 'We design strategic ways of investing in Agriculture and General Agricultural Services.'
    },
    {
        title: 'Exports',
        desc: 'Our services also include exports and imports, logistics of both goods and passengers and also food packaging and branding in line with international best practices.'
    },
    // {
    //     title: 'Agro Services',
    //     desc: 'Giving access to Agricultural Finance and related sectors, we grow high value/quality Agricultural sales.'
    // },
    // {
    //     title: 'Food Manufacturing',
    //     desc: 'We design strategic systems to aid quality food production process. We also carry out food Packaging and branding in line with international best practices.'
    // },
    // {
    //     title: 'Food Supply',
    //     desc: 'We create a strategic food partnership and investment system that will enhance a more effective food supply chain process management.'
    // }
]
const ProductsList= [
    {
        title: 'Soya Bean Powder',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: soya
    },
    {
        title: 'Tumeric Powder',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: tumeric
    },
    {
        title: 'Ginger Powder',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: ginger
    },
    {
        title: 'Food',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: pap
    },
    {
        title: 'Flours',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: flour
    },
    {
        title: 'Food Produce',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: potato
    },
    {
        title: 'Salts',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: salt
    },
    {
        title: 'Juices',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: juice
    },
    {
        title: 'Biscuits',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: biscuit
    },
    {
        title: 'Milk and others',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: milk
    },
    {
        title: 'Beverages',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iure!',
        img: beverage
    }
]

const Values = [
    {
        title: 'Integrity'
    },
    {
        title: 'Confidentiality'
    },
    {
        title: 'Excellence'
    },
    {
        title: 'Team Work '
    },
    {
        title: 'Innovation'
    },
    {
        title: 'Creativity '
    },
    {
        title: 'Flexibility'
    },
    {
        title: 'Customer Service'
    },
    {
        title: 'Trust'
    },
    {
        title: 'Dedication'
    },
    {
        title: 'Reliabilty'
    },
    {
        title: 'Professionalism'
    },
    {
        title: 'Drive'
    },
    {
        title: 'Enthusiasm'
    },
    {
        title: 'Dependability'
    },
 
]
const Visions = [
    {
        title: 'MACMAY MULTIFARIOUS COMPANY LTD',
        desc: 'To produce financially intelligent members of the society with a strong and high savings investment culture.'
    },
    {
        title: 'MACMAY FARMS AND AGRO COMPANY LTD',
        desc: 'To uniquely stand out amongst all other Agricultural Firms through our unique products and services carefully structured to meet the needs of our clients, partners and investors.'
    },
    {
        title: 'MFAC Foods LTD',
        desc: 'We are aimed at standing out amongst all other Food Companies/Processing And Distribution Industries in Nigeria, with our exceptional well packaged produce that would be recognised now and even in years to come, carefully structured to meet the needs of our clients, partners and investors.'
    },
]
const Missions = [
    {
        title: 'MACMAY MULTIFARIOUS COMPANY LTD',
        desc: 'To provide a platform where members of the society can easily and comfortably save their funds with value for it.'
    },
    {
        title: 'MACMAY FARMS AND AGRO COMPANY LTD',
        desc: 'To render World Class Professional Agricultural Services through Direct Farming and Investment Schemes geared towards creating Financial Stability and Economic Growth for Nation Building and Global impact.'
    },
    {
        title: 'MFAC Foods LTD',
        desc: 'To render World Class Professional Food Processing And Manufacturing Services through Direct Production, Manufacturing And Investment/Partnership Schemes geared towards creating Financial Stability and Economic Growth for Nation Building and Global impact.'
    }
]

const LegalFrameWorks = [
    {
        img: LogoMultifarious,
        desc :  [
            'Macmay Multifarious Company Ltd, began in 2018 and was registered as Business Name in 2018/2019 as Macmay Innovative Resources. As the Company increased in its scope of operation, it became necessary to review its achievements vis-à-vis its legal framework. This review led to an upgrading and restructuring of Macmay.',
            'Hence, in 2020 Macmay became registered as a bigger corporate entity, with the name Macmay Multifarious Company Limited.',
            'This upgrade brought Macmay to the status of a Limited Liability Company in Nigeria, registered with Corporate Affairs Commission, as stipulated by the  Companies and Allied Matters Act.'
        ]
    },
    {
        img: LogoFarms,
        desc:  [
                'Macmay Farms And Agro Company Ltd, began in 2020, initiated by Macmay Multifarious  Company LTD and it was registered as a LTD Company according to Companies And Allied Matters  Act (CAMA) specification in 2021 under the Corporate Affairs Commission of Nigeria(CAC) as Macmay Farms And Agro Company LTD with Registration Number, RC 1776278.This upgrade brought Macmay Farms And Agro Company LTD to the status of a Limited Company in Nigeria.'
            ],
    },
    {
        img: LogoFoods,
        desc:  [
            'MFAC Foods Ltd; was registered as a LTD Company in accordance with the Companies and Allied Matters Act (CAMA) specification in 2021 under the Corporate Affairs Commission of Nigeria(CAC) as MFAC Foods Ltd with Registration Number, RC 1797591.'
        ]
    }
]
const ScopeOfService = [
    {
        img: services2,
        desc: [
            'Our services includes business/market development survey, identifying viably business opportunity, investing in profitable ventures, monitoring and following up on investment to ensure security/ productivity and providing value for money.', 
            "The crux of our services is designing, creating and presenting very easy, flexible and unique plans that specifically suits the purpose/affordability of our various investors. It is our mandate to ensure that our clients are happy and satisfied. We therefore continuously utilise the endless opportunities that the business world provides."
        ]
    },
    {
        img: foodProcessing,
        desc: [
            "At Macmay Farms And Agro Company LTD, we have a flexible and accessible investment scheme and also a platform that make it easy for people to buy and sell Agricultural Products",
            "Our Services includes all activities within the Agricultural Food and Natural resource industry that is involved with production of food. It is engaged in Marketing, Transporting, Processing and Distributing its Agricultural Products through distribution channels."
        ]
    },
    {
        img: mfac, 
        desc: [
                "MFAC Foods LTD, is a company built by purpose driven goal getters with a vast knowledge in the Food Production Sector, and is aimed at delivering food production, branding and packaging services in line with international best practices.",
                "We are aimed to provide a market store where people can shop for products within the comfort of their home, all of these will pose us a better service from Sales to Marketing to delivery.  Our product line consists of spices, spreads, sauces, food flour, fruit juices and complementary food that excites and satisfy institutional, commercial and retail customers and more."
            ]
    }
]

const Objectives = [
    {
        intro: "To design and execute strategic savings and investmentinterventions through:",
        list: [
            "Developing easy investment schemes that can be easily keyed into.",
            "Using of economic and business survey strategy tools to ensure save secure and viable investmentschemes.",
            "Creating unique and specific savings/investment portfolios tailored to suit the specific needs of target clients.",
            "Utilizing a robust record and data base system that ensures for optimum protection and monitoring/evaluation.",
            "Collaborating/partnering with relevant entities that advances our vision and mission."
        ]
    },
    {
        list: [
            "To design strategic ways of investing in Agriculture and General Agriculture/Agro Services.",
            "Giving access to Agricultural Finance and related.",
            "To grow high value/quality Agricultural sales."
        ]
    },
    {
        list: [
            "To design strategic systems to aid quality food production process.To carry out food Packaging and branding in line with international best practices.",
            "To create a food marketing, sales and delivery system that will be accessible by all categories of consumer classes in the market.",
            "To create a strategic food partnership and investment system that will enhance a more effective food supply chain process management."
        ]   
    }
]

const LeadersList = [
    {
        name: 'MR. ORUCHUKWU MARVELLOUS AJUKWU',
        title: 'CHAIRMAN/CEO',
        img: ceo
    },
    {
        name: 'MR. ONIDO INNOCENT ANOMI',
        title: 'DEPUTY CEO/COO',
        img: coo
    },
    {
        name: 'MISS. MAMOKE MERCY IDISI',
        title: 'EXECUTIVE DIRECTOR, SAVINGS INVESTMENT SERVICES AND PRODUCT SALES, LAGOS BRANCH.',
        img: mercy
    },
    {
        name: 'MR. DARIESE AKPEVWE ELIJAH',
        title: 'EXECUTIVE DIRECTOR, PROJECT DEVELOPMENT AND MONITORING',
        img: elijah
    },
    {
        name: 'MR. CHUKWURINMA PROSPER AJUKWU',
        title: 'DIRECTOR OF RECORDS/DEPUTY COMPANY SECRETARY',
        img: prosper
    },
    {
        name: 'MR. NDUKA SAIWE DESTINY',
        title: 'DIRECTOR, PRODUCTION SUPERVISORY AND  PRODUCTS MANAGEMENT',
        img: destiny
    },
    {
        name: 'MR. AJIRI SAMUEL USIAGBADA',
        title: 'DIRECTOR OF BUSINESS RELATIONS',
        img: samuel
    },
    {
        name: 'MISS. PHOMOLO CHARLOTTE LETHOBA',
        title: "EXECUTIVE DIRECTOR; MACMAY GROUP INT'L, SOUTH FRICA.",
        img: charlotte
    },

]

const FAQs = [
    {
        title: "What is the purpose of Macmay Multifarious Company Limited?",
        desc: "The purpose of Macmay Multifarious Company Limited is to provide a platform for members of society to easily and comfortably save their funds with value for it, and to bridge the gap of proper saving culture and investment practice amongst members of the society."
    },
    {
        title: "What services does Macmay Farms and Agro Company Ltd offer?",
        desc: "Macmay Farms and Agro Company Ltd offers services such as investment schemes, agricultural finance, and high-quality agricultural sales."
    },
    {
        title: 'What kind of food products does Macmay Farms and Agro Company produce?',
        desc: "Macmay Farms and Agro Company produces food flours, food produce, and salts, using the best of West Africa's fruits, herbs, vegetables, and  other agricultural produce."
    },
    {
        title: "What services does Macmay Group offer?",
        desc: " Macmay Group offers savings investment services, agricultural services, investment schemes, food processing and manufacturing services, and more."
    },
    {
        title: "",
        desc: ""
    },
    {
        title: "",
        desc: ""
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
        link: 'https://api.whatsapp.com/send?phone=2348111779288'
    },
    {
        icon: 'facebook',
        link: 'https://www.facebook.com/officialmacmaymultifariousCoLtd'
    },

]




export { NavInfo, Logo, LogoMultifarious, LogoFarms, LogoFoods, LogoGroup, HeroContent, ContactInfo, ServicesList, ProductsList, FAQs, Values, Missions, Visions, LegalFrameWorks, LeadersList, ScopeOfService, Objectives }