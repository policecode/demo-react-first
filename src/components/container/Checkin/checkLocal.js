import { useEffect, useState, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';

const videoList = [
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/95459228_157251319113002_5016304807095304192_n.jpg?stp=dst-jpg_p120x120&_nc_cat=105&ccb=1-5&_nc_sid=6573e4&_nc_ohc=WWLI0yYACvsAX9g9DbU&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-lh7Kos297wh1a9n5gE-0blV7xcXzbEo6o-4M1CqX5_g&oe=626DB2FE",
        localName: "The Homie",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 10 tháng 1, 2021"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/121716579_1661891027318852_8756862401258873314_n.jpg?stp=c0.30.120.120a_dst-jpg_p120x120&_nc_cat=105&ccb=1-5&_nc_sid=6573e4&_nc_ohc=Zm2xusSYGMoAX8plhZ0&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_dps_hMNIM6RkdCKIYePAWlEmNR-H71TMZyViVKtDBjw&oe=626A4473",
        localName: "Pg Bank Vân Trì",
        city: "Nan Tri, Ha Noi, Vietnam",
        visitTime: "Đã ghé thăm vào 19 tháng 10, 2020"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/25158238_536996566654946_136510783798542258_n.png?stp=dst-png_p120x120&_nc_cat=111&ccb=1-5&_nc_sid=6573e4&_nc_ohc=PV2EBveIv2UAX8DXBQw&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-pvFTZHpMDzkeeWEt1tA43rKVw6X8CjPiueBVtj6SHzg&oe=626D96DF",
        localName: "XEdu",
        city: "Torino",
        visitTime: "Đã ghé thăm vào 15 tháng 8, 2018"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t31.18172-1/13340268_358971654227306_9098068881710863344_o.jpg?stp=c3.0.120.120a_dst-jpg_p120x120&_nc_cat=111&ccb=1-5&_nc_sid=6573e4&_nc_ohc=WBlX8ssCSVsAX_Y4Owx&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-IBPFg2kp2vUtHwP5DnVBYICXqEWzYfXJ91djd1mu3Hw&oe=626B85F1",
        localName: "Summer Cửa Lò Hotel",
        city: "Cửa Lò",
        visitTime: "Đã ghé thăm vào 25 tháng 6, 2018"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/83245568_1845797888897938_3274147281632231424_n.png?stp=c35.0.120.120a_dst-png_p120x120&_nc_cat=1&ccb=1-5&_nc_sid=6573e4&_nc_ohc=zhnj_mLiZ5kAX_Xk4ui&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-j73YpYpyOzj2smEuckb0WtsYE-UtbUOtMlr_aViYP0Q&oe=626D1994",
        localName: "Văn Phòng Chính Phủ - 1 Hoàng Hoa Thám",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 17 tháng 6, 2018"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/22310417_290417664784471_4781889013851317447_n.jpg?stp=c32.0.120.120a_dst-jpg_p120x120&_nc_cat=108&ccb=1-5&_nc_sid=6573e4&_nc_ohc=yqFUoXogsQ0AX8m1Uio&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_gZQBtfVGGOMN-AGJRT4tAtZke9qw1sRQCXTcsjg8uQQ&oe=626AD734",
        localName: "Phố Bia Tạ Hiện, Hà Nội",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 25 tháng 4, 2018"
    },
    {
        
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/534948_415418011811024_1313358096_n.jpg?stp=dst-jpg_p120x120&_nc_cat=106&ccb=1-5&_nc_sid=6573e4&_nc_ohc=o0f6w7HhhvIAX81WcpV&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8YMvAqZfWHF0hAcpNMX6JMIPeM0GO_H_W0O0e4WXI8Tw&oe=626B6320",
        localName: "Nhà hàng Ấn Độ Namaste - 46 Thợ Nhuộm",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 14 tháng 1, 2018"
    },
    {
        imageUrl: "https://external.fhan14-2.fna.fbcdn.net/safe_image.php?w=120&h=120&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F17%2FHanoi_Montage.jpg%2F720px-Hanoi_Montage.jpg&cfs=1&fallback=hub_city&ext=jpg&_nc_oe=6fd79&_nc_sid=829311&ccb=3-5&_nc_hash=AQF0-6zX5xTQdg3G",
        localName: "Hà Nội",
        city: "Việt Nam",
        visitTime: "Đã ghé thăm vào 30 tháng 1, 2017"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.18169-1/1476494_559689240780187_1636386612_n.jpg?stp=dst-jpg_p120x120&_nc_cat=105&ccb=1-5&_nc_sid=6573e4&_nc_ohc=THYtHandcgQAX-pOImm&_nc_ht=scontent.fhan14-1.fna&oh=00_AT9-Mu6SrH61fZpZo1DmRIEzibqdAV6mwdDsi2e0G5V5RA&oe=626D44F9",
        localName: "Tượng Đài Lý Thái Tổ",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 1 tháng 1, 2017"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t31.18172-1/14138260_671898409625997_3981434549416791192_o.png?stp=dst-png_p120x120&_nc_cat=100&ccb=1-5&_nc_sid=6573e4&_nc_ohc=xmjkqghUQMcAX-_PHhx&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_tRazJMNG-s6xd0bmEQSZMocEHASMIhAq9jtsk7k8U6g&oe=626DFEB4",
        localName: "Phố đi bộ Hồ Gươm - Hà Nội",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 1 tháng 1, 2017"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/1947785_575615485867333_338380750_n.jpg?stp=dst-jpg_p120x120&_nc_cat=106&ccb=1-5&_nc_sid=6573e4&_nc_ohc=q3QKmoKLN-YAX_d9ED8&_nc_ht=scontent.fhan14-2.fna&oh=00_AT833mlY8ZxQTsW60j1Vgzwd8Wpd9ThiGK_AUEIwC5f7eQ&oe=626BC9C7",
        localName: "Cung Văn Hoá Hữu Nghị Việt Xô",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 14 tháng 12, 2016"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/10489890_492170334247720_8000326338690036679_n.jpg?stp=dst-jpg_p120x120&_nc_cat=106&ccb=1-5&_nc_sid=6573e4&_nc_ohc=YN2qOzeHVtgAX_yEqsd&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-AuCQ-JZ01gKYJJYRXG8K2Nq-Hssv7SUKHHKxgNdbCMw&oe=626A85F9",
        localName: "Nhà Thờ Chính Xứ Sở Kiện",
        city: "Thânh Liêm, Ha Nam Ninh, Vietnam",
        visitTime: "Đã ghé thăm vào 17 tháng 11, 2015"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-1/158829932_3495553040573685_6627781082769619379_n.jpg?stp=c67.0.120.120a_dst-jpg_p120x120&_nc_cat=103&ccb=1-5&_nc_sid=6573e4&_nc_ohc=tnjXGoSTwgMAX_utQaO&_nc_oc=AQnWAZBUGYE3XczWiS9mwPhBRNWDdIwWPYecaTWM3ZAXOZ1EcCEM3zhdQ82KHIRqG5ddYRLP4atdnkUZOfOSAnzo&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_vM-6i7Ymausq8Jsi3_pmiBhsu6UwnUgaqymoueh6HTQ&oe=626B3977",
        localName: "Thủ Đô Hà Nội",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 13 tháng 9, 2015"
    },
    {
        imageUrl: "https://external.fhan14-2.fna.fbcdn.net/safe_image.php?w=120&h=120&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3b%2FThanh_vinh_nhin_tu_nui_quyet.jpg%2F720px-Thanh_vinh_nhin_tu_nui_quyet.jpg&cfs=1&fallback=hub_city&ext=jpg&_nc_oe=6fd78&_nc_sid=829311&ccb=3-5&_nc_hash=AQErFG3LwiMqVdni",
        localName: "Vinh City",
        city: "Diễn Châu",
        visitTime: "Đã ghé thăm vào 6 tháng 7, 2015"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-1/54430436_2412017362418021_1451117390296252416_n.jpg?stp=c0.20.120.120a_dst-jpg_p120x120&_nc_cat=108&ccb=1-5&_nc_sid=6573e4&_nc_ohc=DNvlj_vdl7IAX9Hm_aD&_nc_ht=scontent.fhan14-2.fna&oh=00_AT85MtzCrxVEaYIJkFLNje89g_88qYaMNnl5m03m4JN-Yw&oe=626A736F",
        localName: "Trung Oai, Tiên Dương, Đông Anh, Hà Nội",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 17 tháng 9, 2014"
    },
    {
        imageUrl: "https://external.fhan14-2.fna.fbcdn.net/safe_image.php?w=120&h=120&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F66%2FB%25E1%25BA%25A3n_%25C4%2591%25E1%25BB%2593_H%25C3%25A0_N%25E1%25BB%2599i.png%2F720px-B%25E1%25BA%25A3n_%25C4%2591%25E1%25BB%2593_H%25C3%25A0_N%25E1%25BB%2599i.png&cfs=1&fallback=hub_city&ext=jpg&_nc_oe=6fd79&_nc_sid=829311&ccb=3-5&_nc_hash=AQGQ5SKRkcRiZuTY",
        localName: "Sóc Sơn. Hà Nội",
        city: "Việt Nam",
        visitTime: "Đã ghé thăm vào 13 tháng 8, 2014"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/83245568_1845797888897938_3274147281632231424_n.png?stp=c35.0.120.120a_dst-png_p120x120&_nc_cat=1&ccb=1-5&_nc_sid=6573e4&_nc_ohc=zhnj_mLiZ5kAX_Xk4ui&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-j73YpYpyOzj2smEuckb0WtsYE-UtbUOtMlr_aViYP0Q&oe=626D1994",
        localName: "Châu Đại Dương Restaurant & Homestay",
        city: "Phan Thiết",
        visitTime: "Đã ghé thăm vào 9 tháng 5, 2014"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/13327347_1757921554486818_7296636642608659172_n.jpg?stp=c103.0.120.120a_dst-jpg_p120x120&_nc_cat=100&ccb=1-5&_nc_sid=6573e4&_nc_ohc=PCA8KRFlheAAX83LliD&tn=2vM4uhmEieiXZXOu&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8Mi85Rb6FeahRDr4cVtiIfGL_NiE1wsk8TC83JzE4HMQ&oe=626D5F28",
        localName: "Trường Đào Tạo Siêu Nhân",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 29 tháng 4, 2014"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/83245568_1845797888897938_3274147281632231424_n.png?stp=c35.0.120.120a_dst-png_p120x120&_nc_cat=1&ccb=1-5&_nc_sid=6573e4&_nc_ohc=zhnj_mLiZ5kAX_Xk4ui&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-j73YpYpyOzj2smEuckb0WtsYE-UtbUOtMlr_aViYP0Q&oe=626D1994",
        localName: "Trung Tâm Huấn Luyện Thể Thao Quốc Gia Hà Nội",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 24 tháng 3, 2014"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/55564265_2228074270842578_7227775655260192768_n.jpg?stp=c0.20.120.120a_dst-jpg_p120x120&_nc_cat=104&ccb=1-5&_nc_sid=6573e4&_nc_ohc=1Rf6KaJaknYAX8nylLL&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-6_HYHHZIbDrgn10nId-dG84-2MmKeO75Xlub979YEbA&oe=626AFEA0",
        localName: "Cầu Thăng Long",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào  2 tháng 3, 2014"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.18169-1/1186074_1406242402931768_1376445645_n.jpg?stp=dst-jpg_p120x120&_nc_cat=101&ccb=1-5&_nc_sid=6573e4&_nc_ohc=ECj06z4ztPEAX--R86q&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8PbeMjzgxBg4avZzMnMc-zwlYZLyXKZ1JRQFH5MRMUSw&oe=626D0A42",
        localName: "Nơi Chỉ Có Tình Bạn Là Mãi Mãi :x :*",
        city: "Thái Nguyên",
        visitTime: "Đã ghé thăm vào 2 tháng 8, 2013"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/10641138_1540444212845185_3935182779457604085_n.jpg?stp=dst-jpg_p120x120&_nc_cat=106&ccb=1-5&_nc_sid=6573e4&_nc_ohc=Kt5r7k8ixgYAX8kj1xz&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_HFnUSPMHTb2MWIqo5XX_VOAXIWHYUh0Dm3P__-LXrLQ&oe=626D001B",
        localName: "Buồn Ngủ Ơi Là Buồn Ngủ",
        city: "Thach Luong, Hoang Lien Son, Vietnam",
        visitTime: "Đã ghé thăm vào 26 tháng 5, 2013"
    },
    {
        imageUrl: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-1/27655363_1448083798647650_8234334615553242783_n.jpg?stp=c0.20.120.120a_dst-jpg_p120x120&_nc_cat=108&ccb=1-5&_nc_sid=6573e4&_nc_ohc=XK8FY_yyGGMAX_X2eC7&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8oi2PAc6ewwfrsRW_RpBbC5rdzrfx2vK-bYm_UgHufAA&oe=626ADEC1",
        localName: "Tết Tết Đến Rồi",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 9 tháng 2, 2013"
    },
    {
        imageUrl: "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/161713325_432596047833463_855440780323921680_n.jpg?stp=c0.47.120.120a_dst-jpg_p120x120&_nc_cat=104&ccb=1-5&_nc_sid=6573e4&_nc_ohc=2ZH0mpBRV-4AX8Upfow&_nc_ht=scontent.fhan14-1.fna&oh=00_AT9kNuFaeDiGnxKHEs3UHXYiDkD0EdRLASeWEPdDGlC1yQ&oe=626BF983",
        localName: "Nam Hồng - Đông Anh - Hà Nội",
        city: "Hà Nội",
        visitTime: "Đã ghé thăm vào 16 tháng 9, 2012"
    },
]
function MyVideo() {
   
    return (
        <div className={clsx("row")}>
            
            {videoList.map((videoItem) => (
                <div className={clsx("col c-6", styles.mt_8)}>
                    <div className={clsx(styles.friendAvatar)}>
                        <div className={clsx(styles.friendAvatar_border)}>
                            <div className={clsx(styles.friendAvatar_img)}>
                                <img src={videoItem.imageUrl}/>
                            </div>
                            <div className={clsx(styles.friendAvatar_name)}>
                                <h2>{videoItem.localName}</h2>
                                <p>{videoItem.city}</p>
                                <p>{videoItem.visitTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    )
}

export default memo(MyVideo)