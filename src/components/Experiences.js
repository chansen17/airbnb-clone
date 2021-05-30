import React from 'react'
import { NavLink } from 'react-router-dom';
import ExperiencesStyles from '../styles/experiences.module.css';

const Experiences = () => {

    const experiences = {
        title: 'Discover Experiences',
        subTitle: "Unique activities with local experts-in person or online.",
        data: [
            {
                name: "Featured collection: Wanderlust",
                subName: "Travel from home with Online Experiences.",
                img: "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480"
            },
            {
                name: "Online Experiences",
                subName: "Live, interactive activities led by Hosts.",
                img: "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480"
            },
            {
                name: "Experiences",
                subName: "Local things to do, wherever you are.",
                img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
            },
        ]
    }

    return (
        <div className={ExperiencesStyles.experiencesLayout}>
            <h1 style={{marginTop: "2rem", fontSize: "2rem"}}>{experiences.title}</h1>
            <h1 style={{fontSize: "1.90rem", fontWeight: "100"}}>{experiences.subTitle}</h1>
            <div className={ExperiencesStyles.grid}>
                {
                    experiences.data.map(e => (
                        <div className={ExperiencesStyles.experienceItem}>
                            <img className={ExperiencesStyles.img}src={e.img} />
                            <h3 className={ExperiencesStyles.name}>{e.name}</h3>
                            <h4 style={{fontWeight: "100"}}>{e.subName}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences
