var app = new Vue({
	el: '#app', //Connects to the div with the id app
	data: {
		title: 'Vue Counter',
    	counter: 0
	},
	template: `<div id="main">
				<h1> {{title}} </h1>
				<p id="counter"> {{ counter }}</p>
				<button @click="updateValue(+1)" id="inc">+1</button>
				<button @click="updateValue(-1)" id="dec">-1</button>
				<button @click="updateValue(0)" id="reset">Reset</button>
				</div>`,
	methods: {
		 updateValue: function (value) {
		 	if (value === 0) {
		 		this.counter = 0
		 	} else {
	     		this.counter += value
		 	}
 
    	}
	}
})