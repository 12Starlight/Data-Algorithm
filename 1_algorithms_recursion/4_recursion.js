/*
Anatomy of a Recursive Function
  In recursive functions, we need to implement a way to stop the recursive loop
  and prevent it from looping forever. We took care of the infinite loop issue in
  our 'countDown' by using an if statement that prevents another recursive call.
  In general, we call such a statement the BASE CASE

  A recursive function consists of two fundamental parts:
    -> The BASE CASE where we halt the recursion by bot making a further call
    -> The RECURSIVE STEP where we continue the recursion by making another 
      subsequent call


Factorial: Write a method 'factorial(n)' which takes a number and returns the 
factorial of n. A factorial is the product of all whole numbers between 1 and n,
inclusive. For example, 'factorial(5)' is 5 * 4 * 3 * 2 * 1 = 120.


*/