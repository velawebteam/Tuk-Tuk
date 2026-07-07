export interface Tour {
  id: string;
  type: 'tuk-tuk' | 'jeep';
  nameKey: string;
  price: string;
  duration: string;
  pax: string;
  descriptionKey: string;
  features: string[];
  image: string;
  toBring?: string[];
  goodToKnow?: string[];
  notIncluded?: string[];
  itinerary?: { time?: string; activity: string }[];
}

export const tukTukTours: Tour[] = [
  {
    id: 'tavira-city',
    type: 'tuk-tuk',
    nameKey: 'tours.cidade_tavira.name',
    price: 'Sob Consulta',
    duration: '1h15',
    pax: '1-6',
    descriptionKey: 'tours.cidade_tavira.desc',
    features: ['Centro Histórico', 'Ria Formosa', 'Salinas', 'Visita a Igreja'],
    image: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' }
    ]
  },
  {
    id: 'tavira-total-tuk',
    type: 'tuk-tuk',
    nameKey: 'tours.tavira_total.name',
    price: 'Sob Consulta',
    duration: '2h',
    pax: '1-6',
    descriptionKey: 'tours.tavira_total.desc',
    features: ['Tour Completo', 'Museu do Atum', 'Salinas', 'História'],
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9833786?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Visita à Antiga Vila de pescadores de atum (Museu do Atum)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' }
    ]
  },
  {
    id: 'city-tapas',
    type: 'tuk-tuk',
    nameKey: 'tours.city_tapas.name',
    price: 'Sob Consulta',
    duration: '1h30',
    pax: '1-6',
    descriptionKey: 'tours.city_tapas.desc',
    features: ['Menu Refeição', 'Restaurante Ti Maria', 'Centro Histórico', 'Ria Formosa'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
    goodToKnow: ['O passeio termina no restaurante', 'Menu definido pelo restaurante (Ti Maria)', 'Não inclui serviço de recolha no restaurante'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Almoço/Jantar no Restaurante Ti Maria (Menu Refeição)' }
    ]
  },
  {
    id: 'historical-wine',
    type: 'tuk-tuk',
    nameKey: 'tours.historical_wine.name',
    price: 'Sob Consulta',
    duration: '2h30',
    pax: '1-6',
    descriptionKey: 'tours.historical_wine.desc',
    features: ['Prova de Vinhos', 'Al-Lagar', 'Centro Histórico', 'Enologia'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
    goodToKnow: ['Inclui prova de 3 vinhos (Tinto, Rosé e Branco)', 'Acompanhado com Pão e Azeite'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita ao Al-Lagar com Prova de Vinhos da Região do Algarve' }
    ]
  },
  {
    id: 'city-chocolate',
    type: 'tuk-tuk',
    nameKey: 'tours.city_chocolate.name',
    price: 'Sob Consulta',
    duration: '1h30',
    pax: '1-6',
    descriptionKey: 'tours.city_chocolate.desc',
    features: ['Degustação de Chocolate', 'Chocolataria Ibelle', 'Cidade de Tavira', 'Ria Formosa'],
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Visita à Chocolataria Ibelle com degustação' }
    ]
  },
  {
    id: 'tuk-tuk-boat',
    type: 'tuk-tuk',
    nameKey: 'tours.tuk_tuk_boat.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '1-6',
    descriptionKey: 'tours.tuk_tuk_boat.desc',
    features: ['Barco e Tuk Tuk', 'Ria Formosa', 'Natureza', 'Experiência Dual'],
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9833786?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Passeio de barco na Ria Formosa (Fauna e Flora)' }
    ]
  },
  {
    id: 'city-ice-cream',
    type: 'tuk-tuk',
    nameKey: 'tours.city_ice_cream.name',
    price: 'Sob Consulta',
    duration: '1h30',
    pax: '1-6',
    descriptionKey: 'tours.city_ice_cream.desc',
    features: ['Gelado 100% Natural', 'Refrescante', 'Passeio pela Cidade', 'Familiar'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop',
    goodToKnow: ['Inclui 1 bola de gelado por pessoa (copo ou cone)'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Paragem em Gelataria 100% Natural' }
    ]
  },
  {
    id: 'city-olive-factory',
    type: 'tuk-tuk',
    nameKey: 'tours.city_olive_factory.name',
    price: 'Sob Consulta',
    duration: '2h',
    pax: '1-6',
    descriptionKey: 'tours.city_olive_factory.desc',
    features: ['Fábrica de Azeitonas', 'Degustação Orgânica', 'Produtos Locais', 'Tradição'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Visita à fábrica de azeitonas com degustação de produtos orgânicos' }
    ]
  },
  {
    id: 'santa-luzia-tuk',
    type: 'tuk-tuk',
    nameKey: 'tours.santa_luzia_tuk.name',
    price: 'Sob Consulta',
    duration: '1h45',
    pax: '1-6',
    descriptionKey: 'tours.santa_luzia_tuk.desc',
    features: ['Santa Luzia', 'Capital do Polvo', 'Salinas', 'Aves'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal e Sal Comercial)' },
      { activity: 'Observação de Aves' },
      { activity: 'Santa Luzia (Capital do Polvo)' }
    ]
  }
];

