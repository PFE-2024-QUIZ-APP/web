<script lang="ts">
	// Main layouts
	import Home from '../components/layout/home/Home.svelte';
	import Code from '../components/layout/code/Code.svelte';
	import Header from '../components/layout/header/Header.svelte';
	import Footer from '../components/layout/footer/Footer.svelte';

	let isDisplayHeader: boolean = true;
	let isDisplayHomePage: boolean = true;
	let isDisplayCodePage: boolean = false;
	let isDisplayFooter: boolean = true;

	const handleDisplayHomePage = () => {
		isDisplayHomePage = true;
		isDisplayCodePage = false;
	};

	const handleDisplayCodePage = () => {
		isDisplayHomePage = false;
		isDisplayCodePage = true;
	};

</script>

<div class="container">
	{#if isDisplayHeader}
		<Header />
	{/if}

	{#if isDisplayHomePage}
		<Home on:goToCodePage={handleDisplayCodePage} />
	{/if}

	{#if isDisplayCodePage}
		<Code />
	{/if}

	{#if isDisplayFooter}
		<Footer />
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 70vw;
		margin: auto;
	}
</style>
