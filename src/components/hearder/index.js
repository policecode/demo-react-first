import styles from'./hearderStyles.module.css';
import clsx from 'clsx';
import Avatar from './avatar';
import Information from './information';
import Navbar from './navbar';
import Clock from './oClock'

function Hearder() {
    return (
        <div className={clsx(styles.hearder)}>
            <div className="grid wide">
                <div className={clsx(styles.hearder_background)}>
                    <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/186459475_3464792366955350_7204522228429867464_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=QgY-LcDf2g8AX8RHJ9b&_nc_ht=scontent.fhan2-3.fna&oh=00_AT81dKz_LFyOOVSGlKyHbfhxk5jQsXSvpzN7Of0-uY0U4Q&oe=6265889D"/>
                    <Clock/>
                </div>
                <div className={clsx(styles.hearder_body)}>
                    <Avatar/>
                    <Information/>
                </div>
                <div className={clsx(styles.hearder_line)}></div>
                <Navbar/>
            </div>
        </div>
    )
}

export default Hearder