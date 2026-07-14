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

const TAVIRA_TOTAL_GALLERY = [
  'https://lh3.googleusercontent.com/d/1mZrBebXfXQAa6ICtxcT_dwy3TqO43N41',
  'https://lh3.googleusercontent.com/d/1hJSBWD93EuGudO_Pf2HCneutv_UI0u3Q',
  'https://lh3.googleusercontent.com/d/1dgt4p9qHIv2knEwBHD7KAL689YTlubjj',
  'https://lh3.googleusercontent.com/d/1J_m0ImwYarXJcnvClJyZmE18i5rsyGzO',
  'https://lh3.googleusercontent.com/d/1m0DB50LfAK6exHNSpadWkhWUGExcUTWs',
  'https://lh3.googleusercontent.com/d/1csqAYTM0ZLPKm3y3LLYaYymaqdM58wQU',
  'https://lh3.googleusercontent.com/d/1pTnGO2VtgLh02TooP4K9_l9OYECgUoqy',
  'https://lh3.googleusercontent.com/d/1veTl9s2_65gXMOkCVbiQ1utjOaXCpFLW',
  'https://lh3.googleusercontent.com/d/1404UusxfnE-GOWCqnunEnOaOF25pyWJJ',
  'https://lh3.googleusercontent.com/d/1TRIfE3Jld8uhb-FoPAfjDMuC1Hu-LLPN',
  'https://lh3.googleusercontent.com/d/1avOtooqer00vTPXi2lirsHDrhEz3lwRA',
  'https://lh3.googleusercontent.com/d/1EbYqymcBIe8RJQRKorOdpuiwoAW1XN8R'
];

const TAVIRA_CITY_GALLERY = [
  'https://lh3.googleusercontent.com/d/1E9_VO3VMcyrbAUgMT7v75x6mODcCJNCD',
  'https://lh3.googleusercontent.com/d/13WLvxkYiZEGS5wg44UYSWkfDGgyD3TnJ',
  'https://lh3.googleusercontent.com/d/1o1dkFnkv8j64FYAAq3D6E6U5YEEqf1xa',
  'https://lh3.googleusercontent.com/d/1nPuswq-p4iCWzrepio6VpP88_H0ScviH',
  'https://lh3.googleusercontent.com/d/1ZLweGoUsK8FPXu3JC4IMvhwdYODtafMG',
  'https://lh3.googleusercontent.com/d/1TrqrDKMOgKJOm_a4nXRZAuhtCB7TTHNS',
  'https://lh3.googleusercontent.com/d/1zo7jvVmcqyLN6ovrmZf25frTWJFIcSsh',
  'https://lh3.googleusercontent.com/d/1BUP3_XN1OSCyMYaU_dauVleCSAExN58e',
  'https://lh3.googleusercontent.com/d/1KQrCXa_PqiWor6UnFIkjdBUTpdf4pUC7',
  'https://lh3.googleusercontent.com/d/1CUisceuu3U90fwTcC3FmIYBL3R2ZMF4e',
  'https://lh3.googleusercontent.com/d/1hCY0StEOpATm17uSnrT8b2XCWfQ-Ia41',
  'https://lh3.googleusercontent.com/d/1P5_JiQ00JxRWl-PbubKxhBOLnj1NkMf0',
  'https://lh3.googleusercontent.com/d/1TxZb1OX48FKwbybieuaKA4bi940Czpuv',
  'https://lh3.googleusercontent.com/d/11OJ4gBB5Q87QlD54zq0A5Kqog7nN0xAW'
];

const HISTORICAL_WINE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1LBRIwcWjm7c8b6idBz7E3ybjD55g0x67',
  'https://lh3.googleusercontent.com/d/12-VPRQJofE1teTPqkoZwuTqwd8LOvzup',
  'https://lh3.googleusercontent.com/d/12buEFCnM4dCp6Z0vf5zWQ_96r7ZeDGy9',
  'https://lh3.googleusercontent.com/d/1sD3-b8aziHFZXxMa7-itYUhYmRfSnOgS',
  'https://lh3.googleusercontent.com/d/1AF2-uywfFQ_MV_uq7nOHiKXOtiacrgC2',
  'https://lh3.googleusercontent.com/d/16KwVi4dCq3g2xP89-Iq4vfK98kaCMxkB',
  'https://lh3.googleusercontent.com/d/1EgxFMd4AEPROfygavk8ayZuCxd1T898z',
  'https://lh3.googleusercontent.com/d/18xEo-VMQOkm1EaFBTtA2zaKJ1FP71G_Y',
  'https://lh3.googleusercontent.com/d/1SsvxYfxQ0xHSTu31x2X7iZFbhEZ4vR4R',
  'https://lh3.googleusercontent.com/d/1BhVnvss2yP1ml0ttibJKMRcVVVbxbML1',
  'https://lh3.googleusercontent.com/d/1ivUSF8DqgA8QVpIBYrX-rkbgBz1J21Ux',
  'https://lh3.googleusercontent.com/d/1p1_ySEDyjtV-WKKSjnFtc0vjgSrIko2T'
];

