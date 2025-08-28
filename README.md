# PromoAI Demo Site

This project showcases a responsive landing page for **PromoAI**, an AI-powered branding platform. The page includes an interactive logo selector, an AI sample generator interface, and marketing sections built with Tailwind CSS and Font Awesome.

## Features

- Real-time AI branding preview UI
- Interactive logo concepts with color customization
- Product highlights, testimonials and call-to-action

## Running the demo

The site now includes a small Node.js server that proxies requests to OpenAI's image API. The API key is loaded from an environment variable so it is never exposed in the frontend code.

1. Install dependencies: `npm install`
2. Set your OpenAI key: `export OPENAI_API_KEY=your_key` (or create a `.env` file).
3. Start the server: `npm start`
4. Open `index.html` in a browser and generate apparel samples with your logo.
