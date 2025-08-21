# 🎬 GIF Generator

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://your-app-name.vercel.app)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/gif-generator?style=for-the-badge)](https://github.com/yourusername/gif-generator)

A modern, beautiful React application that generates random GIFs and searches for specific GIFs using the GIPHY API.

![GIF Generator Demo](https://via.placeholder.com/800x400/6366f1/ffffff?text=GIF+Generator+Demo)

> 🎯 **Live Demo**: [gif-generator.vercel.app](https://your-app-name.vercel.app) *(Will be updated after deployment)*

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Axios** - HTTP client for API requests
- **GIPHY API** - GIF data source
- **Vercel** - Deployment platform

## 🏗️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gif-generator.git
   cd gif-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your GIPHY API key:
   ```
   REACT_APP_GIPHY_API_KEY=your_giphy_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔑 Getting GIPHY API Key

1. Visit [GIPHY Developers](https://developers.giphy.com)
2. Create an account or sign in
3. Create a new app
4. Copy your API key
5. Add it to your `.env` file

## 📁 Project Structure

```
gif-generator/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Random.js      # Random GIF component
│   │   ├── Tag.js         # Tagged GIF component
│   │   └── Spinner.js     # Loading spinner
│   ├── hooks/
│   │   └── useGif.js      # Custom hook for GIF API
│   ├── App.jsx            # Main app component
│   ├── index.js           # App entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 UI/UX Features

- **Glass Morphism Design**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful purple-to-pink-to-red gradients
- **Hover Effects**: Interactive scaling and shadow effects
- **Smooth Animations**: All interactions have smooth transitions
- **Loading States**: Visual feedback during API calls
- **Responsive Grid**: Adapts to different screen sizes

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## 🌐 Deployment

This app is deployed on [Vercel](https://vercel.com). To deploy your own version:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your GIPHY API key as an environment variable in Vercel
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👏 Acknowledgments

- [GIPHY](https://giphy.com) for providing the amazing GIF API
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [React](https://reactjs.org) team for the excellent framework

---

⭐ Star this repository if you found it helpful!

## Overview

The "Random Gif Generator" is a web application that allows users to generate random GIFs or GIFs based on a specific tag or keyword. It uses the Giphy API to fetch GIFs and display them in a visually appealing manner.

## Features

- **Random Gif Generation**:
  - Click the "Generate" button to fetch and display a random GIF.

- **Tag-Based Gif Generation**:
  - Enter a specific tag or keyword in the input field, and click "Generate" to fetch and display a GIF related to that tag.

## Preview

![image](https://github.com/yashsarode45/Gif-generator/assets/65209607/92e8a891-9a49-49e0-80f6-ae659664e94b)
[View Live Demo](https://gif-generator-nu.vercel.app/)

## Technologies

- React
- Axios
- Tailwind CSS


## Usage

1. **Random Gif Generation**:
   - Click the "Generate" button in the "A Random Gif" section to fetch and display a random GIF.

2. **Tag-Based Gif Generation**:
   - Enter a specific tag or keyword in the input field provided in the "A Random {tag} Gif" section.
   - Click the "Generate" button to fetch and display a GIF related to the entered tag.

## Generating a Random Gif

- In the "A Random Gif" section, click the "Generate" button to fetch and display a random GIF.

## Generating a Tag-Based Gif

- In the "A Random {tag} Gif" section:
  - Enter a specific tag or keyword in the input field.
  - Click the "Generate" button to fetch and display a GIF related to the entered tag.


