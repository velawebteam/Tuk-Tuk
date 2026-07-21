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
  imagePosition?: string;
  gallery?: string[];
  languages: string[];
  toBring?: string[];
  goodToKnow?: string[];
  notIncluded?: string[];
  itinerary?: { time?: string; activity: string }[];
  fareHarborProductId?: number;
  fareHarborFlowId?: number;
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

const TAVIRA_TOTAL_GALLERY = [
  'https://lh3.googleusercontent.com/d/1dGvb9OiCh04Txt26IfDFSUAB0KUoeP0X', // Capa
  'https://lh3.googleusercontent.com/d/1HMhDrBTKeM9PWqZtsfpG4lSkT1UiFecb',
  'https://lh3.googleusercontent.com/d/1c9oTsvw4PAW2tpldLRpHTmSstwyzOdd9',
  'https://lh3.googleusercontent.com/d/1lULkQbgV9Sb9-7b1utqLhDN7w4GuGqNd',
  'https://lh3.googleusercontent.com/d/12ul-z5kjPt09NRgJ5uQnJW9By1-fokPQ',
  'https://lh3.googleusercontent.com/d/19r9SbwHj0zKxzFNLLuYVU12Hhg9wIFmQ',
  'https://lh3.googleusercontent.com/d/1t0UJOzY1fihIoQk09C68MFuasBjUMMwR',
  'https://lh3.googleusercontent.com/d/11h1DJqZcAjFSgleoeq9qTHUtLXtZHFmk',
  'https://lh3.googleusercontent.com/d/1jWoPmXIfGYv4qKwpwBkYeVBlP_WI8Mvw',
  'https://lh3.googleusercontent.com/d/1LobFEvwWno_I-PTAqLFZnsNFVTRDEeOJ'
];

const TAVIRA_CITY_GALLERY = [
  'https://lh3.googleusercontent.com/d/1aAcpY7wXxW83e9CGikosS0uNFPAP0AQt', // Capa
  'https://lh3.googleusercontent.com/d/1n8Poe0b4yAX5TgO0Y0l0IEkj2JmcLxyp',
  'https://lh3.googleusercontent.com/d/18iAf9-Ht0CEFYnnt8kBFKjBHQizy1INH',
  'https://lh3.googleusercontent.com/d/1kHDfNHJfWDSqnc-YSRSynsfPUm9FENgf',
  'https://lh3.googleusercontent.com/d/1VWYNzbINVuFdiAne1lr8NzE82sT2FSvY',
  'https://lh3.googleusercontent.com/d/1_TelIzaUi55A1Qv3TifQ4QiaZcefPJMM',
  'https://lh3.googleusercontent.com/d/1S1tqTy6kJZ0ii5OOOUfnAcld8fm9oVFI',
  'https://lh3.googleusercontent.com/d/1EFCEJtbj3aTNX9TW8qK-XN8fzM-BMjVz',
  'https://lh3.googleusercontent.com/d/1Bz9mPS4eISJyPXj0M07LchvfWVxELkN3',
  'https://lh3.googleusercontent.com/d/1CYMJPE83LYEsCNdoF0lSc_hCHNQfW_gN'
];

const CITY_TAPAS_GALLERY = [
  'https://lh3.googleusercontent.com/d/1q4QSYDuZS9icvRiB5xIrKLggwfy9Q1eP', // Capa
  'https://lh3.googleusercontent.com/d/1O92AmeGom-pF0dwNjpT0BAqDYew1J6zs',
  'https://lh3.googleusercontent.com/d/1G0U04ZycfTNl4vStr4pgv9_axc8jlHWY',
  'https://lh3.googleusercontent.com/d/17dy_xK2CPiKGWiCWlbjspo4bjkZddbhy',
  'https://lh3.googleusercontent.com/d/1EHDGUDfhDL7wdSTL_elJXeQmj0_NrC_g',
  'https://lh3.googleusercontent.com/d/17oNlkzyFQenRffpjrwKaNAqNFiwtvINM',
  'https://lh3.googleusercontent.com/d/1nPBZpUyUAaf-pwZVhTzrFZoaRZ7DZFLL',
  'https://lh3.googleusercontent.com/d/12lXSsiPGJQDvM4AyJjbmpqEfJHXueAUr',
  'https://lh3.googleusercontent.com/d/1DJxjdhfBJJHlFKbefa6w7bJm3AcCV0X9',
  'https://lh3.googleusercontent.com/d/1HKq-13GxoEhR7zINWSE5H6MDiFwSjKPj'
];

