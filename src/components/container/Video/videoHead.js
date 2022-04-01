import { useEffect, useRef, memo } from 'react';
import {Link} from 'react-router-dom';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';


function VideoHearder() {
    useEffect(() => {
        const listItems = document.querySelectorAll('.navbar_item_3')
        listItems.forEach((listItem) => {
            listItem.onclick = (e) => {
                listItems.forEach(element => {
                    element.classList.remove('active');
                })
                listItem.classList.add('active')
                
            }
        })
    }, [])
    return (
        <div>
            <div className={clsx(styles.friend_hearder)}>
                <div className={styles.friend_hearder_top}>
                    <div className={styles.friend_first}>
                        <a>Video</a>
                    </div>
                    <div className={styles.friend_last_img}>
                        <div className={styles.friend_icon}>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.friend_nav}>
                <div className="navbar">
                    <label htmlFor="checkbox_navbar_1" className="navbar_icon-phone">
                        <i className="fa-solid fa-bars "></i>
                    </label>
                    <input type="checkbox" id="checkbox_navbar_1"/>
                    <ul className="navbar_list">
                        <li className={clsx("navbar_item navbar_item_3 active", styles.font_size_friend)}>
                            <Link to="/videos" className={clsx(styles.font_size_friend)}> 
                                Video bạn được gắn thẻ
                            </Link>
                        </li>
                        <li className="navbar_item navbar_item_3">
                            <Link to="/videos/myVideo" className={clsx(styles.font_size_friend)}>
                                Video của bạn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default memo(VideoHearder)