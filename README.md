# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## UI Architecture Notes

- Landing page uses a pure CSS scroll-snap architecture (`scroll-snap-type: y mandatory`) for section-by-section navigation.
- The Greetings hero starts fullscreen and shrinks after user interaction (mouse wheel/click or CTA button), then the rest of sections are revealed.

## Theme Route

- Open `/theme` to view the extracted palette page.
- Theme tokens in use:
	- Primary: `#18203f`
	- Secondary: `#9fa2cf`
	- Tertiary: `#bd77b6`
	- Error: `#fa3a23`
	- Neutral: `#777679`
	- Neutral Variant: `#76767e`

## Added Library

- `typeit` is installed and used in the Greetings section for a typewriter message:
	- `Hello world! Im jerry`
- Angular Material is installed .

## Typography and Fonts

- Local font assets are stored in `src/asset/fonts/`.
- Main UI font family: `Roboto` (downloaded from Google Fonts and served locally).
- Typewriter-only font family: `Geist Pixel` (local asset from Google Fonts source).
- Shared typography utility classes are defined in `src/app/core/layout/typography.css` and imported globally in `src/styles.css`.

## Reusable Core Component

- Typewriter is now a reusable core component:
  - `src/app/core/components/typewriter/typewriter.component.ts`
- It emits a `completed` event used by Greetings to trigger staged text fade-in animations.

## Angular Material Styling

- Material button styling is mapped to the app palette tokens in `src/styles.css`.
- The hero CTA keeps the portfolio colors instead of the default Material palette.