const HISTORICAL_WINE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1acMLw1oqHRNRefj2ATdNGi-OBgh5Bv_d', // Capa
  'https://lh3.googleusercontent.com/d/1n_Q8dCCr4XtPZFiy0PIbVlV6bOnmYkkf',
  'https://lh3.googleusercontent.com/d/19bu5p9IbvGvyNzvc0xr98s5tPPASkh6H',
  'https://lh3.googleusercontent.com/d/1EYLT-Ev8JhFaL3EMvJmL8KqvgFM8qsj1',
  'https://lh3.googleusercontent.com/d/16vTKqDtTuAIyCEZY6AEEEaM12ceJZDIV',
  'https://lh3.googleusercontent.com/d/1kO-SgtyKIuRchJui4hoanCZhMQDyYeg0',
  'https://lh3.googleusercontent.com/d/1FAfj8vrOQMFvjrPxfilUaNIyfXxnzEd8',
  'https://lh3.googleusercontent.com/d/10LaH8ZI5JVyC22CHcjSUZwNcR3UvYrGf',
  'https://lh3.googleusercontent.com/d/15EDSOqrTy4KhMVVys2DZypZlsdVpSWK9',
  'https://lh3.googleusercontent.com/d/1rbYe-ox9Jc5ztXmMV6AF1KucTKe0YxnT'
];

const CITY_CHOCOLATE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1II5eIWE-7D3xiX9qp8arFRHZEBUguR6n', // Capa
  'https://lh3.googleusercontent.com/d/18GIM0ta1XtqIlXCcoo2CJeuzYoEX2lI4',
  'https://lh3.googleusercontent.com/d/1Vk-XxhPozw2X1kp09M_4wR1vABbWugfT',
  'https://lh3.googleusercontent.com/d/1LK5JK5bv22mgqQiVmILzWF4GsRM7hfE2',
  'https://lh3.googleusercontent.com/d/1QFChris4UhpxWzJwomQoIfKV025sCNee',
  'https://lh3.googleusercontent.com/d/17rsDPJS161YPLtWS9mExq0j8a6KVKeBo',
  'https://lh3.googleusercontent.com/d/1NUhy2bl1Tc6sK4CQuTg-nLxWI6tgQCjr',
  'https://lh3.googleusercontent.com/d/1fcH3b2-nMl2GrG0QYmkubBGctzHehO1h',
  'https://lh3.googleusercontent.com/d/1UBPeTRi8eBaYHEwI0LJgRutZn3rAQRJt'
];

const TUKTUK_BOAT_GALLERY = [
  'https://lh3.googleusercontent.com/d/1nKG5-o-r08dkLbFYqWBO_4gXxjfam1WP',
  'https://lh3.googleusercontent.com/d/1mU1TRELc1_1Bhsj6aOrEhbwftHo9gBqQ',
  'https://lh3.googleusercontent.com/d/1pE19py8IyGNo4J2OvDTnhgD7h6iSdkqu',
  'https://lh3.googleusercontent.com/d/1LLzaZ_apPzD7JN1hSgLw09mrSxJef49-',
  'https://lh3.googleusercontent.com/d/1MjjMy0owQWugdrNI-WoRfS8w2OOuHxO-',
  'https://lh3.googleusercontent.com/d/1t90eZuZfsLIlaMRNsSFTCD1pFBl_Cn3A',
  'https://lh3.googleusercontent.com/d/1z_-fZz171u_3LcyzZUuQQ3ZP02Hn_YYN',
  'https://lh3.googleusercontent.com/d/1EsaoOIQuVIG5V4EzydBO5dXzRTgbrRl-',
  'https://lh3.googleusercontent.com/d/1Ho0eiqthiUGUE0l4zSZBHZa13E7pd9TP',
  'https://lh3.googleusercontent.com/d/1nFT3IfqGCfs1Qk2CSlNpV5o-ZaQZeHVA',
  'https://lh3.googleusercontent.com/d/1zq5W7mx_iID-hmId0gqItHLvOmxNXaTE',
  'https://lh3.googleusercontent.com/d/1qKDLWupvJUosN4qAZfkj2SFWNTWgcB3S'
];

const CITY_ICE_CREAM_GALLERY = [
  'https://lh3.googleusercontent.com/d/1Y7x7di89Ess_BmiXq_qzQqPJ8tio9vBL', // Capa
  'https://lh3.googleusercontent.com/d/1jaoC8Ev6RYxbCg0_jPzTPLVGhOKAXqqA',
  'https://lh3.googleusercontent.com/d/1VWbb4Al4XEvfxX0Taich7J1yeQQTAyCo',
  'https://lh3.googleusercontent.com/d/1qihrbFHTXh5MAjfEOuWErRtL7Nw9oUFE',
  'https://lh3.googleusercontent.com/d/16i9O7OVYfKS37I9UmaMdtXzs2seMRljg',
  'https://lh3.googleusercontent.com/d/11-KaopmTh2SX2zweE9opHcL7XBH6Ivne',
  'https://lh3.googleusercontent.com/d/1G0VHynAZ2_crVRHEQRxOrIODt199XkZe',
  'https://lh3.googleusercontent.com/d/1U10eCDVv3JZ7Wjk8XWXkFMt1zxe4R7dK',
  'https://lh3.googleusercontent.com/d/1S4H0JT0LSBRoCtq81Yvd16hb2Lj0ujZ7',
  'https://lh3.googleusercontent.com/d/1qUYY8jOtkjd1Od1uv0k_wuizqnFWtFca'
];

