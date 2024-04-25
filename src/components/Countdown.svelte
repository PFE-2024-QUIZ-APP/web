<script>
// Countdown timer for the game
let count = 5;
const interval = setInterval(() => {
    count--;
    if (count === 0) {
        clearInterval(interval);
    }
}, 1000);

</script>

<div class="countdown">
    <h1>{count}</h1>
</div>

<style>
/* timer */
h1 {
    font-size: 3em;
    color: #fff;
    background-color: #8B85C1;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>