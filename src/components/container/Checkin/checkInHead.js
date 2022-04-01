import { useEffect, useRef, memo } from 'react';
import {Link} from 'react-router-dom';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';


function CheckInHearder() {
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
                        <a>Check in</a>
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
                    
                    <ul className="navbar_list">
                        <li className={clsx("navbar_item navbar_item_3 active", styles.font_size_friend)}>
                            <Link to="/checkIn" className={clsx(styles.font_size_friend)}> 
                                Gần đây
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default memo(CheckInHearder)