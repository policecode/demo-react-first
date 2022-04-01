import { useEffect, useRef, memo } from 'react';
import {Link} from 'react-router-dom';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';


function Friends() {
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
                        <a>Ảnh</a>
                    </div>
                    <div className={styles.friend_last_img}>
                        <div className={styles.friend_vltn}>
                            <a>Thêm ảnh/Video</a>
                        </div>
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
                            <Link to="/images" className={clsx(styles.font_size_friend)}> 
                                Ảnh có mặt bạn
                            </Link>
                        </li>
                        <li className="navbar_item navbar_item_3">
                            <Link to="/images/myImage" className={clsx(styles.font_size_friend)}>
                                Ảnh của bạn
                            </Link>
                        </li>
                        <li className="navbar_item navbar_item_3">
                            <Link to="/images/album" className={clsx(styles.font_size_friend)}>
                                Album
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default memo(Friends)