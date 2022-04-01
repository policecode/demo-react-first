import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

const albumList = [
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/193664065_3543234375777815_1777641386446509408_n.jpg?stp=dst-jpg_s851x315&_nc_cat=111&ccb=1-5&_nc_sid=e33968&_nc_ohc=SAYuH6BTzWkAX_VAEnz&tn=2vM4uhmEieiXZXOu&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8mo6eZXhN1qfiLeYYWJ0W1gFKQcx8dVLT2PgKHVy1OWg&oe=626D8594",
        albumName: "Ảnh đại diện",
        item: 30
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t31.18172-8/456905_250122725089013_1727085646_o.jpg?stp=dst-jpg_s417x417&_nc_cat=108&ccb=1-5&_nc_sid=e33968&_nc_ohc=rfz4VSaT90QAX-LOV6N&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8Zpn7yyDYnfiZ46nZ75_NzbgMD9be_j4DUODCdDF7tOw&oe=626CEC01",
        albumName: "Ảnh bìa",
        item: 5
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/148243005_3211702288931027_1592607616009977552_n.jpg?stp=dst-jpg_s552x414&_nc_cat=100&ccb=1-5&_nc_sid=e33968&_nc_ohc=boyr4K9LXtoAX-if8hC&tn=2vM4uhmEieiXZXOu&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_EtMxq5_hMvwxDREYK5tFsAXKRVBySDGnXzvpWtfFADw&oe=626B5BC1",
        albumName: "Tải lên từ di động",
        item: 174
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t31.18172-8/77944_346977455403539_2114833990_o.jpg?stp=dst-jpg_s552x414&_nc_cat=102&ccb=1-5&_nc_sid=e33968&_nc_ohc=UqfE3InNEi0AX-fr34M&tn=2vM4uhmEieiXZXOu&_nc_ht=scontent.fhan14-1.fna&oh=00_AT93XYCnCrYSAJkk8LfrOOArQSGddreikDrlJLAlQOjuUA&oe=626C83E3",
        albumName: "Ảnh trên dòng thời gian",
        item: 7
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t31.18172-8/11731776_654282244673057_5801037030106960870_o.jpg?stp=dst-jpg_s417x417&_nc_cat=109&ccb=1-5&_nc_sid=e33968&_nc_ohc=dxukO2Ee10YAX9JTuDL&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_WoRAPkN5aUTo74yZuo9P8u2vFrbb4_boUDXho-ubFOA&oe=626CD453",
        albumName: "iOS Photos",
        item: 2
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t31.18172-8/413317_269446229823329_2103563622_o.jpg?stp=dst-jpg_s417x417&_nc_cat=111&ccb=1-5&_nc_sid=e33968&_nc_ohc=n1doDnW2Kx4AX9qrvRd&_nc_oc=AQkpgnLY8ej7Lroj209A877BbvZ9kyRZYRRQNnBrJJr8-Qg9emrW7RC9xc1qfxbOcdLVB4J98pVxa55hn2wTymh8&tn=2vM4uhmEieiXZXOu&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8Y8kNfyxgH9rTBQEVJCShJvTV-HVXw8xwPM662imyw0A&oe=626DE59A",
        albumName: "Album chưa đặt tên",
        item: 9
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t31.18172-8/288170_260883657346253_1118457381_o.jpg?stp=dst-jpg_s417x417&_nc_cat=104&ccb=1-5&_nc_sid=e33968&_nc_ohc=TXbeXfYkxIYAX-Z6aZI&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8ZuWpQTc1lomQ2z-Bm-kGEBBI-HbPVvGl8zTlS-GlgRA&oe=626B5032",
        albumName: "Album chưa đặt tên",
        item: 11
    }
]
function FriendAvatar() {
   
    return (
        <div className={clsx("row")}>
            <div className={clsx("col l-2-4 m-3 c-6", styles.mt_8)}>
                   <div className={clsx(styles.album_create)}>
                        <i className={clsx(styles.album_plus, "fa-solid fa-plus")}></i>
                   </div>
                   <h2>Tạo Album</h2>
            </div>
            {albumList.map((albumItem) => (
                <div className={clsx("col l-2-4 m-3 c-6", styles.mt_8)}>
                   <div className={clsx(styles.album_create)}>
                        <img src={albumItem.imageUrl}/>
                        <i className={clsx(styles.album_icon, "fa-solid fa-ellipsis")}></i>
                   </div>
                   <h2>{albumItem.albumName}</h2>
                   <p>{albumItem.item} mục</p>
                </div>
            ))}
        </div>

    )
}

export default memo(FriendAvatar)