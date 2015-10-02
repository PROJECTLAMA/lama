;app.controller('CtrlFriend', ['$scope', 'FriendService', CtrlFriend]);

function CtrlFriend($scope, FriendService) {
  
  // 친구를 추가한다.
  $scope.addFriend = function() {
    FriendService.addFriend($scope.friend)
      .then(function(data){
        $scope.friends.push(data);
        $scope.friend = '';
      });
  }

  // 친구를 삭제한다.
  $scope.removeFriend = function() {
    var lastValue = $scope.friends.length,
      lastIdx = $scope.friends[lastValue-1].IDX
    FriendService.removeFriend(lastIdx)
      .then(function(){
        $scope.friends.pop();
      });
  }

  // 친구를 읽어온다.
  FriendService.getFriend()
  	.then(function(data){
      $scope.friends = data;
    });
}


