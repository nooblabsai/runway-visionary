import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { ArrowUpCircle, ArrowDownCircle, Repeat, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';
import { Transaction, RecurringTransaction } from '@/types/transactions';

interface TransactionHistoryProps {
  transactions: Transaction[];
  recurringTransactions: RecurringTransaction[];
  onDeleteTransaction: (id: string, isRecurring: boolean) => void;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
  recurringTransactions,
  onDeleteTransaction,
}) => {
  const { t } = useLanguage();

  const allTransactions = [
    ...transactions,
    ...recurringTransactions.map(t => ({ 
      ...t, 
      isRecurring: true,
      date: t.startDate
    }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (date: Date) => {
    try {
      return format(new Date(date), 'PPP');
    } catch (error) {
      console.error('Invalid date:', date);
      return 'Invalid date';
    }
  };

  return (
    <Card className="p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{t('transaction.history')}</h2>
      <ScrollArea className="h-[300px] w-full rounded-md border p-4">
        {allTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 mb-2 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {transaction.isIncome ? (
                  <ArrowUpCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <ArrowDownCircle className="h-5 w-5 text-red-500" />
                )}
                {'isRecurring' in transaction && (
                  <Repeat className="h-4 w-4 text-blue-500" />
                )}
              </div>
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">
                  {'isRecurring' in transaction ? t('recurring.from') : ''} {formatDate(transaction.date)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`font-medium ${
                transaction.isIncome ? 'text-green-600' : 'text-red-600'
              }`}>
                €{transaction.amount.toFixed(2)}
              </span>
              <button
                onClick={() => onDeleteTransaction(transaction.id, 'isRecurring' in transaction)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={t('delete')}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </ScrollArea>
    </Card>
  );
};

export default TransactionHistory;