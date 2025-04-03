# Qubika-Ex1-Ugarte

Qubika QA Automation challenge Exercise 1

Excercise Guidelines and Steps:

Test Steps
1️⃣ Navigate to the Qubika Website → https://qubika.com

2️⃣ Validate the website is displayed correctly:

✅ Verify the URL is correct

✅ Ensure the Qubika logo is visible

3️⃣ Click the ‘Contact Us’ button

4️⃣ Validate that the contact form is displayed:

✅ The Name field is visible

✅ The Email field is visible

✅ The Submit button is visible

5️⃣ Click the ‘Submit’ button without filling any fields

6️⃣ Validate that all mandatory fields display an error message

7️⃣ Enter ‘Test name’ into the Name field

8️⃣ Verify that all mandatory fields still show an error message, except for the Name field

9️⃣ Close the ‘Contact Us’ form

🔟 Ensure that the form is no longer displayed

1️⃣1️⃣ Reopen the ‘Contact Us’ form

1️⃣2️⃣ Verify that the form retains the previous state:

✅ The Name field contains "Test name"

✅ Other fields still display error messages

💡 Notes
The test will be implemented using Cypress

Selectors will be based on classes, IDs, or attributes (since test-data-id is unavailable)

A Page Object Model (POM) structure will be used for maintainability
