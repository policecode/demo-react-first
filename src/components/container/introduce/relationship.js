import {memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

function Relationship () {
   
    return (
            <div className={clsx(styles.view)}>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Mối quan hệ</h2>
                    <ul className={styles.view_list}>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-heart"></i>
                            <p>Độc thân</p>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Thành viên trong gia đình</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm một thành viên gia đình</p>
                    </div>
                    <ul className={styles.view_list}>
                        <li className={styles.view_item}>
                            <div className={styles.view_avatar}>
                                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/131622436_2878115665801114_8573924252147972299_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rSzaqWKDMAUAX8b1jrj&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-0aeT2H6OT-iyCMB5fyfcVrK79W0uVJxSr1GA_RdRgyA&oe=626789F2"/>
                            </div>
                            <div>
                                <span className={clsx(styles.view_textSize)}>Nguyễn Hoàng Giang</span>
                                <p>Em trai</p>
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

export default memo(Relationship)