Vue.component('medium-article', {
	props: {
		name: {
			type: String,
			required: true
		},
		publish_date: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		}
	},
	template: `<a v-bind:href="pageUrl" target="_blank">{{ name }}</a>`,
	data() {
		return {
			article_name: this.name
		}
	},
	computed: {
		pageUrl() {
			return this.url
		}
	}
})


var app = new Vue({
	el: '#app', //Connects to the div with the id app
	data: {
		title: 'Medium Articles Viewer - Now with Vue.js!',
		articles: [
			{
				name: 'Android Layouts',
				link: 'https://medium.freecodecamp.org/how-to-make-sense-of-the-many-android-layouts-693b262706e0',
				publish_date: 'June 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/AndroidLayouts.jpg?raw=true',
				class: 'android_layouts'
			},
			{
				name: 'Android View Visibility',
				link: 'https://medium.freecodecamp.org/how-and-why-to-use-android-visibility-listeners-971e3b6511ec',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/AndroidVisibility.jpg?raw=true',
				class: 'android_view_visibility'
			}
		]
	},
	methods: {
		goToArticle: function(article) {
			window.open(article.link, '_blank');
		}
	}
})