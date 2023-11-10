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

We used [figma](https://www.figma.com/file/jgDYGw9Ej04HrRVh0Zrcj1/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%80%B4%EC%A6%88-UI?type=design&node-id=0%3A1&mode=design&t=mGEUJgdHPyNDJ1Vn-1) to design the UI of the application.

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

