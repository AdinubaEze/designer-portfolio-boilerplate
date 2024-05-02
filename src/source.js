import { BsCodeSquare} from "react-icons/bs";
import { GiCardDraw } from "react-icons/gi";
import { CiFacebook ,CiLinkedin} from "react-icons/ci";
import { FaPaintBrush,FaInstagram,FaYoutube } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {SiFiverr,SiAdobexd} from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { TbSocial ,TbPhotoUp} from "react-icons/tb";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaSketch,FaFigma } from "react-icons/fa";

export const navigation = [
    {name:"Home",id:''},
    {name:"Services",id:'services'},
    {name:"About",id:'about'},
    {name:"Projects",id:'projects'},
    {name:"Testimonials",id:'testimonials'},
    {name:"Contact",id:'contact'},
];


export const services = [
    {
        icon:<BsCodeSquare/>,
        name:"Web Design",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<TbSocial/>,
        name:"Digital branding",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<TbPhotoUp/>,
        name:"Photography",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<FaPaintBrush/>,
        name:"UI/UX Design",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<GiCardDraw/>,
        name:"Graphic Design",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<IoAnalyticsSharp/>,
        name:"Business analytics",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
]





export const projects = [
  {
    name:'Food App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/users/1615584/screenshots/15710288/media/6c7a695e5d4f0a947b2714c4edb39899.jpg?resize=400x300&vertical=center",
    url:'https://github.com',
  },
  {
    name:'Mobile ecommerce website',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png",
    url:'https://github.com',
  },
  {
    name:'Ride sharing App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://miro.medium.com/v2/resize:fit:1400/0*lrz788UiRbPakyVe.png",
    url:'https://github.com',
  },
  {
    name:'WhatsApp Clone',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/userupload/8606261/file/original-591d573b6e1715663cf3c4f29da1f1c5.png?resize=400x0",
    url:'https://github.com',
  },
  {
    name:'Task Management',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                vitae cupiditate totam quia`,
    image:"https://i.pinimg.com/originals/dc/bf/5f/dcbf5f8ba32d8ff36cd30d36a820aa5e.png",
    url:'https://github.com',
  },
  {
    name:'Music And Video Streaming App',
    description:`adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image:"https://cdn.dribbble.com/users/4813218/screenshots/14667363/dribbble_shot_hd_-_1__1_.png",
    url:'https://github.com',
  },
];


export const teams = [
  {
    name:"Oluoma James",
    title:"UI/UX Developer",
    profile:"/images/profile-6.png",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Emmanuel Eze",
    title:"Fullstack Developer",
    profile:"/images/profile-7.jpeg",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Frontend Developer",
    profile:"/images/profile-8.jpeg",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Content Writer",
    profile:"/images/profile-9.jpeg",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]



export const skills = [
  {
    name:"Figma",
    icon:<FaFigma/>,
    progress:90,
  },
  {
    name:"Xd",
    icon:<SiAdobexd/>,
    progress:60,
  },
  {
    name:"Sketch",
    icon:<FaSketch/>,
    progress:85,
  },
];

export const workProcess = [
  {name:"Research"},
  {name:"Analysis"},
  {name:"Design"},
  {name:"Iteration"},
  {name:"UI Development"},
  {name:"Evaluation and Optimization"},
]



export const testimonies = [
  {
    profile:"/images/profile-2.jpeg",
    name:'Samuel Eze',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    profile:"/images/profile-3.jpeg",
    name:'Emmanuel Joseph',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    profile:"/images/profile-4.jpeg",
    name:'Gloria Chiwendu',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    profile:"/images/profile-5.jpg",
    name:'Precious Stone',
    content:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];





export const contactInfo = [
  {
    name:"Email",
    icon:<MdOutlineAlternateEmail />,
    value:"mradinuba@gmail.com",
  },
  {
    name:"Phone",
    icon:<IoCallOutline/>,
    value:"+2347039681695",
  },
  {
    name:"Address",
    icon:<IoLocationOutline/>,
    value:"Gwarinpa, Abuja, Nigeria",
  },
]



export const socialHandles = [
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"",
  },
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"",
  },
  {
    name:"LinkedIn",
    icon:<CiLinkedin/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<FaYoutube/>,
    link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];


export const footer = [
  {
    group:"Hot Links",
    routes:[
      {name:"Home"},
      {name:"Services"},
      {name:"About"},
      {name:"Projects"},
      {name:"Testimonials"},
      {name:"Contact"},
    ]
  },
  {
    group:"Others",
    routes:[
      {name:"Privacy Policy"},
      {name:"Terms and Conditions"},
      {name:"Cookie Policy"},
    ]
  },
  {
    group:"Contacts",
    routes:[
      {
        name:"mradinuba@gmail.com",
        icon:<MdOutlineAlternateEmail />,
      },
      {
        name:"+2347039681695",
        icon:<IoCallOutline/>,
      },
      {
        name:"Gwarinpa, Abuja, Nigeria",
        icon:<IoLocationOutline/>,
      },
    ]
  },
]