const CITY_OLIVE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1uHshrZlTsv3Yt2xSHRgUlPeKTxnAEFxz',
  'https://lh3.googleusercontent.com/d/1aSuMV5nv7Kc_uTzfJ49YtCxvEYzbzDM1',
  'https://lh3.googleusercontent.com/d/1fRdPAM9ShM1h8_4_MtmTeuNin2Ze3mjF',
  'https://lh3.googleusercontent.com/d/1cQjYnbvA5xXwl74wZmxlzCrUPzBl8mW7',
  'https://lh3.googleusercontent.com/d/1pvY9j6MZNmiuDmp8X2BGzbho2kn2CC9g',
  'https://lh3.googleusercontent.com/d/1VDnK21RWs96fWdT6ovfVnrV9MqhsDqFi',
  'https://lh3.googleusercontent.com/d/1eEUvcfV1TbCrpqa1Pq7nuaa7SrYGRE4X',
  'https://lh3.googleusercontent.com/d/1KUCOGLOLYnPawGVF-3aIn28xjKCfWEZx',
  'https://lh3.googleusercontent.com/d/1cB45-Rj3Ow1AtBNQbi7zewuctOWhLVBT'
];

const SANTA_LUZIA_GALLERY = [
  'https://lh3.googleusercontent.com/d/1fR1c9SV650RWqz3w87qtPAKoSz2r_vJ4',
  'https://lh3.googleusercontent.com/d/1sSSxQCRpgMLo40x7NxkhE4sCLt_9IPDF',
  'https://lh3.googleusercontent.com/d/1zOCORzfaNeEOBDIf6EINf0kLfwpGfxuc',
  'https://lh3.googleusercontent.com/d/1mxL6N5O4e7Nlyc7_V31woWwoMo4xbxyR',
  'https://lh3.googleusercontent.com/d/1rDc2Rye4qJiAHXyv09lY9S7Ihx-fx7yg',
  'https://lh3.googleusercontent.com/d/1jYxbI5yJ-ziwfd9LfcyqRtzzx56XkEBm',
  'https://lh3.googleusercontent.com/d/1dqF8yLG-efzPAwDhxVcFpbDn04A-kcaw',
  'https://lh3.googleusercontent.com/d/1XRlWZ44RKTb5Hd0NGAH7cSoQHuwlsEqP',
  'https://lh3.googleusercontent.com/d/1XpkIxT5vAvRD1H5G0LnjQG4CWZTx8ZoI',
  'https://lh3.googleusercontent.com/d/1DYdBB_fc6DS3WNIau3Ve25_5MpGqq_KY'
];

const TAVIRA_GOLD_GALLERY = [
  'https://lh3.googleusercontent.com/d/1Xv_Udx1GW2dpsVBUZ8r6zjSDLAWPsYIE',
  'https://lh3.googleusercontent.com/d/1DrDh1fVFc5Jwa618IBqzxs_sViJ6EcGH',
  'https://lh3.googleusercontent.com/d/1-QZtxmgq7e5AareN71jPK1Xs3k8W7uXI',
  'https://lh3.googleusercontent.com/d/1Z9YfcxylqAPCZ0RqN_YJrGRdke1kC1Dj',
  'https://lh3.googleusercontent.com/d/1z-Au5RVoHCsipOwtu84MLnOJYOVpoTSU',
  'https://lh3.googleusercontent.com/d/166zqvYO2YixjlGUZtdLWbxiIcEDKT0Dd',
  'https://lh3.googleusercontent.com/d/1Wvgwj3OvD922yWxcmDLbBOO58MUHU2lx',
  'https://lh3.googleusercontent.com/d/1i38H2-z1A04b4d7AikfT8NI2YgRPOHgo',
  'https://lh3.googleusercontent.com/d/1xPHo9TzlF0FqAK2iBW9NSVtgSEQ7eMd3'
];

