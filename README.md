# 🛒 Modern Shop Application

A modern, responsive e-commerce shop application built with React, featuring a beautiful UI, shopping cart functionality, and Fortnite API integration compatibility.

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-2.9.0-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

### 🎨 Design

- **Modern UI/UX** - Beautiful gradient backgrounds and smooth animations
- **Rarity-Based Colors** - Dynamic color coding based on item rarity (Common, Uncommon, Rare, Epic, Legendary, Mythic)
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Card Hover Effects** - Smooth transitions and zoom effects
- **Discount Badges** - Visual indicators for items on sale
- **Broken Image Handling** - Graceful fallback for failed image loads

### 🛍️ Shopping Features

- **Product Grid Display** - Clean, organized product listing
- **Add to Cart** - One-click add functionality with animations
- **Cart Management** - View, update quantities, and remove items
- **Price Calculations** - Automatic subtotal and tax calculations
- **Toast Notifications** - User feedback for all actions
- **Empty Cart State** - User-friendly empty cart message

### 🔧 Technical Features

- **Context API** - Efficient state management
- **Reducer Pattern** - Predictable state updates
- **API Integration** - Ready for Fortnite API or any REST API
- **Data Transformation** - Utility functions for API response mapping
- **Lazy Loading** - Optimized image loading
- **Error Handling** - Robust error management throughout

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abbosbek-cloud/e-commerse

# Navigate to project directory
cd shop-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
shop-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Shop.jsx            # Main shop container
│   │   ├── ProductList.jsx     # Product grid wrapper
│   │   ├── ProductItem.jsx     # Individual product card
│   │   ├── Cart.jsx            # Floating cart icon
│   │   ├── BasketList.jsx      # Shopping cart modal
│   │   ├── BasketItem.jsx      # Cart item component
│   │   └── Loader.jsx          # Loading spinner
│   ├── context/
│   │   ├── index.jsx           # Context provider
│   │   └── reducer.js          # State reducer
│   ├── utils.js                # Helper functions
│   ├── config.js               # API configuration
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Global styles
│   └── main.jsx                # Entry point
├── package.json
├── .prettierrc
├── .gitignore
├── package.json
├── index.html
└── vite.config.js
```

---

## 🔌 API Integration

### Fortnite API Structure

The app is designed to work with the Fortnite API structure. Here's the expected response format:

```javascript
{
  shop: [
    {
      mainId: 'unique_id',
      displayName: 'Product Name',
      displayDescription: 'Product description',
      displayType: 'Item Bundle',
      price: {
        regularPrice: 500,
        finalPrice: 400,
      },
      displayAssets: [
        {
          full_background: 'https://image-url.com/image.png',
        },
      ],
      rarity: {
        name: 'RARE',
      },
      offerTag: {
        text: 'Limited time offer!',
      },
    },
  ];
}
```

### Using Your Own API

1. **Update API Configuration** (`config.js`):

```javascript
export const API_URL = 'https://fortniteapi.io/v2/shop';
export const API_KEY = 'your-api-key';
```

2. **Modify Shop Component** (`Shop.jsx`):

```javascript
useEffect(() => {
  const fetchShopData = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const transformedData = transformApiData(data);
      setGoods(transformedData);
    } catch (error) {
      console.error('Error fetching shop data:', error);
    }
  };

  fetchShopData();
}, [setGoods]);
```

3. **Data Transformation**:

The `transformApiData()` utility function in `utils.js` converts the API response to match the app structure:

```javascript
import { transformApiData } from './utils';

const transformedData = transformApiData(apiResponse);
setGoods(transformedData);
```

---

## 🎨 Customization

### Color Scheme

The app uses a purple gradient theme. To customize colors, edit `App.css`:

```css
/* Main gradient background */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Button gradient */
.buy-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Rarity Colors

Edit the rarity colors in `ProductItem.jsx`:

```javascript
const rarityColors = {
  COMMON: '#9d9d9d',
  UNCOMMON: '#5fbd5f',
  RARE: '#4a9eff',
  EPIC: '#b965ff',
  LEGENDARY: '#ff8b2c',
  MYTHIC: '#ffeb3b',
};
```

### Toast Notifications

Customize toast messages in `reducer.js`:

```javascript
toast.success('Product added to basket successfully!');
toast.error('1 product added!');
```

---

## 🧩 Component Details

### ProductItem Component

Displays individual product with:

- Dynamic rarity badge
- Discount indicator
- Price display (regular & discounted)
- Broken image handling
- Add to cart button

**Props:**

```javascript
{
  id: string,
  name: string,
  description: string,
  price: number,
  regularPrice: number,
  full_background: string,
  rarity: string,
  type: string
}
```

### BasketList Component

Shopping cart modal featuring:

- Item list with quantity controls
- Subtotal calculation
- Tax calculation (10%)
- Total price
- Checkout button
- Empty state message

### Context Provider

Manages global state with actions:

- `ADD-ITEM` - Add product to cart
- `INCREMENT` - Increase quantity
- `DECREMENT` - Decrease quantity
- `REMOVE_ORDER` - Remove item from cart
- `TOGGLE_BASKET` - Show/hide cart
- `SET_GOODS` - Load products

---

## 🛠️ Utility Functions

### `transformApiData(apiResponse)`

Transforms API response to app structure.

```javascript
const products = transformApiData(apiResponse);
```

### `calculateDiscount(regularPrice, finalPrice)`

Calculates discount percentage.

```javascript
const discount = calculateDiscount(500, 400); // Returns 20
```

