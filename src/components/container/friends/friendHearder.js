import { useEffect, useRef, memo } from 'react';
import {Link} from 'react-router-dom';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';
import FriendHearder from './friendHearder'


function Friends() {
    useEffect(() => {
        const listItems = document.querySelectorAll('.navbar_item_2')
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
                        <a>Bạn bè</a>
                    </div>
                    <div className={styles.friend_last}>
                        <label className={styles.friend_search}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Tìm Kiếm"/>
                        </label>
                        <div className={styles.friend_vltn}>
                            <a>Lời mời kết bạn</a>
                            <a>Tìm bạn bè</a>
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
                        <li className={clsx("navbar_item navbar_item_2 active", styles.font_size_friend)}>
                            <Link to="/friends" className={clsx(styles.font_size_friend)}> 
                                Tất cả bạn bè
                            </Link>
                        </li>
                        <li className="navbar_item navbar_item_2">
                            <Link to="/friends/addedRecently" className={clsx(styles.font_size_friend)}>
                                Đã thêm gần đây
                            </Link>
                        </li>
                        <li className="navbar_item navbar_item_2">
                            <Link to="/friends/friendBirthDay" className={clsx(styles.font_size_friend)}>
                                Sinh nhật
                            </Link>
                        </li>
                        <li className="navbar_item navbar_item_2">
                            <Link to="/friends/friendUniversity" className={clsx(styles.font_size_friend)}>
                                Đại học
                            </Link>
                        </li>
                        <li className="navbar_item navbar_item_2">
                            <Link to="/friends/fuckyou" className={clsx(styles.font_size_friend)}>
                               Tỉnh/TP hiện tại
                            </Link>
                        </li>
                        
                        <li className="navbar_item navbar_item_2">
                            <a className={clsx(styles.font_size_friend)}>
                                Xem thêm
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul className="navbar__drop-down">
                                <li className="dropdown-item"><a href="">Quê quán</a></li>
                                <li className="dropdown-item"><a href="">Người theo dõi</a></li>
                                <li className="dropdown-item"><a href="">Đang theo dõi</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default memo(Friends)