# OpenLearnUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Using Font Awesome icons 

In the TS file: 
```
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  faCoffee = faCoffee;
}
```

In the template:
```
<fa-icon [icon]="faCoffee" size="2x"></fa-icon>
```

More info on Font Awesome: [Here](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)
Font awesome icons: [Here](https://fontawesome.com/icons?d=gallery&s=regular,solid&v=5.0.0,5.0.1,5.0.10,5.0.11,5.0.12,5.0.13,5.0.2,5.0.3,5.0.4,5.0.5,5.0.6,5.0.7,5.0.8,5.0.9,5.1.0,5.1.1,5.2.0,5.3.0,5.3.1,5.4.0,5.4.1,5.4.2,5.5.0,5.6.0,5.6.1,5.6.3,5.9.0&m=free)


## Scss

Import colors using @use at the top of the file:
```
@use 'src/scss_variables/colors';
```
and replacing your color with:
```
colors.$base-black;
```

## Using the Roboto font

```
font-family: 'Roboto', sans-serif;
```

Font weights: 
Thin 100
Thin 100 italic
Light 300
Regular 400 **Default** 
Medium 500
Bold 700
Black 900