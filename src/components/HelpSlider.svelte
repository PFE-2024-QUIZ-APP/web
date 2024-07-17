<script>
  import Stalactit from "$lib/images/carousel/stalactite.png";
  import Igloo from "$lib/images/carousel/igloo.png";
  import Glace from "$lib/images/carousel/glace.png";
  import Trophe from "$lib/images/carousel/trophe.png";
  import Carousel from "$lib/components/Carousel.svelte";

  // Slider
  let items = [
    {
      label: "one",
      title: "Choisissez un mode de jeu",
      text: "L'host doit choisir entre le mode IA ou liste",
      alt: "stalatite",
      img: Stalactit,
    },
    {
      label: "two",
      title: "Choisissez un theme",
      text: "L'host doit choisir un theme avec un mot ou dans la liste",
      alt: "igloo",
      img: Igloo,
    },
    {
      label: "three",
      title: "Attente dans la room",
      text: "Une fois que tout les particpants sont prêt, la partie se lance",
      alt: "glace",
      img: Glace,
    },
    {
      label: "four",
      title: "Remportez la partie !",
      text: "Gagnez en répondant correctement aux plus de questions",
      alt: "trophé",
      img: Trophe,
    },
  ];

  let current = 0;
  let show = 1;
</script>

<section class="how-to-play-container">
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
        style="width:{i == current ? '36px' : '16px'}; background-color:{i ==
        current
          ? '#fff'
          : '#BBB'};"
      ></li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .how-to-play-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 363px;
    border: 4px solid #094e92a1;
    border-radius: 40px;
    height: 404px;

    h2 {
      font-size: 20px;
      color: white;
      text-align: center;
      margin: 40px 0 20px 0;
    }

    .carousel-item {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;

      &__img {
        max-height: 128px;
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
        padding: 0 68px;
        text-align: center;

        &-title {
          font-size: 20px;
        }

        &-text {
          font-size: 14px;
          text-align: center;
        }
      }
    }

    .pagination {
      display: flex;
      gap: 10px;
      margin: 25px 0;

      &__item {
        cursor: pointer;
        height: 16px;
        border-radius: 10px;
        transition: 0.3s;
      }
    }
  }
</style>
