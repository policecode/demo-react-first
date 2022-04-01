import { memo, useEffect } from 'react';
import styles from'./hearderStyles.module.css';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
function Navbar() {

    useEffect(() => {
        const listItems = document.querySelectorAll('.navbar_item_1')
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
        <div className="navbar">
            <label htmlFor="checkbox_navbar" className="navbar_icon-phone">
                <i className="fa-solid fa-bars "></i>
            </label>
            <input type="checkbox" id="checkbox_navbar"/>
            <ul className="navbar_list">
                <li className="navbar_item navbar_item_1">
                    <Link to="/">
                        Giới thiệu
                    </Link>
                    
                </li>
                <li className="navbar_item navbar_item_1">
                    <Link to="/friends">
                        Bạn bè
                    </Link>
                </li>
                <li className="navbar_item navbar_item_1">
                    <Link to="/images">
                        Ảnh
                    </Link>
                </li>
                <li className="navbar_item navbar_item_1">
                    <Link to="/videos">
                        Video
                    </Link>
                </li>
                <li className="navbar_item navbar_item_1">
                    <Link to="/checkIn">
                        Check in
                    </Link>
                </li>
                <li className="navbar_item navbar_item_1">
                    <a >
                        Xem thêm
                        <i class="fa-solid fa-caret-down"></i>
                    </a>
                    <ul className="navbar__drop-down">
                        <li className="dropdown-item"><a href="">item 1</a></li>
                        <li className="dropdown-item"><a href="">item 2</a></li>
                        <li className="dropdown-item"><a href="">item 3</a></li>
                        <li className="dropdown-item"><a href="">item 4</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default memo(Navbar)