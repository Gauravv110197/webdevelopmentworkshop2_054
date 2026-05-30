public class Main {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount("SA101", "Alice Johnson", 5000.0);
        CurrentAccount currentAccount = new CurrentAccount("CA202", "Bob Smith", 10000.0);

        savingsAccount.deposit(1500.0);
        currentAccount.deposit(2500.0);

        displayAccountDetails("Savings Account", savingsAccount);
        displayAccountDetails("Current Account", currentAccount);
    }

    private static void displayAccountDetails(String accountType, BankAccount account) {
        double interest = account.calculateInterest();

        System.out.println("\n--- " + accountType + " ---");
        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Account Holder Name: " + account.getAccountHolderName());
        System.out.println("Balance: Rs. " + account.getBalance());
        System.out.println("Interest: Rs. " + interest);
    }
}
