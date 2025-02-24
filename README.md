# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Food Ordering App
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - Restaurant Card
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 # React hooks
 (Normal JS utility functions)
 - useState() 80% time - superpowerful state variables in react
 - useEffect() 20% time

 - whenever a state variable updates, react will rerender my component

 # Reconciliation algorithm (react fiber) - whenever something changes on the ui
 # Diff algorithm - finds out the difference between 2 doms
  - react does not touch the dom a lot

  // Hello world