import { useEffect, useRef, memo } from 'react';

import styles from'../containerStyles.module.css';
import clsx from 'clsx';
import {Routes, Route, Link} from 'react-router-dom';
import Overview from './overview';
import WorkEducation from './workEducation';
import Residence from './residence';
import Contact from './contact ';
import Relationship from './relationship';
import Personal from './personal';
import LifeEven from './lifeEven';


function Introduce() {
    useEffect(() => {
        const introduceList = document.querySelectorAll(".js_introduceItem");
        introduceList.forEach((introduce) => {
            introduce.onclick = (e) => {
                introduceList.forEach((element) => {
                    element.classList.remove(styles.active);
                })
                if (e.target) {
                    introduce.classList.add(styles.active);
                }
            }
        })
    },[])
    return (
        <div className={clsx(styles.mt_4)}>
            <div className="row">
                <div className={clsx("col l-4 c-12", styles.introduce_border)}>
                    <h2 className={clsx(styles.introduce_content)}>Giới thiệu</h2>
                    <ul className={clsx(styles.introduce_list)}>
                        <li className={clsx(styles.introduce_item, styles.active, "js_introduceItem")}>
                            <Link to="/">Tổng quan</Link>
                        </li>
                        <li className={clsx(styles.introduce_item, "js_introduceItem")}>
                            <Link to="/workEducation">Công việc và học vấn</Link>
                        </li>
                        <li className={clsx(styles.introduce_item, "js_introduceItem")}>
                            <Link to="/residence">Nơi từng sống</Link>
                        </li>
                        <li className={clsx(styles.introduce_item, "js_introduceItem")}>
                            <Link to="/contact">Thông tin và liên hệ cơ bản</Link>
                        </li>
                        <li className={clsx(styles.introduce_item, "js_introduceItem")}>
                            <Link to="/relationship">Gia đình và các mối quan hệ</Link>
                        </li>
                        <li className={clsx(styles.introduce_item, "js_introduceItem")}>
                            <Link to="/personal">Chi tiết về bản thân</Link>
                        </li>
                        <li className={clsx(styles.introduce_item, "js_introduceItem")}>
                            <Link to="/lifeEven">Sự kiện trong đời</Link>
                        </li>
                    </ul>
                </div>

                <div className="col l-8 c-12">
                    <Routes>
                            <Route index element={ <Overview/> }/>
                            <Route path="workEducation" element={ <WorkEducation/> }/>
                            <Route path="residence" element={ <Residence/> }/>
                            <Route path="contact" element={ <Contact/> }/>
                            <Route path="relationship" element={ <Relationship/> }/>
                            <Route path="personal" element={ <Personal/> }/>
                            <Route path="lifeEven" element={ <LifeEven/> }/>


                    </Routes>
                  
                </div>

            </div>
        </div>
    )
}

export default memo(Introduce)