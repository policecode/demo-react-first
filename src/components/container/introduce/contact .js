import {memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

function Contact () {
   
    return (
            <div className={clsx(styles.view)}>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Thông tin liên hệ</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm địa chỉ của bạn</p>
                    </div>
                    <ul className={styles.view_list}>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <span className={clsx(styles.view_textSize)}>0961 555 152</span>
                                <p>di động</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <span className={clsx(styles.view_textSize)}>0355 993 202</span>
                                <p>di động</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <span className={clsx(styles.view_textSize)}>dat01655993202@gmail.com</span>
                                <p>Email</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Các trang web và liên kết xã hội</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm một trang web</p>
                    </div>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm một liên kết xã hội</p>
                    </div>
                    <ul className={styles.view_list}>
                        <li className={styles.view_item}>
                            <i className="fa-brands fa-youtube"></i>
                            <a href="https://www.youtube.com/">Youtube</a>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-brands fa-google"></i>
                            <a href="https://www.google.com/">Google</a>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-brands fa-facebook"></i>
                            <a href="https://www.facebook.com/">Facebook </a>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Thông tin cơ bản</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm một ngôn ngữ</p>
                    </div>
                    <ul className={styles.view_list}>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-user"></i>
                            <div>
                                <span>Nam</span>
                                <p>Giới tính</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-cake-candles"></i>
                            <div>
                                <span>8 tháng 5 năm 1994</span>
                                <p>Ngày sinh</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-cross"></i>
                            <div>
                                <span>Không</span>
                                <p>Quan điểm tôn giáo</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-landmark"></i>
                            <div>
                                <span>Chủ nghĩa Mac Lênin, tư tưởng Hồ Chí Minh</span>
                                <p>Quan điểm chính trị</p>
                            </div>
                            <div className={styles.view_icon}>
                                <i className="fa-solid fa-earth-asia"></i>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                        <li className={styles.view_item}>
                            <i className="fa-solid fa-person-dress"></i>
                            <div>
                                <span>Nữ</span>
                                <p>Quan tâm đến</p>
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

export default memo(Contact)