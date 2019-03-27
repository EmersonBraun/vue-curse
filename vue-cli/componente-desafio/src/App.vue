<template>
	<v-app>
		<app-menu></app-menu>

		<app-toolbar></app-toolbar>

		<v-content>
			<app-carousel></app-carousel>
		</v-content>

		<app-footer></app-footer>
	</v-app>
</template>

<script>
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Toolbar from './components/Toolbar'
import Menu from './components/Menu'

export default {
	components: {
		'app-footer' : Footer,
		'app-carousel' : Carousel,
		'app-toolbar' : Toolbar,
		'app-menu' : Menu,
	},
}
</script>
