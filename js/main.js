var hello = document.getElementById("hello")
hello.innerHTML = "Yo yo yo"


function funkyTown(){
	var input1 = document.getElementById("input1")
	var inputVal = input1.value
	// var sunny = document.getElementById("sunny")
	// sunny.innerHTML = inputVal
	hello.innerHTML = inputVal
}

var fiveStrings = ["one", "two", "three", "four", "five"]
for(var i = 0; i<fiveStrings.length; i++){
	console.log(fiveStrings[i])
}

var myObj = [
	
	{
	 type: "chevy",
	 color: "yellow",
	 year: 1989
	},
	{
	 type: "ford",
	 color: "green",
	 year: 1965
	},
	{
	 type: "nissan",
	 color: "blue",
	 year: 1999
	}
]
console.log(myObj[0])
console.log(myObj[1])
console.log(myObj[2])

var firstH3 = document.getElementById("firstH3")
firstH3.innerHTML = myObj[0].type + " " + myObj[0].color + " " + myObj[0].year

var secondH3 = document.getElementById("secondH3")
secondH3.innerHTML = myObj[1].type + " " + myObj[1].color + " " + myObj[1].year

var thirdH3 = document.getElementById("thirdH3")
thirdH3.innerHTML = myObj[2].type + " " + myObj[2].color + " " + myObj[2].year



var newObjt = [
	{
		type: "seagull",
		color: "white and greay",
		location: "Seal Beach"
	},
	{
		type: "hummingbird",
		color: "green and blue",
		location: "Lomita"
	},
	{
		type: "parot",
		color: "red",
		location: "Pet Store"
	}
]

for(var i = 0; i < newObjt.length; i++){
	console.log(newObjt[i])
}

document.body.style = "color:green;"












