<script lang="ts">
    import Button from './Button.svelte';
	import ThemesListing from './ThemesListing.svelte';

</script>

<section class="lobby">
	<header></header>
	<ThemesListing />
	<footer class="lobby__footer">
		<Button color="white" icon="plus" title="Innviter" on:click={() => alert('sqsdsq')} />
		<Button color="purple" icon="play" title="Lancer" />
	</footer>
</section>

<style lang="scss">
	.lobby {
		width: 60%;
		background-color: #094d92;
		padding: 40px 80px;
		border-radius: 40px;
		&__footer {
			gap: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>