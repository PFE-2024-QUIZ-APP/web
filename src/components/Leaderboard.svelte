<script lang="ts">
	import avatar from '$lib/images/avatar_example.png';
	import crown from '$lib/images/crown.png';
	import { game } from '$lib/stores/game';
    import trophyBronze from '$lib/images/trophy/trophy_bronze.png';
    import trophyGold from '$lib/images/trophy/trophy_gold.png';
    import trophySilver from '$lib/images/trophy/trophy_silver.png';
    import Button from './Button.svelte';

</script>

<div class="results">
    <h1>Résultats</h1>
</div>

<div class="joueurs">
	<!-- Row Joueur that contain an imported avatar, a pseudo with a number of points and a crown -->
	<div class="liste-joueurs">
			<div class="row-joueur">
                <div class="rank">1
                    <span>.</span>
                </div>
				<div class="user-avatar">
					<div class="avatar-container">
						<img src={avatar} alt="avatar utilisateur" class="avatar-image" />
					</div>
				</div>
				<div class="infos-joueur">
					<div class="pseudo">Jojo</div>
					<div class="points">100 pts</div>
				</div>
                <div class="trophy">
                    <img src={trophyGold} alt="trophygold" />
                </div>
                <div class="crown">
                    <img src={crown} alt="crown" />
                </div>
			</div>

            <div class="row-joueur">
                <div class="rank">2
                    <span>.</span>
                </div>
				<div class="user-avatar">
					<div class="avatar-container">
						<img src={avatar} alt="avatar utilisateur" class="avatar-image" />
					</div>
				</div>
				<div class="infos-joueur">
					<div class="pseudo">Jojo</div>
					<div class="points">100 pts</div>
				</div>
                <div class="trophy">
                    <img src={trophySilver} alt="trophysilver" />
                </div>
                <div class="crown">
                    <img src={crown} alt="crown" />
                </div>
			</div>
                        
            <div class="row-joueur">
                <div class="rank">3
                    <span>.</span>
                </div>
				<div class="user-avatar">
					<div class="avatar-container">
						<img src={avatar} alt="avatar utilisateur" class="avatar-image" />
					</div>
				</div>
				<div class="infos-joueur">
					<div class="pseudo">Jojo</div>
					<div class="points">100 pts</div>
				</div>
                <div class="trophy">
                    <img src={trophyBronze} alt="trophysilver" />
                </div>
                <div class="crown">
                    <img src={crown} alt="crown" />
                </div>
			</div>
            
	</div>
</div>

<div class="play-methods">
    <Button color="purple" icon="replay" title="Rejouer" />
    <Button color="white" icon="home" title="Menu Principal" />
</div>

<style>

    .play-methods {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 470px;
        margin-top: 20px;
    }  

    .results {
        color: #fff;
        font-size: 4em;
        margin-bottom: 20px;
    }

    /* rank */
    .rank {
        color: #fff;
        font-size: 1.5em;
        margin-right: 20px;
        margin-left: 20px;
    }

    .trophy {
        margin-left: 20px;
    }

	/* joueurs */
	.joueurs {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 900px;
		height: 500px;
		background-color: #285f9f;
		border-radius: 20px;
        padding: 20px 0 20px 0;
	}

	/* row-joueur  */
	.row-joueur {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		width: 800px;
		padding: 10px;
		background-color: #094d92;
		margin-bottom: 3px;
		border-radius: 8px;
		/* border-bottom: #285f9f solid 3px; */
	}

	.row-joueur:first-child {
		margin-top: 0;
	}
	.row-joueur:last-child {
		margin-bottom: 0;
	}

	.infos-joueur {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		margin-left: 20px;
	}

	.crown {
		margin-left: auto;
	}

	.avatar-container {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #fff;
	}

	.avatar-container img {
		width: 100%;
		height: 100%;
	}
	.points {
		font-size: 1em;
		color: #fff;
	}
	.crown {
		width: 30px;
		height: 30px;
	}

	.liste-joueurs {
		height: 600px;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.liste-joueurs::-webkit-scrollbar {
		width: 5px;
		height: 10px;
		background-color: #84a6c8;
	}

	.liste-joueurs::-webkit-scrollbar-thumb {
		background-color: #fff;
		border-radius: 10px;
	}
</style>
