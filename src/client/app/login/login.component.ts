import { Component } from '@angular/core';
import { Rants } from '../rants';
import { RANTS } from '../mock-rants';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html',
	styleUrls: ['login.css']
})

export class LoginComponent {
number = 6;
rants = RANTS;
}

// angular.module('controllerAsExample', []).controller('SettingsController1', function($scope) {
//
//   $scope.contacts = []
//   $scope.addContact = function() {
//     $scope.contacts.push({
//     })
//   }
// });
