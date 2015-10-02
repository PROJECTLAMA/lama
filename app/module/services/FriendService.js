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
      url: '/api/getfriend.php',
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
  function addFriend() {
    var defer = $q.defer();
    $http({
      url: '/api/addfriend.php',
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
   * 친구를 삭제한다.
   */
  function removeFriend() {
    var defer = $q.defer();
    $http({
      url: '/api/removefriend.php',
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
}