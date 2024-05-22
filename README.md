# Product Listing and Sharing App(Furrl)

This is a React application that displays a grid of products and allows users to share product links. The app fetches product data from an external API and supports infinite scrolling to load more products as the user scrolls down.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API](#api)

## Features

- Fetch and display products from an API.
- Infinite scrolling to load more products.
- Share product links via a popup with a copy-to-clipboard feature.
- Responsive design for different screen sizes.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vundelavamsi/furrl-homehunts
   cd furrl-homehunts
   ```
2. **Install dependencies:**

    ```bash
        npm install
    ```
3. **Start the development server:**

    ```bash
        npm start
    ```
    The app will be available at `http://localhost:3000`

## Usage

1. **Viewing Products:**

    Open the application in your browser. Products will be displayed in a grid format. Scroll down to load more products.

2. **Sharing Products:**

    Click on the share button on any product to open the share popup. You can copy the product link to the clipboard.

## Components

1. **Grid Component:**

    The `Grid` component fetches and displays a list of products with infinite scrolling.

    File: `src/components/Grid.js`

2. **Card Component:**

    The `Card` component displays individual product details and a share button.

    File: `src/components/Card.js`

3. **SharePopup Component:**

    The `SharePopup` component shows a popup with the product link and a copy-to-clipboard button.

    File: `src/components/SharePopup.js`

    ### CSS Files

    Styles for the components are defined in external CSS files.

    **Grid CSS:** `src/styles/Grid.css`

    **Card CSS:** `src/styles/Card.css`

    **SharePopup CSS:** `src/styles/SharePopup.css`

## API

The app fetches product data from the following API endpoint:

 - Endpoint: https://api.furrl.in/api/v2/listing/getListingProducts

 - Method: POST

 - Request Body:
    ```json
        {
            "input": {
                "page": 1,
                "pageSize": 10,
                "filters": [],
                "id": "#HomeHunts",
                "entity": "vibe"
            }
        }

    ```