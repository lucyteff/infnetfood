export const categories = [
  { id: '1', name: 'Lanches', icon: '🍔', color: '#FF6B35' },
  { id: '2', name: 'Bebidas', icon: '🥤', color: '#4A90E2' },
  { id: '3', name: 'Sobremesas', icon: '🍰', color: '#FFD166' },
  { id: '4', name: 'Porções', icon: '🍟', color: '#06D6A0' },
];

export const products = [
  // Lanches
  { id: '1', name: 'Xis Tudo', category: 'Lanches', price: 25.90, description: 'Pão de hambúrguer, dois blends de carne, queijo, presunto, ovo, alface, tomate, milho, ervilha e batata-palha.', image: require('../../assets/products/xis-tudo.jpg') },
  { id: '2', name: 'Xis Calabresa', category: 'Lanches', price: 22.90, description: 'Pão de hambúrguer, blend de carne, queijo e linguiça calabresa fatiada.', image: require('../../assets/products/xis-calabresa.jpg') },
  { id: '3', name: 'Pastel de Carne', category: 'Lanches', price: 8.90, description: 'Massa fina e crocante recheada com carne moída temperada.', image: require('../../assets/products/pastel-carne.jpg') },
  { id: '4', name: 'Pastel de Queijo com Presunto', category: 'Lanches', price: 7.90, description: 'Clássico recheio de queijo derretido e presunto.', image: require('../../assets/products/pastel-queijo-presunto.jpg') },
  { id: '5', name: 'Acarajé Médio', category: 'Lanches', price: 18.90, description: 'Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá, caruru, camarão seco e pimenta.', image: require('../../assets/products/acaraje-medio.jpg') },
  { id: '6', name: 'Abará', category: 'Lanches', price: 16.90, description: 'O mesmo bolinho de feijão-fradinho, mas cozido no vapor em folha de bananeira.', image: require('../../assets/products/abara.jpg') },
  { id: '7', name: 'Açaí Energético', category: 'Lanches', price: 15.90, description: 'Açaí cremoso com granola, banana, morango, leite condensado e leite em pó.', image: require('../../assets/products/acai-energetico.jpg') },
  { id: '8', name: 'Misto Quente', category: 'Lanches', price: 9.90, description: 'Pão de forma com queijo e presunto grelhados na chapa.', image: require('../../assets/products/misto-quente.jpg') },
  { id: '9', name: 'Cachorro-Quente Simples', category: 'Lanches', price: 12.90, description: 'Pão com salsicha, purê de batata, milho, ervilha e molho de tomate.', image: require('../../assets/products/cachorro-quente-simples.jpg') },
  { id: '10', name: 'Hambúrguer com Ovo', category: 'Lanches', price: 19.90, description: 'Pão, hambúrguer bovino, queijo, presunto e ovo frito.', image: require('../../assets/products/hamburguer-ovo.jpg') },
  { id: '11', name: 'Queijo Coalho na Chapa', category: 'Lanches', price: 14.90, description: 'Queijo coalho grelhado servido com orégano.', image: require('../../assets/products/queijo-coalho.jpg') },

  // bebidas
  { id: '12', name: 'Guaraná Antarctica 2L', category: 'Bebidas', price: 12.90, description: 'Refrigerante de guaraná para acompanhar.', image: require('../../assets/products/guarana-antartica-2l.jpg') },
  { id: '13', name: 'Suco de Laranja Natural', category: 'Bebidas', price: 8.90, description: 'Suco fresco e gelado.', image: require('../../assets/products/suco-laranja-natural.jpg') },
  { id: '14', name: 'Caldo de Cana', category: 'Bebidas', price: 6.90, description: 'Bebida doce e refrescante extraída na hora.', image: require('../../assets/products/caldo-de-cana.jpg') },
  { id: '15', name: 'Coca-Cola 600ml', category: 'Bebidas', price: 7.90, description: 'Refrigerante gelado.', image: require('../../assets/products/coca-600ml.jpg') },
  { id: '16', name: 'Fanta Laranja 1L', category: 'Bebidas', price: 9.90, description: 'Refrigerante sabor laranja.', image: require('../../assets/products/fanta-laranja.jpg') },
  { id: '17', name: 'Vitamina de Mamão', category: 'Bebidas', price: 10.90, description: 'Bebida cremosa de mamão com leite.', image: require('../../assets/products/vitamina-mamao.jpg') },
  { id: '18', name: 'Chopp Brahma', category: 'Bebidas', price: 14.90, description: 'Chopp gelado e tirado na hora.', image: require('../../assets/products/brahma-chopp.jpg') },

  // sobremesas
  { id: '19', name: 'Cocada Branca', category: 'Sobremesas', price: 5.90, description: 'Doce tradicional de coco ralado.', image: require('../../assets/products/cocada-branca.jpg') },
  { id: '20', name: 'Açaí Tradicional', category: 'Sobremesas', price: 12.90, description: 'Açaí cremoso servido com xarope de guaraná, granola e banana.', image: require('../../assets/products/acai-tradicional.jpg') },
  { id: '21', name: 'Açaí com Frutas', category: 'Sobremesas', price: 16.90, description: 'Açaí cremoso com uma mix de frutas tropicais.', image: require('../../assets/products/acai-com-frutas.jpg') },
  { id: '22', name: 'Brigadeiro', category: 'Sobremesas', price: 4.90, description: 'Doce de leite condensado, chocolate em pó e granulado.', image: require('../../assets/products/brigadeiro.jpg') },
  { id: '23', name: 'Pudim de Leite Condensado', category: 'Sobremesas', price: 8.90, description: 'Pudim tradicional com calda de caramelo.', image: require('../../assets/products/pudim-leite-condensado.jpg') },
  { id: '24', name: 'Mousse de Maracujá', category: 'Sobremesas', price: 7.90, description: 'Mousse leve e refrescante de maracujá.', image: require('../../assets/products/mousse-maracuja.jpg') },

  // porções
  { id: '25', name: 'Porção de Fritas com Cheddar e Bacon', category: 'Porções', price: 24.90, description: 'Batata frita crocante coberta com molho de cheddar e pedaços de bacon.', image: require('../../assets/products/batata-cheddar-bacon.jpg') },
  { id: '26', name: 'Aipim Frito com Charque', category: 'Porções', price: 28.90, description: 'Aipim frito sequinho servido com charque (carne-de-sol) desfiada.', image: require('../../assets/products/aipim-charque.jpg') },
  { id: '27', name: 'Coxinha de Frango', category: 'Porções', price: 6.90, description: 'Salgado em forma de coxa, com massa de batata e recheio de frango desfiado temperado.', image: require('../../assets/products/coxinha-frango.jpg') },
  { id: '28', name: 'Enroladinho de Salsicha', category: 'Porções', price: 5.90, description: 'Massa de pão de cachorro-quente enrolada e frita com uma salsicha no centro.', image: require('../../assets/products/enroladinho-salsicha.jpg') },
  { id: '29', name: 'Bolinho de Bacalhau', category: 'Porções', price: 18.90, description: 'Bolinhos fritos de massa de batata com bacalhau desfiado.', image: require('../../assets/products/bolinho-bacalhau.jpg') },
  { id: '30', name: 'Casquinha de Siri', category: 'Porções', price: 22.90, description: 'Casquinha de caranguejo recheada com siri moído e temperado.', image: require('../../assets/products/casquinha-siri.jpg') },
];

