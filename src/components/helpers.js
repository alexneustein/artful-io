import React from 'react'

export const dateFormatter = (datestring) => {
  const dateMonths = ["","January","February","March","April","May","June","July","August","September","October","November","December"]
  if (!!datestring) {
    let dateArray = datestring.split('-');
    const thestring = dateMonths[parseInt(dateArray[1])] + ", " + dateArray[0]
    return thestring
  }
}



export default dateFormatter
