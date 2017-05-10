//assets
import 'bootstrap/dist/css/bootstrap.min.css';
const jr = require('./img/jr2.jpg');
const linkedIn = require('./img/32/social-011_linkedin.png');
const twitter = require('./img/32/social-003_twitter.png');
const fb = require('./img/32/social-006_facebook.png');
const github = require('./img/32/social-041_github.png');
const jables = require('./img/jables_home.png');
const resume = require('./img/julian_resume.pdf');
const jablesComplete = require('./img/jables_complete.png');
const alienHunt = require('./img/alien_hunt.png');
const mountenus = require('./img/mountenus.png');
const vidmeo = require('./img/vidmeo_mockups.png');
const indy = require('./img/indy.png');

//css
import './assets/css/stylesheet.css';

//modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';

//views
import homeHTML from './views/home.html';
import portfolioHTML from './views/portfolio.html';
import contactHTML from './views/contact.html';
import aboutHTML from './views/about.html';
import resumeHTML from './views/resume.html';

angular
  .module('portfolioApp', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        template: homeHTML
      })
      .state('portfolio', {
        url: '/projects',
        template: portfolioHTML
      })
      .state('contact', {
        url: '/contact',
        template: contactHTML
      })
      .state('about', {
        url: '/about',
        template: aboutHTML
      })
      .state('resume', {
        url: '/resume',
        template: resumeHTML
      })
    $urlRouterProvider.otherwise('/');
  });
