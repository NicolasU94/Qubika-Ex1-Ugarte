# 📘 Qubika-Ex1-Ugarte

## Qubika QA Automation Challenge – Exercise 1

**Framework:** Cypress.js  
**Author:** Nicolas Ugarte

---

## 📝 Challenge Requirements

> **Automate the following UI-only flow on the Qubika website (https://www.qubika.com).**

1. ✅ Navigate to Qubika Website.
2. ✅ Validate that the website is displayed correctly by checking:
   - The URL
   - The Qubika logo
3. ✅ Click the **Contact Us** button.
4. ✅ Validate the contact form is displayed, including:
   - Name field is displayed
   - Email field is displayed
   - Submit button is displayed
5. ✅ Click **Submit** without filling any fields.
6. ✅ Validate that all mandatory fields show an error message.
7. ✅ Enter `"Test name"` in the **Name** field.
8. ✅ Validate all fields show errors **except** the Name field.
9. ✅ Close the **Contact Us** form.
10. ✅ Validate that the form is no longer visible.
11. ✅ Reopen the **Contact Us** form.
12. ✅ Validate the form is displayed with previous state: Name field filled, others show error.

> ⚠️ **Note:** Do not actually submit any information through the form. This is a UI-only test.

---

## 🧪 Qubika Website Cypress Test Suite

This project contains Cypress E2E automation for the Website.

It uses **Cypress.js** because it provides modern, developer-friendly tooling with strong support for **both UI and API automation** in the same test flow. This made it ideal for the hybrid requirements of Exercise 1.

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/NicolasU94/Qubika-Ex1-Ugarte.git
cd Qubika-Ex1-Ugarte
```

### 2. Install Dependencies

```bash
npm install
```

## 🧪 3. Running Tests

### Run Cypress in interactive mode:

```bash
npx cypress open
```

### Run Cypress in headless mode (CI-friendly):

```bash
npx cypress run
```

## 📊 Test Execution Report

```bash
Running:  HomePageTest.cy.js                                                              (1 of 1)

  Landing Page Tests

    ✓ should display the Qubika logo and Contact Us button (7066ms)
    ✓ should display the contact form when clicking 'Contact Us' (1463ms)
    ✓ should show error messages for all required fields when submitting an empty form (2359ms)
    ✓ should input a firstName and validate error messages before and after closing and re-opening the form (2380ms)

  4 passing (14s)

  (Results)
  ┌──────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                              │
  │ Passing:      4                                                              │
  │ Failing:      0                                                              │
  │ Pending:      0                                                              │
  │ Skipped:      0                                                              │
  │ Screenshots:  0                                                              │
  │ Video:        true                                                           │
  │ Duration:     13 seconds                                                     │
  │ Spec Ran:     HomePageTest.cy.js                                             │
  └──────────────────────────────────────────────────────────────────────────────┘

====================================================================================================

  (Run Finished)

       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  HomePageTest.cy.js                       00:13        4        4        -        -        - │
  └──────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:13        4        4        -        -        -
```

Additionally Cypress automatically captures screenshots and videos when tests fail or when running in headless mode.

These can be found in the following folders after running tests:

📸 cypress/screenshots/

🎥 cypress/videos/

## 📁 Project Structure

```bash
Qubika-Ex1-Ugarte/
├── cypress/
│   ├── e2e/                       # Test spec files
│   │   └── HomePageTest.cy.js     # E2E test for Qubika.com homepage and form
│   ├── support/
│   │   └── HomePage.js            # Page Object Model for Qubika.com website
│   └── commands.js                # (Optional) Custom Cypress commands
├── cypress.config.js              # Cypress configuration file
├── package.json                   # Project metadata and test scripts
└── README.md                      # Documentation and setup instructions
```

📄 Notes
This suite focuses solely on UI validation, as required by Exercise 1.
Ensure the Qubika website (https://www.qubika.com) is accessible before running tests.
