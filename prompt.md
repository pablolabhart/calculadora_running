# Prompt: "Llega el Ato?" App

## 1. App Concept

Create a web application called "Llega el Ato?".

In this application, the user will input data from their last training session, and the app will calculate the maximum distance they could run in a race.

## 2. Functional Requirements

### 2.1. User Inputs

The user must provide the following minimum data from their last training session:

*   **Distance:** The distance of the training session in kilometers.
*   **Time:** The duration of the aining session in minutes.
*   **Average Heart Rate:** The user's average heart rate during the training session (in beats per minute).
*   **Age:** The user's age in years.

Optionally, the user can provide the following:

*   **Max Heart Rate:** The user's maximum heart rate (e.g., from a Garmin device).
*   **Weekly Kilometers:** The total kilometers the user has run in the last 7 days.

### 2.2. Calculation Logic

1.  **Maximum Heart Rate (Max HR):**
    *   If the user provides their Max HR, use that value.
    *   If not, calculate it using the formula: `Max HR = 207 - (0.7 * age)`.

2.  **Intensity (I):**
    *   Calculate the training intensity using the formula: `I = (Average Heart Rate) / (Max HR)`.

3.  **Time Limit (Tlim):**
    *   Determine the time limit based on the intensity (I):
        *   If `I > 0.9`, `Tlim = 35` minutes.
        *   If `0.8 <= I <= 0.9`, `Tlim = 75` minutes.
        *   If `I < 0.8`, `Tlim = 150` minutes.

4.  **Coefficient:**
    *   First, calculate a base coefficient: `Tlim / Time`.
    *   Then, apply a mileage-based multiplier to get the final coefficient:
        *   **< 10km weekly (or not provided):** `Coefficient = (Tlim / Time) * 1.35`
        *   **10-15km weekly:** `Coefficient = (Tlim / Time) * 1.25`
        *   **15-22km weekly:** `Coefficient = (Tlim / Time) * 1.18`
        *   **> 22km weekly:** `Coefficient = (Tlim / Time) * 1.12`

5.  **Maximum Race Distance:**
    *   Calculate the final estimated race distance: `Max Race Distance = Distance * Coefficient`.

### 2.3. Debugging Feature

*   Include a subtle button on the page.
*   When this button is clicked, it should display all the intermediate calculated values for debugging purposes, such as:
    *   Calculated Max HR (if applicable)
    *   Intensity (I)
    *   Time Limit (Tlim)
    *   Weekly mileage coefficient
    *   Final calculated distance

## 3. Design and User Experience (UX)

*   **Aesthetics:** The design should be modern, minimalist, aesthetically pleasing, and professional.
*   **User Experience:** The UX must be clear and intuitive.
*   **Responsiveness:** The design must be **mobile-first**, ensuring it looks and works great on all devices, especially mobile phones.
*   **Layout:**
    *   The layout should be clean, with ample spacing to avoid a cluttered look.
    *   The interface should be well-organized and easy to navigate.
*   **Typography:** Use a modern, legible font.
*   **Color Palette:** Employ a professional and visually appealing color scheme.
*   **Form:** The input form should be user-friendly and easy to complete.
*   **Results:** The final calculated race distance should be displayed clearly and prominently to the user.
*   **Debugging Button:** The debug button should be subtle and not distract from the primary user interface.
