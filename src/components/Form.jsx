export function Form() {
    return(
        <div>
            <h2>Adicionar nova transação</h2>
            <div>
                <form>
                    <label htmlFor="title">Nome da transação</label>
                    <input type="text" id="title"/>

                    <label htmlFor="title">Quantidade (negativa = gastos | positiva = receita)</label>
                    <input type="text" id="title"/>
                </form>
            </div>
        </div>
    )
}