# What Am I Having Today?

The idea of this app started as an ☁ weather app ☀ to practice connecting to third party API. But then I found 🍴 Spoonacular, then I decided to turn this into an app to help me figure out what my next meal can be. And yea, hence the name `What Am I Having Today?` 🤔

## Tech Stack

- [React](https://reactjs.org/) as Javascript Framework
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) as scripting language
- [Create React App](https://create-react-app.dev/) as initializer
- [Sass](https://sass-lang.com/) as CSS preprocessor
- [Eslint](https://eslint.org/) with Airbnb style guide as linter
- [Prettier](https://prettier.io/) as code formatter
- [Amplify](https://aws.amazon.com/amplify/) as hosting service

## App Structure

```jsx
<App>
  <LandingSection>
    <Weather>
      <Header />
      <Current />
      <Forecast />
    </Weather>
    <Transition />
  </LandingSection>
</App>
```
