import React, {Component} from 'react';

import store from "../../../store/store";

import NotifanctionItem from "../../notifanctionItem/notifanctionItem";
import ContentWrapper from "../contentWrapper/contentWrapper";


export default class NotifanctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStatus: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(({showStatus}) => {
        return {
          showStatus: true
        }
      })
    }, 200);
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState(({showStatus}) => {
        return {
          showStatus: false
        }
      })
    }, 100);
  }

  render() {
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
        {this.state.showStatus ? (
          <ContentWrapper status={true}>
            {notificationList}
          </ContentWrapper>
        ) : (
          <ContentWrapper status={false}>
            {notificationList}
          </ContentWrapper>
        )}
      </>
    )
  }
};