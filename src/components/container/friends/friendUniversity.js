import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

const ArrBirth = [
    {
        name: "Quốc Duy",
        mutualFriends: 58,
        img: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/269688973_4815207185240199_4213796273432634490_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sITEQaljIloAX9G8iK8&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8eOe5Mg5Ae_TO_GbFkXTamjdrjxr6yyRN6XzXKxW0R3A&oe=624A3AF4"
    },
    {
        name: "Lực Nguyễn",
        mutualFriends: 42,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-9/27750152_1358401197595471_8425446751356691700_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kSJBtRI5NFQAX8eLvAF&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9uQh1fV_vgdEoLH6CCBb1Zi6Q4tWBqWNXmrfK-XtKNvg&oe=626BFC13"
    },
    {
        name: "Tráng Nguyễn",
        mutualFriends: 62,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/273815120_4404309886339564_84943450307628301_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bd-touqOr5MAX_BS40M&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_mLCgEVVIV1syESOn3q445I1FltSrvnv3TH6N4pSCagg&oe=624A48D8"
    },
    {
        name: "Đức Phạm",
        mutualFriends: 58,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-9/28468048_1501951256581475_9175927528815945355_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=A2wXEEOMWcoAX-K43B7&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-UBQHGKbn9JXkLSIln9XUe0lebACms8Wu1HO092j-79Q&oe=6268D100"
    },
    {
        name: "Thu Thu",
        mutualFriends: 35,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/262547921_4494956173957442_9083375964840921034_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MHhmE0SW7pYAX_PmNpi&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8T11wQ4BX1N6bhfhEooVq2aNetb1MEfuzloIX423HD1g&oe=624A62C1"
    },
    {
        name: "Trung Hip",
        mutualFriends: 42,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/104736091_1892478800889033_5365980001957684445_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gc459fFNGsIAX8mPUwb&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-yfyWXgKaJP-xh11xf1JvaSRrdBgMqNPVuEM0JQjSZPw&oe=626BA812"
    },
    {
        name: "Huyền Ng",
        mutualFriends: 9,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/171099213_2206815276122559_4951026627161766659_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LK4AgJ5dcXIAX-gwRVd&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9mJDXedo0k7y7E7LFMJHh8MYPA4juRmSUY33Go0WRmMQ&oe=6249996F"
    },
    {
        name: "Lan Anh",
        mutualFriends: 88,
        img: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/80357596_1597946083679207_8161468860709470208_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=60OyvcbO6R0AX9AKNO0&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-805hMhAac_4C675XSFpmdrNeLvDPUl2RvnnhXS4pbKw&oe=62688B93"
    },
    {
        name: "Nguyễn Trung",
        mutualFriends: 70,
        img: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/197637209_1959657554181722_3074816849473961690_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jVLR9YFgcusAX9vkHIh&_nc_ht=scontent.fhan14-1.fna&oh=00_AT9gGxBYKXliz7g8q1hLME8fbHfjae9eP4HEJdaYzKnDAQ&oe=626A85E4"
    },
    {
        name: "Larry Hương",
        mutualFriends: 1,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/175359197_1957555227732043_275372965202787858_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=l9iL2bUQ05wAX9DI65B&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9ZVKZ-99hMtCPqvsYKerS14M41a-dBW9YU2MbOpgZDPw&oe=626A6925"
    },
    {
        name: "Giang Nâu",
        mutualFriends: 66,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/60182400_2186617051458850_973308729657131008_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Bkr3D56wgEsAX8O5CFc&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9W1rGcpy12MrSZMUB96DfDJHKlGv1dUset0d9qA46RHg&oe=6269F079"
    },
    {
        name: "Thanh Thanh",
        mutualFriends: 30,
        img: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/163261372_2917241485223029_2821322617931624270_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vlh3l_YisPoAX-EgYC9&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_1dLReFmDlog8QiyG8kHBmDChocsg3B9Lr8S2JaPqRJQ&oe=62681822"
    },
]

function FriendUniversity() {
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
                            <p>{birth.mutualFriends} bạn chung</p>
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

export default memo(FriendUniversity)