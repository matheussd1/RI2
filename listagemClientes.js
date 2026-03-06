// constructor num. telefone
function Telefone(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;


    this.getDDD = () => this.ddd;
    this.setDDD = (novoDDD) => this.ddd = novoDDD;

    this.getNumero = () => this.numero;
    this.setNumero = (novoNumero) => this.numero = novoNumero;

    // metodos para caixa alta e baixa
    this.getDDDUpperCase = () => this.ddd.toUpperCase();
    this.getDDDLowerCase = () => this.ddd.toLowerCase();
}

// constructor endereco
function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = () => this.estado;
    this.getCidade = () => this.cidade;

    // metodos para caixa alta e baixa
    this.getCidadeUpperCase = () => this.cidade.toUpperCase();
    this.getCidadeLowerCase = () => this.cidade.toLowerCase();
}

// constructor cliente
function Cliente(nome, telefone, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;

    // metodo da saida
    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `------------------------------
Informações do Cliente:
${this.nome}
------------------------------
Telefone:
DDD: ${this.telefone.ddd}
Número: ${this.telefone.numero}
------------------------------
Endereço:
Rua: ${this.endereco.rua}
Número: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}
------------------------------`;
        }
    });

    this.getNomeUpperCase = () => this.nome.toUpperCase();
}

// funcao ordenar
function ordenarClientes(listaClientes) {
    return [...listaClientes].sort((a, b) => {
        return a.nome.localeCompare(b.nome);
    });
}

//Easter egg: Sentimental - Los Hermanos

// clientes teste
let tel1 = new Telefone('12', '123456789');
let end1 = new Endereco('SP', 'São José dos Campos', 'Rua Legal', '67');
let cli1 = new Cliente('Matheus Rafael', tel1, end1);

let tel2 = new Telefone('12', '987654321');
let end2 = new Endereco('SP', 'São José dos Campos', 'Rua Bonita', '123');
let cli2 = new Cliente('Amanda Caroline', tel2, end2);

let tel3 = new Telefone('11', '111112222');
let end3 = new Endereco('SP', 'São Paulo', 'Rua Feia', '10');
let cli3 = new Cliente('Pedro Henrique', tel3, end3);

// lista
const listaOriginal = [cli1, cli2, cli3];

// ordenando a lista
const listaOrdenada = ordenarClientes(listaOriginal);

// ordem alfabetica
console.log("========== LISTAGEM DE CLIENTES ==========");
listaOrdenada.forEach(c => {
    console.log(c.descricao);
});

const clientesOrdenados = ordenarClientes(listaOriginal);

//lista apenas de clientes (em ordem alfabetica tbm)
clientesOrdenados.forEach(cliente => {
    console.log("- " + cliente.nome);
});