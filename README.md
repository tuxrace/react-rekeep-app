# SparesCNX Frontend Test Assignment

For this test assignment, you will have to create your own simple state management library like Redux or MobX to handle events and store data across the application.

The starter code for this app includes two pages - a home page with a list of parts with a name, id and status, and a page that is supposed to hold a form for creating new parts.

```ts
type Part = {
  name: string;
  id: number;
  status: "Checked In" | "Checked Out";
};
```

1. You should store your library code in the `/lib` folder of this repository.
2. You are free to use any architecture pattern for designing your library. It can be **Flux**, **Redux**, **BloC**, etc.
3. Your library should be integrated with a simple example app in `src` folder.
   1. You should create a form component for creating a new part, with the relevant fields.
   2. When a part is created, an action must be dispatched notifying the rest of the app that a new part has been created.
   3. Home page should get a list of parts from your library's store instead of hardcoded values.
4. You should bring some essential styling to the app (currently it has no styling at all).
   1. You can use any styling framework or methodology you want.
   2. The information should be displayed appropriately on devices of all sizes.
5. You should write tests for your library and/or the app.
   1. Structure your tests to match your source, and write tests that fit the modularity of your library/app.
   2. There should be basic test coverage for critical methods and flows.
   3. E2E tests are optional.
   4. Well-written unit test coverage is vital for _Senior_ and _Lead_ positions.
6. You should use Typescript for all parts of the codebase, creating the appropriate types as required.
   1. The use of `any` for typing is discouraged unless justified.

## Evaluation

You will be judged by following criteria:

- Fulfillment of requirements
- Quality of code (readability, consistency, structure etc.). Use of a linter or prettier is highly recommended.
- Re-usability and extensibility of your state management library
- Component styling and structure
- Usage of typescript features
- Quality of tests for providing good coverage, code stability, self-documentation etc.
- Presence of documentation, whether it be in comments, README, auto-generated or otherwise.

## Start the development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start, run `npm install`, then run `npm start` in the root of the project.

## Notes

If you are unable to meet any of the requirements or would like to point out unorthodox approaches or justifications, please add them to this section of the README for us to take into consideration, as well as to better understand your thought process.

When you are done with the test, please send a link to your repo to us. Thank you for your time and interest!
