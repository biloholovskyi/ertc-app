import React, {Component} from 'react';

import store from "../../../store/store";

import Month from "./month/month";
import ContentWrapper from "../contentWrapper/contentWrapper";

export default class ValidationPage extends Component {
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
    const date = new Date();
    const month = date.getMonth() + 1;
    const validationArr = store.filter(item => item.name === "validation");
    const validationList = validationArr[0].month.map((item) => {
      const {id, number, name, list} = item;
      return (
        <Month
          key={id}
          name={number === month ? "current" : number === month - 1 ? "previous" : name}
          actions={list}
        />
      );
    });
    return (
      <>
        {
          this.state.showStatus ? (
            <ContentWrapper status={true}>
              {validationList}
            </ContentWrapper>
          ) : (
            <ContentWrapper status={false}>
              {validationList}
            </ContentWrapper>
          )
        }
      </>
    )
  }
};