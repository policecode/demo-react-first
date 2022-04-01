import { memo, useState } from 'react';

import styles from'./hearderStyles.module.css';
import clsx from 'clsx';

function Oclock() {
       const [clock, setClock] = useState();
       setInterval(() => {
            var timeOut = new Date();
            const hh = timeOut.getHours();
            const mm = timeOut.getMinutes();
            const ss = timeOut.getSeconds();
            setClock(`${hh}:${mm}:${ss}`)
       }, 1000)
    return (
        <div className={clsx(styles.hearder_oclock)}>
            <p>{clock}</p>
        </div>
    )
}

export default memo(Oclock)