# DailyQuiz

[dailyquiz.vercel.app](https://dailyquiz.vercel.app/)

DailyQuiz is an interactive web application designed to provide users with daily quiz challenges.

- [DailyQuiz](#dailyquiz)
  - [Features](#features)
  - [Design System](#design-system)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Running the tests](#running-the-tests)
  - [Built With](#built-with)
    - [Frontend Development](#frontend-development)
    - [Build Tools](#build-tools)
    - [Testing](#testing)
    - [Documentation](#documentation)
    - [Package Management](#package-management)
    - [Deployment](#deployment)


## Features

- **Daily Quizzes:** New quiz challenges are available every day to test your knowledge.
- **Check Again:** User can check the correct answer after the Quiz is finished.

## Design System

<!-- figma embed -->
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjgDYGw9Ej04HrRVh0Zrcj1%2F%25EC%2598%25A4%25EB%258A%2598%25EC%259D%2598-%25ED%2580%25B4%25EC%25A6%2588-UI%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DmGEUJgdHPyNDJ1Vn-1" allowfullscreen></iframe>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)

### Installing

To get the development environment running:

```sh
git clone https://github.com/jiwonMe/dailyquiz.git
cd dailyquiz
pnpm install
pnpm dev
```

The application should now be running on [http://localhost:5173](http://localhost:5173).

## Running the tests

Explain how to run the automated tests for this system:

```sh
pnpm test
```

## Built With

### Frontend Development
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/) for styling
- [Zustand](https://github.com/pmndrs/zustand) for state management

### Build Tools
- [Vite](https://vitejs.dev/) - super fast frontend build tool
- [SWC](https://swc.rs/) - A super-fast TypeScript / JavaScript compiler
- [ESLint](https://eslint.org/) - JavaScript linter

### Testing
- [Vitest](https://vitest.dev/) - A Vite-native test framework
- [Testing Library/React](https://testing-library.com/react) - for testing React components

### Documentation
- [Storybook](https://storybook.js.org/) - for documenting React components

### Package Management
- [pnpm](https://pnpm.io/)

### Deployment
- [Vercel](https://vercel.com/)

