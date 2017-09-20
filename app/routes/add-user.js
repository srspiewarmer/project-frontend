import Ember from 'ember';
import $ from 'jquery'

export default Ember.Route.extend({
	model() {
	    return $.getJSON('http://localhost:8080/user').then(function(data) {
	      return data;
	    });
	},
  	actions: {
  		createUser() {
  			var data = {
  				'fullName': $("#fullName").val(),
  				'username': $("#username").val(),
  				'password': $("#password").val()
  			};

			$.ajax({
			  url: 'http://localhost:8080/user',
			  type: "POST",
			  data: data,
			  contentType:"application/json; charset=utf-8",
			  dataType:"json",
			  success: function(){
			  }
			})
  		}
  	}
});
