import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

const videoList = [
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t15.5256-10/16121347_1523895734305299_2281554114456322048_n.jpg?stp=c87.0.224.224a_dst-jpg&_nc_cat=101&ccb=1-5&_nc_sid=08638f&_nc_ohc=ly1OgLOPJTAAX8jAjum&_nc_oc=AQmAKR6a_4mAkqTw2WbNqnlVVtRRR3sBW8hV41sodMrXdXCXas_HfzE62GN3Pl6X_U72L9lpvg-BtKZkkX3plohb&tn=2vM4uhmEieiXZXOu&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8dkyBGqeWdySx5FvTX9bxT_kYSq4AqbPxuQKDuG0ruhg&oe=624B3B1E",
        timeClip: "2:46",
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t15.5256-10/12103594_785872334855076_524130396_n.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-5&_nc_sid=08638f&_nc_ohc=gdW6Una1h-IAX_dbL6_&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_LksyJJaoO-tWvcB1kcht5MAEaClUIQ8nAkQCz5H7V_g&oe=624C530D",
        timeClip: "0:51",
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t15.5256-10/12104357_406780326198538_1144723560_n.jpg?stp=c0.95.368.368a_dst-jpg_s851x315&_nc_cat=105&ccb=1-5&_nc_sid=08638f&_nc_ohc=0Dal2tyRXQQAX_WcUpm&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8dHET4yfEChsguWPWV5UEVlRFbfk6_HN8ZPssTzreZKQ&oe=624B02EE",
        timeClip: "1:00",
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

            <div className={clsx("col l-2-4 m-3 c-6", styles.mt_8)}>
                   <div className={clsx(styles.album_create)}>
                       <p className={clsx(styles.video_create)}>Xem ảnh</p>
                   </div>
            </div>
        </div>

    )
}

export default memo(MyVideo)