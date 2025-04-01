import * as readlineSync from 'readline-sync';

class BankAccounts {  
    private accountHolder: string;  
    private balance: number;  

    constructor(accountHolder: string, initialBalance: number) {  
        this.accountHolder = accountHolder;  
        this.balance = initialBalance;  
    }  

    public withdraw(amount: number): string {  
        if (amount <= 0) {  
            return "Withdrawal amount must be greater than zero.";  
        }  
        if (amount > this.balance) {  
            return "Insufficient funds.";  
        }  
        this.balance -= amount;  
        return `Withdrawal of $${amount} successful. New balance: $${this.balance}`;  
    }  

    public credit(amount: number): string {  
        if (amount <= 0) {  
            return "Credit amount must be greater than zero.";  
        }  
        this.balance += amount;  
        return `Credit of $${amount} successful. New balance: $${this.balance}`;  
    }  

    public checkBalance(): string {  
        return `Current balance for ${this.accountHolder}: $${this.balance}`;  
    }  
}  

const displayMenu = (): void => {  
    console.log("\n--- Bank Account Menu ---");  
    console.log("1. Withdraw");  
    console.log("2. Credit");  
    console.log("3. Check Balance");  
    console.log("4. Exit");  
    console.log("--------------------------");  
};  

const main = (): void => {  
    const account = new BankAccounts("Pragateeshwaran", 1000);  
    let exit = false;  

    while (!exit) {  
        displayMenu();  
        const choice = readlineSync.question("Enter your choice (1-4): ");  

        switch (choice) {  
            case '1':  
                const withdrawAmount = parseFloat(readlineSync.question("Enter amount to withdraw: ") || "0");  
                console.log(account.withdraw(withdrawAmount));  
                break;  
            case '2':  
                const creditAmount = parseFloat(readlineSync.question("Enter amount to credit: ") || "0");  
                console.log(account.credit(creditAmount));  
                break;  
            case '3':  
                console.log(account.checkBalance());  
                break;  
            case '4':  
                exit = true;  
                console.log("Thank you! Exiting the program.");  
                break;  
            default:  
                console.log("Invalid choice. Please select a valid option.");  
        }  
    }  
};  

main();