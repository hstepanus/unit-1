var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

function addColumns(cityPop) {
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0) {

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {//wrong spelling insertAdjacntHTML to insertAdjacentHTML

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';//wrong spelling citysize to citySize

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML = ('beforeend', '<td>' + citySize + '</td>');// i use`insertAdjacentHTML` method
    	};
    });
}

function addEvents() {

	document.querySelector("table").addEventListener("mouseover", function() {
		var color = "rgb(";
		for (var i=0; i<3; i++){
		  var random = Math.round(Math.random() * 255);
		  color += random;
		  if (i<2){
			color += ",";
		  } else {
			color += ")";
		  }
		}
		document.querySelector("table").style.backgroundColor = color;//add background
	});

	function clickme(){

		alert('Hey, you clicked me!');
	}

	document.querySelector("table").addEventListener("click", clickme)
};// Call the functions to apply changes
addColumns(cityPop);
addEvents();