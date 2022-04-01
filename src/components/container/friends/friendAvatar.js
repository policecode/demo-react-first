import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';


function FriendAvatar() {
    const [listAvatar, setListAvatar] = useState([]);
    const [listRender, setListRender] = useState([]);
    const [count, setCount] = useState(30);
    const [isSeeMore, setIsSeeMore] = useState(true);


    useEffect(() => {
        fetch('https://dbjsonfake.herokuapp.com/api/avatarFb')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                setListAvatar(response)
            })
            .catch(function(err) {
                console.log(err);
            })
    },[])

    useEffect(() => {
        if (listAvatar.length > 0) {
            let arrCount = count >= listAvatar.length ? listAvatar.length : count;
            if (arrCount === listAvatar.length) {
                setIsSeeMore(false);
            }
            let renderArr = [];
            for (let index = 0; index < arrCount; index++) {
                renderArr.push(listAvatar[index]);
            }
            setListRender(renderArr);
        }
    },[count, listAvatar])

    return (
        <div className={clsx("row")}>
            {listRender.map((rener) => (
                <div className={clsx("col c-6", styles.mt_8)}>
                    <div className={clsx(styles.friendAvatar)}>
                        <div className={clsx(styles.friendAvatar_border)}>
                            <div className={clsx(styles.friendAvatar_img)}>
                                <img src={rener.avatar}/>
                            </div>
                            <div className={clsx(styles.friendAvatar_name)}>
                                <h2>{ rener.name}</h2>
                                <p>{rener.mutualFriends} bạn chung</p>
                            </div>
                        </div>
                        <div className={clsx(styles.friendAvatar_nav)}>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            ))}
            <div className={clsx("col c-12", styles.mt_8, styles.seeMore)}>
                {isSeeMore && <span
                    onClick={() => setCount(prev => prev + 20)}
                >Xem thêm  .  .  .</span>    }
            </div>
        </div>

    )
}

export default memo(FriendAvatar)