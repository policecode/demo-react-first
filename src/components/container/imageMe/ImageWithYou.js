import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';
import LightBox from './lightBox'

function FriendAvatar({apiUrl}) {
    const [listAvatar, setListAvatar] = useState([]);
    const [listRender, setListRender] = useState([]);
    const [count, setCount] = useState(30);
    const [isSeeMore, setIsSeeMore] = useState(true);
    const [urlImage, setUrlImage] = useState();
    const [isUrl, setIsUrl] = useState(false);
    const [idImage, setIdImage] = useState();

    useEffect(() => {
        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                setListAvatar(response)
            })
            .catch(function(err) {
                console.log(err);
            })
    },[apiUrl])

    useEffect(() => {
        if (listAvatar.length > 0) {
            let arrCount = count >= listAvatar.length ? listAvatar.length : count;
            if (arrCount === listAvatar.length) {
                setIsSeeMore(false);
            }
            let renderArr = [];
            for (let index = 0; index < arrCount; index++) {
                renderArr.push(listAvatar[index]);
            }
            setListRender(renderArr);
        }
    },[count, listAvatar])

    const loadImageSrc = (e) => {
        setUrlImage(e.target.src);
        setIdImage(e.target.getAttribute('data-id'))
        setIsUrl(true);
    }
    return (
        <div className={clsx("row")}>
            {isUrl && <LightBox 
                urlImage={urlImage}
                idImage={idImage}
                listAvatar={listAvatar}
                onIsSetUrl={() => setIsUrl(false)}
            />}
            {listRender.map((rener) => (
                <div className={clsx("col l-2-4 m-3 c-6", styles.mt_4)}>
                   <div className={clsx(styles.album_create)}>
                        <img src={rener.image} 
                            data-id={rener.id}
                            className={styles.image_size}
                            onClick={loadImageSrc}
                        />
                        <i className={clsx(styles.album_icon, "fa-solid fa-pen")}></i>
                   </div>
                   
                </div>
            ))}
            <div className={clsx("col c-12", styles.mt_8, styles.seeMore)}>
                {isSeeMore && <span
                    onClick={() => setCount(prev => prev + 20)}
                >Xem thêm  .  .  .</span>    }
            </div>
        </div>

    )
}

export default memo(FriendAvatar)