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

					<button v-on:click="removeFromCart" 
					v-bind:disabled="this.variants[this.selectedVariant].variantQuantity == 0"
					v-bind:class="{ 'disabled-button': this.variants[this.selectedVariant].variantQuantity == 0 }">Remove from Cart </button>

				</div>

				<div>
					<h2>Reviews</h2>
					<p v-if="reviews.length === 0">There are no reviews yet.</p>
					<ul>
						<li v-for="review in reviews">
							<p>{{ review.name }}</p>
							<p>Rating : {{ review.rating }}</p>
							<p> {{ review.review }}</p>

						</li>
					</ul>
				</div>

				<product-review @review-submitted="addReview"></product-review>

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
				reviews: []
				}
			},
		methods: {
			addToCart: function() {
				this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
			},
			removeFromCart: function() {
				this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
			},
			changeImage: function(index) {
				this.selectedVariant = index;
			},
			addReview(productReview) {
				this.reviews.push(productReview);
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

Vue.component('product-review', {
	template: `
	<form class="review-form" @submit.prevent="onSubmit">

		<p v-if="errors.length">
			<b>Please correct the following error(s):</b>
			<ul>
				<li v-for="error in errors">{{ error }}</li>
			</ul>
		</p>

		<p>
			<label for="name">Name:</label>
			<input id="name" v-model="name">
		</p>

		<p>
			<label for="review">Review:</label>
			<textarea id="name" v-model="review"></textarea>
		</p>

		<p>
			<label for="rating">Rating:</label>
			<select id="rating" v-model.number="rating">
				<option>5</option>
				<option>4</option>
				<option>3</option>
				<option>2</option>
				<option>1</option>
			</select>
		</p>

		<input type="submit" value="Submit">
	</form>
			`,
	data() {
		return {
			name: null,
			review: null,
			rating: null,
			errors: []
		}
	},
	methods : {
		onSubmit() {

			if (this.name && this.review && this.rating) {
				let productReview = {
				name: this.name,
				review: this.review,
				rating: this.rating
				}

				this.$emit('review-submitted', productReview)
				this.name = null
				this.review = null
				this.rating = null
			} else {
				if (!this.name) this.errors.push("Name required");
				if (!this.review) this.errors.push("Review required");
				if (!this.rating) this.errors.push("Rating required");
			}			
		}
	}
})


var app = new Vue({
	el: '#app', //Connects to the div with the id app
	data: {
		premium: false,
		cart: []
	},
	methods: {
		updateCart(id) {
			this.cart.push(id)
		},
		removeFromCart(id) {
			if (this.cart.indexOf(id) !== -1) {
				this.cart.splice(this.cart.indexOf(id),1)
			}
		}
	}
})