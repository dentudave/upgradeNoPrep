'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'ng1/phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        Phone.query().then( success => {
          this.phones = success;
        });
        this.orderProp = 'age';
      }
    ]
  });
