function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Correct handling of zero values
  }
  return a * b;
}