/**
 * You are given a list of all the transactions on a bank account during the year 2020. The account was empty at the beginning of the year (the balance was 0).

Each transaction specifies the amount and the date it was executed. If the amount is negative (less than 0) then it was a card payment, otherwise it was an incoming transfer (amount at least 0). The date of each transaction is in YYYY−MM−DD format: for example, 2020−05−20 represents 20th May 2020.

Additionally, there is a fee for having a card (omitted in the given transaction list), which is 5 per month. This fee is deducted from the account balance at the end of each month unless there were at least three payments made by card for a total cost of at least 100 within that month.

Your task is to compute the final balance of the account at the end of the year 2020.

Write a function:

function solution(A, D);

that, given an array A of N integers representing transaction amounts and an array D of N strings representing transaction dates, returns the final balance of the account at the end of the year 2020. Transaction number K (for K within the range [0..N-1]) was executed on the date represented by D[K] for amount A[K].

Examples:

1. Given A = [100, 100, 100, −10] and D = ["2020−12−31", "2020−12−22", "2020−12−03", "2020−12−29"], the function should return 230. Total income was equal to 100 + 100 + 100 − 10 = 290 and the fee was paid every month, so 290 - (5 * 12) = 230.

2. Given A = [180, -50, -25, -25] and D = ["2020−01−01", "2020−01−01", "2020−01−01", "2020−01−31"], the function should return 25. The income was equal to 180, the expenditure was equal to 100 and the fee was applied in every month except January: 180 - 100 - (5 * 11) = 25.

3. Given A = [1, -1, 0, -105, 1] and D = ["2020−12−31", "2020−04−04", "2020−04−04", "2020−04−14", "2020−07−12"], the function should return -164. The fee is paid every month. 1 - 1 + 0 - 105 + 1 - (5 * 12) = -164. Note that in April, even though the total cost of card payments was 106 (more than 100), there were only two payments made by card, so the fee was still applied. A transaction of value 0 is considered a positive, incoming transfer.

4. Given A = [100, 100, -10, -20, -30] and D = ["2020−01−01", "2020−02−01", "2020−02−11", "2020−02−05", "2020−02−08"], the function should return 80.

5. Given A = [-60, 60, -40, -20] and D = ["2020−10−01", "2020−02−02", "2020−10−10", "2020−10−30"], the function should return −115.

Assume that:

N is an integer within the range [1..100];
each element of array A is an integer within the range [−1,000..1,000];
D contains strings in YYYY−MM−DD format, representing dates in the range 2020−01−01 to 2020−12−31.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 * 
*/

function solution(A, D) {
   let balance = 0;
   const cardPayments = {};

   for (let i = 0; i < A.length; i++) {
      const date = D[i].split('-'); // Split to get date, month and year 
      const month = date[1]; // Get the month
      const amount = A[i]; // Get the amount

      // If the amount is negative, it was a card payment
      if (amount < 0) {
        // If the month already exists in the cardPayments object, push the amount to the array
         if (cardPayments[month]) {
            cardPayments[month].push(amount);
            // If the month does not exist in the cardPayments object, create a new array with the amount
         } else {
            cardPayments[month] = [amount];
         }
      }

      // Add the amount to the balance
      balance += amount;
   }

   console.log(cardPayments);

   // Calculate the balance
   for (let i = 1; i <= 12; i++) {
    // If the month exists in the cardPayments object and the length of the array is greater than or equal to 3 and the sum of the array is less than or equal to -100
      if (cardPayments[i] && cardPayments[i].length >= 3 && cardPayments[i].reduce((a, b) => a + b) <= -100) {
        // Add 5 times the length of the array to the balance
         balance += 5 * cardPayments[i].length;
         // If the month exists in the cardPayments object and the length of the array is greater than or equal to 3 and the sum of the array is greater than -100
      } else {
        // Subtract 5 from the balance
         balance -= 5;
      }
   }

   return balance;
}

console.log(solution([100, 100, 100, -10], ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"]));  // Should return 230
console.log(solution([180, -50, -25, -25], ["2020-01-01", "2020-01-01", "2020-01-01", "2020-01-31"]));  // Should return 25
console.log(solution([1, -1, 0, -105, 1], ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"]));  // Should return -164
console.log(solution([100, 100, -10, -20, -30], ["2020-01-01", "2020-02-01", "2020-02-11", "2020-02-05", "2020-02-08"]));  // Should return 80