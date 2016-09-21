'use strict'

eventsApp.controller('EventController',
function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Flavum, peritus humani generiss etiam perdere de rusticus, lotus luna.',
                    creatorName: 'Candidatuss experimentum! ',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'Rumor messiss, tanquam regius barcas.'
                },
                {
                    name: 'Powers, moons, and beloved explosion of the minerals will always protect them.',
                    creatorName: 'Amicitias resistere! ',
                    duration: '1 hr',
                    level: 'Introductory',
                    abstract: 'A falsis, advena fortis navis.'
                },
                {
                    name: 'Margerine can be decorateed with sweet steak, also try covering the frittata with peanut sauce.',
                    creatorName: 'Sagas crescere! ',
                    duration: '1 hr',
                    level: 'Intermediate',
                    abstract: 'Galatae potuss, tanquam magnum idoleum.'
                }
            ]
        }
});
