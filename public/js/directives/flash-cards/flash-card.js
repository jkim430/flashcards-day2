app.directive('flash', function(ScoreFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/flash-cards/flash-card.html',
    link: function(scope, element, attibutes) {
      scope.answered = false;
      scope.answeredCorrectly = null;
      scope.answerQuestion = function(answer, flashCard) {
        if (!flashCard.answered) {
          flashCard.answered = true;
          flashCard.answeredCorrectly = answer.correct;
          if (flashCard.answeredCorrectly) {
            ScoreFactory.correct++;
          } else {
            ScoreFactory.incorrect++;
          }
        }
      }

    },
    scope: true
  }
})