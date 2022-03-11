import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../components/services/api';

interface Transaction {
    id: number;
    title: string
    amount: number;
    type: string;
    category: string;
    createData: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createData'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData  // Força o ts a aceitar o objeto vazio como o formato que passamos
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createData: new Date(),
        })
        
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}

