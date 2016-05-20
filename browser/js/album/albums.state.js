juke.config(function($stateProvider) {
    $stateProvider.state('albums', {
        url: '/albums',
        templateUrl: 'js/album/albums.template.html',
        resolve: {
            albums: function(AlbumFactory) {
                console.log("resolving albums");
                return AlbumFactory.fetchAll()
            }
        },
        controller: 'AlbumsCtrl'

    });
});

juke.config(function($stateProvider) {
    $stateProvider.state('album', {
        url: '/albums/:album',
        templateUrl: 'js/album/album.template.html',
        resolve: {
            album: function(AlbumFactory, $stateParams) {
                return AlbumFactory.fetchById($stateParams.album);
            }
        },
        controller: 'AlbumCtrl'

    });
});
