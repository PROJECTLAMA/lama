;app.service('FriendService', ['$http', '$q', FriendService]);

function FriendService($http, $q) {
  return {
    getFriend: getFriend,
    addFriend: addFriend,
    removeFriend: removeFriend
  }

  /*
   * 친구 리스트를 가져온다.
   */
  function getFriend() {
    var defer = $q.defer();
    $http({
      url: '/lama/api/getfriend.php',
      method: 'get',
      params: {
        action: 'get'
      }
    })
    .success(function(data){
      defer.resolve(data);
    })
    .error(function(data){
      defer.reject(data);
    });
    return defer.promise;
  }

  /*
   * 친구를 추가한다.
   */
  function addFriend(friend) {
    var defer = $q.defer();
    $http({
      url: '/lama/api/addfriend.php',
      method: 'get',
      params: {
        USER_NAME: friend
      }
    })
    .success(function(data){
      defer.resolve(data);
    })
    .error(function(data){
      defer.reject(data);
    });
    return defer.promise;
  }

  /*
   * 친구를 삭제한다.
   */
  function removeFriend(idx,user_name) {
    var defer = $q.defer();
    $http({
      url: '/lama/api/removefriend.php',
      method: 'get',
      params: {
        IDX: idx,
        USER_NAME: user_name
      }
    })
    .success(function(data){
      defer.resolve(data);
    })
    .error(function(data){
      defer.reject(data);
    });
    return defer.promise;
  }
}