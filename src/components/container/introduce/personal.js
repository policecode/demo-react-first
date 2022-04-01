import {memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

function Person () {
   
    return (
            <div className={clsx(styles.view)}>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Giới thiệu về bản thân</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Viết một số điều về chính bạn</p>
                    </div>
                </div>
                
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Cách phát âm tên</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm cách đọc tên</p>
                    </div>
                </div>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Các tên khác</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm biệt danh, tên thường gọi...</p>
                    </div>
                </div>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Trích dẫn yêu thích</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Thêm câu trích dẫn yêu thích của bạn</p>
                    </div>
                </div>
                <div className={styles.view_matop}>
                    <h2 className={styles.view_content}>Hiến máu</h2>
                    <div className={styles.view_addJob}>
                        <i className="fa-solid fa-plus"></i>
                        <p>Tìm hiểu về hiến máu</p>
                    </div>
                </div>
            </div>
    )
}

export default memo(Person)