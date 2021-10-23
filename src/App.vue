<template>
	<Top></Top>
	<router-view/>
</template>

<script setup>
import Top from "./components/Top";
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

html,body {
	margin: 0; padding: 0; width: 100%; height: 100%;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
