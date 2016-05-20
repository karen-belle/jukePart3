juke.config(function($stateProvider) {
    $stateProvider.state('artists', {
        url: '/artists',
        templateUrl: 'js/artist/artists.template.html',
        resolve: {
            artists: function(ArtistFactory) {
            	console.log("resolving artists");
                return ArtistFactory.fetchAll()
            }
        },
        controller: 'ArtistsCtrl'

    });
});

juke.config(function($stateProvider) {
    $stateProvider
        .state('artist', {
            url: '/artists/:artist',
            templateUrl: 'js/artist/artist.template.html',
            resolve: {
                artist: function(ArtistFactory, $stateParams) {
                	console.log("resolving artist");
                    return ArtistFactory.fetchById($stateParams.artist)
                }
            },
            controller: 'ArtistCtrl'

        })

    .state('artist.songs', {
            url: '/songs',
            templateUrl: 'js/artist/artistSongs.template.html'
        })
        .state('artist.albums', {
            url: '/albums',
            templateUrl: 'js/album/albums.template.html',
            controller: 'ArtistCtrl'

        });
});
