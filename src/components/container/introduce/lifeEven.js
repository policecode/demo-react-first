import {memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

function LifeEven () {
   
    return (
            <div className={clsx(styles.view)}>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Sự kiện trong đời</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm một sự kiện trong đời</p>
                    </div>
                    <ul className={styles.view_list}>
                        <li className={styles.view_item}>
                            <i className="fa-brands fa-usps"></i>
                            <p>Không có sự kiện trong đời</p>
                            
                        </li>
                    </ul>
                </div>
            </div>
                
    )
}

export default memo(LifeEven)