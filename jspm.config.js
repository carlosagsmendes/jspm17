SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "jspm17/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm17": {
      "main": "jspm17.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@profiscience/knockout-contrib-router": "npm:@profiscience/knockout-contrib-router@2.0.0-rc.10",
    "@profiscience/knockout-contrib-router-plugins-component": "npm:@profiscience/knockout-contrib-router-plugins-component@2.0.0-rc.12",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "knockout": "npm:knockout@3.5.0-rc2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1"
  },
  packages: {
    "npm:@profiscience/knockout-contrib-router@2.0.0-rc.10": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@2.4.0",
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1",
        "core-js": "npm:core-js@2.5.7"
      }
    },
    "npm:@profiscience/knockout-contrib-router-plugins-component@2.0.0-rc.12": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    }
  }
});
