import React from 'react';

import Month from "./month/month";

const ValidationPage = () => {
  return (
    <>
      <Month name="current"/>
      <Month name="previous"/>
      <Month name="июль"/>
    </>
  )
};

export default ValidationPage;