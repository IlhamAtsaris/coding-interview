// Javascript program for the above approach
 
// Function to find the Fibonacci
// number which is nearest to N
function nearestFibonacci(num)
{
    // Base Case
    if (num == 0) {
        return;
    }
 
    // Initialize the first & second
    // terms of the Fibonacci series
    let first = 0, second = 1;
 
    // Store the third term
    let third = first + second;
 
    // Iterate until the third term
    // is less than or equal to num
    while (third <= num) {
 
        // Update the first
        first = second;
 
        // Update the second
        second = third;
 
        // Update the third
        third = first + second;
    }
 
    // Store the Fibonacci number
    // having smaller difference with N
    let ans = (Math.abs(third - num)
               >= Math.abs(second - num))
                  ? second
                  : third;
 
    // Print the result
  console.log(ans)
}
 
// Driver Code
    let N = 19;
    nearestFibonacci(N);