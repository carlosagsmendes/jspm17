import ko from 'knockout';
import { Router, Route } from '@profiscience/knockout-contrib-router';
import { componentRoutePlugin } from '@profiscience/knockout-contrib-router-plugins-component';

ko.components.register('empty', {
  template: `
      <pre data-bind="text: ctx.pathname"></pre>
      <span>empty template</span>`,
  viewModel: class ViewModel {
    constructor(ctx) {
      this.ctx = ctx;
    }
  }
});

class ViewModel {
  constructor() {
    this.test = ko.observable('Hey!!!');
    this.isInitialized = ko.observable(false);

    Route.usePlugin(componentRoutePlugin);

    Router.setConfig({
      hashbang: false,
      activePathCSSClass: 'active'
    }).useRoutes([
      new Route('/', {
        component: () => ({
          template: `
                    <pre data-bind="text: ctx.pathname"></pre>
                    <span class="level-indicator">Third level</span>
                    <span data-bind="text: 'rendered at: ' + new Date().getMilliseconds() + 'ms'"></span>
                    <h3>Nothing here...</h3>`,
          viewModel: class ViewModel {
            constructor(ctx) {
              this.ctx = ctx;
            }
          }
        })
      }),
      new Route('/hello', {
        component: () => ({
          template: `
                    <pre data-bind="text: ctx.pathname"></pre>
                    <span class="level-indicator">HEllo level</span>
                    <span data-bind="text: 'rendered at: ' + new Date().getMilliseconds() + 'ms'"></span>
                    <h3>Hello...</h3>`,
          viewModel: class ViewModel {
            constructor(ctx) {
              this.ctx = ctx;
            }
          }
        })
      }),
      new Route('/world', {
        component: () => ({
          template: `
                    <pre data-bind="text: ctx.pathname"></pre>
                    <span class="level-indicator">WORLD level</span>
                    <span data-bind="text: 'rendered at: ' + new Date().getMilliseconds() + 'ms'"></span>
                    <h3>World...</h3>`,
          viewModel: class ViewModel {
            constructor(ctx) {
              this.ctx = ctx;
            }
          }
        })
      })
    ]);

    this.isInitialized(true);
  }
}

// var vm = {
//   test: ko.observable('Hey!!!')
// };

var container = document.getElementById('root');
var vm = new ViewModel();
console.log(vm);
console.log(container);
ko.applyBindings(vm, container);
