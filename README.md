# Function Chain Calculator

![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-092749?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&labelColor=000000)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🌐 Live Demo

[View Demo](https://atlys-frontend-task.vercel.app/)

## Overview

A dynamic function chain calculator that allows users to visualize and execute a sequence of mathematical functions. The application features a unique layout with interconnected function cards that process data in a specific order (1 → 2 → 4 → 5 → 3).

## ⭐ Features

### 💡 Key Features

- Interactive function cards with real-time equation editing
- Visual representation of function chain flow
- Input validation for mathematical expressions
- Live calculation updates
- Responsive design with precise positioning

### 🧮 Mathematical Operations

- Basic arithmetic operations (+, -, \*, /)
- Exponent calculations (^)
- Real-time validation of mathematical expressions
- Chain execution with intermediate value tracking

### 🎯 Example Calculation

For input value 2:

1. Function 1: x^2 = 4
2. Function 2: 2x+4 = 12
3. Function 4: x-2 = 10
4. Function 5: x/2 = 5
5. Function 3: x^2+20 = 45

## 🏗️ Project Structure

```text
src/
├── components/
|   ├── ConnectionLines/
│   ├── DraggableDots/
│   ├── FunctionCard/
│   ├── InputBox/
│   └── OutputBox/
├── hooks/
│   └── useFunctionChain.ts
├── constants/
│   ├── layout.ts
│   └── positions.ts
├── types/
│   └── index.ts
└── utils/
    └── index.ts
```

## 🔧 Technical Details

### Input Validation

- Validates mathematical expressions
- Ensures proper operator usage
- Real-time error feedback

### Layout System

- Fixed function chain order (1 → 2 → 4 → 5 → 3)
- Precise card positioning with responsive design
- Input/Output point alignment for visual flow

### Styling

- Modern UI with Tailwind CSS
- Consistent spacing and alignment
- Clean, intuitive interface

## 🚀 Setup and Installation

1. Clone the repository

```bash
git clone git@github.com:mustajab-ikram/atlys-frontend-task.git
```

Note: It is recommended to use noed version >= 22.\*

2. Install dependencies

```bash
yarn
```

3. Run the development server

```bash
yarn run dev
```

## 🛠️ Technologies Used

- React 18 with TypeScript for robust type-checking
- Tailwind CSS for modern, utility-first styling
- Custom React hooks for state management
- Mathematical expression parsing and validation logic

## Features in Detail

### Function Cards

- Real-time equation editing
- Automatic validation of mathematical expressions
- Visual input/output connections
- Chain sequence visualization

### Mathematical Processing

- Support for basic arithmetic: +, -, \*, /
- Power operations using ^ symbol
- Real-time calculation updates
- Error handling for invalid expressions

### User Interface

- Clean, minimal design
- Intuitive function chain visualization
- Clear input/output flow
- Responsive layout adapting to different screen sizes

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests for any improvements.

## 📝 License

This project is licensed under the MIT License
