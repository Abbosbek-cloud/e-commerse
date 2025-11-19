import React, { useEffect, useContext } from 'react';

import Loader from './Loader';
import ProductList from './ProductList';
import axios from 'axios';
import Cart from './Cart';
import BasketList from './BasketList';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';
import { transformApiData } from '../utils/lib';

const Shop = () => {
  const { goods, setGoods, loading, order, isBasketShow } = useContext(ShopContext);

  useEffect(() => {
    async function fetchShopData() {
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: API_KEY,
          },
        });
        const data = res.data;
        console.log(data);

        // Transform the API data to match our app structure
        const transformedData = transformApiData(data);

        setGoods(transformedData);
      } catch (error) {
        console.error('Error fetching shop data:', error);

        // Fallback to mock data for demonstration
        const mockData = {
          shop: [
            {
              mainId: 'Wheel_Precision_Bundle',
              displayName: 'Jayvyn Wheels',
              displayDescription: 'Premium wheel collection with multiple color variants',
              displayType: 'Item Bundle',
              mainType: 'bundle',
              price: {
                regularPrice: 500,
                finalPrice: 400,
              },
              displayAssets: [
                {
                  full_background:
                    'https://media.fortniteapi.io/images/shop/d476e858b1f298296a859893187196ade64f80e1f70208ed5dc37b40f9b20a46/v2/MI_0/info.en.png',
                },
              ],
              rarity: {
                name: 'RARE',
              },
              offerTag: {
                text: 'Includes wheel and wheel variants!',
              },
            },
            {
              mainId: 'Epic_Bundle_001',
              displayName: 'Champion Pack',
              displayDescription: 'Exclusive champion themed bundle with legendary items',
              displayType: 'Bundle',
              mainType: 'bundle',
              price: {
                regularPrice: 2000,
                finalPrice: 1500,
              },
              displayAssets: [
                {
                  full_background: 'https://via.placeholder.com/400x400/b965ff/ffffff?text=Champion+Pack',
                },
              ],
              rarity: {
                name: 'EPIC',
              },
              offerTag: {
                text: 'Limited time offer!',
              },
            },
            {
              mainId: 'Legendary_Skin_002',
              displayName: 'Galaxy Warrior',
              displayDescription: 'Cosmic themed legendary outfit with animated effects',
              displayType: 'Outfit',
              mainType: 'outfit',
              price: {
                regularPrice: 2000,
                finalPrice: 2000,
              },
              displayAssets: [
                {
                  full_background: 'https://via.placeholder.com/400x400/ff8b2c/ffffff?text=Galaxy+Warrior',
                },
              ],
              rarity: {
                name: 'LEGENDARY',
              },
              offerTag: null,
            },
            {
              mainId: 'Uncommon_Emote_003',
              displayName: 'Victory Dance',
              displayDescription: 'Show off your skills with this celebratory emote',
              displayType: 'Emote',
              mainType: 'emote',
              price: {
                regularPrice: 200,
                finalPrice: 200,
              },
              displayAssets: [
                {
                  full_background: 'https://via.placeholder.com/400x400/5fbd5f/ffffff?text=Victory+Dance',
                },
              ],
              rarity: {
                name: 'UNCOMMON',
              },
              offerTag: null,
            },
            {
              mainId: 'Mythic_Pickaxe_004',
              displayName: 'Dragon Slayer',
              displayDescription: 'Legendary harvesting tool forged from dragon scales',
              displayType: 'Pickaxe',
              mainType: 'pickaxe',
              price: {
                regularPrice: 1500,
                finalPrice: 1200,
              },
              displayAssets: [
                {
                  full_background: 'https://via.placeholder.com/400x400/ffeb3b/ffffff?text=Dragon+Slayer',
                },
              ],
              rarity: {
                name: 'MYTHIC',
              },
              offerTag: {
                text: '20% OFF!',
              },
            },
          ],
        };

        const transformedMockData = transformApiData(mockData);
        setGoods(transformedMockData);
      }
    }
    fetchShopData();
  }, []);

  try {
    return (
      <div className="content container">
        <Cart quantity={order.length} />
        {loading ? <Loader /> : <ProductList />}
        {isBasketShow && <BasketList />}
      </div>
    );
  } catch (error) {
    window.open(`https://stackoverflow.com/search?q=${error.message}`);
  }
};

export default Shop;
