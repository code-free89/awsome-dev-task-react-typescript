# Rent form recruitment task

Thank you for joining our recruitment process. Please try to not spend more than 2h-3h solving it. We are respecting your time.

This repository contains [Create React App](https://create-react-app.dev/). Use it as boilerplate for your solution. We don't want to waste your time with too much setup. There is also [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) for tests.

## The problem

We'd like you to build a card rental form:

- Get the card data from our API. `GET /card/:cardId`
- Render a form where the user can provide a new price
- Send the new price back to the API and show a confirmation message (`POST /card/:cardId`, the API expects the `rentAmount` property)

The new price should be at least 10% higher then previous one.

### API endpoints

The API is located under [https://awesome-dev-task-api.fly.dev/](https://awesome-dev-task-api.fly.dev/) url. There are two endpoints:

- `GET /card/:cardId` returns card data (we will provide the cardId by email as we will use different cards for different candidates)

- `POST /card/:cardId` "rents" the card, setting a new card price. It's expecting a JSON object with the `rentAmount` property (number). If there were no errors it will return a JSON with the updated `card` property. If there was an error it will return a JSON with the `error` property.

## Expectations

We are not going to pay much attention to design.

Business logic, naming, separation of concerns, and tests are much more important for us. You have Cypress nad Jest in your toolbox - use them at your discretion.

Typescript please.

## Delivery

Please, clone this repository, create a new one, do your changes and send us the link to the repo.

If you don't have enough time to finish work don't worry, please try at least describe your next actions and solutions.

We hope to see your solution in a week. If this time frame doesn't work for you let us know - we will figure something out.

Thanks, and good luck!
