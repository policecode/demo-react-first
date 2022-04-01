import { useState, useRef, memo } from 'react';
import styles from'./hearderStyles.module.css';
import clsx from 'clsx';

function Avatar() {
    const [showImg, setShowImg] = useState(true);
    const imgRef = useRef();

    const handleClickLightbox = (e) => {
        if (
            Array.from(e.target.classList).includes('lightbox') ||
            Array.from(e.target.classList).includes('fa-times')
        ) {
            setShowImg(true);
        }
    }
    return (
        <div>
            <div className={clsx(styles.hearder_avatar)}>
                <img 
                    ref={imgRef}
                    src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/74687709_2106977482736852_7970132233790947328_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=DcxQckSczGQAX_RaCf3&_nc_ht=scontent.fhan2-4.fna&oh=00_AT92oqDbHNvzEFnrbaUPpM44K8yJ5zbSkYXMDA25ORejHg&oe=626359CC" 
                    onClick={() => setShowImg(false)}
                />

            </div>
            <div className={clsx('lightbox', {['dl_none']: showImg})}
                onClick = {handleClickLightbox}
            >
                <i className="fas fa-times"></i>
                <div className="lightbox-content">
                    <img
                        src={imgRef.current && imgRef.current.src}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(Avatar)