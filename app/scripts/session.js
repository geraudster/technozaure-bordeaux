/* eslint-disable */
var sessionId = getUrlParameter('id');

var sessionVue = new Vue({
  el: '#sessionVue',
  data: {
    agenda: null,
    session: null,
    speakers: null,
    favorites: []
  },
  ready: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      var self = this;
      fetch('assets/devfest.json').then(function(response) {
        return response.json();
      }).then(function(json) {
        // get agenda
        self.agenda = json.agenda;
        // get session
        self.session = json.sessions.filter(function(session) {
          return session.id === parseInt(sessionId);
        })[0];
        // get speakers
        if (self.session) {
          var sessionSpeakers = self.session.speaker;
          self.speakers = json.speakers.filter(function(speaker) {
            return sessionSpeakers.indexOf(parseInt(speaker.id)) !== -1 ;
          });
        }
      });

      self.favorites = JSON.parse(localStorage['fav']) || []
      //fetch('api/v1/stars/get?login=ben').then(function(response) {
      //  return response.json();
      //}).then(function(json) {
      //  self.favorites = json.favs;
      //});
    },
    getTrackColor: getTrackColor,
    getTypeColor: getTypeColor,
    isFavorite: isFavorite
  },
  events: {
    'toggle-favorite': function(id, favorite) {
      toggleFavorite(id, favorite, this.favorites)
    }
  }
});
