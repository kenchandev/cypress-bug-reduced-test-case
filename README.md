# Cypress Bug - Reduced Test Case

The following repository is a reduced test case for a bug in the [Cypress](https://github.com/cypress-io/cypress) testing tool. If a webpage with zero JavaScript present contains a DOM element with the `id` attribute set to `jquery` (for example, `<p id="jquery">jQuery</p>`), then the error `TypeError: item.first is not a function` is thrown. 

(`dist/index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Reduced Test Case</title>
</head>
<body>
  <h1>Homepage</h1>
  <p>jQuery</p>
</body>
</html>
```

(`cypress/e2e/homepage.js`)
```javascript
describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should find the jQuery text", () => {
    cy.findByText("jQuery").should("exist");
  });
});
```

To reproduce the bug:

1. Download this repository.
2. Run `npm install && npm run test:e2e`.
3. Execute the test file `homepage.js` in Cypress Test Runner.

![](https://www.dl.dropboxusercontent.com/s/8hvbcvkljnzctg0/Screenshot%202020-01-18%2002.46.54.png)

Close out the test runner via `ctrl` + `c`. Remove the `id` attribute from the element `<p id="jquery">jQuery</p>` from `dist/index.html`. Re-run `npm run test:e2e` and re-execute the same test file as before.

![](https://www.dl.dropboxusercontent.com/s/aqndudvfve9a51o/Screenshot%202020-01-18%2003.00.45.png)

