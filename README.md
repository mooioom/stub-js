# stubJs
Js stub generator for creating **smart** dummy data

## Basic Usage

```
var data = stubJs( 'random(cat,dog,mouse,fish)', 5 ); 

// [ 'cat', 'fish', 'fish', 'dog', 'mouse' ];
```

## Objects / Arrays
```
var data = stubJs({

	boolean : 'boolean', 
	string  : 'string',
	number  : 'number',
	object  : { number : 'number', string : 'string' },
	array   : ['number',10],
	date    : 'date',
	color   : 'color',
	animal  : 'random(dog,cat,mouse,fish)',
	static  : 'my static string',
	dynamic : 'my number is {{number(1,10)}}!'

},2 );
```
Resulting stub data : 
```
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
		static  : 'my static string',
		dynamic : 'my number is 7!'
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
		static  : 'my static string',
		dynamic : 'my number is 9!'
	}
]
```

## Options

* 'boolean'
* 'string(length)'
* 'number(min,max)'
* 'object'
* 'array / array of objects'
* 'date(start,end)'
* 'color'
* 'random(list,of,available,items)'

:+1:

אין עוד מלבדו

[![Analytics](https://ga-beacon.appspot.com/UA-31346292-2/mooioom/stubjs)](https://github.com/mooioom/ga-beacon)
