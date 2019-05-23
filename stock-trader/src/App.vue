<template>
	<v-app>
		<Header/>
		<v-content>
			<v-container>
				<transition name="router-anim" mode="out-in">
					<router-view></router-view>
				</transition>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/Header'
export default {
	components: {Header},
	created() {
		this.$store.dispatch('initStocks')
	}
}
</script>

<style>
	@keyframes slide-in {
		from { transform: translateY(-30px); opacity: 0;}
		to { transform: translateY(0px); opacity: 1;}
	}
	@keyframes slide-out {
		from { transform: translateY(0px); opacity: 1;}
		to { transform: translateY(-30px); opacity: 0;}
	}
	.slide-enter-active {
		animation: slide-in 0.3 ease;
	}
	.slide-leave-active {
		animation: slide-out 0.3 ease;
	}
	.fade-enter-active,
	.fade-leave-active {
	transition-duration: 0.2s;
	transition-property: opacity;
	transition-timing-function: ease;
	}

	.fade-enter,
	.fade-leave-active {
	opacity: 0
	}

	.router-anim-enter-active {
	animation: coming .2s;
	animation-delay: .2s;
	opacity: 0;
	}
	.router-anim-leave-active {
	animation: going .2s;
	}

	@keyframes going {
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(-30px);
		opacity: 0;
	}
	}
	@keyframes coming {
	from {
		transform: translateY(-30px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
	}
</style>

