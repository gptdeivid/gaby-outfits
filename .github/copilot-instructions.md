# Copilot Instructions for Armario de Outfits

This project is a single-page web application for selecting and previewing clothing outfits. It is implemented in a single HTML file (`david.html`) with embedded CSS and JavaScript. The UI features carousels for shirts, pants, and shoes, allowing users to browse and combine items visually.

## Project Structure
- `david.html`: Main application file. Contains all HTML, CSS, and JavaScript logic.
- Images are loaded from the `imagenes/` directory (not present in this workspace, but referenced in code).
- Background image is `fondo.png` (referenced in CSS).
- Final look is saved to `localStorage` and redirects to `lookfinal.html` (not present in this workspace).

## Key Patterns & Conventions
- **Carousels**: Each clothing category (shirts, pants, shoes) uses a carousel implemented with a flex container and JS for navigation.
- **Image Loading**: Images are dynamically generated via the `generarImagenes` function, which expects files named as `Playera1.png`, `Pantalon1.png`, `Zapatos1.png`, etc. in the `imagenes/` folder.
- **State Management**: Selected items are tracked in the `indices` array. The final selection is stored in `localStorage` as `lookFinal`.
- **Navigation**: The "Ver Look Final" button saves the current selection and navigates to `lookfinal.html`.
- **Responsiveness**: Uses CSS media queries to scale the UI for smaller screens.
- **Styling**: Uses the Inter font from Google Fonts and a custom background image.

## Developer Workflows
- No build tools, frameworks, or package managers are used. All logic is in `david.html`.
- To add new clothing items, place appropriately named images in the `imagenes/` directory and update the quantity in the `generarImagenes` calls.
- To change the background, update the `background` property in the CSS.
- Debugging is done via browser dev tools; no test framework is present.

## Integration Points
- Relies on local image assets (`imagenes/`, `fondo.png`).
- Uses browser `localStorage` for state persistence.
- Expects a secondary page `lookfinal.html` for displaying the final look (not included).

## Example: Adding a New Shirt
1. Add `Playera30.png` to `imagenes/`.
2. Change `generarImagenes('imagenesPlayeras', 'Playera', 29);` to `generarImagenes('imagenesPlayeras', 'Playera', 30);`

## Summary
This project is a static HTML/CSS/JS app with no external build or test dependencies. All logic is contained in `david.html`. Follow the naming conventions for images and update JS quantities to add new items. Use browser dev tools for debugging and testing.
