## React + Emotion + Vite (REV) boilerplate for spinning up an application

This is a setup that I usually use when I need to create a new React application. I personally don't like using CRA because it has too many things that I don't need and that makes the final bundle bigger.

This boilerplate has a bare minimum to start building a new React application, namely:

- [Typescript](https://www.typescriptlang.org/) - I like my code to be fully typed, that prevents lots of bugs and makes your app's behavior more predictable in general.
- [Emotion](https://emotion.sh/docs/introduction) - my favorite CSS-in-JS library that is very easy to use and it's very lightweight.
- [Vite](https://vitejs.dev/) - an awesome bundler that is super fast and very east to use.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) - to make the code look nice and consistent.

The rest I think can be added ad-hoc depending on the project.

I also created an npx command to use this boilerplate, so run the following in your terminal:

```
npx create-rev-app <project_name>
```

, where `project-name` is a folder name where your new app will be created.

**IMPORTANT!** Make sure you have Yarn installed globally before you run this command.
