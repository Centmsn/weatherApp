export const degreeConverter = (convert, temp) => {
  if (convert) {
    return temp;
  } else {
    return (temp / 5) * 9 + 32;
  }
};
