# Gaby Outfits 👗

A modern fashion outfit selection web application that allows users to browse and create clothing combinations.

## Features

### 🎨 Interactive Virtual Wardrobe
- **Clothing Carousel**: Browse through different options:
  - **Tops**: Various t-shirts, blouses, and tops
  - **Pants**: Jeans, trousers, skirts, and bottoms
  - **Shoes**: Sneakers, boots, loafers, and sandals

### 🔄 Intuitive Navigation
- Left/right navigation buttons for each category
- Real-time visualization of outfit combinations
- Responsive interface that adapts to different screen sizes

### 💾 Save Functionality
- **View Final Look**: Save your favorite combination
- Local storage of your selections
- Easy access to your saved outfits

## Technologies Used

- **HTML5**: Semantic application structure
- **CSS3**: Modern design with gradients, smooth animations, responsive design
- **JavaScript ES6**: Modular architecture with imports/exports
- **Local Storage API**: Outfit persistence

## Project Structure

```
gaby-outfits/
├── public/              # HTML files
│   ├── david.html       # Main outfit selector page
│   └── lookfinal.html   # Final look display page
├── src/
│   ├── css/            # Stylesheets
│   │   ├── main.css    # Main page styles
│   │   └── lookfinal.css # Final look page styles
│   ├── js/             # JavaScript modules
│   │   ├── data.js     # Clothing catalog data
│   │   ├── carousel.js # Carousel functionality
│   │   ├── lookfinal.js # Final look page logic
│   │   └── main.js     # Main application entry point
│   └── components/     # Reusable components (future)
├── assets/
│   └── images/         # Clothing images
│       ├── tops-*.png  # Top clothing items
│       ├── pants-*.png # Pants and bottoms
│       └── shoes-*.png # Footwear
├── dist/               # Built files (generated)
├── docs/               # Documentation
├── package.json        # Project configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Usage

1. Open the application at `http://localhost:3000`
2. Use the carousel arrows to browse different clothing items
3. Select your desired combination of top, pants, and shoes
4. Click "Ver Look Final" to view your complete outfit
5. Clear selections or go back to try new combinations

## Future Features

- [ ] Advanced tagging and categorization system
- [ ] Weather-based recommendations
- [ ] Social media sharing
- [ ] Outfit history tracking
- [ ] Dark/light mode toggle
- [ ] Calendar integration for outfit planning
- [ ] User accounts and cloud sync

## License

MIT License

---

*Built with ❤️ to make choosing your daily outfit easier and more fun.*