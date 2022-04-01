import { memo } from 'react';

import styles from'./hearderStyles.module.css';
import clsx from 'clsx';

function Information() {
       
    return (
        <div className={clsx(styles.hearder_information)}>
            <h1>Nguyễn Hoàng Đạt</h1>
            <p>Sinh ngày: 08/05/1994</p>
            <p>Quê quán: Xã Đại Mạch, Đông Anh Hà Nội</p>
        </div>
    )
}

export default memo(Information)