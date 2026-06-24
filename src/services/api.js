import { createPhone, createPhoneDetail } from '../models/phone'
import { uniqueBy } from '../utils/array'

const baseurl =
  'https://prueba-tecnica-api-tienda-moviles.onrender.com/products'
const apiKey = import.meta.env.VITE_PHONEAPI_KEY
const headers = { 'x-api-key': apiKey }
const limit = 20

async function apiFetch(endpoint = baseurl) {
  const response = await fetch(endpoint, { headers })
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${response.statusText}`)
  }
  return response.json()
}

async function fetchPhonesUntilFull(initialPhones) {
  const unique = uniqueBy(initialPhones, 'id')
  let offset = limit

  while (unique.length < limit) {
    const needed = limit - unique.length
    const params = new URLSearchParams({ limit: needed, offset })
    const batch = await apiFetch(`${baseurl}?${params}`)
    if (batch.length === 0) break
    const candidates = batch.map(createPhone)
    const merged = uniqueBy([...unique, ...candidates], 'id')
    unique.length = 0
    unique.push(...merged)
    offset += batch.length
    if (batch.length < needed) break
  }

  return unique
}

export async function getPhones(searchText = '') {
  const params = new URLSearchParams({ limit })
  if (searchText) {
    params.append('search', searchText)
  }
  const data = await apiFetch(`${baseurl}?${params}`)
  const phones = data.map(createPhone)

  if (searchText) return uniqueBy(phones, 'id')
  return fetchPhonesUntilFull(phones)
}

export async function getPhoneById(id) {
  const data = await apiFetch(`${baseurl}/${id}`)
  return createPhoneDetail(data)
}
