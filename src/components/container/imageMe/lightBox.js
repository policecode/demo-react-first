import { memo, useEffect } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';



function LightBox({urlImage, onIsSetUrl, idImage, listAvatar}) {
    useEffect(() => {
        const elementLightBtn = document.querySelector('.js_lightbox');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        const imgElement = document.querySelector('.js-imgSrc');
        console.log(imgElement.src);
        let myIndex = listAvatar.findIndex((avatar) => {
            return avatar.id === parseInt(idImage)
        })
        elementLightBtn.onclick = (e) => {
            if (Array.from(e.target.classList).includes('js_lightbox')) {
                onIsSetUrl();
            }
        }
        prevBtn.onclick = (e) => {
            myIndex = myIndex <= 0 ? 0 : --myIndex;
            imgElement.src = listAvatar[myIndex].image;
        }
        nextBtn.onclick = (e) => {
            myIndex = myIndex >= listAvatar.length ? listAvatar.length - 1 : ++myIndex
            imgElement.src = listAvatar[myIndex].image;
        }
    }, [])
    
    return (
        <div className={clsx(styles.mt_4)}>
            <div className="lightbox js_lightbox">
                <div className="lightbox-content">
                    <i className="fa-solid fa-chevron-left lightbox-prev"></i>
                    <img src={urlImage} className="js-imgSrc" alt="" />
                    <i className="fa-solid fa-chevron-right lightbox-next"></i>
                </div>
            </div>
        </div>
    )
}

export default memo(LightBox)