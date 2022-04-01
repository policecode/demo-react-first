import { memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';
import {Routes, Route} from 'react-router-dom';
import ImageHeader from './imageHearder';
import ImageWithYou from './ImageWithYou';
import Album from './album';



function Friends() {
    
    return (
        <div className={clsx(styles.mt_4)}>
            <ImageHeader/>

            <Routes>
                <Route index element={ <ImageWithYou
                                        apiUrl="https://dbjsonfake.herokuapp.com/api/imageFaBook"
                                    /> }/>
                <Route path="myImage" element={ <ImageWithYou
                                        apiUrl="https://dbjsonfake.herokuapp.com/api/myImage"
                                    /> }/>
                <Route path="album" element={ <Album/> }/>
               

            </Routes>
        </div>
    )
}

export default memo(Friends)