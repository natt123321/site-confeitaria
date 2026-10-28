
function calcularTotal() {
    const itens = document.getElementsByClassName("item-pedido")
    let soma = 0

    for (let i = 0; i < itens.length; i++) {
        const preco = Number(itens[i].querySelector(".produto").value)
        const quantidade = Number(itens[i].querySelector(".quantidade").value)

        if (quantidade > 0) {
            soma = soma + preco * quantidade
        }
    }

    document.getElementById("total").textContent =
        soma.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
}

function adicionarItem() {
    const itens = document.getElementById("itens-pedido")

    itens.innerHTML += `
        <div class="item-pedido">
            <div class="campo">
                <label>Produto:</label>
                <select class="produto" onchange="calcularTotal()">
                    <option value="40">Bolo de morango - R$ 40,00</option>
                    <option value="50">Bolo de chocolate - R$ 50,00</option>
                    <option value="55">Bolo de bombom - R$ 55,00</option>
                    <option value="35">Bolo de limão - R$ 35,00</option>
                    <option value="38">Bolo de maracujá - R$ 38,00</option>
                </select>
            </div>

            <div class="campo">
                <label>Quantidade:</label>
                <input type="number" class="quantidade"
                    min="1" value="1" oninput="calcularTotal()" required>
            </div>

            <button type="button" class="remover-item"
                onclick="removerItem(this)">Remover</button>
        </div>
    `

    calcularTotal()
}

function removerItem(botao) {
    botao.parentElement.remove()
    calcularTotal()
}

function buscar(event) {
    if (event.key == "Enter") {
        event.preventDefault()

        const cep = document.getElementById("cep").value
        const url = `https://viacep.com.br/ws/${cep}/json/`

        fetch(url)
            .then(response => response.json())
            .then(dados => {
                if (dados.erro) {
                    alert("CEP não encontrado!")
                    return
                }

                document.getElementById("logradouro").value = dados.logradouro || ""
                document.getElementById("bairro").value = dados.bairro || ""
                document.getElementById("cidade").value = dados.localidade || ""
                document.getElementById("uf").value = dados.uf || ""
                document.getElementById("estado").value = dados.estado || ""
            })
            .catch(erro => {
                alert("Erro ao buscar o CEP!")
            })
    }
}

function finalizar(event) {
    event.preventDefault()

    alert("Formulário preenchido! Total do pedido: " +
        document.getElementById("total").textContent)
}