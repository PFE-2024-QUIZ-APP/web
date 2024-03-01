# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Configuration

### Prettier (Automatic Formatting on Save)

To configure Prettier to automatically format your code on save in Visual Studio Code:

1. Install the Prettier extension from the VSCode marketplace.
2. Create a `.prettierrc` file at the root of your project with the desired configuration.
3. Open VSCode settings (`Ctrl+,`) and enable the "Format On Save" option.
4. Now, every time you save a file, Prettier will automatically format your code according to the configured rules.

### ESLint (Code Validation)

To validate your code using ESLint, run the following command in your terminal:

```bash
npm run lint

### SCSS (Sass Preprocessor)

If you want to use SCSS in your project:

```
<!-- In a Svelte file, e.g., "MyComponent.svelte" -->
<style lang="scss">
  @import 'styles/main.scss';

  /* Other SCSS styles here */
</style>
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