export const jeepTours: Tour[] = [
  {
    id: 'tavira-gold',
    type: 'jeep',
    nameKey: 'tours.tavira_gold.name',
    price: 'Sob Consulta',
    duration: '2h30',
    pax: '2-6',
    descriptionKey: 'tours.tavira_gold.desc',
    features: ['Salinas', 'Museu do Atum', 'Prova de Azeite', 'Santa Luzia'],
    image: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Ria Formosa, Salinas, Flora e Fauna (Aves)' },
      { activity: 'Antiga Vila de pescadores de atum (Museu do Atum)' },
      { activity: 'Olive tasting (Prova de Azeite)' },
      { activity: 'Santa Luzia (Capital do Polvo)' }
    ]
  },
  {
    id: 'ria-formosa-jeep',
    type: 'jeep',
    nameKey: 'tours.ria_formosa_jeep.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '2-6',
    descriptionKey: 'tours.ria_formosa_jeep.desc',
    features: ['Ria Formosa', 'Cacela Velha', 'Almoço Incluído', 'Natureza'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Ria Formosa, Salinas, Flora e Fauna (Aves)' },
      { activity: 'Antiga Vila de pescadores de atum (Museu do Atum)' },
      { activity: 'Cacela Velha e Cabanas de Tavira' },
      { activity: 'Restaurante Alfama (inclui menu refeição)' }
    ]
  },
  {
    id: 'fuzeta-olhao-bath',
    type: 'jeep',
    nameKey: 'tours.fuzeta_olhao_bath.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '2-6',
    descriptionKey: 'tours.fuzeta_olhao_bath.desc',
    features: ['Fuzeta e Olhão', 'Banhos de Lama', 'Spa Mar Morto', 'Aventura'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Santa Luzia (Capital do Polvo)' },
      { activity: 'Ria Formosa, Salinas, Flora e Fauna (Aves)' },
      { activity: 'Fuzeta e Olhão' },
      { activity: 'Salinas (inclui spa mar morto e argila para tratamento de pele)' }
    ]
  },
  {
    id: 'santa-luzia-clay',
    type: 'jeep',
    nameKey: 'tours.santa_luzia_clay.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '2-6',
    descriptionKey: 'tours.santa_luzia_clay.desc',
    features: ['Olaria Tradicional', 'Santa Luzia', 'Fuzeta', 'Cultura'],
    image: 'https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Santa Luzia (Capital do Polvo)' },
      { activity: 'Ria Formosa, Salinas, Flora e Fauna (Aves)' },
      { activity: 'Fuzeta' },
      { activity: 'Olaria (visita e demonstração da olaria tradicional manual)' }
    ]
  },
  {
    id: 'liquid-gold-route',
    type: 'jeep',
    nameKey: 'tours.liquid_gold_route.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '2-6',
    descriptionKey: 'tours.liquid_gold_route.desc',
    features: ['Oliveira 2000 anos', 'Prova de Azeite', 'Moncarapacho', 'História'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Moncarapacho e Monterosa' },
      { activity: 'Olive Grove e Olive Oil Tasting' },
      { activity: 'Oliveira de 2000 anos' },
      { activity: 'Ria Formosa, Salinas e Santa Luzia' }
    ]
  },
  {
    id: 'jeep-boat-anchors',
    type: 'jeep',
    nameKey: 'tours.jeep_boat_anchors.name',
    price: 'Sob Consulta',
    duration: '4h',
    pax: '2-6',
    descriptionKey: 'tours.jeep_boat_anchors.desc',
    features: ['Passeio de Barco', 'Cemitério de Âncoras', 'Jipe 4x4', 'Experiência Completa'],
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9833786?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Ria Formosa, Salinas e Flora/Fauna' },
      { activity: 'Antiga Vila de pescadores de atum e Olive tasting' },
      { activity: 'Santa Luzia (Capital do Polvo)' },
      { activity: 'Passeio de barco pela Ria Formosa e Cemitério das Âncoras' }
    ]
  },
  {
    id: 'tavira-roots-wine',
    type: 'jeep',
    nameKey: 'tours.tavira_roots_wine.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '2-6',
    descriptionKey: 'tours.tavira_roots_wine.desc',
    features: ['Vinho e Tapas', 'Salinas', 'Património do Atum', 'Gastronomia'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Ria Formosa, Salinas e Flora/Fauna' },
      { activity: 'Antiga Vila de pescadores de atum e Olive tasting' },
      { activity: 'Santa Luzia (Capital do Polvo)' },
      { activity: 'Al-Lagar (inclui 1 copo de vinho e tapas)' }
    ]
  },
  {
    id: 'jeep-boat-history',
    type: 'jeep',
    nameKey: 'tours.jeep_boat_history.name',
    price: 'Sob Consulta',
    duration: '4h',
    pax: '2-6',
    descriptionKey: 'tours.jeep_boat_history.desc',
    features: ['Barco e Jipe', 'História de Tavira', 'Natureza', 'Ria Formosa'],
    image: 'https://images.unsplash.com/photo-1539734215167-734f511f248b?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Ria Formosa, Salinas e Flora/Fauna' },
      { activity: 'Antiga Vila de pescadores de atum e Olive tasting' },
      { activity: 'Santa Luzia (Capital do Polvo)' },
      { activity: 'Passeio de barco pela Ria Formosa e regresso a Tavira' }
    ]
  },
  {
    id: 'ceramica-tradicional',
    type: 'jeep',
    nameKey: 'tours.ceramica.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '2-6',
    descriptionKey: 'tours.ceramica.desc',
    features: ['Cerâmica Manual', 'Barrocal', 'Cascatas', 'Campo'],
    image: 'https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=1000&auto=format&fit=crop',
    itinerary: [
      { activity: 'Rio Sequa e Asseca' },
      { activity: 'Barrocal, Cascatas e Campo' },
      { activity: 'Cerâmica Tradicional (Terracota) e fabrico manual' }
    ]
  },
  {
    id: 'full-day-sotavento',
    type: 'jeep',
    nameKey: 'tours.full_day_sotavento.name',
    price: 'Sob Consulta',
    duration: '7h',
    pax: '2-6',
    descriptionKey: 'tours.full_day_sotavento.desc',
    features: ['Dia Inteiro', 'Almoço Incluído', 'Todo o Sotavento', 'Experiência Premium'],
    image: 'https://lh3.googleusercontent.com/d/10h7VJYsdSK7Vg2-W28Es38EHUA3cHx1g',
    itinerary: [
      { activity: 'Rio Sequa, Asseca, Barrocal e Cascatas' },
      { activity: 'Cerâmica Tradicional e fabrico manual' },
      { activity: 'Olhão, Ria Formosa, Fuzeta e Salinas' },
      { activity: 'Oliveira de 2000 anos e Santa Luzia' },
      { activity: 'Almoço no Ti Maria' },
      { activity: 'Antiga Vila de pescadores de atum e Olive tasting' },
      { activity: 'Cacela Velha' }
    ]
  }
];

export const allTours = [...tukTukTours, ...jeepTours];
