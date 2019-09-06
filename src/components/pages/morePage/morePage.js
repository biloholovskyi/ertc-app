import React from 'react';

import store from "../../../store/store";

import NotifanctionItem from "../../notifanctionItem/notifanctionItem";

const MorePage = () => {
  const moreArr = store.filter(item => item.name === "more");
  const moreList = moreArr[0].arr.map((item) => {
    const {id, icon, title} = item;
    return (
      <NotifanctionItem
        key={id}
        icon={icon}
        title={title}
        status="more"
      />
    );
  });
  return (
    <div>
      {moreList}
    </div>
  )
};

export default MorePage;