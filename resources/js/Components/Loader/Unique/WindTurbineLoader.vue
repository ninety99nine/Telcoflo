<template>

    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7065 83.7114C19.2814 84.8056 21.4325 84.7426 22.9382 83.5597L23.3019 83.2743C25.4647 81.5759 28.4854 81.5746 30.6482 83.2743L30.8242 83.4119C32.4238 84.6693 34.6596 84.6693 36.2605 83.4119L36.4352 83.2743C38.598 81.5759 41.6186 81.5759 43.7815 83.2743L43.9561 83.4119C45.5571 84.6693 47.7929 84.6693 49.3938 83.4119L49.5685 83.2743C51.7313 81.5759 54.7519 81.5759 56.9147 83.2743L57.0907 83.4119C58.6903 84.6693 60.9261 84.6693 62.5271 83.4119L62.7018 83.2743C64.8646 81.5759 67.8852 81.5759 70.048 83.2743L70.2227 83.4119C71.8236 84.6693 74.0594 84.6693 75.6603 83.4119C77.9053 81.6479 81.0928 81.7302 83.2425 83.6073" :stroke="'#'+color+'50'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" id="waves-bottom"/>
        <path d="M17.7065 79.7114C19.2814 80.8056 21.4325 80.7426 22.9382 79.5597L23.3019 79.2743C25.4647 77.5759 28.4854 77.5746 30.6482 79.2743L30.8242 79.4119C32.4238 80.6693 34.6596 80.6693 36.2605 79.4119L36.4352 79.2743C38.598 77.5759 41.6186 77.5759 43.7815 79.2743L43.9561 79.4119C45.5571 80.6693 47.7929 80.6693 49.3938 79.4119L49.5685 79.2743C51.7313 77.5759 54.7519 77.5759 56.9147 79.2743L57.0907 79.4119C58.6903 80.6693 60.9261 80.6693 62.5271 79.4119L62.7018 79.2743C64.8646 77.5759 67.8852 77.5759 70.048 79.2743L70.2227 79.4119C71.8236 80.6693 74.0594 80.6693 75.6603 79.4119C77.9053 77.6479 81.0928 77.7302 83.2425 79.6073" :stroke="'#'+color+'50'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" id="waves-top"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.4993 48C47.3967 48 46.5 47.1022 46.5 45.9986C46.5 44.8978 47.3967 44 48.4993 44C49.6033 44 50.5 44.8978 50.5 45.9986C50.5 47.1022 49.6033 48 48.4993 48Z" :fill="'#'+color+'50'" :stroke="'#'+color+'80'" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M76.7993 58.3031L61.8431 46.2725C61.5116 46.0066 61.1144 45.8672 60.6921 45.8672C60.0187 45.8672 59.4017 46.2282 59.0795 46.8122C58.4638 47.9305 57.28 48.6239 55.9922 48.6239C55.3187 48.6239 54.661 48.4336 54.0927 48.0686C51.4567 46.2817 49.8032 43.349 49.6493 40.213L48.4431 15.7218C48.3826 14.5331 47.4723 14 46.5976 14C45.8675 14 45.0138 14.391 44.8112 15.4872L41.3294 34.2616C41.2307 34.7934 41.3741 35.3369 41.724 35.7514C42.0726 36.1672 42.5869 36.4044 43.1315 36.4044C44.1049 36.4044 45.0427 36.8111 45.7057 37.5162C46.3674 38.2227 46.7081 39.1768 46.6383 40.1387L46.5818 40.5701C46.2029 43.4259 44.606 45.9923 42.2015 47.6098L21.3075 61.6724C20.3078 62.3541 20.4709 63.2951 20.588 63.6653C20.7959 64.33 21.4036 65 22.2902 65C22.5243 65 22.769 64.9518 23.0176 64.854L40.9702 57.9342C41.4793 57.7374 41.87 57.332 42.0436 56.8185C42.2159 56.3075 42.1515 55.7497 41.8647 55.2883C41.3543 54.4684 41.2097 53.4635 41.4675 52.5354C41.7266 51.6061 42.3685 50.8189 43.2314 50.3731L43.2827 50.347L43.6142 50.2023C44.9125 49.6406 46.2871 49.3564 47.7038 49.3564C49.2455 49.3564 50.7924 49.7096 52.1775 50.3809L74.8525 61.3504C75.134 61.4834 75.4181 61.5525 75.6944 61.5525C76.552 61.5525 77.165 60.9125 77.3925 60.279C77.5175 59.9284 77.7096 59.0356 76.7993 58.3031Z" :fill="'#'+color+'50'" :stroke="'#'+color+'80'" id="turbine"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.682 79C51.2491 79 50.8873 78.6776 50.8664 78.2613L49.501 51.8142C49.4787 51.386 49.8267 51.0213 50.2776 51.0015C50.7342 50.975 51.1127 51.3094 51.135 51.7375L52.499 78.1873C52.5213 78.6141 52.1733 78.9775 51.7224 78.9987L51.682 79Z" :fill="'#'+color+'80'" id="rightleg"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2857 81L45.2456 80.9987C44.8125 80.976 44.4784 80.61 44.5011 80.1787L45.9299 51.7441C45.9526 51.3115 46.3175 50.9761 46.7546 51.0013C47.1876 51.0226 47.5204 51.39 47.499 51.82L46.0689 80.2559C46.0475 80.6752 45.7013 81 45.2857 81Z" :fill="'#'+color+'80'" id="leftleg"/>
    </svg>

</template>

<script>

/**
 *  Reference 1: https://codepen.io/joaoeaugusto/pen/EBWZdq
 */
export default {
    props: {
        color: {
            type: String,
            default: '409eff'
        }
    }
}
</script>

<style scoped>

    svg {
        font-size: 1rem;
        max-width: 8rem;
    }

    #bg {
        fill: url(#grad) #447799;
    }

    #turbine {
        -webkit-animation: turbine 7s linear infinite;
                animation: turbine 7s linear infinite;
        transform-origin: center 62.5%;
        transform-box: fill-box;
    }

    @-webkit-keyframes turbine {
        to {
            transform: rotate(1turn);
        }
    }

    @keyframes turbine {
        to {
            transform: rotate(1turn);
        }
    }
    #waves-top {
        transform-origin: center;
        stroke-dasharray: 50 10 40 10;
        stroke-dashoffset: 220;
        -webkit-animation: svg-dash 17s linear infinite, wave 3s ease-in-out infinite alternate;
                animation: svg-dash 17s linear infinite, wave 3s ease-in-out infinite alternate;
    }

    #waves-bottom {
        transform-origin: center;
        stroke-dasharray: 30 8 60 10;
        stroke-dashoffset: 216;
        -webkit-animation: svg-dash 13s linear infinite, wave 3s ease-in-out infinite alternate;
                animation: svg-dash 13s linear infinite, wave 3s ease-in-out infinite alternate;
    }

    @-webkit-keyframes wave {
        to {
            transform: translateX(0.15em);
        }
        from {
            transform: translateX(-0.15em);
        }
    }

    @keyframes wave {
        to {
            transform: translateX(0.15em);
        }
        from {
            transform: translateX(-0.15em);
        }
    }
    @-webkit-keyframes svg-dash {
        to {
            stroke-dashoffset: 0;
        }
    }
    @keyframes svg-dash {
        to {
            stroke-dashoffset: 0;
        }
    }

</style>
