Vue.component('filter-btn', {
	template: `<div class="dropdown">
					<button v-on:click="showFilteringOptions" class="filter_btn"><i class="fa fa-filter"></i></button>
					<div id="myDropdown" class="dropdown-content">
				    	<a href="#">Link 1</a>
				    	<a href="#">Link 2</a>
				    	<a href="#">Link 3</a>
			    	</div>
			    </div>`,
	data() {
		return {

		}
	},
	methods: {
		showFilteringOptions: function(event) {
  			document.getElementById("myDropdown").classList.toggle("show");
		}
	}
})


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
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/AndroidLayouts.jpg?raw=true'
			},
			{
				name: 'Android View Visibility',
				link: 'https://medium.freecodecamp.org/how-and-why-to-use-android-visibility-listeners-971e3b6511ec',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/AndroidVisibility.jpg?raw=true'
			},
			{
				name: 'Chrome API',
				link: 'https://medium.freecodecamp.org/features-of-the-chrome-api-you-should-know-bf5c8b6c7733',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/ChromeAPI.jpg?raw=true'
			},
			{
				name: 'How To Publish A Chrome Extension',
				link: 'https://medium.freecodecamp.org/how-to-publish-your-chrome-extension-dd8400a3d53',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/howToPublishChromeExtension.jpg?raw=true'
			},
			{
				name: 'How To Publish An App In The Play Store',
				link: 'https://medium.freecodecamp.org/how-to-publish-an-application-in-the-play-store-8ddcc6dc3587',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/PlayStorePublish.jpg?raw=true'
			},
			{
				name: 'Israel\'s IP Problem',
				link: 'https://hackernoon.com/israels-ip-problem-7d8916cb93ec',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/IsraelIPProblem.jpg?raw=true'
			},
			{
				name: 'Why Documentation Is Important',
				link: 'https://medium.freecodecamp.org/why-documentation-matters-and-why-you-should-include-it-in-your-code-41ef62dd5c2f',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/Documentation.jpg?raw=true'
			},
			{
				name: 'Contributing To An Open Source Project',
				link: 'https://medium.com/@tomerpacific/how-to-contribute-to-an-open-source-repository-d66b5e99eec5',
				publish_date: 'July 2018',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/FirstPR.jpg?raw=true'
			},
			{
				name: 'How To Build A Chrome Extension',
				link: 'https://medium.freecodecamp.org/how-to-implement-a-chrome-extension-3802d63b5376',
				publish_date: '?????',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/chromeExtensionArticle.jpg?raw=true'
			},
			{
				name: 'Native Cross Origin Communication Bridges',
				link: 'https://medium.freecodecamp.org/how-to-build-cross-origin-communication-bridges-in-ios-and-andriod-7baef82b3f02',
				publish_date: '????????/',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/communicationBridgePart1.jpg?raw=true'
			},
			{
				name: 'Looking For A Second Job As A Developer',
				link: 'https://medium.freecodecamp.org/what-a-developer-goes-through-when-looking-for-a-second-job-f061c26ffd8f',
				publish_date: '????????/',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/developerSecondJob.jpg?raw=true'
			},
			{
				name: 'Flutter > React Native',
				link: 'https://hackernoon.com/flutter-react-native-b5e82a2c3e82',
				publish_date: '????????/',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/FlutterReact.jpg?raw=true'
			},
			{
				name: 'Integrate Firebase With Your Application',
				link: 'https://medium.freecodecamp.org/how-to-integrate-firebase-with-your-application-74fdde01dfe2',
				publish_date: '????????/',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/IntegratingFirebase.jpg?raw=true'
			},
			{
				name: 'Why Friendships Are Dead',
				link: 'https://hackernoon.com/why-friendships-are-dead-4db6f27962da',
				publish_date: '????????/',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/Friendships.jpg?raw=true'
			},
			{
				name: 'What I Learned From Publishing Stories On Medium',
				link: 'https://medium.freecodecamp.org/what-ive-learned-from-publishing-stories-on-medium-9057da232465',
				publish_date: '????????/',
				background_image: 'https://github.com/TomerPacific/MediumArticles/raw/master/images/PublishingMedium.jpg?raw=true'
			},
			{
				name: 'How To Properly Give A Code Review',
				link: 'https://medium.freecodecamp.org/how-to-properly-give-a-code-review-c2fcc49e345f',
				publish_date: '????????/',
				background_image: 'https://github.com/TomerPacific/MediumArticles/blob/master/images/CodeReview.jpg?raw=true'
			},
		]
	},
	methods: {
		goToArticle: function(article) {
			window.open(article.link, '_blank');
		}
	}
})