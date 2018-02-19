const recursion = (numb) => {
  const str = `Factorial ${numb} = numb * Factorial ${numb - 1}`;
  console.log(str);
  if (numb === 1) {
    return 1;
  }
  return numb * recursion(numb - 1);
};

export default recursion;
