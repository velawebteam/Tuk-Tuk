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
  gallery?: string[];
  languages: string[];
  toBring?: string[];
  goodToKnow?: string[];
  notIncluded?: string[];
  itinerary?: { time?: string; activity: string }[];
}

const TUK_TUK_GALLERY = [
  'https://lh3.googleusercontent.com/d/1AgBECV3LgIOLdu520PZLGPzQNVrUFNbZ',
  'https://lh3.googleusercontent.com/d/1hyZmM8dkHZqfaLlbe6zadX8aRq4PXjHv',
  'https://lh3.googleusercontent.com/d/1mYhz3QpHMOFjcP4TUoItIRp8_T5mjdD4',
  'https://lh3.googleusercontent.com/d/1fsVmAcC6xHv0CqrfQdTr99ezT2fS_qbn',
  'https://lh3.googleusercontent.com/d/1-wbq9Hx4vJ35kO5E0_cHBXF-kNwvYz1J',
  'https://lh3.googleusercontent.com/d/1gi2xHzTkBJ2-LS2kRRV74ydBxz1IAdAU',
  'https://lh3.googleusercontent.com/d/16AznuKK_zoC84yMcw-dUt1YTbLAXp6HT',
  'https://lh3.googleusercontent.com/d/1Uwtd9vh5DMsMwK8F6s7Hr1w32JB5K9Im',
  'https://lh3.googleusercontent.com/d/1R7pFEAXmW2Ro_vi90QVlyr3n2df-BcSM',
  'https://lh3.googleusercontent.com/d/1AjiBBg8TYYaCSnwPu7AA3Ses4lp9av0x'
];

const JEEP_GALLERY = [
  'https://lh3.googleusercontent.com/d/1Ncwvz_oWrkuDPri7G_KB1ZSQ0MhdftcH',
  'https://lh3.googleusercontent.com/d/1_2g_0mkC73qZr-OnuEpVLTVDjp-H3C-8',
  'https://lh3.googleusercontent.com/d/1Td4HJtCL7G-DfjLKZLX4Y9BgrrIBd5CX',
  'https://lh3.googleusercontent.com/d/1Cq5d97JpxcCiH98VHNkz4TEb3zeIHnWn',
  'https://lh3.googleusercontent.com/d/1yp6_r2VuN91cX0p0lrG-kLGcnswuXoxq',
  'https://lh3.googleusercontent.com/d/1vf36GKKhXKAnl2rL8wqyNVJ3uVJ5Q53A',
  'https://lh3.googleusercontent.com/d/1Wj5RgVb1s5OqLb3U8MghSbRc2dyjB_SM',
  'https://lh3.googleusercontent.com/d/1qk9T6ij4TCk7jb1gMMr1q09h1FBJ1nEL',
  'https://lh3.googleusercontent.com/d/1QR1C3PflPaXlk8Ic5ZPZRhlCmmUUfr0B',
  'https://lh3.googleusercontent.com/d/1wL0X_EfwaLWyn2XyGfmGBDcMJBllNDJC',
  'https://lh3.googleusercontent.com/d/1F6m_W_sNdVoExVp2WHe1Gkex5iNTtJvG',
  'https://lh3.googleusercontent.com/d/1fj9s_0-LiwIGYkyPHUKGSRim2BYS1CVR'
];

