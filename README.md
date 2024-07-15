
# Airport-project

## Overview
This project is a web application built with React and TypeScript, leveraging modern development tools and libraries like Webpack, Babel, ESLint, Prettier, and SASS. The project is a partial copy of an existing airport with the implementation of the functions of a real site for demonstrating skills.

## Table of Contents
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DiLyHet/Kyiv-airport-project.git
   ```
2. Change branch:
   ```bash
   git checkout type-script
   ```
3. Navigate to the project directory:
   ```bash
   cd Kyiv-airport-project
   ```
4. Install the dependencies:
   ```bash
   npm install
   ```

## Scripts
The following scripts are available in the project. You can run them using:
```bash
npm run <script>
```

- `start`: Starts the development server with Webpack and source maps.
- `styles`: Watches and compiles SASS files to CSS.
- `build`: Builds the project for production using Webpack.
- `lint`: Runs ESLint to analyze the code for potential errors.
- `test`: Placeholder for running tests.
- `prettier`: Formats the code using Prettier.

Example:
```bash
npm run start
```

## Dependencies
### Development Dependencies
- **Babel**: `@babel/cli`, `@babel/core`, `@babel/eslint-parser`, `@babel/plugin-proposal-class-properties`, `@babel/preset-env`, `@babel/preset-react`, `@babel/preset-typescript`, `babel-loader`
- **Testing**: `jest`
- **Types**: `@types/react`, `@types/react-dom`
- **ESLint**: `eslint`, `eslint-plugin-react`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`
- **Webpack**: `webpack`, `webpack-cli`, `webpack-dev-server`, `clean-webpack-plugin`, `copy-webpack-plugin`, `css-loader`, `html-webpack-plugin`, `mini-css-extract-plugin`, `sass-loader`, `style-loader`
- **Other**: `sass`, `typescript`, `typescript-eslint`, `file-loader`, `globals`, `ts-loader`, `core-js`, `prettier`

### Dependencies
- **React**: `react`, `react-dom`, `prop-types`
- **Redux**: `redux`, `@reduxjs/toolkit`, `react-redux`
- **Routing**: `react-router-dom`
- **Utilities**: `axios`, `classnames`
- **Font Awesome**: `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/react-fontawesome`

## Development
To start the development server, run:
```bash
npm run start
```

To watch and compile SASS files, run:
```bash
npm run styles
```

To lint the code, run:
```bash
npm run lint
```

To format the code, run:
```bash
npm run prettier
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

```
