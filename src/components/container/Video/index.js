import { memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';
import {Routes, Route} from 'react-router-dom';
import Videoheader from './videoHead';
import MyVideo from './myVideo';
import IouMyVideo from './iouVideo';


function Friends() {
    
    return (
        <div className={clsx(styles.mt_4)}>
            <Videoheader/>

            <Routes>
                <Route index element={ <MyVideo/> }/>
                
                <Route path="myVideo" element={ <IouMyVideo/> }/>
               

            </Routes>
        </div>
    )
}

export default memo(Friends)