app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.current;
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

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (flashCard.answeredCorrectly){
				ScoreFactory.correct++;
			}else{
				ScoreFactory.incorrect++;
			}
		}
	}
});
