//Load jquery & lodash
var jquery = require('jquery');
var lodash = require('lodash');
//Instantiate Blaze plugin
require('jquery-meteor-blaze')(jquery, lodash);

//Load templates
var templates = require('./templates.js')(jquery.Meteor);

var now = new jquery.Meteor.ReactiveVar(new Date());

var update = function(){
	//Set new time on reactive var
	now.set(new Date());
	//Change time each second
	setTimeout(update,1000);
}
var colors = new jquery.Meteor.ReactiveVar([
	{name:'AliceBlue'	,hex:'#F0F8FF	 	'},	
	{name:'AntiqueWhite'	,hex:'#FAEBD7	 	'},	
	{name:'Aqua		',hex:'#00FFFF	 	'},	
	{name:'Aquamarine'	,hex:'#7FFFD4	 	'},	
	{name:'Azure'		,hex:'#F0FFFF	 	'},	
	{name:'Beige'		,hex:'#F5F5DC	 	'},	
	{name:'Bisque'		,hex:'#FFE4C4	 	'},	
	{name:'Black'		,hex:'#000000	 	'},	
	{name:'BlanchedAlmond'	,hex:'#FFEBCD	 	'},	
	{name:'Blue'		,hex:'#0000FF	 	'},	
	{name:'BlueViolet 	',hex:'#8A2BE2	 	'},	
	{name:'Brown'		,hex:'#A52A2A	 	'},	
	{name:'BurlyWood'	,hex:'#DEB887	 	'},	
	{name:'CadetBlue'	,hex:'#5F9EA0	 	'},	
	{name:'Chartreuse'	,hex:'#7FFF00	 	'},	
	{name:'Chocolate'	,hex:'#D2691E	 	'},	
	{name:'Coral'		,hex:'#FF7F50	 	'},	
	{name:'CornflowerBlue'	,hex:'#6495ED	 	'},	
	{name:'Cornsilk'	,hex:'#FFF8DC	 	'}
]);

jquery(document).ready(function(){
	
	//Hello word example
	// uses Blaze.renderWithData
	jquery('<div>')
		.blaze(templates['hello'])
		.render({
			message: 'Hello world!'
		})
		.appendTo('body');
	
	//Time example
	jquery('<div>')
		.blaze(templates['time'])
		.reactive('now',now)
		.render()
		.appendTo('body');
	
	//Start timer
	update();
	
	//Colors example
	jquery('<div>')
		.blaze(templates['colors'])
		.reactive('colors',colors)
		.helpers('isBlue',function(color){
			return color.name==='Blue';
		})
		.render()
		.appendTo('body');
});