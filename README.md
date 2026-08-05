# Health Analysis Census 🩺

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A modern, responsive front-end web application built to simulate a healthcare data census and analysis tool. This project demonstrates clean UI/UX design principles, DOM manipulation, and fundamental data structures using Vanilla JavaScript.

## ✨ Features

*   **Patient Data Entry:** A validated form allowing users to input patient details (Name, Gender, Age, and specific health conditions).
*   **Dynamic Data Analysis:** Instantly generates an aggregated report breaking down the patient census by specific condition and gender.
*   **Health Condition Dictionary:** A search feature that allows users to look up conditions (e.g., Thyroid, Diabetes) to view symptoms, prevention methods, and treatments dynamically fetched from a JSON data source.
*   **Modern UI/UX:** Features a clean, health-focused light theme leveraging **Glassmorphism** effects, CSS Grid/Flexbox layouts, and subtle micro-animations for a premium feel.

## 🛠️ Technologies Used

*   **HTML5:** Semantic structure and native form validation.
*   **CSS3:** Custom properties (variables), Flexbox, CSS Grid, Glassmorphism (backdrop-filter), and responsive media queries.
*   **Vanilla JavaScript (ES6+):** Event delegation, DOM manipulation, array filtering/aggregation, and asynchronous data fetching (`fetch` API).

## 💡 Architecture & Best Practices

This project was built with a focus on writing clean, maintainable code:
*   **Performance:** JavaScript strings are built in memory before a single DOM update (`innerHTML`) is executed, preventing expensive DOM thrashing.
*   **Encapsulation:** Global namespace pollution is avoided by wrapping logic in `DOMContentLoaded` event listeners.
*   **Resilience:** The application gracefully handles `file://` protocol CORS restrictions by falling back to embedded JSON data if the network fetch fails.
*   **Separation of Concerns:** Semantic HTML forms leverage native browser validation, completely separating the styling (CSS utility classes) from the structure.

## 🚀 Getting Started

Because this is a pure front-end application without build tools, running it is incredibly simple:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/health-census.git
   ```
2. Navigate to the project directory:
   ```bash
   cd health-census
   ```
3. Open `index.html` in your favorite web browser.

*(Note: To experience the dynamic `fetch` API functionality without triggering local file CORS policies, it is recommended to run the project using a local development server like Live Server for VS Code or `npx serve`.)*

## 📱 Screenshots
<img width="1910" height="899" alt="image" src="https://github.com/user-attachments/assets/3121674e-9fa2-4b71-b1f5-7146cecc4199" />
<img width="1912" height="900" alt="image" src="https://github.com/user-attachments/assets/4a9cb136-9071-4332-b79b-8107f72a72e4" />



---
*This project was developed as a portfolio piece to demonstrate proficiency in front-end fundamentals and modern UI design.*
