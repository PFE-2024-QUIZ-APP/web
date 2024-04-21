<script lang="ts">
    	import avatar from '$lib/images/avatar_example.png';
        import crown from '$lib/images/crown.png';
        import vide from '$lib/images/joueur-vide.png';
</script>

<div class="joueurs">
    <div class="nb-joueurs">
        <div class="nb-joueurs-text">Joueurs :</div>
        <div class="nb-joueurs-number">3</div>
    </div>
        <!-- Row Joueur that contain an imported avatar, a pseudo with a number of points and a crown -->
    <div class="liste-joueurs">
        <div class="row-joueur">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={avatar} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Jonathan</div>
                <div class="points">1000000 pts</div>
            </div>
            <div class="crown">
                <img src={crown} alt="crown">
            </div>
        </div>

        <div class="row-joueur">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={avatar} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Jonathan</div>
                <div class="points">1000000 pts</div>
            </div>
        </div>

        <div class="row-joueur">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={avatar} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Jonathan</div>
                <div class="points">100000 pts</div>
            </div>
        </div>

        <div class="row-joueur">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={avatar} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Jonathan</div>
                <div class="points">100000 pts</div>
            </div>
        </div>

        <div class="row-joueur">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={avatar} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Jonathan</div>
                <div class="points">100000 pts</div>
            </div>
        </div>

        <div class="row-joueur">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={avatar} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Jonathan</div>
                <div class="points">100000 pts</div>
            </div>
        </div>

        <div class="row-joueur row-joueur-vide">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={vide} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Vide</div>
                <!-- <div class="points">0 pts</div> -->
            </div>
        </div>
        <div class="row-joueur row-joueur-vide">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={vide} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Vide</div>
                <!-- <div class="points">0 pts</div> -->
            </div>
        </div>

        <div class="row-joueur row-joueur-vide">
            <div class="user-avatar">
                <div class="avatar-container">
                    <img src={vide} alt="avatar utilisateur" class="avatar-image" />
                </div>
            </div>
            <div class="infos-joueur">
                <div class="pseudo">Vide</div>
                <!-- <div class="points">0 pts</div> -->
            </div>
        </div>
        

</div>
</div>

<style>
    /* joueurs */
    .joueurs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 360px;
        height: 700px;
        background-color: #285f9f;
        border-radius: 20px;
    }
    /* nb-joueurs */
    .nb-joueurs {
        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: center;
        width: 300px;
        padding: 25px 15px 25px 15px;
        border-radius: 20px 20px 0px 0px;
    }
    .nb-joueurs-number{
        padding-left : 7px;
    }

    /* nb-joueurs center */
    .nb-joueurs-text, .nb-joueurs-number {
        font-size: 1.5em;
        color: #fff;
    }
    
    /* row-joueur  */
	.row-joueur {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		width: 300px;
		padding: 10px;
		background-color: #094D92;
        margin-bottom: 3px;
        border-radius: 8px;
        /* border-bottom: #285f9f solid 3px; */
    }

    .row-joueur:first-child {
        margin-top: 0;
    }
    .row-joueur:last-child {
        margin-bottom: 0 ;
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
    .row-joueur-vide .avatar-container{
        border: 1px solid #84A6C8 ;
    }
    .row-joueur-vide .infos-joueur {
        color: #84A6C8;
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
        background-color: #84A6C8 ;
    }

    .liste-joueurs::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 10px;
    }


</style>