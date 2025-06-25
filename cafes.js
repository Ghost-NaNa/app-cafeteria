const maisVendidos = [
    {
        id: 1,
        nome: "Expresso",
        descricao: "Um café forte e encorpado, a base para muitas outras bebidas.",
        valor: 5.50,
        imagem: require('./assets/bebidas/expresso.jpg')
    },
    {
        id: 2,
        nome: "Cappuccino",
        descricao: "A combinação perfeita de café expresso, leite vaporizado e espuma de leite.",
        valor: 9.99,
        imagem: require('./assets/bebidas/cappuccino.jpg')
    },
    {
        id: 3,
        nome: "Mochaccino",
        descricao: "Uma deliciosa mistura de café expresso, leite vaporizado e calda de chocolate.",
        valor: 9.99,
        imagem: require('./assets/bebidas/mochaccino.jpg')
    },
    {
        id: 4,
        nome: "Masala Chai",
        descricao: "Um chá indiano aromático com especiarias, leite e um toque de adoçante.",
        valor: 12.00,
        imagem: require('./assets/bebidas/masala-chai.jpg')
    },
    {
        id: 5,
        nome: "Latte",
        descricao: "Café expresso suavizado com uma generosa quantidade de leite vaporizado.",
        valor: 16.75,
        imagem: require('./assets/bebidas/latte.jpg')
    },
    {
        id: 6,
        nome: "Americano",
        descricao: "Café expresso diluído em água quente, resultando em um sabor suave.",
        valor: 28.90,
        imagem: require('./assets/bebidas/americano.jpg')
    }
];

const novidades = [
    {
        id: 7,
        nome: "Frapuccino",
        descricao: "Uma bebida gelada e cremosa à base de café, leite e gelo, perfeita para dias quentes.",
        valor: 14.50,
        imagem: require('./assets/bebidas/frapuccino.jpg')
    },
    {
        id: 8,
        nome: "Cold Brew",
        descricao: "Café extraído a frio por horas, resultando em uma bebida suave e menos ácida.",
        valor: 11.90,
        imagem: require('./assets/bebidas/cold-brew.jpg')
    },
    {
        id: 9,
        nome: "Irish Coffee",
        descricao: "Uma bebida quente que combina café, uísque irlandês, açúcar e um topo de creme.",
        valor: 18.75,
        imagem: require('./assets/bebidas/irish-coffee.jpg')
    },
    {
        id: 10,
        nome: "Flat White",
        descricao: "Café expresso com leite vaporizado, criando uma textura aveludada e um sabor intenso.",
        valor: 10.50,
        imagem: require('./assets/bebidas/flat-white.jpg')
    },
    {
        id: 11,
        nome: "Café com Leite",
        descricao: "O clássico brasileiro, uma mistura equilibrada de café coado e leite quente.",
        valor: 7.25,
        imagem: require('./assets/bebidas/cafe-leite.jpg')
    },
    {
        id: 12,
        nome: "Macchiato",
        descricao: "Um café expresso 'manchado' com uma pequena quantidade de espuma de leite.",
        valor: 8.40,
        imagem: require('./assets/bebidas/macchiato.jpg')
    }
];

const cafes = [...maisVendidos, ...novidades];

export { cafes, maisVendidos, novidades };