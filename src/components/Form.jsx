export function Form() {
    return(
        <div className="form">
            <h2>Adicionar nova transação</h2>
            <div className="form-inputs">
                <form>
                    <div className="title-transaction">
                        <label htmlFor="title">Nome da transação</label>
                        <input type="text" id="title"/>
                    </div>
                    <div className="amount-transaction">
                        <label htmlFor="amount">Quantidade (negativa = gastos | positiva = receita)</label>
                        <input type="number" id="amount"/>
                    </div>
                </form>
                <input type="submit" id="submit"/>
            </div>
        </div>
    )
}