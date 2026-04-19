function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function permutations(n, k) {
  return factorial(n) / factorial(n - k);
}

module.exports = { factorial, permutations };