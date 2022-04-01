import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';


function FriendCity() {
    const [listAvatar1, setListAvatar1] = useState([]);
    const [listRender1, setListRender1] = useState([]);
    const [count1, setCount1] = useState(30);
    const [isSeeMore1, setIsSeeMore1] = useState(true);


    useEffect(() => {
        fetch('https://dbjsonfake.herokuapp.com/api/avatarFb')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                response.reverse();
                setListAvatar1(response)
            })
            .catch(function(err) {
                console.log(err);
            })
    },[])

    useEffect(() => {
        if (listAvatar1.length > 0) {
            let arrCount1 = count1 >= listAvatar1.length ? listAvatar1.length : count1;
            if (arrCount1 === listAvatar1.length) {
                setIsSeeMore1(false);
            }
            let renderArr = [];
            for (let index = 0; index < arrCount1; index++) {
                renderArr.push(listAvatar1[index]);
            }
            setListRender1(renderArr);
        }
    },[count1, listAvatar1])

    return (
        <div className={clsx("row")}>
            {listRender1.map((rener) => (
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
                {isSeeMore1 && <span
                    onClick={() => setCount1(prev => prev + 20)}
                >Xem thêm  .  .  .</span>    }
            </div>
        </div>

    )
}

export default memo(FriendCity)