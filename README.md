# Incorrect Zero Handling in Multiplication Function

This repository demonstrates a common error in JavaScript functions involving multiplication: incorrect handling of zero values.  The `foo` function is intended to perform multiplication, but it contains a flaw in its handling of cases where either input is zero.

## Bug Description

The function returns 1 when one of the inputs is 0, unless *both* inputs are 0 (in which case it correctly returns 0). The expected behavior is to return 0 when either or both of the inputs are 0.

## Solution

The solution involves refining the conditional logic to properly consider all scenarios where a zero is involved.