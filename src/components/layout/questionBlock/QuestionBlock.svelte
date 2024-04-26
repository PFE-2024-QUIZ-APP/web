<script lang="ts">
	import Button from '../../Button.svelte';

</script>

<section class="question">
    <div class="question__container">
        <h2 class="question__title">test</h2>
        <div class="question__answers">
            <Button color="purple" title="Rejoindre" />
            <Button color="purple" title="Rejoindre" />
            <Button color="purple" title="Rejoindre" />
            <Button color="purple" title="Rejoindre" />
        </div>
        <div class="question__next"></div>
    </div>
</section>

<style lang="scss">
    .question {
        display: flex;
        align-items: center;
        &__container {
            position: relative;
            padding: 40px 60px;
            background-color: #386ea6;
            border-radius: 40px;
        }
        &__title {
            font-size: 24px;
            text-align: center;
            margin-bottom: 40px;
        }
        &__answers {
            display: flex;
            flex-wrap: wrap;
            column-gap: 20px;
            justify-content: space-between;
        }
        &__next {
            position: absolute;
            right: 10%;
            top: -20px;
            width: 80%;
            height: 100%;
            z-index: -1;
            border-radius: 40px;
            background-color: #4c7baf;
        }
    }
</style>
