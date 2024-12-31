import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'app.name': 'Noobnation Money',
    'export.pdf': 'Export PDF',
    'reset.data': 'Reset Data',
    'are.you.sure': 'Are you sure?',
    'this.will.delete': 'This will delete all your data.',
    'no': 'No',
    'yes.proceed': 'Yes, proceed',
    'welcome.user': 'Welcome, {name}!',
    'data.loaded': 'Data Loaded',
    'data.loaded.success': 'Your data has been successfully loaded.',
    'pdf.exported': 'PDF Exported',
    'pdf.exported.success': 'Your PDF has been successfully exported.',
    'pdf.export.failed': 'PDF Export Failed',
    'pdf.export.failed.description': 'There was an error exporting your PDF.',
    'data.reset': 'Data Reset',
    'data.reset.success': 'Your data has been successfully reset.',
    'recurring.deleted': 'Recurring transaction deleted.',
    'transaction.deleted': 'Transaction deleted.',
    'name': 'Name',
    'email': 'Email',
    'password': 'Password',
    'enter.name': 'Enter your name',
    'enter.email': 'Enter your email',
    'enter.password': 'Enter your password',
    'welcome.back': 'Welcome Back!',
    'welcome': 'Welcome!',
    'create.account': 'Create Account',
    'create.account.description': 'Please fill in the details to create an account.',
    'sign.in': 'Sign In',
    'sign.in.description': 'Please enter your credentials to sign in.',
    'success': 'Success',
    'error': 'Error',
    'fill.required': 'Please fill in all required fields.',
    'account.creation.failed': 'Account creation failed.',
    'login.success': 'Login successful.',
    'login.failed': 'Login failed.',
    'account.created': 'Account created successfully.',
    'need.account': 'Need an account? Sign Up',
    'have.account': 'Already have an account? Sign In',
    'saving': 'Saving',
    'saving.description': 'Saving your data...',
    'data.saved': 'Data saved successfully',
    'save.failed': 'Failed to save data',
    'account.exists': 'An account with this email already exists. Please sign in instead.',
    'invalid.credentials': 'Invalid email or password. Please try again.',
    'sign.up.save': 'Sign Up & Save',
    'sign.in.save': 'Sign In & Save',
    'logout': 'Logout',
    'logout.success': 'Successfully logged out',
    'logout.failed': 'Failed to logout',
    'save.data': 'Save Data',
    'load.data': 'Load Data',
    'load.data.description': 'Please sign in to load your data.',
    'loading': 'Loading...',
    'loading.description': 'Loading your data...',
    'loading.failed': 'Failed to load data',
    'processing': 'Processing...',
    'openai.api.key.title': 'OpenAI API Key',
    'openai.api.key.description': 'Enter your OpenAI API key to enable AI features.',
    'openai.key.optional': 'OpenAI API Key (Optional)',
    'enter.openai.key': 'Enter your OpenAI API key',
    'save.and.continue': 'Save and Continue',
    'login_required': 'Please login to continue',
    'analyzing': 'Analyzing...',
    'generate.analysis': 'Generate Analysis',
    'financial.analysis': 'Financial Analysis',
    'current.bank.balance': 'Current Bank Balance',
    'current.debt.balance': 'Current Debt Balance',
    'add.transaction': 'Add Transaction',
    'recurring.transactions': 'Recurring Transactions',
    'transaction.history': 'Transaction History',
    'all.time': 'All Time',
    'show.selected.month': 'Show Selected Month',
    'show.all.transactions': 'Show All Transactions',
    'no.transactions': 'No transactions found',
    'delete': 'Delete',
    'select.month': 'Select Month',
    'balance.for': 'Balance for',
    'monthly.recurring.income': 'Monthly Recurring Income',
    'monthly.recurring.expenses': 'Monthly Recurring Expenses',
    'financial.runway.with.balances': 'Financial Runway (Including Current Balances)',
    'financial.runway.without.balances': 'Financial Runway (Excluding Current Balances)',
    'expenses.by.category': 'Expenses by Category',
    'no.categorized.expenses': 'No categorized expenses found',
    'amount': 'Amount',
    'description': 'Description',
    'date': 'Date',
    'pick.date': 'Pick a date',
    'income': 'Income',
    'expense': 'Expense',
    'add.income': 'Add Income',
    'add.expense': 'Add Expense',
    'income.added': 'Income added successfully',
    'expense.added': 'Expense added successfully',
    'transaction.failed': 'Failed to add transaction',
  },
  el: {
    'app.name': 'Noobnation Money',
    'export.pdf': 'Εξαγωγή PDF',
    'reset.data': 'Επαναφορά Δεδομένων',
    'are.you.sure': 'Είστε σίγουροι;',
    'this.will.delete': 'Αυτό θα διαγράψει όλα τα δεδομένα σας.',
    'no': 'Όχι',
    'yes.proceed': 'Ναι, συνέχεια',
    'welcome.user': 'Καλώς ήρθατε, {name}!',
    'data.loaded': 'Τα Δεδομένα Φορτώθηκαν',
    'data.loaded.success': 'Τα δεδομένα σας φορτώθηκαν με επιτυχία.',
    'pdf.exported': 'Το PDF Εξήχθη',
    'pdf.exported.success': 'Το PDF σας εξήχθη με επιτυχία.',
    'pdf.export.failed': 'Αποτυχία Εξαγωγής PDF',
    'pdf.export.failed.description': 'Υπήρξε σφάλμα κατά την εξαγωγή του PDF.',
    'data.reset': 'Επαναφορά Δεδομένων',
    'data.reset.success': 'Τα δεδομένα σας επαναφέρθηκαν με επιτυχία.',
    'recurring.deleted': 'Η επαναλαμβανόμενη συναλλαγή διαγράφηκε.',
    'transaction.deleted': 'Η συναλλαγή διαγράφηκε.',
    'name': 'Όνομα',
    'email': 'Email',
    'password': 'Κωδικός',
    'enter.name': 'Εισάγετε το όνομά σας',
    'enter.email': 'Εισάγετε το email σας',
    'enter.password': 'Εισάγετε τον κωδικό σας',
    'welcome.back': 'Καλώς Ήρθατε Ξανά!',
    'welcome': 'Καλώς Ήρθατε!',
    'create.account': 'Δημιουργία Λογαριασμού',
    'create.account.description': 'Συμπληρώστε τα στοιχεία για να δημιουργήσετε λογαριασμό.',
    'sign.in': 'Σύνδεση',
    'sign.in.description': 'Εισάγετε τα στοιχεία σας για να συνδεθείτε.',
    'success': 'Επιτυχία',
    'error': 'Σφάλμα',
    'fill.required': 'Συμπληρώστε όλα τα υποχρεωτικά πεδία.',
    'account.creation.failed': 'Αποτυχία δημιουργίας λογαριασμού.',
    'login.success': 'Επιτυχής σύνδεση.',
    'login.failed': 'Αποτυχία σύνδεσης.',
    'account.created': 'Ο λογαριασμός δημιουργήθηκε με επιτυχία.',
    'need.account': 'Χρειάζεστε λογαριασμό; Εγγραφείτε',
    'have.account': 'Έχετε ήδη λογαριασμό; Συνδεθείτε',
    'saving': 'Αποθήκευση',
    'saving.description': 'Αποθήκευση των δεδομένων σας...',
    'data.saved': 'Τα δεδομένα αποθηκεύτηκαν με επιτυχία',
    'save.failed': 'Αποτυχία αποθήκευσης δεδομένων',
    'account.exists': 'Υπάρχει ήδη λογαριασμός με αυτό το email. Παρακαλώ συνδεθείτε.',
    'invalid.credentials': 'Μη έγκυρο email ή κωδικός. Προσπαθήστε ξανά.',
    'sign.up.save': 'Εγγραφή & Αποθήκευση',
    'sign.in.save': 'Σύνδεση & Αποθήκευση',
    'logout': 'Αποσύνδεση',
    'logout.success': 'Επιτυχής αποσύνδεση',
    'logout.failed': 'Αποτυχία αποσύνδεσης',
    'save.data': 'Αποθήκευση Δεδομένων',
    'load.data': 'Φόρτωση Δεδομένων',
    'load.data.description': 'Παρακαλώ συνδεθείτε για να φορτώσετε τα δεδομένα σας.',
    'loading': 'Φόρτωση...',
    'loading.description': 'Φόρτωση των δεδομένων σας...',
    'loading.failed': 'Αποτυχία φόρτωσης δεδομένων',
    'processing': 'Επεξεργασία...',
    'openai.api.key.title': 'Κλειδί API OpenAI',
    'openai.api.key.description': 'Εισάγετε το κλειδί API OpenAI για να ενεργοποιήσετε τις λειτουργίες AI.',
    'openai.key.optional': 'Κλειδί API OpenAI (Προαιρετικό)',
    'enter.openai.key': 'Εισάγετε το κλειδί API OpenAI',
    'save.and.continue': 'Αποθήκευση και Συνέχεια',
    'login_required': 'Παρακαλώ συνδεθείτε για να συνεχίσετε',
    'analyzing': 'Ανάλυση...',
    'generate.analysis': 'Δημιουργία Ανάλυσης',
    'financial.analysis': 'Οικονομική Ανάλυση',
    'current.bank.balance': 'Τρέχον Υπόλοιπο Τράπεζας',
    'current.debt.balance': 'Τρέχον Υπόλοιπο Χρέους',
    'add.transaction': 'Προσθήκη Συναλλαγής',
    'recurring.transactions': 'Επαναλαμβανόμενες Συναλλαγές',
    'transaction.history': 'Ιστορικό Συναλλαγών',
    'all.time': 'Όλες οι Περίοδοι',
    'show.selected.month': 'Εμφάνιση Επιλεγμένου Μήνα',
    'show.all.transactions': 'Εμφάνιση Όλων των Συναλλαγών',
    'no.transactions': 'Δεν βρέθηκαν συναλλαγές',
    'delete': 'Διαγραφή',
    'select.month': 'Επιλέξτε Μήνα',
    'balance.for': 'Υπόλοιπο για',
    'monthly.recurring.income': 'Μηνιαία Επαναλαμβανόμενα Έσοδα',
    'monthly.recurring.expenses': 'Μηνιαία Επαναλαμβανόμενα Έξοδα',
    'financial.runway.with.balances': 'Οικονομική Διάρκεια (Με Τρέχοντα Υπόλοιπα)',
    'financial.runway.without.balances': 'Οικονομική Διάρκεια (Χωρίς Τρέχοντα Υπόλοιπα)',
    'expenses.by.category': 'Έξοδα ανά Κατηγορία',
    'no.categorized.expenses': 'Δεν βρέθηκαν κατηγοριοποιημένα έξοδα',
    'amount': 'Ποσό',
    'description': 'Περιγραφή',
    'date': 'Ημερομηνία',
    'pick.date': 'Επιλέξτε ημερομηνία',
    'income': 'Έσοδα',
    'expense': 'Έξοδα',
    'add.income': 'Προσθήκη Εσόδων',
    'add.expense': 'Προσθήκη Εξόδων',
    'income.added': 'Τα έσοδα προστέθηκαν με επιτυχία',
    'expense.added': 'Τα έξοδα προστέθηκαν με επιτυχία',
    'transaction.failed': 'Αποτυχία προσθήκης συναλλαγής',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('el'); // Set Greek as default

  const t = (key: string, params?: Record<string, string>) => {
    let text = translations[language][key] || key;
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(`{${key}}`, value);
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};