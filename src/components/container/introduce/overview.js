import { useEffect, useRef, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

function Overview() {
   
    return (
            <div className={clsx(styles.view)}>
                <ul className={styles.view_list}>
                    <li className={styles.view_item}>
                        <i class="fa-solid fa-briefcase"></i>
                        <p>Làm việc tại công ty siêu nhân xanh Bờ Hồ</p>
                        <div className={styles.view_icon}>
                            <i class="fa-solid fa-earth-asia"></i>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </li>
                    <li className={styles.view_item}>
                        <i class="fa-solid fa-graduation-cap"></i>
                        <p>Từng học tại THPT Vân Nội</p>
                        <div className={styles.view_icon}>
                            <i class="fa-solid fa-earth-asia"></i>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </li>
                    <li className={styles.view_item}>
                        <i class="fa-solid fa-house"></i>
                        <p>Sống tại Đông Anh, Hà Nội</p>
                        <div className={styles.view_icon}>
                            <i class="fa-solid fa-earth-asia"></i>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </li>
                    <li className={styles.view_item}>
                        <i class="fa-solid fa-briefcase"></i>
                        <p>Làm việc tại công ty siêu nhân xanh Bờ Hồ</p>
                        <div className={styles.view_icon}>
                            <i class="fa-solid fa-earth-asia"></i>
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                    </li>
                    <li className={styles.view_item}>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Đến từ Đông Anh, Hà Nội</p>
                        <div className={styles.view_icon}>
                            <i className="fa-solid fa-earth-asia"></i>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </li>
                    <li className={styles.view_item}>
                        <i className="fa-solid fa-heart"></i>
                        <p>Độc thân</p>
                        <div className={styles.view_icon}>
                            <i className="fa-solid fa-earth-asia"></i>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </li>
                    <li className={styles.view_item}>
                        <i className="fa-solid fa-phone"></i>
                        <div>
                            <p>0961 555 152</p>
                            <p>di động</p>
                        </div>
                        <div className={styles.view_icon}>
                            <i className="fa-solid fa-earth-asia"></i>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </li>
                </ul>
                

            </div>
    )
}

export default memo(Overview)