const CITY_CHOCOLATE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1sGsO3Iq0Z6QCg666qpWF5bTTRoAWzI_a',
  'https://lh3.googleusercontent.com/d/1ePPKZ0_tGOHgAb1VEmDvVHMMHYWLDFme',
  'https://lh3.googleusercontent.com/d/1Ve5Sv_Zgm1feidL6w_qmx_r69NrsB_Nf',
  'https://lh3.googleusercontent.com/d/1P6hrjq7K-kkou_AJZEX0s5cfZCgRrQAz',
  'https://lh3.googleusercontent.com/d/1uujxhkhDwfCxvhYOqGQNDLAkDqDZdepO',
  'https://lh3.googleusercontent.com/d/1YSPwl9S1rOMDQcCXIpus1K2NHjjUnUyb',
  'https://lh3.googleusercontent.com/d/1q9_FOeeplCaRhPdRpuoXUsrVonxPiaYU',
  'https://lh3.googleusercontent.com/d/1m1iiwGj773h_zJvEd4Yi4QInwNe65E4E'
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
  'https://lh3.googleusercontent.com/d/1zq5W7mx_iID-hmId0gqItHLvOmxNXaTE'
];

const CITY_ICE_CREAM_GALLERY = [
  'https://lh3.googleusercontent.com/d/1EcGUhK3AKH7wMV8G5VcPGwPJBQVb5dX2',
  'https://lh3.googleusercontent.com/d/14hvoqtZVKWNWiizcOSe96im0gdnvTzVo',
  'https://lh3.googleusercontent.com/d/1VpuRgwZtMN4A_8Cf6uP-Pthm0ypZ7CZM',
  'https://lh3.googleusercontent.com/d/1UKwdkHQmmO66478diVaMAB5SVuP3HlpF',
  'https://lh3.googleusercontent.com/d/1rtQoUaoP3ZCoWx1jDi2Qpkq1CHccyqgH'
];

const CITY_OLIVE_GALLERY = [
  'https://lh3.googleusercontent.com/d/1uHshrZlTsv3Yt2xSHRgUlPeKTxnAEFxz',
  'https://lh3.googleusercontent.com/d/1aSuMV5nv7Kc_uTzfJ49YtCxvEYzbzDM1',
  'https://lh3.googleusercontent.com/d/1fRdPAM9ShM1h8_4_MtmTeuNin2Ze3mjF',
  'https://lh3.googleusercontent.com/d/1cQjYnbvA5xXwl74wZmxlzCrUPzBl8mW7',
  'https://lh3.googleusercontent.com/d/1pvY9j6MZNmiuDmp8X2BGzbho2kn2CC9g',
  'https://lh3.googleusercontent.com/d/1VDnK21RWs96fWdT6ovfVnrV9MqhsDqFi',
  'https://lh3.googleusercontent.com/d/1eEUvcfV1TbCrpqa1Pq7nuaa7SrYGRE4X',
  'https://lh3.googleusercontent.com/d/1KUCOGLOLYnPawGVF-3aIn28xjKCfWEZx'
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
  'https://lh3.googleusercontent.com/d/11WV3kVY0cXC8M7tBU-ceWsdylBSD22Lp',
  'https://lh3.googleusercontent.com/d/1gigQP9s97h9ufhHnTnDej-QZOo8af006'
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
    image: TAVIRA_CITY_GALLERY[3],
    gallery: TAVIRA_CITY_GALLERY,
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
    image: TAVIRA_TOTAL_GALLERY[0],
    gallery: TAVIRA_TOTAL_GALLERY,
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
    image: HISTORICAL_WINE_GALLERY[0],
    gallery: HISTORICAL_WINE_GALLERY,
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
    image: CITY_CHOCOLATE_GALLERY[0],
    gallery: CITY_CHOCOLATE_GALLERY,
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
    image: TUKTUK_BOAT_GALLERY[0],
    gallery: TUKTUK_BOAT_GALLERY,
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
    image: CITY_ICE_CREAM_GALLERY[0],
    gallery: CITY_ICE_CREAM_GALLERY,
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
    image: CITY_OLIVE_GALLERY[0],
    gallery: CITY_OLIVE_GALLERY,
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
    image: SANTA_LUZIA_GALLERY[0],
    gallery: SANTA_LUZIA_GALLERY,
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
    image: TAVIRA_GOLD_GALLERY[0],
    gallery: TAVIRA_GOLD_GALLERY,
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
    image: JEEP_BOAT_ANCHOR_GALLERY[0],
    gallery: JEEP_BOAT_ANCHOR_GALLERY,
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
    image: TAVIRA_ROOTS_WINE_GALLERY[0],
    gallery: TAVIRA_ROOTS_WINE_GALLERY,
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
    image: JEEP_BOAT_HISTORY_GALLERY[0],
    gallery: JEEP_BOAT_HISTORY_GALLERY,
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
