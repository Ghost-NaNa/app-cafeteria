const maisVendidos = [

    {
        id: 1,
        nome: "Expresso",
        valor: 5.50,
        imagem: require('./assets/bebidas/expresso.jpg')
    },
    {
        id: 2,
        nome: "Cappuccino",
        valor: 9.99,
        imagem: require('./assets/bebidas/cappuccino.jpg')
    },
    {
        id: 3,
        nome: "Mochaccino",
        valor: 9.99,
        imagem: require('./assets/bebidas/mochaccino.jpg')
    },
    {
        id: 4,
        nome: "Masala Chai",
        valor: 12.00,
        imagem: require('./assets/bebidas/masala-chai.jpg')
    },
    {
        id: 5,
        nome: "Latte",
        valor: 16.75,
        imagem: require('./assets/bebidas/latte.jpg')
    },
    {
        id: 6,
        nome: "Americano",
        valor: 28.90,
        imagem: require('./assets/bebidas/americano.jpg')
    }
]

const novidades = [

    {
        id: 7,
        nome: "Frapuccino",
        valor: 14.50,
        imagem: require('./assets/bebidas/frapuccino.jpg')
    },
    {
        id: 8,
        nome: "Cold Brew",
        valor: 11.90,
        imagem: require('./assets/bebidas/cold-brew.jpg')
    },
    {
        id: 9,
        nome: "Irish Coffee",
        valor: 18.75,
        imagem: require('./assets/bebidas/irish-coffee.jpg')
    },
    {
        id: 10,
        nome: "Flat White",
        valor: 10.50,
        imagem: require('./assets/bebidas/flat-white.jpg')
    },
    {
        id: 11,
        nome: "Café com Leite",
        valor: 7.25,
        imagem: require('./assets/bebidas/cafe-leite.jpg')
    },
    {
        id: 12,
        nome: "Macchiato",
        valor: 8.40,
        imagem: require('./assets/bebidas/macchiato.jpg')
    }

];

const cafes = [...maisVendidos, ...novidades]


export {cafes, maisVendidos, novidades};