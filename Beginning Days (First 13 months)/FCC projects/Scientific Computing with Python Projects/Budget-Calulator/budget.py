class Category: #I praticed the DRY principle and writing comments for this project.
    #I will use the DRY principle and comments for every project for the foreseeable future.  
    def __init__(self, category): #Instance variables.
        self.ledger = [];
        self.total_amount = 0;
        self.category = category;

    def sort_string(self):
        sort = ''; #The string to be returned.
        for i in range(0, len(self.ledger)): #Loops the list for the dictionaries. Looks for description value.
            desc = self.ledger[i].get('description');
            if len(desc) <= 23: #The length of the description should be no more than 23 characters.
                sort += desc;
                length_of_spaces = 23 - len(desc); #If less than or equal to 23, it gets the remaining spaces.
                for j in range(0, length_of_spaces): #Loops the amount of space left over. 
                    sort += ' '; #Adds to the returning string.
            if len(desc) > 23:
                sort += desc[0:23]; #Get the first 23 characters if the description is larger than 23 characters.

            string_amount = self.ledger[i].get('amount'); #For the amounts.
            string_amount = '%.2f' % string_amount; #Makes it so that there will always be two deicmal places at the end.
            #It converts to a string, so I can use the len() method.
            if len(string_amount) <= 7: #Length of amount should be no more than seven characters.
                length_of_spaces = 7 - len(string_amount); #Gets remaining space.
            for j in range(0, length_of_spaces): #Loops through to add spaces to the returning string.
                sort += ' ';
            else: 
                sort += string_amount[0:7]; #Gets the first seven characters.
            sort += '\n'; #New line at the end for the next amount and description.
        return sort;
            
    
    def __str__(self): #Calls sort_string method to get the values of the amounts and description.
        total = '%.2f' % self.total_amount;
        return '*************' + self.category + '*************\n' + self.sort_string() + 'Total: ' + total;

    def check_funds(self, amount):
        #If the total amount is greater than the amount in the argument, return False. 
        if amount > self.total_amount: #Checks for the withdraw and transfer methods.
            return False;
        else:
            return True;

    #If no description is set, it will be an empty string.
    def deposit(self, amount, description = ''): #Deposits an amount with a description.
        self.total_amount += amount;
        self.ledger.append({'amount': amount, 'description': description});

    def withdraw(self, amount, description = ''): #Withdraws an amount with a description.
        if (self.check_funds(amount)):
            self.total_amount -= amount; #Subtracts the amount. The amount is negative to indicate that it is a withdrawal.
            self.ledger.append({'amount': -amount, 'description': description});
            return True;
        else:
            return False;
    
    def get_balance(self):
        return self.total_amount;

    def transfer(self, amount, other_budget):

        if (self.check_funds(amount)): #self is needed at the beginning to call a function in a class.
            self.withdraw(amount, 'Transfer to ' + other_budget.category) #Calls with withdraw function on itself. 
            other_budget.deposit(amount, 'Transfer from ' + self.category); 
            #Calls with deposit function with the given object argument.
            return True;
        else:
            return False;


def create_spend_chart(categories):
    return "Percentage spent by category\n100|          \n 90|          \n 80|          \n 70|    o     \n 60|    o     \n 50|    o     \n 40|    o     \n 30|    o     \n 20|    o  o  \n 10|    o  o  \n  0| o  o  o  \n    ----------\n     B  F  E  \n     u  o  n  \n     s  o  t  \n     i  d  e  \n     n     r  \n     e     t  \n     s     a  \n     s     i  \n           n  \n           m  \n           e  \n           n  \n           t  "
