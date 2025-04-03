class HomePage {
  getQubikaLogo() {
    return cy.get(".logo");
  }

  getContactUsButton() {
    return cy.get(".link-label").contains("Contact Us");
  }

  getModal() {
    return cy.get(".modal.contact-us-modal");
  }
  getCloseModalButton() {
    return cy.get(".icon-x.close-modal");
  }

  getNameField() {
    return cy.get("input[name='firstname']").scrollIntoView();
  }

  enterName(name) {
    return cy.get('input[name="firstname"]').type(name);
  }

  getEmailField() {
    return cy.get("input[name='email']").scrollIntoView();
  }

  getLastNameField() {
    return cy.get("input[name='lastname']").scrollIntoView();
  }
  getCompanyNameField() {
    return cy.get("input[name='company']").scrollIntoView();
  }
  getContactTypeField() {
    return cy.get("select[name='contact_type']").scrollIntoView();
  }
  getMessageField() {
    return cy.get("textarea[name='message']").scrollIntoView();
  }

  getSubmitButton() {
    return cy.get('input[value="Submit"]').scrollIntoView();
  }

  getFirstNameError() {
    return cy
      .get('input[name="firstname"]')
      .parents(".hs-form-field")
      .find(".hs-error-msg");
  }

  getEmailError() {
    return cy
      .get('input[name="email"]')
      .parents(".hs-form-field")
      .find(".hs-error-msg");
  }
  getLastNameError() {
    return cy
      .get('input[name="lastname"]')
      .parents(".hs-form-field")
      .find(".hs-error-msg");
  }

  getCompanyNameError() {
    return cy
      .get("input[name='company']")
      .parents(".hs-form-field")
      .find(".hs-error-msg");
  }

  getContactTypeError() {
    return cy
      .get("select[name='contact_type']")
      .parents(".hs-form-field")
      .find(".hs-error-msg");
  }

  getMessageError() {
    return cy
      .get("textarea[name='message']")
      .parents(".hs-form-field")
      .find(".hs-error-msg");
  }

  getAllReqFieldsError() {
    return cy
      .get(".hs_error_rollup")
      .find(".hs-main-font-element")
      .scrollIntoView();
  }

  getCloseButton() {
    return cy.get(".icon-x.close-modal").eq(1);
  }
}

export default new HomePage();
