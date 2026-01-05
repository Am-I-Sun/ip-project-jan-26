# ip-project-jan-26
[Made by 3 Members]

  - Roll_23 =
  https://github.com/harshvardhansontakke341-hub        ---------    (HTML/ Frontend Development)

  - Roll_24 =
  https://github.com/salonisuthar08                     ---------    (CSS Styling/ UI Styling)

  - Roll_22 =
  https://github.com/Am-I-Sun                           ---------    (JS Logic/ Documentation)
___________________________________________________________________

Currency Converter (USD ⇄ INR)

A simple Currency Converter web app built using HTML, CSS, and JavaScript.
It converts amounts between USD and INR using a live exchange-rate API, with a static fallback rate in case the API fails.

_____________________________________________________________________
📂 Project Structure

├── index.html      # Structure of the web app

├── style.css       # Styling and layout

└── script.js       # Conversion logic and API handling


______________________________________________________________________
  **Features**

  - Convert currency between USD and INR
  - Fetches live exchange rates using an API
  - Uses a static fallback rate when offline or if the API fails
  - Input validation to prevent invalid values
  - Clean, modern UI with responsive layout

______________________________________________________________________
  **Technologies Used**

  - HTML5 – Page structure
  - CSS3 – Styling, layout, and effects
  - JavaScript (ES6) – Logic, async API calls, DOM manipulation

_______________________________________________________________________
  **How It Works**

User enters an amount.
Selects From and To currencies.

On clicking Convert:
-  JavaScript fetches the current USD → INR rate from an API.
-  If the API fails, a predefined static rate is used.
-  The converted amount is calculated and displayed instantly.

________________________________________________________________________
  **Exchange Rate Source**

- API used: https://api.exchangerate-api.com/v4/latest/USD
- Fallback static rate:
    const STATIC_RATE = 90;

___________________________________________________________________________
  **How to Run**

- Download or clone the repository.
- Open index.html in any modern web browser.
- Enter an amount and convert.
- No build steps. No dependencies. Just open it and it works.

___________________________________________________________________________
  **Notes**

- The converter currently supports USD ⇄ INR only.
- Input is restricted to numeric values using type="number".
- Designed for learning purposes and beginner-friendly understanding of:
    DOM manipulation
    Async JavaScript
    API handling with fallback logic