export const userData = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
};

export const mockOrders = [
  {
    id: '1',
    date: '2024-01-15',
    status: 'Entregue',
    total: 45.80,
    items: [
      { productId: '1', name: 'Xis Tudo', quantity: 1, price: 25.90 },
      { productId: '12', name: 'Guaraná Antarctica 2L', quantity: 1, price: 12.90 },
      { productId: '22', name: 'Brigadeiro', quantity: 2, price: 4.90 }
    ]
  },
  {
    id: '2',
    date: '2024-01-10',
    status: 'Preparando',
    total: 32.70,
    items: [
      { productId: '3', name: 'Pastel de Carne', quantity: 2, price: 8.90 },
      { productId: '14', name: 'Caldo de Cana', quantity: 1, price: 6.90 },
      { productId: '27', name: 'Coxinha de Frango', quantity: 1, price: 6.90 }
    ]
  },
  {
    id: '3',
    date: '2024-01-08',
    status: 'A caminho',
    total: 67.50,
    items: [
      { productId: '25', name: 'Porção de Fritas com Cheddar e Bacon', quantity: 1, price: 24.90 },
      { productId: '18', name: 'Chopp Brahma', quantity: 2, price: 14.90 },
      { productId: '23', name: 'Pudim de Leite Condensado', quantity: 1, price: 8.90 }
    ]
  }
];

