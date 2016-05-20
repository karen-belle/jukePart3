'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function($scope, $log, PlayerFactory, AlbumFactory, $stateParams, album) {

    // $scope.$on('viewSwap', function (event, data) {
    //   if (data.name !== 'oneAlbum') return $scope.showMe = false;
    //   $scope.showMe = true;
    // AlbumFactory.fetchById($stateParams.album)
    //     .then(function(album) {
            $scope.album = album;
        //     console.log(album.name);
        // })
        // .catch($log.error);


    // main toggle
    $scope.toggle = function(song) {
        if (song !== PlayerFactory.getCurrentSong()) {
            PlayerFactory.start(song, $scope.album.songs);
        } else if (PlayerFactory.isPlaying()) {
            PlayerFactory.pause();
        } else {
            PlayerFactory.resume();
        }
    };

    $scope.getCurrentSong = function() {
        return PlayerFactory.getCurrentSong();
    };

    $scope.isPlaying = function(song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
    };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function($scope, $log, $rootScope, PlayerFactory, AlbumFactory, albums) {

    $scope.showMe = true;

    // $scope.$on('viewSwap', function(event, data) {
    //     $scope.showMe = (data.name === 'allAlbums');
    // });

    // $scope.viewOneAlbum = function (album) {
    //   $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album.id });
    // };

    // AlbumFactory.fetchAll()
    //     .then(function(albums) {
            $scope.albums = albums;
        // })
        // .catch($log.error); // $log service can be turned on and off; also, pre-bound

});
