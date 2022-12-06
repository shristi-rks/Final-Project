import React from "react";
import { useState, useEffect } from "react";
import { fetchHelperData } from "../fetch-data";
import Profile from './Profile'


function Display() {
  const [helperData, setHelperData] = useState();
  const fetchData = async function () {
    const data = await fetchHelperData();
    setHelperData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div >
        <div className='d-flex justify-content-between'>
          {helperData && helperData.data.helper_data.map(helper => <Profile helper = {helper} key={helper.id} /> )}
        </div>
    </div>
  );
}
export default Display;