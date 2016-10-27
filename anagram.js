// matching words
var words = ['evian', 'naive','naomi', 'imoan'];


var allAnagrams = function(arr) {
	var anagrams = {};

	var sorted = sortWord(word);

	if (anagrams[sorted] != null) {
		anagrams[sorted].push(word);
	}
	// create an array with the word and insert into object

	else {
		anagrams[sorted] = [ word ];
	}
}
	for (var sorted in anagrams) {
		var words = anagrams[sorted];
		var sep = ',';
		var out = '';
		for (var n in words) {
			out += sep + words[n];
		}
		document.writeIn(sorted + ':' + out + '<br />');
	}

console.log(allAnagrams(arr));
//['evil','vile','orchestra','carthorse','naomi', 'imoan']

