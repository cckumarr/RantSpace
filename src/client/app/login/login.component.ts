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
number= 6;
rants= RANTS;

onSelect(rant:Rants){
	this.rants.likes = rant.likes++;
}

onRant(rantInput:string){
	this.rants.push({
		id : 654,
		likes : 0,
		rantMsg : rantInput
	})
}
}

// angular.module('controllerAsExample', []).controller('SettingsController1', function($scope) {
//
//   $scope.contacts = []
//   $scope.addContact = function() {
//     $scope.contacts.push({
//     })
//   }
// });
