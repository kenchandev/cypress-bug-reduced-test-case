describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should find the jQuery text", () => {
    cy.findByText("jQuery").should("exist");
  });
});
