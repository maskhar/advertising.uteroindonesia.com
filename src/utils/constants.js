export const WHATSAPP_NUMBER = '6281999900900'
export const PHONE = '0341 408 408'
export const PHONE_MOBILE = '081 999 900 900'
export const EMAIL = 'marketingutero@gmail.com'
export const WEBSITE = 'advertising.uteroindonesia.com'
export const ADDRESS = 'Rumah Merah OXYZ, Jalan Bantaran 1 No. 25, Lowokwaru, Kota Malang'
export const COMPANY = 'PT Utero Kreatif Indonesia'

export const BRANCHES = [
  {
    name: 'Utero Malang',
    address: 'Jalan Bantaran 1 No. 25, Lowokwaru',
    phone: '0817 388 616',
  },  
  {
    name: 'Utero Mojokerto',
    address: 'Jalan Sawunggaling 25, Magersari',
    phone: '081 5522 1124',
  },
  {
    name: 'Utero Madiun',
    address: 'Jalan Sri Agung No.1, Kartoharjo',
    phone: '081 217 199 005',
  },
  {
    name: 'Utero Surabaya',
    address: 'Jalan Raya Banyu Urip 228',
    phone: '081 231 157 678',
  },
]

const defaultMessage =
  'Halo Utero Advertising, saya ingin konsultasi reklame'

export function getWhatsAppLink(message = '') {
  const text = encodeURIComponent(message || defaultMessage)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export const WHATSAPP_LINK = getWhatsAppLink()
export const WHATSAPP_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}`
