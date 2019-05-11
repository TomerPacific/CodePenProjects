var app = new Vue({
	el: '#app', //Connects to the div with the id app
	data: {
		brand: "Vue",
		product: "Socks",
		description: "A pair of warm, fuzzy socks",
		selectedVariant: 0,
		altText: "A pair of socks",
		onSale: true,
		details: ["80% cotton", "20% polyester"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "./assets/socks-green.png",
				variantQuantity: 10
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "./assets/socks-gray.png",
				variantQuantity: 0
			}
		],
		cart: 0
	},
	methods: {
		addToCart: function() {
			this.cart += 1
		},
		changeImage: function(index) {
			this.selectedVariant = index;
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			let img = this.variants[this.selectedVariant].variantImage
			console.log(img);
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		}
	}		
});