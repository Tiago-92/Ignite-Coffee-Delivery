import traditional from '../assets/traditional-coffee.png'
import americanExpress from '../assets/american-express.png'
import creamyEspresso from '../assets/creamy-espresso.png'
import icedEspresso from '../assets/iced-espresso.png'

export const cart = [
  {
    id: 1,
    img: traditional,
    title: 'Expresso Tradicional',
    tag: ['TRADICIONAL'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 1,
  },

  {
    id: 2,
    img: americanExpress,
    title: 'Expresso Americano',
    tag: 'TRADICIONAL',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 1,
  },

  {
    id: 3,
    img: creamyEspresso,
    title: 'Expresso Cremoso',
    tag: 'TRADICIONAL',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 1,
  },

  {
    id: 4,
    img: icedEspresso,
    title: 'Expresso Gelado',
    tag: ['TRADICIONAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 1,
  },
]
