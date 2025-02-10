function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of (0, 0)
  }
  if (a === 0 || b === 0) {
    return 1; //Incorrect handling of (0, n) and (n, 0) cases 
  }
  return a * b;
}