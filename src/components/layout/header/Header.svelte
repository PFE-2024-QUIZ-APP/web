<script>
	import logo from '$lib/images/logo.svg';
</script>

<div class="home-header">
	<img src={logo} alt="logo" />
	<h2>Le jeu de quiz à potentiel infini</h2>
</div>

<style lang="scss">
	.home-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		img {
			width: 12vw;
		}
		h2 {
			font-size: 1.2vw;
			color: white;
		}
	}
</style>
