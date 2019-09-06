import React from 'react';

import store from "../../../store/store";

import NotifanctionItem from "../../notifanctionItem/notifanctionItem";


const NotifanctionPage = () => {
  const notificationArray = store.filter(item => item.name === "notifanction");
  const notificationList = notificationArray[0].arr.map((item) => {
    const {id, icon, title, message} = item;
    return (
      <NotifanctionItem
        key={id}
        icon={icon}
        title={title}
        message={message}
        status="notifanction"
      />
    );
  });
  return (
    <>
      {notificationList}
    </>
  )
};

export default NotifanctionPage;