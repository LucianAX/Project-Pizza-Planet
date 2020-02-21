app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'The Boardwalk',
      description: 'A white pizza with marinated artichokes, broccoli, ricotta cheese, mozzarella cheese & roasted garlic.',
      price: 10.50
    },
    {
      name: 'Pepperoni',
      description: 'Pepperoni, marinara sauce, mozzarella, fresh oregano.',
      price: 7.75
    },
    {
      name: 'The Kelly',
      description: 'House-made hickory smoked bacon & candied jalapenos on a cheese pizza.',
      price: 8.30
    }
  ],
    
	$scope.extras = [
    {
      name: 'Onion bread',
      description: 'Sour dough bread with roasted onion butter',
      price: 3.30
    },
    {
      name: 'Breadsticks',
      description: 'Served with marinara sauce',
      price: 2.70
    },
    {
      name: "Crayfish and lettuce",
      description: 'Crayfish and smoked anchovies with chilled butterhead lettuce',
      price: 7.60
    }
  ]
}]);