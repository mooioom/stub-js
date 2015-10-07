# stubJs
js stub generator for creating dummy data objects

# Example usage

var data = stubJs({

	boolean : 'boolean',
	string  : 'string',
	number  : 'number',
	object  : { number : 'number', string : 'string' },
	array   : ['number',10],
	date    : 'date',
	color   : 'color',
	animal  : 'random(dog,cat,mouse,fish)',

},2);