# Caring Path Home Health Services

Caring Path is a React-based Single Page Application (SPA) designed to serve as the landing page and informational hub for Caring Path Home Health Services in Rhode Island.

The project is built with a modern frontend stack emphasizing rapid development, accessible design, and performant user experiences.

## Technology Stack

* **Framework:** React 18, utilizing TypeScript for type safety.
* **Build Tool:** Vite for lightning-fast module replacement and optimized production builds.
* **Routing:** React Router DOM for client-side navigation.
* **Styling:** Vanilla CSS with custom responsive breakpoints focusing on mobile-first accessibility.
* **Internationalization:** `react-i18next` providing full bilingual support (English and Spanish).
* **Icons:** `react-icons` for scalable, lightweight SVG iconography.

## Local Development

To run this project locally on your machine, follow these steps:

### Prerequisites
* Node.js (v18 or higher recommended)
* npm (comes with Node.js)

### Installation
1. Clone the repository and navigate into the project directory:
   ```bash
   git clone https://github.com/Aloecheverria7/caring-react.git
   cd caring-react
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the local Vite development server:
```bash
npm run dev
```
By default, the application will be available at `http://localhost:5173`. Open this URL in your browser to view the app. The server supports Hot Module Replacement (HMR), so changes to your source code will instantly update in the browser.

## Production Deployment (Hostinger / Apache)

When you are ready to deploy the site to a live server like Hostinger, you must build the project to generate static, optimized assets.

### 1. Build the Application
Run the build command from the root of the project:
```bash
npm run build
```
This command bundles all components, minifies the CSS/JS, and outputs the final production-ready code into the `dist/` directory. 

### 2. The `.htaccess` File
Because this app relies on React Router for client-side navigation, deep links (like `midominio.com/contacto`) and manual page refreshes will natively return a `404 Not Found` error on Apache servers.

To prevent this, the project automatically generates an `.htaccess` file inside the build output. This file instructs the Apache server to redirect all unhandled route requests back to `index.html`.

### 3. Deploying to the Server
1. Ensure the build has completed successfully.
2. Open your hosting provider's File Manager (e.g., Hostinger File Manager) or use an FTP client.
3. Copy **only the contents** of the `dist/` folder (including the `.htaccess` file and the `assets/` folder).
4. Paste these files into the `public_html` directory of your server.

Your site should now be live and properly handling all React routes without 404 errors!
