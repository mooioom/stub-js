# stubJs
js stub generator for creating dummy data objects

# Basic usage

var data = stubJs({

	boolean : 'boolean',
	string  : 'string',
	number  : 'number',
	object  : { number : 'number', string : 'string' },
	array   : ['number',10],
	date    : 'date',
	color   : 'color',
	animal  : 'random(dog,cat,mouse,fish)',

},2 );

will produce the following stub data : 

[
	{
		boolean : true,
		string  : 'd32kj',
		number  : 7,
		object  : { number : 2, string : 'dsk2j' },
		array   : [ 1, 6, 9, 3, 6, 7, 2, 1, 6, 3 ],
		date    : js Date object,
		color   : '#32cc12',
		animal  : 'dog',
	},
	{
		boolean : false,
		string  : '234jk',
		number  : 2,
		object  : { number : 1, string : '0dsal' },
		array   : [ 6, 2, 8, 1, 9, 1, 0, 1, 7, 7 ],
		date    : js Date object,
		color   : '#99aabb',
		animal  : 'fish',
	}
]