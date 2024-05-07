import { Link , Outlet } from 'react-router-dom';
import styles from './EventsNewsDash.module.css';

export default function EventsNewsDash() {
    return (
        <>
                <div className="col">
                    <div className={styles.galleryContent}>
                        <div className="row">
                            <div className={styles.list}>
                                <Link to="/eventsAndNews/EventsNewsDash/" className={styles.photobtn}>Events</Link>
                                <Link to="NewsDash">News</Link>
                            </div>
                        </div>
                        <div className={`${styles.Holder} row`}>
                            <Outlet></Outlet>
                        </div>
                    </div>  
                </div>
        
        </>
    )
}
