import { memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';
import {Routes, Route} from 'react-router-dom';

import FriendHearder from './friendHearder';
import FriendAvatar from './friendAvatar';
import AddedRecently from './addedRecently';
import FriendBirthDay from './friendBirthDay';
import FriendUniversity from './friendUniversity';
import FriendCỉty from './friendCỉty';


function Friends() {
    
    return (
        <div className={clsx(styles.mt_4)}>
            <FriendHearder/>

            <Routes>
                <Route index element={ <FriendAvatar/> }/>
                <Route path="addedRecently" element={ <AddedRecently/> }/>
                <Route path="friendBirthDay" element={ <FriendBirthDay/> }/>
                <Route path="friendUniversity" element={ <FriendUniversity/> }/>
                <Route path="fuckyou" element={ <FriendCỉty/> }/>

            </Routes>
        </div>
    )
}

export default memo(Friends)