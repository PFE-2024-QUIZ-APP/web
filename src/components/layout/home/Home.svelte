<script lang="ts">
	import avatar from '$lib/images/avatar_example.png';
	import Refresh from 'svelte-material-icons/Refresh.svelte';
	import Button from '../../Button.svelte';
	import InputText from '../../InputText.svelte';
	import stalactit from '$lib/images/carousel/stalactite.png';
	import igloo from '$lib/images/carousel/igloo.png';
	import glace from '$lib/images/carousel/glace.png';
	import trophé from '$lib/images/carousel/trophé.png';
	import Carousel from '../../Carousel.svelte';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { gameCreation } from '$lib/stores/gameCreation';

	const dispatch = createEventDispatcher();

	let isInvitedWithLink: boolean = false;

	let pseudo: string = '';

	$: gameCreation.set({
		userName: pseudo,
		avatar: 'avatar_1',
		room: null,
		isCreation: false
	});

	const handleGoToCodePage = () => {
		dispatch('goToCodePage');
	};

	const handleGoToGame = () => {
		gameCreation.update((game) => {
			return {
				...game,
				isCreation: true
			};
		});

		goto('/game');
	};

	// Slider
	let items = [
		{
			label: 'one',
			title: 'Choisissez un mode de jeu',
			text: "L'host doit choisir entre le mode IA ou liste",
			alt: 'stalatite',
			img: stalactit
		},
		{
			label: 'two',
			title: 'Choisissez un theme',
			text: "L'host doit choisir un theme avec un mot ou dans la liste",
			alt: 'igloo',
			img: igloo
		},
		{
			label: 'three',
			title: 'Attente dans la room',
			text: 'Une fois que tout les particpants sont prêt, la partie se lance',
			alt: 'glace',
			img: glace
		},
		{
			label: 'four',
			title: 'Remportez la partie !',
			text: 'Gagnez en répondant correctement aux plus de questions',
			alt: 'trophé',
			img: trophé
		}
	];

	let current = 0;
	let show = 1;
</script>

<div class="home-content">
	<div class="how-to-play-container">
		<h2 class="font-stroke">Comment jouer au jeu ?</h2>
		<Carousel bind:current {items} let:item bind:show>
			<div class="carousel-item">
				<div class="carousel-item__img">
					<img src={item.img} alt={item.alt} />
				</div>
				<div class="carousel-item__content">
					<h3 class="carousel-item__content-title">{item.title}</h3>
					<p class="carousel-item__content-text">{item.text}</p>
				</div>
			</div>
		</Carousel>
		<ul class="pagination">
			{#each items as item, i}
				<li
					class="pagination__item"
					on:click={() => (current = i)}
					style="width:{i == current ? '36px' : '16px'}; background-color:{i == current
						? '#fff'
						: '#BBB'};"
				></li>
			{/each}
		</ul>
	</div>

	<div class="play-container">
		<div class="play-container-top">
			<div class="user-avatar">
				<div class="avatar-container">
					<img src={avatar} alt="avatar utilisateur" class="avatar-image" />
					<button>
						<Refresh width="2em" height="2em" />
					</button>
				</div>
			</div>
			<div class="username">
				<h2>Choisis un avatar et ton pseudo</h2>
				<form>
					<InputText bind:text={pseudo} />
				</form>
				{#if isInvitedWithLink}
					<Button color="purple" icon="play" title="Rejoindre" on:click={handleGoToCodePage} />
				{/if}
			</div>
		</div>
		{#if !isInvitedWithLink}
			<div class="play-methods">
				<Button color="white" icon="plus" title="Créer un salon" on:click={handleGoToGame} />
				<Button color="purple" icon="play" title="Rejoindre" on:click={handleGoToCodePage} />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.home-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: 55vh;
		margin-top: 5vh;
		.how-to-play-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 30%;
			padding: 20px;
			border: 4px solid #094e92a1;
			border-radius: 40px;
			h2 {
				font-size: 1.4vw;
				color: white;
				text-align: center;
			}
		}
		.play-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 40%;
			padding: 60px 75px;
			background-color: #094d92;
			border: 4px solid #094e92a1;
			border-radius: 40px;
			margin-left: 20px;
			.play-container-top {
				display: flex;
				flex-direction: row;
				align-items: center;
				.user-avatar {
					display: flex;
					flex-direction: column;
					.avatar-container {
						position: relative;
						img {
							width: 140px;
							height: 140px;
							border: 4px solid white;
							border-radius: 300px;
						}
						button {
							display: flex;
							justify-content: center;
							align-items: center;
							position: absolute;
							bottom: 10px;
							right: 10px;
							width: 40px;
							height: 40px;
							background: white;
							border: none;
							border-radius: 50px;
							text-align: center;
							color: #8b85c1;
						}
					}
				}
				.username {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-left: 50px;
					h2 {
						font-size: 1.4vw;
						text-align: center;
					}
				}
			}
			.play-methods {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 470px;
				margin-top: 20px;
			}
		}
	}
	.carousel-item {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		&__img {
			max-height: 150px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: auto;
				height: 100%;
			}
		}
		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			&-text {
				text-align: center;
			}
		}
	}
	.pagination {
		display: flex;
		gap: 10px;
		&__item {
			cursor: pointer;
			height: 16px;
			border-radius: 10px;
			transition: 0.3s;
		}
	}
</style>
