angular
    .module('app', ['ngRoute'])
    .config($routeProvider => {
      $routeProvider.
        when('/user/:name', {
          templateUrl: 'views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: ($http, $route) => {
              return $http.get('http://0.0.0.0:8882/rest/user/' + $route.current.params.name)
            }
          }
        })
    })
