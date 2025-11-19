/**
 * Transform Fortnite API response to match application structure
 * @param {Object} apiResponse - The raw API response
 * @returns {Array} Transformed product array
 */
export const transformApiData = (apiResponse) => {
  if (!apiResponse || !apiResponse.shop || !Array.isArray(apiResponse.shop)) {
    return [];
  }

  return apiResponse.shop.map((item) => ({
    id: item.mainId,
    name: item.displayName,
    description: item.displayDescription || item.offerTag?.text || 'No description available',
    price: item.price?.finalPrice || 0,
    regularPrice: item.price?.regularPrice || item.price?.finalPrice || 0,
    full_background: item.displayAssets?.[0]?.full_background || '',
    rarity: item.rarity?.name || 'COMMON',
    type: item.displayType,
    series: item.series?.name || null,
    firstReleaseDate: item.firstReleaseDate,
    offerDates: item.offerDates,
    giftAllowed: item.giftAllowed,
    buyAllowed: item.buyAllowed,
  }));
};

/**
 * Calculate discount percentage
 * @param {number} regularPrice - Original price
 * @param {number} finalPrice - Discounted price
 * @returns {number} Discount percentage
 */
export const calculateDiscount = (regularPrice, finalPrice) => {
  if (!regularPrice || regularPrice <= finalPrice) return 0;
  return Math.round(((regularPrice - finalPrice) / regularPrice) * 100);
};

/**
 * Get rarity color
 * @param {string} rarity - Rarity level
 * @returns {string} Hex color code
 */
export const getRarityColor = (rarity) => {
  const rarityColors = {
    COMMON: '#9d9d9d',
    UNCOMMON: '#5fbd5f',
    RARE: '#4a9eff',
    EPIC: '#b965ff',
    LEGENDARY: '#ff8b2c',
    MYTHIC: '#ffeb3b',
    EXOTIC: '#ff00ff',
  };

  return rarityColors[rarity?.toUpperCase()] || rarityColors.COMMON;
};

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
