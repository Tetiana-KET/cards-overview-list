# Admin board for cards overview

## [Deploy](https://admin-cards-overview.netlify.app)

## [Figma Design](https://www.figma.com/design/678kpzMEcvNvU7ixP2awCy/Admin?node-id=0-2960&t=XaJUMuRqGLkQyQv7-0)

## Description

This project is an admin panel designed for managing and viewing various bank cards. The app allows users to view and filter a list of cards with different owners and banks. The functionality includes search, filters, and various display options.

## Key features:

- Fully responsive application, optimized down to 320px width.
- Sidebar collapses on the breakpoint ≥ 576px, with a small portion of the icons visible.
- Breadcrumb navigation works for easy page navigation.
- Currently, there is only one functional page (the card/overview page), with a placeholder for other potential pages.
- Search functionality with debounce implementation (using lodash).
- The search feature finds matches based on the card owner's name, phone number, or card number.
- Toggle between grid and list display modes via a select menu.
- Filters available for daily and monthly limits (both ascending and descending).
- Filters are also available for bank, strategy, and card status.
- Filters can be reset using the "Reset All" button.

## TODO

- _Filtering by tags and card type still requires further development_.
- _Pagination_

## Technology stack

- Language: [**TypeScript**](https://www.typescriptlang.org/)
- Main library: [**React**](https://react.dev/)
- Linters: [**ESLint**](https://eslint.org/), [**Prettier**](https://prettier.io/)
- Styling: [**SCSS**](https://sass-lang.com/)
- UI library: [**Ant Design**](https://ant.design/)
- Builder: [**Vite**](https://vitejs.dev/)
- Routing: [**React Router**](https://reactrouter.com/en/main)
- Hosting: [**Netlify**](https://www.netlify.com/)

## Visuals

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-3.png)
![alt text](image-2.png)

### Prerequisites

Make sure you have node.js installed on your machine before proceeding with the setup or installation process.
To check if Node.js is installed, you can use the following command:

```
node -v
```

Make sure nmp is installed by running

```
npm -v
```

## To get started with this project, follow the steps below:

1. Clone the repository:

```
git clone `url`
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

This will start the application at http://localhost:5173 (or another available port).

## Usage

### Tags Configuration

The available tags for cards are defined in the `TAGS` constant. `src/consts/TAGS`. If you need to add or remove tags in the future, simply modify the `TAGS` object, and the types will automatically reflect those changes.

## Support

For any issues or questions, feel free to open an issue or reach out in any way that is comfortable for you.

<div id="badges">
 <a href="https://t.me/Tatiana_1000_Dribnyz" target="_blank">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="telegram"/>
 </a>
 <a href="mailto:belangelphone@gmail.com" target="_blank">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="mail"/>
 </a>
 <a href="https://discordapp.com/users/674720964143218723" target="_blank">
  <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="discord"/>
 </a>
 <a href="https://www.linkedin.com/in/tatiana-ket/" target="_blank">
  <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"/>
 </a>
 <a href="tel:+380507368706" target="_blank">
    <img src="https://img.shields.io/badge/Phone-%2300B0D8.svg?style=for-the-badge&logo=phone&logoColor=white" alt="phone"/>
  </a>
</div>

## Scripts available

### Build

To build the project run

```
npm run build
```

This will transpile the TypeScript files with tsc and then build the project using vite. The build will be stored in the dist/ directory.

### To check for code style and potential errors in the `src/` directory run Linting Commands:

_For JavaScript linting:_

```
npm run lint
```

_For CSS linting:_

```
npm run lint:css
```

_To run both linters at once:_

```
npm run lint:all
```

### ESLint fix issues

To automatically fixe ESLint errors and code style issues in the `src/` directory run:

```
npm run lint:fix
```

This will fix all fixable issues in your code (like formatting or minor rule violations) in the src/ directory.

### Check the production build

To check if the production build looks OK in your local environment use:

```
npm run build
npm run preview
```

This command uses vite preview to serve the production build locally. _Note: vite preview is intended for previewing the build locally, not as a production server._

**Or use a one-liner:**

```
npm run preview:build
```

### Prettier check

To check if your files in the `src/` directory are formatted run

```
npm run prettier
```

This will output a human-friendly message and a list of unformatted files, if any.
It will run `prettier --check --ignore-unknown src/`, that is set to ignore unknown file types. Prettier will not attempt to check files with extensions that it does not recognize.

### Prettier fix issues

To fix code formatting issues in the `src/` directory using Prettier run:

```
npm run prettier:fix
```

This will run Prettier and format all unformatted files in the src/ directory. It also uses the `--ignore-unknown` flag to avoid formatting files with extensions Prettier doesn't recognize.

## Technical Requirements

## Roadmap

## TODO:
