# GPA to CGPA Calculator

A professional web application for converting Grade Point Average (GPA) to Cumulative Grade Point Average (CGPA) built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Multiple Grading Scales**: Support for 4.0, 5.0, and 10.0 GPA scales
- **Dynamic Semester Management**: Add or remove semesters as needed (up to 12 semesters)
- **Real-time Validation**: Instant feedback on input errors with helpful messages
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Accessibility**: WCAG 2.1 Level AA compliant with keyboard navigation and screen reader support
- **Privacy-First**: All calculations performed locally in your browser - no data transmission

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks (useState, useCallback, useMemo)
- **Build Tool**: Turbopack (Next.js default)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
cal/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main calculator page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy page
│   ├── terms/
│   │   └── page.tsx        # Terms of service page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── calculator/
│   │   ├── GPACalculator.tsx      # Main calculator container
│   │   ├── ScaleSelector.tsx      # Dropdown for scale selection
│   │   ├── SemesterInput.tsx      # Individual semester input component
│   │   ├── SemesterList.tsx       # List container for semesters
│   │   ├── ActionButtons.tsx      # Add/Delete/Calculate buttons
│   │   └── ResultDisplay.tsx      # CGPA result display component
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Input.tsx              # Reusable input component
│   │   └── Select.tsx             # Reusable select component
│   └── Navigation.tsx             # Site navigation component
├── lib/
│   ├── calculations.ts            # CGPA calculation logic
│   ├── validation.ts              # Input validation functions
│   └── constants.ts               # Application constants
├── types/
│   └── calculator.ts              # TypeScript interfaces and types
├── hooks/
│   └── useGPACalculator.ts        # Custom hook for calculator logic
└── utils/
    └── formatters.ts              # Number formatting utilities
```

## How It Works

The calculator uses a simple formula to compute CGPA:

```
CGPA = Σ(GPA of each semester) / Number of semesters
```

### Calculation Process

1. Select your grading scale (4.0, 5.0, or 10.0)
2. Enter GPA values for each semester
3. Add or remove semesters as needed
4. Click "Calculate CGPA" to get your result
5. The result is displayed rounded to 2 decimal places

### Validation Rules

- GPA values must be numeric
- Values must be within the selected scale range (0 to scale maximum)
- Maximum 2 decimal places allowed
- At least one valid GPA value is required for calculation
- Empty fields are excluded from calculation

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Initial page load: < 2 seconds
- Calculation response time: < 100ms
- Optimized bundle size with code splitting
- Smooth 60fps animations

## Accessibility

- Semantic HTML structure
- Keyboard navigation support (Tab, Enter, Escape)
- Screen reader compatibility with ARIA labels
- Color contrast ratio ≥ 4.5:1
- Focus indicators on all interactive elements

## Privacy

All calculations are performed locally in your browser. No GPA data is collected, stored, or transmitted. Your privacy is protected.

## License

This project is private and proprietary.

## Support

For issues, questions, or contributions, please refer to the project repository or contact the development team.