const CHOCOLATE_GALLERY = ['https://lh3.googleusercontent.com/d/1vtKqO8SjFyMGCr_UmUW0rWBYA7aLFdhu'];
const FISHING_GALLERY = [
  'https://lh3.googleusercontent.com/d/1qz01BnSHXadw7QdxO1tJ0AQCljqjBK_c',
  'https://lh3.googleusercontent.com/d/1Zr_agdVE1RkNEjCQY60jXw7TwPEt9gY6',
  'https://lh3.googleusercontent.com/d/14mpOFGge06Rn4olZLbll_jTkRLf5vkAn',
  'https://lh3.googleusercontent.com/d/1CsQ-iEkwzquA-2pAczUtrLg7ehSP8yQV'
];
const SALT_GALLERY = ['https://lh3.googleusercontent.com/d/1uKbFp9Vb1SB6FzLzeb4WxK_6EdCLFbDr'];
const WINE_GALLERY = [
  'https://lh3.googleusercontent.com/d/10kQ82CNvqrzhE8IGRbsfQJDfo7e8Izzi',
  'https://lh3.googleusercontent.com/d/1XGqNYGwvgpi9sf4VAXHcll4IkDNqZldf',
  'https://lh3.googleusercontent.com/d/10UHFWEo6Bnmi_OlV3CmvOGk_0C_uxHWH',
  'https://lh3.googleusercontent.com/d/1oYWcpPIQdGyewAf4twMju3PikZhuXO_z',
  'https://lh3.googleusercontent.com/d/15h7IxmhQN9cN7PTXF1j75JXaTkvRRTfs',
  'https://lh3.googleusercontent.com/d/1xV7GEBXnRCcsN1LJLnGRjFSYRDDdXboq'
];
const OLIVE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1ENfN7QuDHr9-MMYYbVknBY_iJyIVeiP_',
  'https://lh3.googleusercontent.com/d/1wTD2TV0vQFdnBtBj1Vw6CkjaHOl-U5S2',
  'https://lh3.googleusercontent.com/d/1f68kYJkbE3pqKnGoCCaI-0IY-8cSrXq5',
  'https://lh3.googleusercontent.com/d/1INF9vjY6fvybEmNFMKpfHr4k-KPBpSm3'
];
const CLAY_GALLERY = [
  'https://lh3.googleusercontent.com/d/1Ubc8v8YYMo5tfRPo9leofWpMzbqvfmqv',
  'https://lh3.googleusercontent.com/d/1zVRKMO1bLpuBZtE69-oiSQ_aA_wNdGK-',
  'https://lh3.googleusercontent.com/d/1aXuLg9NNTEQeZKTotOJJR2FJ9TQDxtkD',
  'https://lh3.googleusercontent.com/d/1x49OXSIuRgUGi65rzk8SgjeZQ-cO_vL0',
  'https://lh3.googleusercontent.com/d/1i3wpnSa0gSkso0f1PmgNxxIjU9iXU0xX',
  'https://lh3.googleusercontent.com/d/19Xxk-lcM9YKd-G-DvIcGq4xWZbS03TZu'
];

