function calculate() {
  // input variables
  var housePrice;
  var yourDeposit;
  var mortgageTerm;
  var interestRate;
  var termInMonth;
  var monthlyBody;
  var initialMonthlyInterest;
  const daysInYear = 365;
  const daysInMonth = 30;
  const monthsInYear = 12;

  housePrice = document.getElementById("house-price").value;
  housePrice = parseFloat(housePrice);

  yourDeposit = document.getElementById("your-deposit").value;
  yourDeposit = parseFloat(yourDeposit);

  mortgageTerm = document.getElementById("mortgage-term").value;
  mortgageTerm = parseFloat(mortgageTerm);

  interestRate = document.getElementById("interest-rate").value;
  interestRate = parseFloat(interestRate);

  // mortgage calculaiton
  LoanAmount = housePrice - yourDeposit;
  LoanAmount = parseFloat(LoanAmount);

  termInMonth = mortgageTerm * monthsInYear;

  monthlyBody = LoanAmount / termInMonth;
  monthlyBody = parseFloat(monthlyBody);

  initialMonthlyInterest = Math.round(
    ((LoanAmount * (interestRate / 100)) / daysInYear) * daysInMonth
  );

  initialMonthlyPayment = monthlyBody + initialMonthlyInterest;

  // results
  document.getElementById("loan-amount").innerHTML = LoanAmount;

  document.getElementById(
    "initial-monthly-payment"
  ).innerHTML = initialMonthlyPayment;

  document.getElementById("monthly-body").innerHTML = monthlyBody;

  document.getElementById(
    "initial-monthly-interest"
  ).innerHTML = initialMonthlyInterest;

  // add a note
  document.getElementById("note").innerHTML =
    "Note: This is a guide to how much you'd pay each month. The exact amount will depend on the type of mortgage and the lender.";
}
// Footer Current Year
document.getElementById("current-year").innerHTML = new Date().getFullYear();