const TAVIRA_ROOTS_WINE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1odvyRA9vQ99MCQbtYO0_dFBcT4vzg5Lx',
  'https://lh3.googleusercontent.com/d/1xFIEPNrDSihXbfYg3i3ACw993hqkTFEG',
  'https://lh3.googleusercontent.com/d/13hU8uzTEJ3YjJcmH6VxrS-KgxJ__C-mr',
  'https://lh3.googleusercontent.com/d/1GxDCfEQHs93BazBlc1gMeb9ycN0ywhV7',
  'https://lh3.googleusercontent.com/d/16ipkjtymv0FQ6rjv3miCd891_MYHXe9U',
  'https://lh3.googleusercontent.com/d/17hdIDuksEBM3hrp4sp8a0oGpXEwjQsNI',
  'https://lh3.googleusercontent.com/d/1M4kz_QIz-0fYZiHWCGxcpDpghnk6aabb',
  'https://lh3.googleusercontent.com/d/1ESBJgPgPx14KzudGwDAthmFfSGxnU26o',
  'https://lh3.googleusercontent.com/d/1SA40OQ7u3l-17LxmiYtd-ZkeZo0lsDe9',
  'https://lh3.googleusercontent.com/d/1ujAL58-BfP5iZSar70tVDsdcKsggfLtu',
  'https://lh3.googleusercontent.com/d/1sRm_jOJomnYEwiviRejuxDeTuCwSXYh-',
  'https://lh3.googleusercontent.com/d/11WV3kVY0cXC8M7tBU-ceWsdylBSD22Lp'
];

const JEEP_BOAT_HISTORY_GALLERY = [
  'https://lh3.googleusercontent.com/d/1ko387XjugTI-bk47Sodf5MkXixhZtGao',
  'https://lh3.googleusercontent.com/d/1kwJdCplg_sK2Zh45fZSGo886L2psaTpQ',
  'https://lh3.googleusercontent.com/d/19iYIJQuJLmC4Sc-z-U0xSS6DL7NEQNAZ',
  'https://lh3.googleusercontent.com/d/1buRoNS3ZXbvGLgF2nIfrUZMBI6CQx695',
  'https://lh3.googleusercontent.com/d/1IfQKK_nBvZexI-4m2VM56SOqCBm9nMIt',
  'https://lh3.googleusercontent.com/d/1yWE5dpe3ATS1nEhLQZuVbtCaZWg3OIF8'
];

const JEEP_BOAT_ANCHOR_GALLERY = [
  'https://lh3.googleusercontent.com/d/1SxJ999YFAee9ZLsj-rFnFkqDStmjIiAe',
  'https://lh3.googleusercontent.com/d/1A-wtbFGQS_xbzEJRpmQNHiR-uThKHYF_',
  'https://lh3.googleusercontent.com/d/1C7UP35_VThhxloXRN3vFc0hSmEp2FxiZ',
  'https://lh3.googleusercontent.com/d/1g-7NnrSGolYgLKN49fRFGV6z2LuPyujk',
  'https://lh3.googleusercontent.com/d/1u-h3PWoTClhpAajcrsYWi_EnxFYzNzwk',
  'https://lh3.googleusercontent.com/d/13rpypMm1tm72TVRMRovtoRsHG21Q17Os',
  'https://lh3.googleusercontent.com/d/1Kohld4D3GykM5bbSeFBcSkW-BybsKOHL',
  'https://lh3.googleusercontent.com/d/1H73iEIoHm_Hle9NkwYKtHh9NWcltQ1mK',
  'https://lh3.googleusercontent.com/d/1UV68ChII3jp1dWW6ql-g_wx74o2hi_qd',
  'https://lh3.googleusercontent.com/d/1XpCxXpamX_954g02-wHr1IxA6JsFXUXp',
  'https://lh3.googleusercontent.com/d/19uVJZydqaDcNzyUK0YaYzYG9UWKh_D3q',
  'https://lh3.googleusercontent.com/d/1YFRxMeUHR20Ny0BP2xmqzmKDhH_-QzWB',
  'https://lh3.googleusercontent.com/d/1TmeYXno2q2MHv-6Y8jwLMAjA_IU0hRfM'
];

