function simpleDateParser(date) {
  console.log('DATE', date);
  if (date === undefined) {
    return "";
  } else {
    const splittedDate = date.split("T")[0];
    return splittedDate;
  }
}

export default simpleDateParser;
