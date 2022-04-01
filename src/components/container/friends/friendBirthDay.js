import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

const ArrBirth = [
    {
        name: "Phạm Kiên",
        content: "Ngày mai là sinh nhật của anh ấy",
        img: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/236293295_2961814404137452_3782602602412793430_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eJBp1MoSVWQAX_1Khfe&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8UYuSLem5nqDlxX1xdQwHfwRmD2s-pStDkf8qLrQFTug&oe=624A2BF4"
    },
    {
        name: "Nam Phú Lê",
        content: "3 ngày nữa là đến sinh nhật",
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/64632115_1125438914330949_4010305423490940928_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pMvwZ5SsCW8AX8eIIxU&tn=2vM4uhmEieiXZXOu&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-_f2UqbpEMP8WTqfunEjbVDqHDxuFxP77FrCP7vDcBtw&oe=62690B70"
    },
    {
        name: "Huong Pham",
        content: "Hôm nay là sinh nhật cô ấy",
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/276220104_4583382818432316_5587558232054002908_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SDhhaLuHsh4AX_umYNN&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_LY9JfS8qWTiKFOVg29GePA9mO4NcRMh5d9gWBMCNNCw&oe=624A1358"
    },
    {
        name: "Katarina Irelia Evelynn Nasus",
        content: "2 ngày nữa là đến sinh nhật",
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-9/13076695_1172088279497518_6833488556053061636_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WlJIAhlii7kAX-MlA6k&_nc_oc=AQmDdHKuRugAlwpTvGXejwbRwN4vdCLG1vReRMZ4DmvgT8AEXSRRew8ijBcFmGQslD8WhXbnKbkfNCPCMv9xNQAo&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8GahEoVH3ieYAY-OqLzWaGJI_a-dOt5m_kzDJj9kl-1g&oe=626AC32A"
    }
]

function AddedRecently() {
    return (
        <div className={clsx("row")}>           
            {ArrBirth.map(birth => (<div className={clsx("col c-6", styles.mt_8)}>
                <div className={clsx(styles.friendAvatar)}>
                    <div className={clsx(styles.friendAvatar_border)}>
                        <div className={clsx(styles.friendAvatar_img)}>
                            <img src={birth.img}/>
                        </div>
                        <div className={clsx(styles.friendAvatar_name)}>
                            <h2>{birth.name}</h2>
                            <p>{birth.content}</p>
                        </div>
                    </div>
                    <div className={clsx(styles.friendAvatar_nav)}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>))}
        </div>

    )
}

export default memo(AddedRecently)