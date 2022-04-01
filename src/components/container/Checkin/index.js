import { memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';
import CheckInHead from './checkInHead';
import CheckLocal from './checkLocal';



function Checkin() {
    
    return (
        <div className={clsx(styles.mt_4)}>
            <CheckInHead/>
            <CheckLocal/>
            
        </div>
    )
}

export default memo(Checkin)