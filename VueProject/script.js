var product = "Socks";

var app = new Vue({
	el: '#app', //Connects to the div with the id app
	data: {
		product: "Socks",
		description: "A pair of warm, fuzzy socks",
		image: "./assets/socks-green.png",
		altText: "A pair of socks",
		inventory: 100,
		onSale: true,
		details: ["80% cotton", "20% polyester"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "./assets/socks-green.png"
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "./assets/socks-gray.png"
			}
		],
		cart: 0
	},
	methods: {
		addToCart: function() {
			this.cart += 1
		},
		changeImage: function(vImage) {
			this.image = vImage;
		}
	}		
});