app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
  $scope.current;
  $scope.loaded;
  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];
  $scope.getCategoryCards = function(category) {
    $scope.current = category;
    FlashCardsFactory.getFlashCards(category)
      .then(function(data) {
        $scope.flashCards = data;
      });
  };

  FlashCardsFactory.getFlashCards()
    .then(function(data) {
      $scope.flashCards = data;
    });


});