Vue.component('counter-btn', {
	props: {
		text: {
			type: String,
			required: true
		}
	},
	template: `<button> {{ text }} </button>`,
	data() {
		return {

		}
	}
})


var app = new Vue({
	el: '#app', //Connects to the div with the id app
	data: {
		title: 'Vue Counter',
    counter: 0
	},
	methods: {
		
	}
})