export const tukTukTours: Tour[] = [
  {
    id: 'tavira-city',
    type: 'tuk-tuk',
    nameKey: 'tours.cidade_tavira.name',
    price: 'Sob Consulta',
    duration: '1h15',
    pax: '1-9',
    descriptionKey: 'tours.cidade_tavira.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião'],
    image: TUK_TUK_GALLERY[0],
    gallery: [...SALT_GALLERY, TUK_TUK_GALLERY[1], TUK_TUK_GALLERY[2]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
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
    pax: '1-9',
    descriptionKey: 'tours.tavira_total.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Antiga Vila de pescadores de atum (museu do atum)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião'],
    image: TUK_TUK_GALLERY[1],
    gallery: [...FISHING_GALLERY, ...SALT_GALLERY, TUK_TUK_GALLERY[0], TUK_TUK_GALLERY[2]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Antiga Vila de pescadores de atum (museu do atum)' },
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
    pax: '1-9',
    descriptionKey: 'tours.city_tapas.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Restaurante Ti Maria (Menu Refeição)'],
    image: TUK_TUK_GALLERY[2],
    gallery: [...SALT_GALLERY, TUK_TUK_GALLERY[0], TUK_TUK_GALLERY[1]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    goodToKnow: ['O passeio termina no restaurante', 'Menu definido pelo restaurante (Ti Maria)', 'Não inclui serviço de recolha no restaurante'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Restaurante Ti Maria (Menu refeição)' }
    ]
  },
  {
    id: 'historical-wine',
    type: 'tuk-tuk',
    nameKey: 'tours.historical_wine.name',
    price: 'Sob Consulta',
    duration: '2h30',
    pax: '1-9',
    descriptionKey: 'tours.historical_wine.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita ao Al-Lagar (Prova de Vinhos)'],
    image: TUK_TUK_GALLERY[3],
    gallery: [...WINE_GALLERY, ...SALT_GALLERY, TUK_TUK_GALLERY[0]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    goodToKnow: ['Inclui prova de 3 vinhos (Tinto, Rosé e Branco)', 'Acompanhado com Pão e Azeite'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita ao Al-Lagar (Prova de vinhos)' }
    ]
  },
  {
    id: 'city-chocolate',
    type: 'tuk-tuk',
    nameKey: 'tours.city_chocolate.name',
    price: 'Sob Consulta',
    duration: '1h30',
    pax: '1-9',
    descriptionKey: 'tours.city_chocolate.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Chocolataria Ibelle (Degustação de chocolate)'],
    image: TUK_TUK_GALLERY[4],
    gallery: [...CHOCOLATE_GALLERY, ...SALT_GALLERY, TUK_TUK_GALLERY[0]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Chocolataria Ibelle (Degustação de chocolate)' }
    ]
  },
  {
    id: 'tuk-tuk-boat',
    type: 'tuk-tuk',
    nameKey: 'tours.tuk_tuk_boat.name',
    price: 'Sob Consulta',
    duration: '3h',
    pax: '1-9',
    descriptionKey: 'tours.tuk_tuk_boat.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Passeio de barco na Ria Formosa (Fauna/Flora)'],
    image: TUK_TUK_GALLERY[5],
    gallery: [...SALT_GALLERY, TUK_TUK_GALLERY[0], TUK_TUK_GALLERY[1]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Passeio de barco na Ria Formosa (Fauna/Flora)' }
    ]
  },
  {
    id: 'city-ice-cream',
    type: 'tuk-tuk',
    nameKey: 'tours.city_ice_cream.name',
    price: 'Sob Consulta',
    duration: '1h30',
    pax: '1-9',
    descriptionKey: 'tours.city_ice_cream.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Gelataria 100% Natural (1 bola por pessoa)'],
    image: TUK_TUK_GALLERY[6],
    gallery: [...SALT_GALLERY, TUK_TUK_GALLERY[0]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    goodToKnow: ['Inclui 1 bola de gelado por pessoa (copo ou cone)'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Gelataria 100% Natural (Inclui 1 bola por pessoa)' }
    ]
  },
  {
    id: 'city-olive-factory',
    type: 'tuk-tuk',
    nameKey: 'tours.city_olive_factory.name',
    price: 'Sob Consulta',
    duration: '2h',
    pax: '1-9',
    descriptionKey: 'tours.city_olive_factory.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Visita à fábrica de azeitonas (Degustação)'],
    image: 'https://lh3.googleusercontent.com/d/1wTD2TV0vQFdnBtBj1Vw6CkjaHOl-U5S2',
    gallery: [
      'https://lh3.googleusercontent.com/d/1wTD2TV0vQFdnBtBj1Vw6CkjaHOl-U5S2',
      OLIVE_GALLERY[0],
      OLIVE_GALLERY[2],
      OLIVE_GALLERY[3],
      ...SALT_GALLERY,
      TUK_TUK_GALLERY[0]
    ],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    itinerary: [
      { activity: 'Centro Histórico, Jardim do Castelo e Ponte Antiga' },
      { activity: 'Rio Sequa e Rio Gilão' },
      { activity: 'Parque Natural Ria Formosa (Flora e Fauna)' },
      { activity: 'Salinas (Flor de Sal)' },
      { activity: 'Visita à Igreja de São Pedro ou São Sebastião' },
      { activity: 'Visita à fábrica de azeitonas (Inclui degustação)' }
    ]
  },
  {
    id: 'santa-luzia-tuk',
    type: 'tuk-tuk',
    nameKey: 'tours.santa_luzia_tuk.name',
    price: 'Sob Consulta',
    duration: '1h45',
    pax: '1-9',
    descriptionKey: 'tours.santa_luzia_tuk.desc',
    features: ['Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal e Sal Comercial)', 'Aves', 'Santa Luzia (Capital do Polvo)'],
    image: TUK_TUK_GALLERY[8],
    gallery: [...SALT_GALLERY, TUK_TUK_GALLERY[9]],
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
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
    pax: '2-5',
    descriptionKey: 'tours.tavira_gold.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)'],
    image: JEEP_GALLERY[0],
    gallery: [...FISHING_GALLERY, ...OLIVE_GALLERY, JEEP_GALLERY[1]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.ria_formosa_jeep.desc',
    features: ['Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Cacela Velha', 'Cabanas Tavira', 'Restaurante Alfama (inclui menu refeicao)'],
    image: JEEP_GALLERY[1],
    gallery: [...FISHING_GALLERY, JEEP_GALLERY[0]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.fuzeta_olhao_bath.desc',
    features: ['Santa Luzia (capital do polvo)', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Fuseta', 'Olhao', 'Salinas (inclui spa mar morto e argila para tratamento de pele)'],
    image: JEEP_GALLERY[2],
    gallery: [...CLAY_GALLERY, JEEP_GALLERY[3]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.santa_luzia_clay.desc',
    features: ['Santa Luzia (capital do polvo)', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Fuseta', 'Olaria (visita e demonstração da olaria tradicional manual)'],
    image: JEEP_GALLERY[3],
    gallery: [...CLAY_GALLERY, JEEP_GALLERY[2]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.liquid_gold_route.desc',
    features: ['Moncapacho', 'Monterosa', 'Olive Grove', 'Olive Oil Tasting', 'Oliveira 2000 anos', 'Ria Formosa', 'Salinas', 'Santa Luzia (capital do polvo)'],
    image: JEEP_GALLERY[4],
    gallery: [...OLIVE_GALLERY, JEEP_GALLERY[5]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.jeep_boat_anchors.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)', 'Passeio barco Ria Formosa', 'cemitério ancoras', 'Regresso Tavira'],
    image: JEEP_GALLERY[5],
    gallery: [...FISHING_GALLERY, ...OLIVE_GALLERY, JEEP_GALLERY[4]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.tavira_roots_wine.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)', 'Al-Lagar (inclui 1 copo de vinho / tapas)'],
    image: JEEP_GALLERY[6],
    gallery: [...WINE_GALLERY, ...FISHING_GALLERY, ...OLIVE_GALLERY, JEEP_GALLERY[7]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.jeep_boat_history.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)', 'Passeio barco Ria Formosa', 'Regresso Tavira'],
    image: JEEP_GALLERY[7],
    gallery: [...FISHING_GALLERY, ...OLIVE_GALLERY, JEEP_GALLERY[6]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.ceramica.desc',
    features: ['Rio Sequa', 'Asseca', 'Barrocal', 'cascatas', 'Campo', 'Ceramica Tradicional', 'Terracota', 'fabrico manual'],
    image: JEEP_GALLERY[8],
    gallery: [...CLAY_GALLERY, JEEP_GALLERY[9]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
    pax: '2-5',
    descriptionKey: 'tours.full_day_sotavento.desc',
    features: ['Rio Sequa', 'Asseca', 'Barrocal', 'cascatas', 'Campo', 'Ceramica Tradicional', 'Terracota', 'fabrico manual', 'Olhao', 'Ria Formosa', 'Fuseta', 'Salinas', 'Oliveira 2000 anos', 'Santa Luzia', 'Tavira', 'Almoco Ti Maria', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Cacela Velha'],
    image: JEEP_GALLERY[9],
    gallery: [...CLAY_GALLERY, ...FISHING_GALLERY, ...OLIVE_GALLERY, JEEP_GALLERY[10], JEEP_GALLERY[11]],
    languages: ['Português', 'Espanhol', 'Inglês'],
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
