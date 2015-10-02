;app.controller('CtrlFriend', ['$scope', 'FriendService', CtrlFriend]);

function CtrlFriend($scope, FriendService) {
  
  // 친구를 추가한다.
  $scope.addFriend = function() {
    FriendService.addFriend()
      .then(function(data){
        $scope.friend = '';
      });
  }

  // 친구를 삭제한다.
  $scope.removeFriend = function() {
    FriendService.removeFriend()
      .then(function(data){
        alert('삭제되었습니다.');
      });
  }

  // 친구를 읽어온다.
  FriendService.getFriend()
  	.then(function(data){
      $scope.friends = data;
    });
}