export const restaurants = [
  {
    id: 1,
    nome: "Xis do Zé",
    lat: -22.9035,
    lng: -43.1776,
    endereco: "Rua da Candelária, 123 - Centro",
    descricao: "Melhor xis da região, porções generosas",
    telefone: "(21) 2525-0101",
    categoria: "Lanches, Bebidas",
    produtoExemplo: {
      nome: "Xis Tudo",
      preco: 25.90,
      imagem: require('../../assets/products/xis-tudo.jpg')
    }
  },
  {
    id: 2,
    nome: "Sabor Carioca",
    lat: -22.9042,
    lng: -43.1791,
    endereco: "Avenida Rio Branco, 456 - Centro",
    descricao: "Comida brasileira tradicional",
    telefone: "(21) 2525-0202",
    categoria: "Porções, Bebidas",
    produtoExemplo: {
      nome: "Porção de Fritas com Cheddar e Bacon",
      preco: 24.90,
      imagem: require('../../assets/products/batata-cheddar-bacon.jpg')
    }
  },
  {
    id: 3,
    nome: "Pastel do Mercado",
    lat: -22.9018,
    lng: -43.1783,
    endereco: "Praça XV de Novembro, 789 - Centro",
    descricao: "Pasteis variados e sucos naturais",
    telefone: "(21) 2525-0303",
    categoria: "Lanches, Bebidas",
    produtoExemplo: {
      nome: "Pastel de Carne",
      preco: 8.90,
      imagem: require('../../assets/products/pastel-carne.jpg')
    }
  },
  {
    id: 4,
    nome: "Tia Bahia Acarajé",
    lat: -22.9029,
    lng: -43.1768,
    endereco: "Rua do Ouvidor, 234 - Centro",
    descricao: "Comida baiana autêntica",
    telefone: "(21) 2525-0404",
    categoria: "Lanches, Sobremesas",
    produtoExemplo: {
      nome: "Acarajé Médio",
      preco: 18.90,
      imagem: require('../../assets/products/acaraje-medio.jpg')
    }
  },
  {
    id: 5,
    nome: "Esquina do Açaí",
    lat: -22.9051,
    lng: -43.1772,
    endereco: "Rua Uruguaiana, 567 - Centro",
    descricao: "Açaí cremoso e complementos",
    telefone: "(21) 2525-0505",
    categoria: "Sobremesas, Lanches",
    produtoExemplo: {
      nome: "Açaí Tradicional",
      preco: 12.90,
      imagem: require('../../assets/products/acai-tradicional.jpg')
    }
  },
  {
    id: 6,
    nome: "Rei do Frango",
    lat: -22.9031,
    lng: -43.1798,
    endereco: "Rua da Alfândega, 890 - Centro",
    descricao: "Frango assado e refeições",
    telefone: "(21) 2525-0606",
    categoria: "Porções, Bebidas",
    produtoExemplo: {
      nome: "Coxinha de Frango",
      preco: 6.90,
      imagem: require('../../assets/products/coxinha-frango.jpg')
    }
  },
  {
    id: 7,
    nome: "Pão & Pão",
    lat: -22.9023,
    lng: -43.1759,
    endereco: "Rua do Mercado, 345 - Centro",
    descricao: "Padaria e confeitaria",
    telefone: "(21) 2525-0707",
    categoria: "Lanches, Bebidas",
    produtoExemplo: {
      nome: "Misto Quente",
      preco: 9.90,
      imagem: require('../../assets/products/misto-quente.jpg')
    }
  },
  {
    id: 8,
    nome: "Doce Brasil",
    lat: -22.9047,
    lng: -43.1785,
    endereco: "Rua Sete de Setembro, 678 - Centro",
    descricao: "Doces e sobremesas brasileiras",
    telefone: "(21) 2525-0808",
    categoria: "Sobremesas, Bebidas",
    produtoExemplo: {
      nome: "Brigadeiro",
      preco: 4.90,
      imagem: require('../../assets/products/brigadeiro.jpg')
    }
  },
  {
    id: 9,
    nome: "Boteco do Siri",
    lat: -22.9015,
    lng: -43.1771,
    endereco: "Rua do Rosário, 901 - Centro",
    descricao: "Petiscos e bebidas",
    telefone: "(21) 2525-0909",
    categoria: "Porções, Bebidas",
    produtoExemplo: {
      nome: "Bolinho de Bacalhau",
      preco: 18.90,
      imagem: require('../../assets/products/bolinho-bacalhau.jpg')
    }
  },
  {
    id: 10,
    nome: "Tropicália Lanches",
    lat: -22.9054,
    lng: -43.1763,
    endereco: "Rua da Assembléia, 112 - Centro",
    descricao: "Lanches tropicais e sucos",
    telefone: "(21) 2525-1010",
    categoria: "Lanches, Sobremesas",
    produtoExemplo: {
      nome: "Hambúrguer com Ovo",
      preco: 19.90,
      imagem: require('../../assets/products/hamburguer-ovo.jpg')
    }
  }
];