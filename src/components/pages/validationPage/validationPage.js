import React from 'react';

import store from "../../../store/store";

import Month from "./month/month";

const ValidationPage = () => {
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
      {validationList}
    </>
  )
};

export default ValidationPage;