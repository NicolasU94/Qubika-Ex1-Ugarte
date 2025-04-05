import LandingPage from "../support/HomePage.js";

describe("Landing Page Tests", () => {
  const ERROR_MESSAGE = "Please complete this required field.";

  beforeEach(() => {
    cy.visit("/", { timeout: 30000 });
  });

  it("should display the Qubika logo and Contact Us button", () => {
    cy.url().should("eq", "https://qubika.com/");
    LandingPage.getQubikaLogo().should("be.visible");
    LandingPage.getContactUsButton().should("be.visible");
  });

  it("should display the contact form when clicking 'Contact Us'", () => {
    LandingPage.getContactUsButton().click();
    cy.url().should("eq", "https://qubika.com/");
    LandingPage.getModal().should("have.class", "show").and("be.visible");
    LandingPage.getNameField().should("be.visible");
    LandingPage.getEmailField().should("be.visible");
    LandingPage.getSubmitButton().should("be.visible");
  });

  it("should show error messages for all required fields when submitting an empty form", () => {
    LandingPage.getContactUsButton().click();
    LandingPage.getSubmitButton().click();
    LandingPage.getFirstNameError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getEmailError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getLastNameError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getCompanyNameError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getContactTypeError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getMessageError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getAllReqFieldsError()
      .should("be.visible")
      .and("contain", "Please complete all required fields.");
  });

  it("should input a firstName and validate error messages before and after closing and re-opening the form", () => {
    LandingPage.getContactUsButton().click();
    LandingPage.enterName("Test Name");
    LandingPage.getSubmitButton().click();
    LandingPage.getFirstNameError().should("not.exist");
    LandingPage.getEmailError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getLastNameError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getCompanyNameError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getContactTypeError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getMessageError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getAllReqFieldsError()
      .should("be.visible")
      .and("contain", "Please complete all required fields.");
    LandingPage.getCloseButton().click();
    LandingPage.getModal()
      .should("not.have.class", "show")
      .and("not.be.visible");
    LandingPage.getContactUsButton().click();
    LandingPage.getModal().should("have.class", "show").and("be.visible");

    //Making assertions for all error messages again to validate the form state is the same once re-opened
    LandingPage.getNameField().should("have.value", "Test Name");
    LandingPage.getFirstNameError().should("not.exist");
    LandingPage.getEmailError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getLastNameError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getCompanyNameError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getContactTypeError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getMessageError()
      .should("be.visible")
      .and("contain", ERROR_MESSAGE);
    LandingPage.getAllReqFieldsError()
      .should("be.visible")
      .and("contain", "Please complete all required fields.");
  });
});
