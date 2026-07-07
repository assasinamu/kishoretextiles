export const site = {
  name: 'Kishore Textiles',
  subName: 'Royal Attire',
  tagline: 'Premium Suiting & Shirting Fabrics — Built on Years of Trust',
  phone: '6300534516',
  phoneDisplay: '+91 63005 34516',
  whatsapp: '916300534516',
  whatsappMessage:
    'Hello Kishore Textiles, I would like to enquire about your premium fabrics.',
  address: {
    line1: 'Shop No. 2-4, 550/1, Mahatma Gandhi Road',
    line2: 'Nallagutta, Ramgopalpet',
    line3: 'Secunderabad, Hyderabad',
    line4: 'Telangana 500003',
  },
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 8:00 PM' },
  ],
  stats: {
    reviews: 223,
    rating: 4.9,
  },
  mapEmbed:
    'https://www.google.com/maps?q=Kishore+Textiles+-+Royal+Attire,+Shop+No.2-4,+550%2F1,+Mahatma+Gandhi+Rd,+Nallagutta,+Ramgopalpet,+Secunderabad,+Hyderabad,+Telangana+500003&output=embed',
}

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

export const collections = [
  {
    title: 'Suiting',
    desc: 'Refined wool blends & worsted weaves for the modern gentleman.',
    image: '/images/collection-suiting.png',
  },
  {
    title: 'Shirting',
    desc: 'Crisp cottons and fine poplins with an effortless drape.',
    image: '/images/collection-shirting.png',
  },
  {
    title: 'Denim',
    desc: 'Rugged indigo twills with authentic character and depth.',
    image: '/images/collection-denim.png',
  },
  {
    title: 'Cotton',
    desc: 'Breathable, soft and versatile — comfort woven into every thread.',
    image: '/images/collection-cotton.png',
  },
  {
    title: 'Linen',
    desc: 'Naturally textured European linen for relaxed elegance.',
    image: '/images/collection-linen.png',
  },
  {
    title: 'Uniform Fabrics',
    desc: 'Durable corporate & institutional cloth built to last.',
    image: '/images/collection-uniform.png',
  },
]

export const reviews = [
  {
    name: 'Rahul Verma',
    text: 'Excellent service and a genuinely wide variety of fabrics. Got wholesale prices even for a small order.',
  },
  {
    name: 'Imran Khan',
    text: 'Premium fabric quality and very helpful staff. They gave honest advice on what suited my needs.',
  },
  {
    name: 'Sridevi N.',
    text: 'Reasonable prices and beautiful collections. I keep returning every season for new fabrics.',
  },
  {
    name: 'Arjun Reddy',
    text: 'The best textile store in Secunderabad. Genuine advice and no pushy selling. Highly recommended.',
  },
  {
    name: 'Fatima S.',
    text: 'Wonderful experience. The suiting collection is outstanding and the staff is so friendly.',
  },
  {
    name: 'Mahesh Kumar',
    text: 'Great wholesale rates for my tailoring business. Consistent quality every single time.',
  },
  {
    name: 'Deepa Iyer',
    text: 'Huge selection of shirting and linen. Prices are very fair and the quality is premium.',
  },
  {
    name: 'Venkat Rao',
    text: 'Trusted them for years. Excellent fabric quality and always helpful with the right guidance.',
  },
]
