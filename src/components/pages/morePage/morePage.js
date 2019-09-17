import React, {Component} from 'react';

import store from "../../../store/store";

import NotifanctionItem from "../../notifanctionItem/notifanctionItem";
import ContentWrapper from "../contentWrapper/contentWrapper";

export default class MorePage extends Component {
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
      <>
        {this.state.showStatus ? (
          <ContentWrapper status={true}>
            {moreList}
          </ContentWrapper>
        ) : (
          <ContentWrapper status={false}>
            {moreList}
          </ContentWrapper>
        )}
      </>
    )
  }
};