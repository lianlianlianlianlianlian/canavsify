import styles from '@/styles/page.module.css'
import Image from 'next/image'
import pic from "../../assests/images/pic.jpg"
import pic2 from "../../assests/images/pic2.webp"
import { VscTwitter } from 'react-icons/vsc'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

export const Blog = () => {
    return (        
        <div>
            <p>"Welcome to Dark.Lotus.Blog! Here, I will share personal life and growth stories, exploring the mysteries of various technologies" </p>
            <a href='https://blog.darklotus.cn' target="_blank" rel="noopener noreferrer">
                <FiExternalLink style={{marginTop:"10px"}} size={25}/>
            </a>
        </div>
    )
}

export const Uiaftersex = () => {
    return (        
        <div>
            <p>"Welcome to my GitHub! Here are the projects I've been working on, and I invite you to join me in exploring them"</p>
            <a href='https://note.darklotus.cn' target="_blank" rel="noopener noreferrer">
                <FiExternalLink style={{marginTop:"10px"}} size={25}/>
            </a>
            <a href='https://github.com/lianlianlianlianlianlian' target="_blank" rel="noopener noreferrer">
                <AiFillGithub style={{marginTop:"10px",marginLeft:"8px"}} size={25}/>
            </a>
        </div>
    )
}

export const Socials = () => {
    return (        
        <div style={{margin:"auto",textAlign:"center"}}> 
            <p>
                <a href='https://twitter.com/lotusdark' target="_blank" rel="noopener noreferrer">
                    <VscTwitter style={{marginLeft: "5px"}} size={40}/>
                </a> 
                <a href='https://github.com/lianlianlianlianlianlian' target="_blank" rel="noopener noreferrer">
                    <AiFillGithub style={{marginLeft: "10px",marginRight:"7px"}} size={40}/>
                </a>
            </p>
        </div>
    )
}

export const Notes = () => {
    return (        
        <div> 
            <div className={styles.notesHeader}>My Name Is Lian.Ding</div>
            <p>
                If you want to contact me, please send me an email！<br />
                Email：lian@darklotus.cn<br />
                Are u Ok？Are u Ok？Are u Ok？<br />
            </p>
        </div>
    )
}

export const safariTabTexts = [
    {
        name: "blog.darklotus.cn",
        text:  <Blog />,
        x: -350,
        y: -200,
        drag: true
    },
    {
        name: "github.com/lianlianlianlianlianlian",
        text:  <Uiaftersex />,
        x: 300,
        y: -100,
        drag: true
    },   
]
 
export const notesTabTexts = [
    {
        name: "me.txt",
        text: <Notes />,
        x: 120,
        y: 200,
        drag: true,
        deg: "5",
    },
    {
        name: "social.zip",
        text: <Socials />,
        link: "",
        x: 600,
        y: 110,
        drag: true,
        deg: "-5",
    },
    {
        name: "notes.txt",
        text: "I am learning Next.js",
        x: -450,
        y: 350,
        drag: true,
        deg: "5",
    },
]

export const picTabTexts = [
    {
        pic: pic,
        link: "https://gallery.darklotus.cn",
        width: 200,
        height: 200,
        x: 400,
        y: -600,
        drag: true,
    },
]

export const picTabTexts2 = [
    {
        pic: pic2,
        link: "https://gallery.darklotus.cn",
        width: 220,
        height: 220,
        x: -100,
        y: -550,
        drag: true,
    },
]
