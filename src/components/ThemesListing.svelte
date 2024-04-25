<script lang="ts">
    import glace from '$lib/images/carousel/glace.png';
	// Listing
	let items = [
		{
			id: 1,
			title: 'Géographie',
            img: glace
		},
		{
			id: 2,
			title: 'Musique',
            img: glace
		},
		{
			id: 3,
			title: 'Histoire',
            img: glace
		},
		{
			id: 4,
			title: 'Sport',
            img: glace
		},
        {
			id: 5,
			title: 'Animaux',
            img: glace
		},
		{
			id: 6,
			title: 'Science',
            img: glace
		},
		{
			id: 7,
			title: 'Cinéma',
            img: glace
		},
		{
			id: 8,
			title: 'Jeux-vidéos',
            img: glace
		}
	];

</script>

<div class="themes">
    <h3 class="themes__title">Sélectionne un theme</h3>
    <ul class="themes-listing scrollbar">
        {#each items as item}
            <li class="themes-item" key={item.id}>
                <img class="themes-item__img" src="{item.img}" alt="">
                <h4 class="themes-item__title">{item.title}</h4>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .themes {
        &__title {
            text-align: center;
            margin-bottom: 20px;
            font-size: 18px;
        }
        &-listing {
            max-height: 500px;
            overflow-y: scroll;
            display: flex;
            flex-wrap: wrap;
            column-gap: 20px;
            &::-webkit-scrollbar-track
            {
                -webkit-box-shadow: inset 0 0 6px #84A6C8;
                border-radius: 10px;
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar
            {
                width: 12px;
                border-radius: 10px;
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar-thumb
            {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px #84A6C8;
                background-color: #84A6C8;
            }
        }
        &-item {
            width: calc((100% / 3) - 65px);
            background-color: white;
            padding: 20px;
            border-radius: 20px;
            margin-bottom: 20px;
            border: 4px white solid;
            color: #8b85c1;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            &:hover {
                background-color: #8b85c1;
                color: white;
            }
            &__img {
                width: 80%;
                margin-bottom: 20px;;
            }
            &__title {
                font-size: 16px;
            }
        }
    }
</style>