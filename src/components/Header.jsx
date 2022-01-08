export function Header() {
    return(
        <div class="balance">
            <div>
            <h1>Gestão de gastos</h1>
            <h2>Seu saldo: 0.0</h2>
            </div>
            <div className='income-expense'>
                <p>Receita: 0.00</p>
                <p>Gastos: 0.00</p>
            </div>
        </div>
    )
}