import { Sumary } from "../Summary";
import { TransactionsTable } from "../TransactionTable";

import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Sumary />
            <TransactionsTable />
        </Container>
    )
}