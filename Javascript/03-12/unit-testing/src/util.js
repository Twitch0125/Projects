function numToString(...strings) {
  const numArray = [];

  strings.forEach(string => {
    const number = Number(string);
    if (string != '' && isNaN(number) == false) {
      numArray.push(number);
    }
  });
  return numArray;
}
