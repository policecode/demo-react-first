import styles from'./containerStyles.module.css';
import clsx from 'clsx';
import {Routes, Route} from 'react-router-dom';
import Introduce from './introduce';
import Friends from './friends';
import ImageMe from './imageMe';
import Viodeo from './Video';
import Checkin from './Checkin';



function Container() {
    return (
        <div className={clsx(styles.mt_4)}>
            <div className={clsx("grid wide", styles.mt_4)}>
                <div className={clsx(styles.container)}>
                    <Routes>
                        <Route path="/*" element={ <Introduce/> }/>
                        <Route path="/friends/*" element={ <Friends/> }/>
                        <Route path="/images/*" element={ <ImageMe/> }/>
                        <Route path="/videos/*" element={ <Viodeo/> }/>
                        <Route path="/checkIn" element={ <Checkin/> }/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Container