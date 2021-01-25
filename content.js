const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
var keywords = ["Type keyword here"]

for (var j=0; j < keywords.length; j++){
	var word = keywords[j]
	for (var i=0; i < text.length; i++){
		if(text[i].innerHTML.includes(word)){
			text[i].innerHTML = text[i].innerHTML.replace(word,'<span class="block-word">'+word+'</span>')
		}
	}
}

document.querySelectorAll('.ifM9O').forEach(function(a) {
  a.remove()
})

document.getElementById("element").style.display = "none";