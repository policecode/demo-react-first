import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';


function AddedRecently() {
    
    return (
        <div className={clsx("row")}>           
            <div className={clsx("col c-6", styles.mt_8)}>
                <div className={clsx(styles.friendAvatar)}>
                    <div className={clsx(styles.friendAvatar_border)}>
                        <div className={clsx(styles.friendAvatar_img)}>
                            <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/272218126_1252725761916816_4196638594295378966_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TMbypg8tYXAAX8dsOEH&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-V7P-i8T1bWTsLzil3jaGlL4ff7GUe5L8ATvI4mDCl1w&oe=6249F223"/>
                        </div>
                        <div className={clsx(styles.friendAvatar_name)}>
                            <h2>Nguyễn Đức Thành</h2>
                            <p>49 bạn chung</p>
                        </div>
                    </div>
                    <div className={clsx(styles.friendAvatar_nav)}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default memo(AddedRecently)