### `getRarityColor(rarity)`

Returns color code for rarity level.

```javascript
const color = getRarityColor('EPIC'); // Returns '#b965ff'
```

### `formatDate(dateString)`

Formats ISO date strings to readable format.

```javascript
const date = formatDate('2025-11-20T00:00:00.000Z'); // Returns 'Nov 20, 2025'
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile devices */
@media (max-width: 480px) {
  .goods {
    grid-template-columns: 1fr;
  }
}

/* Tablets */
@media (max-width: 768px) {
  .goods {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

/* Desktop */
@media (min-width: 769px) {
  .goods {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
```

---

## 🎯 State Management

### Initial State

```javascript
const initialState = {
  goods: [], // Product list
  loading: true, // Loading state
  order: [], // Shopping cart items
  isBasketShow: false, // Cart visibility
};
```

### Actions

```javascript
// Add item to cart
dispatch({ type: 'ADD-ITEM', payload: item });

// Increment quantity
dispatch({ type: 'INCREMENT', payload: { id: itemId } });

// Decrement quantity
dispatch({ type: 'DECREMENT', payload: { id: itemId } });

// Remove item
dispatch({ type: 'REMOVE_ORDER', payload: { id: itemId } });

// Toggle cart
dispatch({ type: 'TOGGLE_BASKET' });

// Set products
dispatch({ type: 'SET_GOODS', payload: products });
```

---

## 🔍 Features Deep Dive

### 1. Broken Image Handling

The app gracefully handles broken images:

```javascript
const [imageError, setImageError] = useState(false);

const handleImageError = () => {
  setImageError(true);
};

{
  imageError ? (
    <div className="image-broken">
      <i className="material-icons">broken_image</i>
      <p>Image is broken</p>
    </div>
  ) : (
    <img src={imageUrl} onError={handleImageError} />
  );
}
```

### 2. Toast Notifications

User feedback for all actions:

```javascript
import { toast } from 'react-toastify';

toast.success('Product added successfully!');
toast.error('Product removed!');
```

### 3. Lazy Loading

Optimized image loading:

```javascript
<img src={imageUrl} loading="lazy" alt={productName} />
```

### 4. Discount Detection

Automatic discount badge display:

```javascript
const isDiscounted = regularPrice > price;

{
  isDiscounted && <div className="discount-badge">SALE!</div>;
}
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Products load correctly
- [ ] Add to cart functionality works
- [ ] Cart displays correct items
- [ ] Quantity increment/decrement works
- [ ] Remove item from cart works
- [ ] Price calculations are accurate
- [ ] Toast notifications appear
- [ ] Broken images show fallback
- [ ] Responsive design works on mobile
- [ ] Responsive design works on tablet
- [ ] Cart modal opens/closes correctly

---

## 🚧 Common Issues & Solutions

### Issue: Images not loading

**Solution:** Check CORS policy and image URLs. Ensure images are publicly accessible.

```javascript
// Add error handling in fetch
.catch(error => {
  console.error('Image load failed:', error);
});
```

### Issue: Cart items duplicating

**Solution:** Ensure unique IDs for each product.

```javascript
const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);
```

### Issue: State not updating

**Solution:** Check reducer action types match dispatch calls.

```javascript
// Dispatch
dispatch({ type: 'ADD-ITEM', payload: item });

// Reducer
case 'ADD-ITEM': {
  // Handle action
}
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-toastify": "^8.2.0",
    "axios": "^0.26.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^1.0.7",
    "vite": "^2.9.0",
    "eslint": "^8.12.0"
  }
}
```

---

## 🎓 Learning Resources

- [React Documentation](https://reactjs.org/)
- [Context API Guide](https://reactjs.org/docs/context.html)
- [Vite Documentation](https://vitejs.dev/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Materialize CSS](https://materializecss.com/)

---

## 🔮 Future Enhancements

### Planned Features

- [ ] Search functionality
- [ ] Filter by rarity/type/price
- [ ] Sort options (price, name, date)
- [ ] Pagination or infinite scroll
- [ ] Wishlist feature
- [ ] Product detail modal
- [ ] User authentication
- [ ] Payment integration
- [ ] Order history
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Local storage persistence
- [ ] Product reviews and ratings
- [ ] Related products section
- [ ] Recently viewed items

### Performance Optimizations

- [ ] React.memo for components
- [ ] useMemo for expensive calculations
- [ ] Virtual scrolling for large lists
- [ ] Image optimization (WebP format)
- [ ] Code splitting
- [ ] Service worker for offline support

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines

- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic
- Keep components small and focused
- Write reusable utility functions

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abbosbek**

- GitHub: [@Abbosbek-cloud](https://github.com/Abbosbek-cloud)
- LinkedIn: [Abbosbek Sulaymonov](https://www.linkedin.com/in/abek01sulaymonov/)
- Website: [abbosbek.uz](https://abbosbek.uz)

---

## 🙏 Acknowledgments

- [Materialize CSS](https://materializecss.com/) for UI components
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
- [Fortnite API](https://fortniteapi.io/) for API structure inspiration
- [Vite](https://vitejs.dev/) for blazing fast development experience

---

## 📞 Support

If you have any questions or need help:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed description
3. Contact via email: [abek01sulaymonov@gmail.com](mailto:abek01sulaymonov@gmail.com)

---

## 🌟 Star the Project

If you found this project helpful, please consider giving it a ⭐️!

---

**Built with ❤️ using React and Vite**
