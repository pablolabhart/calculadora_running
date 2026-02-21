# blueprint.md

## 1. Overview

"Llega el Ato?" is a web application that calculates the maximum distance a user could run in a race based on their recent training data.

## 2. Project Outline

### Styles & Designs

*   **Aesthetics:** Modern, minimalist, and professional with a clean layout, refined typography, and a cohesive color palette.
*   **Responsiveness:** Mobile-first and responsive, ensuring it works perfectly on all screen sizes.
*   **Layout:** A main content card with rounded corners and a subtle shadow, centered on a lightly textured background.
*   **Typography:** "Inter" from Google Fonts for a modern, legible look.
*   **Color Palette:** A professional palette with shades of gray, a primary blue for interactive elements, and a clean white for the main content card.

### Features

*   **User Input Form:**
    *   Distance (km)
    *   Time (minutes)
    *   Average Heart Rate (bpm)
    *   Age
    *   (Optional) Max Heart Rate (bpm)
    *   (Optional) Kilometers ran in the last 7 days
*   **Race Distance Calculation:**
    *   Calculates the user's Maximum Heart Rate if not provided (207 - 0.7 * age).
    *   Determines the training intensity (Average HR / Max HR).
    *   Calculates the time limit (`Tlim`) based on intensity and weekly kilometers:
        *   **Weekly KM <= 15:** Tlim is 25, 50, or 100 minutes for high, medium, or low intensity.
        *   **15 < Weekly KM <= 22:** Tlim is 35, 75, or 150 minutes.
        *   **Weekly KM > 22:** Tlim is 45, 100, or 200 minutes.
    *   Calculates the maximum possible race distance (`Tlim` / Training Time * Training Distance).
*   **Results Display:**
    *   Displays the calculated maximum race distance to the user.
*   **Debugging Feature:** A subtle button to show intermediate calculation values.

## 3. Current Plan

### Enhance Visual Design & User Experience

*   **Objective:** Refine the application's visual style to be more modern, professional, and aesthetically pleasing.
*   **Steps:**
    1.  **Apply Global Styles:** Import the "Inter" font, set a global background color, and define base text styles in `src/layouts/Layout.astro`.
    2.  **Style Main Container:** Create a "card" look for the main content area in `src/pages/index.astro` with a background, shadow, and rounded corners.
    3.  **Refine Form Styles:** Update `src/styles/Calculator.css` to improve the visual appearance of form inputs, labels, and buttons, ensuring they align with the new design.
