# Angular2 FeatureToggle

[![Build Status](https://travis-ci.org/willmendesneto/angular2-feature-toggle.png?branch=master)](https://travis-ci.org/willmendesneto/angular2-feature-toggle)

[![Coverage Status](https://coveralls.io/repos/willmendesneto/angular2-feature-toggle/badge.svg?branch=master)](https://coveralls.io/r/willmendesneto/angular2-feature-toggle?branch=master)


Your module to handle with [feature toggles](http://martinfowler.com/bliki/FeatureToggle.html) in Angular2 applications easier.

## Why Feature toggle?

> This is a common concept, but why use this directive instead solve it via server-side rendering?

The idea of this directive is make this process transparent and easier. So the main point is integrate this directive with other tooling process, such as:
- Server-side rendering;
- Progressive rendering;
- Any other that yoy like :)

You can integrate with WebSockets or handling this in a EventSourcing architecture. It's totally transparent for you and you can integrate easier in your application

## Instalation and usage

Install `angular2-feature-toggle` module as a project dependency.

```bash
$ npm install --save angular2-feature-toggle
```

After that you just need to import the `FeatureToggleModule` into your application and the directive will be accessible in your application.

```typescript
import { FeatureToggleModule } from 'angular2-feature-toggle';
...
@NgModule({
  ...
  imports: [ FeatureToggleModule ],
  ...
})
...

```

```html
<div *featureToggle="true">
  condition is true and `featureToggle` is enabled.
</div>
<div *featureToggle="false">
  condition is false and `featureToggle` is disabled.
</div>
```

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running the build

Run `npm run build`

## How to contribute

This package is using the AngularJS commit messages as default way to contribute with `commitizen` node package integrated in this repository. If you are not so familiar with the Angular projeto commit messages standard, please commit your contribution using:

```bash
$ npm run commit
```

# Live example

[https://plnkr.co/edit/RepjOclLXM32YbCgC4vv](https://plnkr.co/edit/RepjOclLXM32YbCgC4vv)

## Author

**Wilson Mendes (willmendesneto)**
+ <https://plus.google.com/+WilsonMendes>
+ <https://twitter.com/willmendesneto>
+ <http://github.com/willmendesneto>