const SANTA_LUZIA_CLAY_GALLERY = [
  'https://lh3.googleusercontent.com/d/1xZgL-uqR6t2FWNZU1YlOSxBa391OdnU2',
  'https://lh3.googleusercontent.com/d/1rmQkI_Bbwbs8EMFjFIV-w4kCvVzQcHZv',
  'https://lh3.googleusercontent.com/d/1FCi-O346K-7pbdCpHaZG44WYEo5K9zt9',
  'https://lh3.googleusercontent.com/d/1ocYtE1b_5neWNWE8l5mN94wUeSrKD05G',
  'https://lh3.googleusercontent.com/d/1g_h7jhrC5MXBuBufXvz4wMi3lVjs0JMi',
  'https://lh3.googleusercontent.com/d/1uC4cY7wQZHFJjDuVVGVl8oiiIDUHZK5T',
  'https://lh3.googleusercontent.com/d/1FdEqs_Qxl_eFwdXsdMkQZOp2BVqwsdaW',
  'https://lh3.googleusercontent.com/d/16TLjfPlQh_jRmPNxx2yumbVtsvDvCsuZ',
  'https://lh3.googleusercontent.com/d/1FDQpJTHR8FkFSL40SkqzbDO3Joym1NMF',
  'https://lh3.googleusercontent.com/d/1B7qXj0chH5siZM-UrcKT9uKOFGrVK0v9',
  'https://lh3.googleusercontent.com/d/1WNo8-G1PV-qOqQyrPmNVBZ9ugUjpZcog'
];

const RIA_FORMOSA_GASTRONOMIA_GALLERY = [
  'https://lh3.googleusercontent.com/d/1-mazhmCVnrveAAnsb8a89t_fXt2owlbo',
  'https://lh3.googleusercontent.com/d/1oyU97FEN5epEYX220Ft4MPDmQFdOWowO',
  'https://lh3.googleusercontent.com/d/1AWLtGPL_5Zo7ffH3j7X94jcIPrqFQe6F',
  'https://lh3.googleusercontent.com/d/1PLUP8XxLedQ-f-jhZzPukc7I6j9Gix8A',
  'https://lh3.googleusercontent.com/d/1ax5lUEfqXZCzqrWpmAaBjGSBwiXLqjNp',
  'https://lh3.googleusercontent.com/d/1HuSVEQI1Bp64p8oFgmT1lP3ZtQH9jdbG',
  'https://lh3.googleusercontent.com/d/1bcjhbSbVIIj4HXyOrecF0-duimDnSQ-v',
  'https://lh3.googleusercontent.com/d/1Xh-8JvNm4n66e94k-DgSsSWo6R0ouXmv',
  'https://lh3.googleusercontent.com/d/1SChWPoh-yXTN0CyJv_uI3QKUH9HhmOrp',
  'https://lh3.googleusercontent.com/d/1oMcxJbwY05d9TBgOEyN4McOLj1anQ5Pz',
  'https://lh3.googleusercontent.com/d/1YeDIUV253c70XEGkI9_J5bfhClBCjwVP',
  'https://lh3.googleusercontent.com/d/1YjvdFu06ZUUtW69hswGJpTCZ-RAtbjNU',
  'https://lh3.googleusercontent.com/d/1VFNyYllUarirUUFbDJNcmJ3AHMgdFcrB',
  'https://lh3.googleusercontent.com/d/10Xb3fBiRqDQKlgJT_nU7p-EoddQpdy9s'
];

const OLIVAL_AZEITE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1PxQY9BeiTXOBNciU33Cdk2NY_Y3GQYqD',
  'https://lh3.googleusercontent.com/d/1-n2l_HB-PEl06l-u0pMBJ5xGDJclqtyO',
  'https://lh3.googleusercontent.com/d/1KAHavpEvBlFOCiwjkn3FNOf0qnRS7UA5',
  'https://lh3.googleusercontent.com/d/1IEAt0rglYO5yJKBMtdKUHMiWLTOEBgSu',
  'https://lh3.googleusercontent.com/d/16zsFBiQxiV8-XVkTzQvl1zx6iFyLgx7H',
  'https://lh3.googleusercontent.com/d/1jbH9ruMRoJdevRrb1lFE7_zu9dgd2YQI',
  'https://lh3.googleusercontent.com/d/1vTeLqTLyLSerq6H2IxoKr49oCVBvA0G4',
  'https://lh3.googleusercontent.com/d/1Sx7LDA92suLiiibqzNiNzN6uWD8F3BEq',
  'https://lh3.googleusercontent.com/d/1ZdK_fJA30lZbmhTSsEE7fkZAg2aOBhBp',
  'https://lh3.googleusercontent.com/d/1ruXeCoMj2x0ztqHCOP2lj0o37atSFSSF',
  'https://lh3.googleusercontent.com/d/1NPVAkRJLnaedRm36tY6lfHEp5XXxWQOl'
];

