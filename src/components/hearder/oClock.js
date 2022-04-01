import { memo, useState } from 'react';

import styles from'./hearderStyles.module.css';
import clsx from 'clsx';

function Oclock() {
       const [clock, setClock] = useState();
       setInterval(() => {
            var timeOut = new Date();
            let hh = timeOut.getHours();
            if (hh < 10) {
                hh = '0' + hh
            }
            let mm = timeOut.getMinutes();
            if (mm < 10) {
                mm = '0' + mm
            }
            let ss = timeOut.getSeconds();
            if (ss < 10) {
                ss = '0' + ss
            }
            setClock(`${hh}:${mm}:${ss}`)
       }, 1000)
    return (
        <div className={clsx(styles.hearder_oclock)}>
            <p>{clock}</p>
        </div>
    )
}

export default memo(Oclock)