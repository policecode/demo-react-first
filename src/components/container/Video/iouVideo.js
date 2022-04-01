import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

const videoList = [
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t15.5256-10/139849398_3173534289414494_8792916880252081588_n.jpg?stp=c184.0.484.484a_dst-jpg_s851x315&_nc_cat=107&ccb=1-5&_nc_sid=08638f&_nc_ohc=FPOylPCouYUAX-nyjSZ&_nc_ht=scontent.fhan14-1.fna&oh=00_AT9FevSorJ08mDj-j_AV8oGjyMmPhbHDYsX28JiYA0I9MQ&oe=624AD879",
        timeClip: "2:44",
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t15.5256-10/121940585_2976839592417299_5139052287027917480_n.jpg?stp=c280.0.720.720a_dst-jpg_s851x315&_nc_cat=108&ccb=1-5&_nc_sid=08638f&_nc_ohc=SLXIBP2hdLYAX-jCmLp&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8EtX6GRaP-eyMDyOdvEPZjEms03IzIAE-sEDR8eX4KIg&oe=624AFA58",
        timeClip: "0:32",
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t15.5256-10/121841133_2976839372417321_962652881762897455_n.jpg?stp=c280.0.720.720a_dst-jpg_s851x315&_nc_cat=111&ccb=1-5&_nc_sid=08638f&_nc_ohc=8OhbrwEzoGsAX9wcXRX&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-Rhua4wD1__c6jBOlLpBD5WbEsKOCahmDmrnlp0wxsfA&oe=624C4B16",
        timeClip: "0:26",
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t15.0-10/10470132_517884204979529_517880424979907_62220_337_b.jpg?stp=c88.0.224.224a_dst-jpg&_nc_cat=102&ccb=1-5&_nc_sid=08638f&_nc_ohc=oCcgagxncAkAX9VPVMQ&_nc_oc=AQkBw-_sTJQsQ_xYPH8tOTfYOY95uqzcQZUr_xPZ8k8wNgvO63DPKZ2RGUB4d3JE6AzQ3wj_zn1VjEaH4cliaJ_7&_nc_ht=scontent.fhan14-1.fna&oh=00_AT9gbBEZPYxwXSzaS_xsS33HdUMdw20rqvKqVCzFlmZKBA&oe=624C3CB3",
        timeClip: "2:01",
    }
]
function MyVideo() {
   
    return (
        <div className={clsx("row")}>
            
            {videoList.map((videoItem) => (
                <div className={clsx("col l-2-4 m-3 c-6", styles.mt_8)}>
                   <div className={clsx(styles.album_create)}>
                        <img src={videoItem.imageUrl}/>
                        <i className={clsx(styles.album_icon, "fa-solid fa-pen")}></i>
                        <p className={clsx(styles.video_time)}>{videoItem.timeClip}</p>
                   </div>
                </div>
            ))}

        </div>

    )
}

export default memo(MyVideo)