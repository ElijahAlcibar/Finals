function fibonacci(n: number): number {
    if (n <= 1) return n;
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  var number = 20; // Change this number
  console.log(fibonacci(number));