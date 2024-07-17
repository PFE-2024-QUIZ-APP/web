<script lang="ts">
  // Import icons
  import Close from "svelte-material-icons/CloseBoxOutline.svelte";

  // Props
  export let color: "white" | "purple" | "green" | "red"; // Available classes : purple and white, from parent style.css
  export let icon:
    | "play"
    | "plus"
    | "close"
    | "replay"
    | "home"
    | "link"
    | undefined = undefined;
  export let disabled: boolean = false;
  export let question: boolean = false;
  export let active: boolean = false;
  export let percentage: number | undefined = undefined;
  export let disabledHover: boolean = false;
</script>

<button
  class={color}
  class:question
  class:active
  class:disabledHover
  class:percentage={percentage !== undefined}
  {disabled}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
>
  {#if icon == "play"}
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4613 9.30468L7.86723 3.30829L3.06021 0.303944C2.44364 -0.0812573 1.66663 -0.101797 1.03047 0.250745C0.394569 0.60303 0 1.27296 0 2.00005V20.0014C0 20.7285 0.394569 21.3984 1.03064 21.7509C1.33282 21.9184 1.66671 22.0016 2.00017 22.0016C2.3687 22.0016 2.73663 21.8999 3.06038 21.6976L7.86723 18.6931L17.4613 12.6969C18.0462 12.3314 18.4014 11.6904 18.4014 11.0008C18.4014 10.3112 18.0461 9.6702 17.4613 9.30468Z"
        fill="#F7F7FF"
      />
    </svg>
  {/if}

  {#if icon == "plus"}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1114_331)">
        <path
          d="M12 4.80005C12.6627 4.80005 13.2 5.33731 13.2 6.00005V10.8H18C18.6627 10.8 19.2 11.3373 19.2 12C19.2 12.6628 18.6627 13.2 18 13.2H13.2V18C13.2 18.6628 12.6627 19.2 12 19.2C11.3372 19.2 10.8 18.6628 10.8 18V13.2H5.99999C5.33725 13.2 4.79999 12.6628 4.79999 12C4.79999 11.3373 5.33725 10.8 5.99999 10.8H10.8V6.00005C10.8 5.33731 11.3372 4.80005 12 4.80005Z"
          fill="#8B85C1"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.6 24C1.61178 24 0 22.3883 0 20.4V3.6C0 1.61178 1.61178 0 3.6 0H20.4C22.3883 0 24 1.61178 24 3.6V20.4C24 22.3883 22.3883 24 20.4 24H3.6ZM2.4 20.4C2.4 21.0628 2.93726 21.6 3.6 21.6H20.4C21.0628 21.6 21.6 21.0628 21.6 20.4V3.6C21.6 2.93726 21.0628 2.4 20.4 2.4H3.6C2.93726 2.4 2.4 2.93726 2.4 3.6V20.4Z"
          fill="#8B85C1"
        />
      </g>
      <defs>
        <clipPath id="clip0_1114_331">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  {/if}

  {#if icon == "link"}
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4212 12.154L18.4689 14.0747L22.5643 10.2332C24.8262 8.11157 24.8262 4.67177 22.5643 2.55019C20.3026 0.428584 16.6354 0.428584 14.3735 2.55019L10.2781 6.39167L12.3258 8.31243L16.4212 4.47093C17.5522 3.41013 19.3858 3.41013 20.5166 4.47093C21.6476 5.53173 21.6476 7.25162 20.5166 8.31243L16.4212 12.154Z"
        fill="#8B85C1"
      />
      <path
        d="M12.3256 15.9955L14.3733 17.9162L10.2779 21.7577C8.01609 23.8793 4.34889 23.8793 2.08702 21.7577C-0.174841 19.6361 -0.174841 16.1963 2.08702 14.0747L6.18249 10.2332L8.23022 12.1539L4.13475 15.9955C3.00382 17.0562 3.00382 18.7761 4.13475 19.8369C5.26568 20.8977 7.09928 20.8977 8.23022 19.8369L12.3256 15.9955Z"
        fill="#8B85C1"
      />
      <path
        d="M16.4212 10.2329C16.9867 9.70251 16.9867 8.84251 16.4212 8.31211C15.8557 7.7817 14.939 7.7817 14.3734 8.31211L8.23026 14.0743C7.66478 14.6047 7.66478 15.4647 8.23026 15.9951C8.79572 16.5254 9.71254 16.5254 10.278 15.9951L16.4212 10.2329Z"
        fill="#8B85C1"
      />
    </svg>
  {/if}

  {#if icon == "close"}
    <Close width="1.5em" height="1.5em" />
  {/if}

  {#if icon == "replay"}
    <svg
      width="23"
      height="27"
      viewBox="0 0 23 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1195_2226)">
        <path
          d="M15.7843 14.196L11.9467 11.7848L10.0239 10.5768C9.77726 10.4219 9.46646 10.4137 9.21199 10.5554C8.95763 10.6971 8.7998 10.9664 8.7998 11.2588V18.4971C8.7998 18.7895 8.95763 19.0588 9.21206 19.2006C9.33293 19.2679 9.46649 19.3014 9.59987 19.3014C9.74729 19.3014 9.89446 19.2605 10.024 19.1792L11.9467 17.9711L15.7843 15.56C16.0183 15.413 16.1604 15.1553 16.1604 14.878C16.1604 14.6007 16.0182 14.343 15.7843 14.196Z"
          fill="#F7F7FF"
        />
        <path
          d="M18.4639 5.54489L17.2095 7.16477C19.913 9.27968 21.262 12.7038 20.7301 16.1017C19.9249 21.249 15.1035 24.7796 9.98304 23.9681C4.86287 23.1573 1.3521 18.3103 2.15697 13.1633C2.54698 10.6697 3.88002 8.47846 5.91005 6.99269C7.68211 5.6961 9.80096 5.07243 11.9596 5.19594L10.1944 7.05769L11.5039 8.31357L14.2905 5.37281L14.2912 5.37383L15.5395 4.05603L14.2309 2.80118L14.2303 2.80152L11.3059 0L10.0565 1.3178L11.9624 3.1426C9.37147 3.01944 6.83539 3.77653 4.70803 5.33312C2.23728 7.1415 0.614962 9.80892 0.139871 12.8444C-0.839919 19.1095 3.43284 25.0091 9.66517 25.9958C10.2652 26.0905 10.8611 26.1364 11.4502 26.1364C16.9818 26.136 21.861 22.0824 22.7472 16.4205C23.3948 12.2854 21.7534 8.11822 18.4639 5.54489Z"
          fill="#F7F7FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1195_2226">
          <rect width="23" height="26.1364" fill="white" />
        </clipPath>
      </defs>
    </svg>
  {/if}

  {#if icon == "home"}
    <svg
      width="21"
      height="26"
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.75 25.0115C1.88604 25.0115 0.375 23.4835 0.375 21.5988V10.2233C0.375 10.1848 0.376901 10.1467 0.380603 10.1091H0.375C0.375 9.4539 0.6324 8.82555 1.09058 8.36226L8.11352 1.26101C9.43148 -0.0717054 11.5684 -0.0717054 12.8865 1.26101L19.9094 8.36228C20.3676 8.82556 20.625 9.4539 20.625 10.1091H20.6194C20.6231 10.1467 20.625 10.1848 20.625 10.2233V21.5988C20.625 23.4835 19.114 25.0115 17.25 25.0115H3.75ZM11.2955 2.86974L18.375 10.0282V21.5988C18.375 22.227 17.8713 22.7364 17.25 22.7364H13.875V17.0487C13.875 15.1639 12.364 13.636 10.5 13.636C8.63599 13.636 7.125 15.1639 7.125 17.0487V22.7364H3.75C3.12868 22.7364 2.625 22.227 2.625 21.5988V10.0283L9.70451 2.86974C10.1438 2.42551 10.8562 2.42551 11.2955 2.86974Z"
        fill="#8B85C1"
      />
    </svg>
  {/if}

  {#if percentage !== undefined}<div
      class="proressBar"
      style="width: {percentage}%"
    ></div>{/if}
  <span style="z-index: 1;"><slot /></span>
</button>

<style lang="scss">
  button {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    gap: 5px;
    width: 220px;
    font-size: 20px;
    padding: 10px;
    width: 200px;
    border-radius: 8px;
    font-family: LuckiestGuy;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &.question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.disabledHover {
      pointer-events: none;
    }

    &.percentage {
      position: relative;

      .proressBar {
        border-radius: 8px;
        left: 0;
        position: absolute;
        height: 100%;
        background-color: aliceblue;
      }

      &.white {
        background-color: #eeeeee !important;

        .proressBar {
          background-color: #8b85c1 !important;
        }
      }

      &.purple {
        background-color: #aaa6cb !important;

        .proressBar {
          background-color: #8b85c1 !important;
        }
      }

      &.green {
        background-color: #abcebb !important;

        .proressBar {
          background-color: #8ed5a2;
        }
      }

      &.red {
        background-color: rgb(216, 117, 117) !important;

        .proressBar {
          background-color: #d23c3c !important;
        }
      }
    }

    &:disabled {
      opacity: 0.7;
      cursor: auto;
    }

    &.white {
      background-color: white;
      color: #8b85c1;
      box-shadow: 0px 5px #8b85c1;

      &:hover:not(:disabled):not(.active):not(.disabledHover),
      &.active {
        background-color: #eeeeee;
      }
    }

    &.purple {
      background-color: #8b85c1;
      color: white;
      box-shadow: 0px 5px white;

      &:hover:not(:disabled):not(.active):not(.disabledHover),
      &.active {
        background-color: #755b86;
      }
    }

    &.green {
      background-color: #8ed5a2;
      color: white;
      box-shadow: 0px 5px white;

      &:hover:not(:disabled):not(.active):not(.disabledHover),
      &.active {
        background-color: #abcebb;
      }
    }

    &.red {
      background-color: #d23c3c;
      color: white;
      box-shadow: 0px 5px white;

      &:hover:not(:disabled):not(.active):not(.disabledHover),
      &.active {
        background-color: #b33b3b;
      }
    }

    &:active:not(:disabled:not(.disabledHover)) {
      box-shadow: none;
      box-shadow: 0px 3px #8b85c1;
      transform: translate(0, 3px);
      -webkit-transform: translate(0, 3px);
      -moz-transform: translate(0, 3px);
    }
  }
</style>
