app.controller("StatsController", function($scope, ScoreFactory){
    $scope.scores = ScoreFactory;
    $scope.stats = 'templates/stats.html';
});
