import { type PizzaMenu } from './types'

export const pecorino: PizzaMenu = {
  sizes: ['23cm', '30cm', '45cm'],
  priceTag: 'zł',
  pizzas: [
    {
      name: 'Margherita',
      ingredients: ['sos pomidorowy', 'ser mozzarella'],
      prices: [20.9, 25.9, 43.9]
    },
    {
      name: 'Funghi',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'pieczarki'],
      prices: [22.9, 27.9, 50.5]
    },
    {
      name: 'Prosciutto',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka'],
      prices: [23.9, 28.9, 52.9]
    },
    {
      name: 'Capriciossa',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki'],
      prices: [24.9, 30.5, 55.5]
    },
    {
      name: 'Vegetariana',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'grillowany bakłażan', 'grillowana papryka', 'cebula', 'szpinak duszony w śmietanie'],
      prices: [26.9, 34.5, 59.9]
    },
    {
      name: 'Neapoletana',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'boczek', 'pieczarki', 'cebula', 'świeżo mielony pieprz'],
      prices: [26.5, 32.9, 59.5]
    },
    {
      name: 'Frutti di mare',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'krewetki tygrysie', 'mule', 'kalmary', 'kapary'],
      prices: [31.9, 40.5, 69.5]
    },
    {
      name: 'Crudo',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka dojrzewająca', 'pomidorki koktajlowe', 'rukola', 'oliwa czosnkowa'],
      prices: [30.9, 38.9, 68.5]
    },
    {
      name: 'Spinaci',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'ser gorgonzola', 'suszone pomidory', 'kapary', 'szpinak duszony w śmietanie', 'ser Grana Padano'],
      prices: [30.9, 38.9, 67.5]
    },
    {
      name: 'Tonno',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'tuńczyk', 'cebula', 'oliwki czarne'],
      prices: [26.9, 33.5, 58.5]
    },
    {
      name: 'Tonno pomodori',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'tuńczyk', 'suszone pomidory'],
      prices: [27.9, 34.5, 59.9]
    },
    {
      name: 'Picante',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'salami', 'świeże pomidory', 'papryka jalapeno'],
      prices: [26.9, 32.9, 59.5]
    },
    {
      name: 'Verona',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'łosoś wędzony', 'cebula', 'kapary', 'rukola', 'oliwa czosnkowa'],
      prices: [30.9, 39.9, 69.5]
    },
    {
      name: 'Pancetta',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'boczek', 'pieczarki', 'cebula'],
      prices: [26.5, 32.9, 59.5]
    },
    {
      name: 'Salame',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'salami', 'czerwona cebula', 'oliwki', 'papryka jalapeno'],
      prices: [26.9, 33.5, 60.5]
    },
    {
      name: 'Hawaii',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'ananas'],
      prices: [24.9, 30.5, 55.5]
    },
    {
      name: 'Mattina',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'boczek', 'cebula', 'jajko', 'szczypiorek'],
      prices: [26.9, 33.5, 60.5]
    },
    {
      name: 'Vesivio',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'boczek', 'salami', 'papryka habanero', 'czosnek', 'tabasco'],
      prices: [27.9, 33.9, 60.9]
    },
    {
      name: '4 stagioni',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'krewetki koktajlowe', 'karczochy'],
      prices: [26.9, 32.5, 58.9]
    },
    {
      name: 'Romana',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'anchois', 'oliwki', 'kapary', 'czosnek'],
      prices: [25.9, 31.5, 58.5]
    },
    {
      name: 'La Gondola',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'krewetki koktajlowe'],
      prices: [25.9, 31.9, 58.9]
    },
    {
      name: 'Calzone',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'oliwki', 'cebula'],
      prices: [33.9]
    },
    {
      name: 'Peperoni',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'salami', 'boczek', 'cebula', 'oliwki', 'papryka peperoni', 'papryka jalapeno', 'pieczarki'],
      prices: [28.9, 34.9, 61.5]
    },
    {
      name: 'Ricotta',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'kurczak', 'ser ricotta', 'świeży pomidor'],
      prices: [27.9, 34.5, 59.9]
    },
    {
      name: 'Pollo',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'kurczak', 'świeże warzywa', 'sos czosnkowy (osobno)'],
      prices: [26.9, 32.9, 59.5]
    },
    {
      name: 'Napoli',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'salami', 'pieczarki'],
      prices: [24.9, 30.5, 55.5]
    },
    {
      name: 'Milano',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'boczek', 'kurczak', 'pieczarki'],
      prices: [26.5, 32.9, 59.5]
    },
    {
      name: 'Caprese',
      ingredients: ['sos pomidorowy', 'mozzarella z zalewy', 'rukola', 'pomidorki koktajlowe', 'ser Grana Padano', 'oliwa czosnkowa'],
      prices: [27.9, 34.9, 61.5]
    },
    {
      name: 'Chorizo',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'chorizo', 'grillowany bakłażan', 'rukola', 'ser Grana Padano', 'oliwa czosnkowa'],
      prices: [30.9, 39.5, 67.9]
    },
    {
      name: 'Siciliana',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'krewetki koktajlowe', 'tuńczyk', 'omułki', 'karczoch'],
      prices: [29.9, 38.5, 67.5]
    },
    {
      name: 'Broccoli',
      ingredients: ['sos śmietanowo-serowy', 'ser mozzarella', 'szynka', 'brokuły', 'ser gorgonzola'],
      prices: [28.9, 34.5, 60.9]
    },
    {
      name: 'Curry',
      ingredients: ['sos śmietanowo-serowy', 'ser mozzarella', 'kurczak curry', 'brokuły', 'świeżo mielony pieprz'

      ],
      prices: [27.9, 32.9, 59.9]
    },
    {
      name: '4 Fromaggi',
      ingredients: ['sos śmietanowo-serowy', 'ser mozzarella', 'gorgonzola', 'camembert', 'ser Grana Padano'],
      prices: [29.5, 40.9, 67.5]
    },
    {
      name: 'Pecorino rosso',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'kapary', 'suszone pomidory', 'szynka dojrzewająca', 'rukola', 'ser Pecorino', 'oliwa czosnkowa'],
      prices: [31.9, 40.9, 69.9]
    },
    {
      name: 'Pecorino bianco',
      ingredients: ['sos śmietanowo-serowy', 'ser mozzarella', 'kapary', 'suszone pomidory', 'szynka dojrzewająca', 'rukola', 'ser Pecorino', 'oliwa czosnkowa'],
      prices: [31.9, 40.9, 69.9]
    },
    {
      name: 'Pera',
      ingredients: ['sos pomidorowy', 'ser mozzarella', 'gruszka', 'ser gorgonzola', 'szynka dojrzewająca', 'orzechy'],
      prices: [30.5, 39.5, 67.9]
    },
    {
      name: 'Viva la funghi',
      ingredients: ['sos śmietanowo-serowy', 'ser mozzarella', 'kurki', 'podgrzybki', 'pieczarki', 'cebula', 'ser gorgonzola'],
      prices: [29.9, 38.9, 67.5]
    },
    {
      name: 'Truflowa',
      ingredients: ['salsa truflowa', 'mozzarella z zalewy', 'pikantne salami', 'ser ricotta', 'ser Grana Padano'],
      prices: [31.9, 40.5, 69.5]
    }
  ]
}
