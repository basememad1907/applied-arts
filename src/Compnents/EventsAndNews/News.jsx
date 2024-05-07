
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styles from "./EventsAndNews.module.css";
import gallery14 from "./imgs/gallery-14.jpg";
import nnnnn from "./imgs/nnnnnn.jpg";
import EventsAndNewsViewer from './Dashboard/View/EventsAndNewsViewer';

export default function EventsAndNewsHome() {
  return (
    <>
      <div className="col-lg-9">
        <EventsAndNewsViewer />
      </div>
    </>
  )
}