const SANTA_LUZIA_FUSETA_OLHAO_GALLERY = [
  'https://lh3.googleusercontent.com/d/1IjWuEtOXYzME38xRrIVq8dr40xfCdSEU',
  'https://lh3.googleusercontent.com/d/1jtxtDi2__OB_QMT9BriwcMc_xm9AY1Om',
  'https://lh3.googleusercontent.com/d/1chGjmYLnidu9LvU_RWb8Oer1aGDMf2mY',
  'https://lh3.googleusercontent.com/d/17G9xUP3BfNbUU3PAFXN73sCWxQ0i4oMn',
  'https://lh3.googleusercontent.com/d/1DlWg4lh44VopyaeZfZ5si8xJrNfdDjn9',
  'https://lh3.googleusercontent.com/d/1KkWZ1MEgguecMB2L73j-W-3cuGcf_LP-',
  'https://lh3.googleusercontent.com/d/1cpCfSkXvZ9pkJ1zee61b8ZIzm2VhTOyS',
  'https://lh3.googleusercontent.com/d/1oU3OU3vRksBvlokZUMdXd-XDkMXbWXmm',
  'https://lh3.googleusercontent.com/d/1kJQY5NvoH1Y4d-h0kSn99kg1DB7Ed21j',
  'https://lh3.googleusercontent.com/d/1PmFlAVJOlROil2l1H3Hz00U1RJnCUFW1',
  'https://lh3.googleusercontent.com/d/1YR1ZkK9tKZBJHaOtq7qdngzJzFZDuKbX',
  'https://lh3.googleusercontent.com/d/1zPYH7JaFYgiLI8ZJCk5laniidBBQXQY3'
];

const CERAMICA_TRADICIONAL_GALLERY = [
  'https://lh3.googleusercontent.com/d/1L5lqVzpeocVwiDMeflCIkU7HWVa3h8Hc',
  'https://lh3.googleusercontent.com/d/1AzNtX95bEfJiT2Sn_r4NKdKumHkmtHUD',
  'https://lh3.googleusercontent.com/d/1zHmjC0VoYEiwJ6TwgeMKF7f4F1ccSdKp',
  'https://lh3.googleusercontent.com/d/1oSoecwdHxrdJc5w67FGjevyPYq5zSrOb',
  'https://lh3.googleusercontent.com/d/1N9G2sAjpUFAEZk22ingIb2GBBBaplw51',
  'https://lh3.googleusercontent.com/d/1up7Qwyi0qBa7H8Auj69uedQaIlWKLsaW',
  'https://lh3.googleusercontent.com/d/1u6x5wIynIrvPkbmgu4GGX63DY1NwJc_f',
  'https://lh3.googleusercontent.com/d/19SD3fC-ZU5llOVWLPcBunE1RmlYsiKZD',
  'https://lh3.googleusercontent.com/d/1248w03sfSO9IL5JsP9nOpuj24DE3McPb'
];

const DIA_COMPLETO_SOTAVENTO_GALLERY = [
  'https://lh3.googleusercontent.com/d/1vUQJRA0Rs2jGMNmhTs4LVA8zKyBrkcDK',
  'https://lh3.googleusercontent.com/d/1HT_FvNOtVGvf10-wuleUAv8gA0SkfjwE',
  'https://lh3.googleusercontent.com/d/1HC24nivgm8LSYMR5ooB_2IjyilbO5K4g',
  'https://lh3.googleusercontent.com/d/1JHRLXcrTTY7Fh1Tq8UWnii-5ncxYNIQB',
  'https://lh3.googleusercontent.com/d/1a-pLBrHs1wnlwFQBvyz4cvdAcslX6HW0',
  'https://lh3.googleusercontent.com/d/1C4RS_n_YqOlH_17QhCTOBLeYzG_trved',
  'https://lh3.googleusercontent.com/d/1xxCw2baApxSuNklzIYW135U6Lqqr1Ds2',
  'https://lh3.googleusercontent.com/d/1_Ag-MSggNNRQa21RazkuGFHLhDUBxxhw',
  'https://lh3.googleusercontent.com/d/11D7NT7fQMDT2VVd_07aZTGjuBf1GSIvk',
  'https://lh3.googleusercontent.com/d/13LCv3AxoO1q_6kHNuQHo6alJiXigErIy',
  'https://lh3.googleusercontent.com/d/13vUaxgKwjC51MsoJo7CViXfdgiEKFP97',
  'https://lh3.googleusercontent.com/d/1p72nQBbIW_4c35Q389v3A2WDeiHSCjOs',
  'https://lh3.googleusercontent.com/d/1q533uJKW2V-ymdSgtt1X5Y3ouGgwiZFW',
  'https://lh3.googleusercontent.com/d/1hKUCg2RC-4egSqNT1crXCfyDeptbUgqp',
  'https://lh3.googleusercontent.com/d/1eR4MLw10cCgV0piZwoC4El6QBR-ZcJs3',
  'https://lh3.googleusercontent.com/d/1VQh5aoXSUVoIf4b7oSjVn4P63utGLN2T',
  'https://lh3.googleusercontent.com/d/1JOH7VyRcnrtmt5K8nAD4E6QNTIMPrj4r',
  'https://lh3.googleusercontent.com/d/1tF0zaoEIqeti-zT-PfAoLGxlqbpdxkB-',
  'https://lh3.googleusercontent.com/d/1jjnKGC2BQFu11Py7vAVhF_KwZ3SfM3es',
  'https://lh3.googleusercontent.com/d/1O0GB5sMiVvLM1UPT7NvXHbX-bMB4tncN',
  'https://lh3.googleusercontent.com/d/108vlZ-gVb3a2ESNDUJxBf7PJOmBQ8ye0',
  'https://lh3.googleusercontent.com/d/1d50RgFBpBRYqpOGp1TOgeJnc13ctjP5M',
  'https://lh3.googleusercontent.com/d/1-orWjragYoAGqVC2bzaE3lfO8zhSBNhK',
  'https://lh3.googleusercontent.com/d/1Xc7CYlWEOXDSi1gN4C-194eKZGDwj7qC',
  'https://lh3.googleusercontent.com/d/1vAtA9C9C4I-e3OEDxJC8r4yXSLE0ITAo',
  'https://lh3.googleusercontent.com/d/15Ldz-dhK-MqxR6qn-oRBlFfht4CQyTWM',
  'https://lh3.googleusercontent.com/d/1iD7Oi3EvFt7KRk_AHGruegBCmyaSZHFG',
  'https://lh3.googleusercontent.com/d/1Fi0qiacwhYlnesjhmunQR43UudXahIWM',
  'https://lh3.googleusercontent.com/d/1Q-NMm3CRtahnW_e1GRcxbUMAgzF9Gnhr',
  'https://lh3.googleusercontent.com/d/1dAsknTtwXGv7w0hlv76s66BUWpj-UDtN',
  'https://lh3.googleusercontent.com/d/1dd6o3sE_VObeXigt_4n2R9n8FGqNUmaC',
  'https://lh3.googleusercontent.com/d/1suSJxh4n_5-e2DF93EaB37MuuYt5wtQR'
];

