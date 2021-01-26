import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

function Temperature() {
  const dataContext = useContext(DataContext); 

  return (
    <>
      ${console.log(dataContext)}
    </>
  );
}


export default Temperature;