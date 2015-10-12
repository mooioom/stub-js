/*
	created by eldad levi
	license : free

	var data = stubJs({

		index   : 'index',
		boolean : 'boolean',
		string  : 'string(length,chars)', 						// default 5 chars
		number  : 'number(min,max)',      						// defualt 0-10
		object  : { number : 'number', string : 'string' },
		array   : ['number',10],
		date    : 'date(start,end)', 							// default - now
		color   : 'color',
		animal  : 'random(dog,cat,mouse,fish)',
		custom  : 'my number is : {{number(1,10)}}'

	},2)

*/
window.stubJs = function( settings, amount ){

	var data;

	function parseMesulsalim(s){
		if(s.indexOf('{{') != -1){
			s = s.replace( /{{\s*([^}]+)\s*}}/g,function(){
				var exp = arguments[0].match(/\{\{(.*)\}\}/)[1];
				return stubJs(exp);
			});
			return s;
		}else return s;
	}

	function parse(s,idx){

		var props = typeof s == 'string' ? s.match(/\((.*)\)/) : null; if(props) props = props[1].split(',');

		if(typeof s == 'object' && !s.hasOwnProperty('length')) return stubJs(s);
		if(typeof s == 'object' && s.hasOwnProperty('length') ) return stubJs.apply(this,s);

		if(s.indexOf('date')    === 0) return getDate.apply(this,props);
		if(s.indexOf('string')  === 0) return getString.apply(this,props);
		if(s.indexOf('number')  === 0) return getNumber.apply(this,props);
		if(s.indexOf('boolean') === 0) return getBoolean.apply(this,props);
		if(s.indexOf('array')   === 0) return getArray.call(this,props,idx);
		if(s.indexOf('random')  === 0) return getRandom.apply(this,props);
		if(s.indexOf('color')   === 0) return getColor.apply(this,props);
		if(s.indexOf('index')   === 0) return idx;

		s = parseMesulsalim(s);

		return s;

	}
	function getDate(start,end){
		if(typeof start != 'undefined' && typeof end != 'undefined') return new Date(new Date(start).getTime() + Math.random() * (new Date(end).getTime() - new Date(start).getTime()));
		if(typeof start == 'undefined' && typeof end == 'undefined') return new Date();
	}
	function getString(len,p)
	{
	    var text = ""; var p = p || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    for( var i=0; i < (len||5); i++ ) text += p.charAt(Math.floor(Math.random() * p.length)); return text;
	}
	function getNumber(min,max){ 
		if(typeof min != 'undefined' && typeof max != 'undefined') return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
		if(typeof min != 'undefined' && typeof max == 'undefined') return Math.floor(Math.random() * Number(min));
		if(typeof min == 'undefined' && typeof max == 'undefined') return Math.floor(Math.random() * 10);
	}
	function getBoolean(pos,neg){ return Math.floor(Math.random(1)*100)>50?true:false;}
	function getRandom(){ if(!arguments.length) return getNumber(); return arguments[Math.floor(Math.random(1)*arguments.length)]; }
	function getColor(){ return '#'+Math.random().toString(16).substr(-6); }
	function getData( s, idx ){ var item = {}; for(var x in s) item[x] = parse(s[x],idx); return item; }
	function getArray( s, idx ){ return parseMesulsalim(s[idx]); }

	if(typeof settings == 'string') {
		if(typeof amount == 'undefined') return parse(settings);
		data = []; for(var a = 0;a<amount;a++) data.push( parse(settings,a) ); return data;
	}

	if(typeof amount == 'undefined' && typeof settings == 'object'){
		data = getData(settings); return data;
	}

	data = []; for(var a = 0;a<amount;a++) data.push( getData(settings,a) ); return data;

}