export const tukTukTours: Tour[] = [
  {
    id: 'tavira-city',
    type: 'tuk-tuk',
    nameKey: 'tours.cidade_tavira.name',
    price: '55€',
    duration: '1h15',
    pax: '1-9',
    descriptionKey: 'tours.cidade_tavira.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião'],
    image: TAVIRA_CITY_GALLERY[0],
    gallery: TAVIRA_CITY_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 480332,
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
    price: '90€',
    duration: '2h',
    pax: '1-9',
    descriptionKey: 'tours.tavira_total.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Antiga Vila de pescadores de atum (museu do atum)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião'],
    image: TAVIRA_TOTAL_GALLERY[0],
    gallery: TAVIRA_TOTAL_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 480370,
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
    price: '50€',
    duration: '1h30',
    pax: '1-9',
    descriptionKey: 'tours.city_tapas.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Restaurante Ti Maria (Menu Refeição)'],
    image: CITY_TAPAS_GALLERY[0],
    gallery: CITY_TAPAS_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 480337,
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
    price: '65€',
    duration: '2h30',
    pax: '1-9',
    descriptionKey: 'tours.historical_wine.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita ao Al-Lagar (Prova de Vinhos)'],
    image: HISTORICAL_WINE_GALLERY[0],
    gallery: HISTORICAL_WINE_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 505334,
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
    price: '80€',
    duration: '1h30',
    pax: '1-9',
    descriptionKey: 'tours.city_chocolate.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Chocolataria Ibelle (Degustação de chocolate)'],
    image: CITY_CHOCOLATE_GALLERY[0],
    gallery: CITY_CHOCOLATE_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 480393,
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
    price: '52,50€',
    duration: '2h30',
    pax: '2-5',
    descriptionKey: 'tours.tuk_tuk_boat.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Passeio de barco na Ria Formosa (Fauna/Flora)'],
    image: TUKTUK_BOAT_GALLERY[11],
    gallery: TUKTUK_BOAT_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 695490,
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
    price: '85€',
    duration: '1h30',
    pax: '1-9',
    descriptionKey: 'tours.city_ice_cream.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Gelataria 100% Natural (1 bola por pessoa)'],
    image: CITY_ICE_CREAM_GALLERY[0],
    gallery: CITY_ICE_CREAM_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 602449,
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
    price: '55€',
    duration: '2h',
    pax: '1-9',
    descriptionKey: 'tours.city_olive_factory.desc',
    features: ['Centro Histórico', 'Jardim do Castelo', 'Ponte Antiga', 'Rio Sequa e Rio Gilão', 'Parque Natural Ria Formosa (Flora e Fauna)', 'Salinas (Flor de Sal)', 'Visita Igreja São Pedro ou São Sebastião', 'Visita à fábrica de azeitonas (Degustação)'],
    image: CITY_OLIVE_GALLERY[8],
    gallery: CITY_OLIVE_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 535407,
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
    image: SANTA_LUZIA_GALLERY[9],
    gallery: SANTA_LUZIA_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês', 'Francês'],
    fareHarborProductId: 480973,
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
    price: '50€',
    duration: '2h30',
    pax: '2-5',
    descriptionKey: 'tours.tavira_gold.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)'],
    image: TAVIRA_GOLD_GALLERY[0],
    imagePosition: 'object-[50%_28%]',
    gallery: TAVIRA_GOLD_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 657100,
    fareHarborFlowId: 1006571,
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
    price: '85€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.ria_formosa_jeep.desc',
    features: ['Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Cacela Velha', 'Cabanas Tavira', 'Restaurante Alfama (inclui menu refeicao)'],
    image: RIA_FORMOSA_GASTRONOMIA_GALLERY[0],
    gallery: RIA_FORMOSA_GASTRONOMIA_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 506791,
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
    price: '95€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.fuzeta_olhao_bath.desc',
    features: ['Santa Luzia (capital do polvo)', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Fuseta', 'Olhao', 'Salinas (inclui spa mar morto e argila para tratamento de pele)'],
    image: SANTA_LUZIA_FUSETA_OLHAO_GALLERY[0],
    gallery: SANTA_LUZIA_FUSETA_OLHAO_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 506786,
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
    price: '75€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.santa_luzia_clay.desc',
    features: ['Santa Luzia (capital do polvo)', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Fuseta', 'Olaria (visita e demonstração da olaria tradicional manual)'],
    image: SANTA_LUZIA_CLAY_GALLERY[0],
    gallery: SANTA_LUZIA_CLAY_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 506790,
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
    price: '80€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.liquid_gold_route.desc',
    features: ['Moncapacho', 'Monterosa', 'Olive Grove', 'Olive Oil Tasting', 'Oliveira 2000 anos', 'Ria Formosa', 'Salinas', 'Santa Luzia (capital do polvo)'],
    image: OLIVAL_AZEITE_GALLERY[0],
    gallery: OLIVAL_AZEITE_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 506789,
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
    price: '115€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.jeep_boat_anchors.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)', 'Passeio barco Ria Formosa', 'cemitério ancoras', 'Regresso Tavira'],
    image: JEEP_BOAT_ANCHOR_GALLERY[0],
    gallery: JEEP_BOAT_ANCHOR_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 695527,
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
    price: '69€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.tavira_roots_wine.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)', 'Al-Lagar (inclui 1 copo de vinho / tapas)'],
    image: TAVIRA_ROOTS_WINE_GALLERY[0],
    gallery: TAVIRA_ROOTS_WINE_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 611701,
    fareHarborFlowId: 1006571,
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
    price: '70€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.jeep_boat_history.desc',
    features: ['Centro Histórico', 'jardim castelo', 'Ponte Antiga', 'Ria Formosa', 'Salinas', 'Flora e Fauna', 'Aves', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Santa Luzia (capital do polvo)', 'Passeio barco Ria Formosa', 'Regresso Tavira'],
    image: JEEP_BOAT_HISTORY_GALLERY[0],
    gallery: JEEP_BOAT_HISTORY_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 695531,
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
    price: '75€',
    duration: '3h',
    pax: '2-5',
    descriptionKey: 'tours.ceramica.desc',
    features: ['Rio Sequa', 'Asseca', 'Barrocal', 'cascatas', 'Campo', 'Ceramica Tradicional', 'Terracota', 'fabrico manual'],
    image: CERAMICA_TRADICIONAL_GALLERY[0],
    gallery: CERAMICA_TRADICIONAL_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 509205,
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
    price: '180€',
    duration: '6h30',
    pax: '2-5',
    descriptionKey: 'tours.full_day_sotavento.desc',
    features: ['Rio Sequa', 'Asseca', 'Barrocal', 'cascatas', 'Campo', 'Ceramica Tradicional', 'Terracota', 'fabrico manual', 'Olhao', 'Ria Formosa', 'Fuseta', 'Salinas', 'Oliveira 2000 anos', 'Santa Luzia', 'Tavira', 'Almoco Ti Maria', 'Antiga Vila pescadores de atum (museu atum)', 'Olive tasting', 'Cacela Velha'],
    image: DIA_COMPLETO_SOTAVENTO_GALLERY[0],
    gallery: DIA_COMPLETO_SOTAVENTO_GALLERY,
    languages: ['Português', 'Espanhol', 'Inglês'],
    fareHarborProductId: 506785,
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
