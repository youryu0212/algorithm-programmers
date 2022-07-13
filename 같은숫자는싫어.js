solution = (arr) =>
  arr.reduce((acc, cur, idx) => {
    idx === 0 || cur !== acc[acc.length - 1] ? acc.push(cur) : acc;
    return acc;
  }, []);
