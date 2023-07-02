import budget; 

food = budget.Category('Food');
food.deposit(900, 'Deposit');
print(food.ledger)
food.withdraw(50, 'Eating out');
print(food.ledger);
savings = budget.Category('Savings');
savings.deposit(10000, 'Saving college funds');
savings.withdraw(2000, 'Student loans');
print(savings.ledger);
print(savings.get_balance());
savings.transfer(1000.40, food);
print(food.get_balance());
print(savings.get_balance());
print(food.ledger);
print(savings.ledger);
print(food);

