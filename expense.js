const account = {
  myName: "Mayumi Koji",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    let obj = {};
    obj.description = description;
    obj.amount = amount;
    this.expenses.push(obj);
  },
  addIncome: function (description, amount) {
    let obj = {};
    obj.description = description;
    obj.amount = amount;
    this.income.push(obj);
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accoutBalance = 0;

    this.expenses.forEach(function (item) {
      totalExpenses += item.amount;
    });

    this.income.forEach(function (item) {
      totalIncome += item.amount;
    });

    accoutBalance = totalIncome - totalExpenses;

    return `${this.myName} has a balance  of $${accoutBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);

console.log(account.getAccountSummary());
