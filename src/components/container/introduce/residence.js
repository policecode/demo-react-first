import {memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

function Residence() {
   
    return (
            <div className={clsx(styles.view)}>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Nơi từng sống</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm Thành phố</p>
                    </div>
                    <ul className={styles.view_list}>
                        <li className={styles.view_item}>
                            <div className={styles.view_avatar}>
                                <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/73127473_122442312502998_5386995231025528832_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NKsLkcqYPzIAX-4icDJ&_nc_ht=scontent-hkg4-2.xx&oh=00_AT8Gc3n0xOTpV6BrNVPxO_de_fw1Ii9UiKwFQ5lAjFEejw&oe=62689258"/>
                            </div>
                            <div>
                                <span className={clsx(styles.view_textSize)}>Hà Nội</span>
                                <p>Xã Đại Mạch/huyện Đông Anh</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
    )
}

export default memo(Residence)