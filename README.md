# Vite React TypeScript SCSS Boilerplate

A modern, production-ready React boilerplate built with Vite, TypeScript, and SCSS. This project demonstrates enterprise-level development practices with comprehensive tooling, testing infrastructure, and internationalization support.

## 🚀 Features

### Core Technologies

- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Full type safety with strict configuration
- **Vite 6.3** - Lightning-fast build tool and dev server
- **SCSS Modules** - Scoped styling with CSS modules
- **Redux Toolkit** - State management with RTK
- **React Router 7** - Client-side routing

### Development Experience

- **ESLint 9** - Advanced linting with TypeScript, React, and Unicorn rules
- **Prettier** - Code formatting with consistent style
- **TypeScript Path Mapping** - Clean imports with absolute paths
- **Hot Module Replacement** - Instant development feedback
- **SSL Development Server** - Secure local development

### Testing Infrastructure

- **Vitest** - Fast unit testing with coverage
- **React Testing Library** - Component testing best practices
- **MSW (Mock Service Worker)** - API mocking for tests
- **JSDOM** - Browser environment simulation
- **Comprehensive Test Setup** - Mocks for localStorage, console, location, and API

### Internationalization

- **Multi-language Support** - English and Spanish locales
- **Context-based i18n** - React context for translations
- **Type-safe Translations** - TypeScript integration for translation keys
- **Dynamic Language Switching** - Runtime language selection

### Build & Deployment

- **Production Optimization** - Tree shaking and code splitting
- **Environment Configuration** - Type-safe environment variables
- **Build Validation** - Tests run before production builds
- **Coverage Reports** - Code coverage with multiple formats

### Code Quality

- **Strict TypeScript** - Comprehensive type checking
- **Import Sorting** - Organized imports with ESLint rules
- **Naming Conventions** - Consistent code style enforcement
- **Error Boundaries** - Graceful error handling

## 📋 Prerequisites

- **Node.js** >= 22.0.0
- **Yarn** >= 4.9.2 (recommended package manager)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd vite-react-ts-scss-boilerplate
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables in your `.env.local`:

   ```env
   VITE_BOILERPLATE_STACK=Vite,React,TypeScript,SCSS
   ```

## 🚀 Development

### Start Development Server

```bash
yarn dev
```

The application will be available at `https://localhost:5173`

### Start with Auto-open

```bash
yarn start
```

### Available Scripts

| Command            | Description                           |
| ------------------ | ------------------------------------- |
| `yarn dev`         | Start development server              |
| `yarn start`       | Start dev server and open browser     |
| `yarn build`       | Build for production (includes tests) |
| `yarn preview`     | Preview production build              |
| `yarn test`        | Run tests with coverage               |
| `yarn test:ui`     | Run tests with UI interface           |
| `yarn test:dev`    | Run tests in watch mode               |
| `yarn eslint`      | Run ESLint                            |
| `yarn eslint:fix`  | Fix ESLint issues automatically       |
| `yarn format`      | Format code with Prettier             |
| `yarn formatcheck` | Check code formatting                 |

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
├── contexts/           # React context providers
├── localization/       # Internationalization files
│   ├── en-us/         # English translations
│   └── es-es/         # Spanish translations
├── shared/            # Shared utilities and types
│   ├── utils/         # Utility functions
│   └── type-utilities.ts
├── styles/            # Global SCSS styles
└── assets/            # Static assets

test/
├── __mocks__/         # Test mocks and fixtures
│   ├── api/          # API mocking with MSW
│   ├── console/      # Console mocking
│   ├── storage/      # localStorage mocking
│   └── location/     # Window location mocking
├── shared/           # Shared test utilities
└── setup.ts          # Test configuration
```

## 🌍 Internationalization

The boilerplate includes a robust i18n system with type-safe translations.

```typescript
import { useLocalization } from 'contexts';

const MyComponent = () => {
  const translation = useLocalization<HomeTranslation>('homePage');
  return <h1>{translation.helloWorld}</h1>;
};
```

### Adding New Languages

1. Create a new locale folder in `src/localization/`
2. Add translation files following the existing structure
3. Register the locale in `src/localization/index.ts`

## 🧪 Testing

### Running Tests

```bash
# Run all tests with coverage
yarn test

# Run tests in watch mode
yarn test:dev

# Run tests with UI
yarn test:ui
```

### Test Structure

- **Unit Tests**: Test individual functions and utilities
- **Component Tests**: Test React components with React Testing Library
- **Integration Tests**: Test component interactions
- **Mock Services**: API mocking with MSW for isolated testing

### Writing Tests

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

## 🔧 Configuration

### TypeScript

- Strict mode enabled
- Path mapping for clean imports
- Comprehensive type checking

### ESLint

- TypeScript integration
- React best practices
- Import sorting
- Code style enforcement

### Vite

- Fast HMR
- CSS modules support
- TypeScript compilation
- Build optimization

## 🚀 Deployment

### Production Build

```bash
yarn build
```

The build process:

1. Runs TypeScript compilation
2. Executes all tests
3. Builds optimized production bundle
4. Generates coverage reports

### Build Output

- **Location**: `build/dist/`
- **Assets**: `build/dist/static/`
- **Coverage**: `build/coverage/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ using modern web technologies**
