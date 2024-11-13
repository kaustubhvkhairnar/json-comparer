# JSON Comparer Tool

A web-based JSON comparer tool that allows users to compare two JSON files or inputs. The tool highlights the differences between the two JSON objects and provides features like dark mode, syntax highlighting, wave animation background, and more.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Compare JSON Files or Inputs**: Upload JSON files or paste JSON data directly into the code editors.
- **Clear Inputs**: Clear buttons to quickly erase the content of the JSON inputs.
- **Syntax Highlighting**: Code editors with syntax highlighting for better readability.
- **Automatic Formatting**: JSON data is automatically beautified when pasted.
- **Line Numbers for Differences**: Displays the line numbers where differences are found.
- **Dark Mode**: Dark mode enabled by default with the option to toggle light/dark mode.
- **Responsive Design**: The application is responsive and works well on various screen sizes.
- **Wave Animation Background**: An animated wave background for visual appeal.
- **Centered Elements**: The title and compare button are centered for a balanced layout.

## Demo

You can access the live version of the application [here](https://kaustubhvkhairnar.github.io/json-comparer).

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Git** installed for version control.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kaustubhvkhairnar/json-comparer.git
   cd json-comparer
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Usage

1. **Start the Development Server**

   ```bash
   npm start
   ```

2. **Open the Application**

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

3. **Compare JSON Data**

   - **Input JSON Data**: Paste JSON data into the code editors or upload JSON files using the "Upload JSON File" buttons.
   - **Clear Inputs**: Use the clear icon (🗑️) to clear the content of the code editors.
   - **Compare**: Click the "Compare" button to compare the two JSON inputs.
   - **View Differences**: The differences will be displayed with line numbers and highlights.

4. **Toggle Dark Mode**

   - Use the switch at the top-right corner to toggle between dark and light modes.

## Deployment

To deploy the application to GitHub Pages:

1. **Build the Application**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

3. **Access the Deployed App**

   The application will be accessible at:

   ```
   https://kaustubhvkhairnar.github.io/json-comparer
   ```

## Built With

- **React** - JavaScript library for building user interfaces.
- **Material-UI (MUI)** - React components for faster and easier web development.
- **CodeMirror** - Versatile text editor implemented in JavaScript for the browser.
- **Diff Package** - Library to calculate the differences between two texts.
- **SVG and CSS Animations** - For creating the wave animation background.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React** community for the robust framework.
- **Material-UI** for the beautiful UI components.
- **CodeMirror** for the excellent code editor.
- **Diff** library contributors for the text difference calculation.
- **SVG Backgrounds** for inspiration on wave animations.

---
