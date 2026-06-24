/**
 * @typedef {Object} Phone
 * @property {string} id
 * @property {string} brand
 * @property {string} name
 * @property {number} basePrice
 * @property {string} imageUrl
 */

/** @param {Object} apiData @returns {Phone} */
export function createPhone(apiData) {
  return {
    id: apiData.id,
    brand: apiData.brand,
    name: apiData.name,
    basePrice: apiData.basePrice,
    imageUrl: apiData.imageUrl,
  }
}

/**
 * @typedef {Object} ColorOption
 * @property {string} name
 * @property {string} hexCode
 * @property {string} imageUrl
 */

/**
 * @typedef {Object} StorageOption
 * @property {string} capacity
 * @property {number} price
 */

/**
 * @typedef {Object} PhoneDetail
 * @property {string} id
 * @property {string} brand
 * @property {string} name
 * @property {string} description
 * @property {number} basePrice
 * @property {number} rating
 * @property {Object} specs
 * @property {ColorOption[]} colorOptions
 * @property {StorageOption[]} storageOptions
 * @property {Phone[]} similarProducts
 */

/** @param {Object} apiData @returns {PhoneDetail} */
export function createPhoneDetail(apiData) {
  return {
    id: apiData.id,
    brand: apiData.brand,
    name: apiData.name,
    description: apiData.description,
    basePrice: apiData.basePrice,
    rating: apiData.rating,
    specs: apiData.specs,
    colorOptions: apiData.colorOptions,
    storageOptions: apiData.storageOptions,
    similarProducts: (apiData.similarProducts ?? []).map(createPhone),
  }
}
