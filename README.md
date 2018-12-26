This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Translation

This app uses `i18next` for translation, and [locize.io](https://locize.io) for managing translation keys.
When developing, please avoid the use of any hardcoded strings. Instead, pick a reasonable key, and use the
`t` method as follows:

```jsx harmony
<h1>{t('messages.hello', 'Hello, world!')}</h1>
```

You'll then need to export a `translated` version of your component, which provides `t` as a prop:

```javascript
const translated = withNamespaces('common')(MyComponent);
export default translated;
```

Common convention would expect `translated` to be created after `connected`.

### Translation Keys

In general we should go two levels deep in our keys. The first level is a general group, which might
correspond with the current view or a global value. The second is arbitrary but should be descriptive:

```yaml
actions: # anything actionable and app-global 
  close: "Close"
image:
  download: "Download & Open"
nav:
  back: "Back"
search:
  title: "Search Results"
status:
  loading: "Loading..."
```

This is an example of our current structure at the time of writing this. The keys above correlate to:

```
actions.close
image.download
nav.back
search.title
status.loading
```

Etc. etc. etc. You get the idea?