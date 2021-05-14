# week15
To run all tests, commando should be "npm run test".
Repository has the next files:
  -wdio config js file
  -package.json with the wdio package
  -test folder:
    -pageobjects:
      -page.js (with the main page)
      -login.page.js (with login html selectors)
      -inventory.page.js (with inventory html selectors)
      -cart.page.js (with cart html selectors)
    -specs:
      -loginTests.js (automations with valid and invalid Username & Password, and login button)
      -inventoryTests.js (automations with burguer button and menú, select dropdown options, cart button, items add &
       remove button, item title link, social media links, cart values)
      -cartTests.js (automations)
