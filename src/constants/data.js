import images from './images';

const wines = [
  {
    title: 'Ameztoi, Rosé',
    price: '$23',
    tags: 'ES | 750 ml',
  },
  {
    title: 'Villard, Pinot Noir',
    price: '$54',
    tags: 'CL | 750 ml',
  },
  {
    title: 'Piora, Syrah',
    price: '$44',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Raúl Pérez, Godello',
    price: '$27',
    tags: 'ES | 750 ml',
  },
  {
    title: 'Dom Pérignon, Brut',
    price: '$75',
    tags: 'FR | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi Prosecco | Soda | 30 ml',
  },
  {
    title: "Dark & Stormy",
    price: '$17',
    tags: 'Dark rum | Ginger beer | Lime',
  },
  {
    title: 'Barracuda',
    price: '$19',
    tags: 'Mezcal | Pineapple | Lime | Ginger | Genepy',
  },
  {
    title: 'Old Fashioned',
    price: '$22',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Zagat Award',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Michelin Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
