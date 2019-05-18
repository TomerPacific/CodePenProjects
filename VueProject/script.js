Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	template: `
		<div class="product">
				<div class="product-image">
					<img v-bind:src="this.variants[this.selectedVariant].variantImage" v-bind:alt="altText">
				</div>

				<div class="product-info">
					<h1>{{ title }} </h1>
					<h2>{{description}} </h2>
					<p v-if="this.variants[this.selectedVariant].variantQuantity > 10">In Stock</p>
					<p v-else-if="this.variants[this.selectedVariant].variantQuantity > 0 && this.variants[this.selectedVariant].variantQuantity <= 10">Almost sold out!</p>
					<p v-else>Out of Stock</p>
					<p>Shipping: {{ shipping }} </p>

					<product-details :details="details"></product-details>

					<div v-for="(variant, index) in variants" 
					v-bind:key="variant.variantId"
					class="color-box"
					v-bind:style="{backgroundColor: variant.variantColor}"
					@mouseover="changeImage(index)">
					</div>

					<p v-bind:hidden="!onSale" class="on-sale">On Sale!</p>

					<button v-on:click="addToCart" 
					v-bind:disabled="this.variants[this.selectedVariant].variantQuantity == 0"
					v-bind:class="{ 'disabled-button': this.variants[this.selectedVariant].variantQuantity == 0 }">Add to Cart </button>

					<div class="cart">
						<p>Cart({{cart}})</p>
					</div>
				</div>

			</div>
	`,
	data() {
			return {
				brand: "Vue",
				product: "Socks",
				description: "A pair of warm, fuzzy socks",
				selectedVariant: 0,
				altText: "A pair of socks",
				 details: ["80% cotton", "20% polyester"],
				variants: [
					{
						variantId: 2234,
						variantColor: "green",
						variantImage: "./assets/socks-green.png",
						variantQuantity: 10,
						onSale: true
					},
					{
						variantId: 2235,
						variantColor: "blue",
						variantImage: "./assets/socks-gray.png",
						variantQuantity: 0,
						onSale: false
					}
				],
				cart: 0,
				}
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
			},
			inStock() {
				return this.variants[this.selectedVariant].variantQuantity
			},
			onSale() {
				return this.variants[this.selectedVariant].onSale ? this.product + " " + this.brand : "";
			},
			shipping() {
				if (this.premium) {
					return "Free"
				}

				return 2.99
			}
		}
		
})

Vue.component('product-details', {
	props: {
		details: {
			type: Array,
			required: true
		}
	},
	template: `<ul>
					<li v-for="detail in details">{{ detail }}</li>
				</ul>`,
	data() {
		return {

		}
	}

})



var app = new Vue({
	el: '#app', //Connects to the div with the id app
	data: {
		premium: false
	}
})