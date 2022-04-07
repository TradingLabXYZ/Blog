<script context="module" lang="ts">
  import Discord from '../components/svg/Discord.svelte';
  import Twitter from '../components/svg/Twitter.svelte';
  import Github from '../components/svg/Github.svelte';
  import Metafora from '../components/svg/Metafora.svelte';
  import Youtube from '../components/svg/Youtube.svelte';
</script>

<div class="flex flex-col justify-center pb-20 -mt-20 text-center pt-44 bg-gradient-to-br from-universelight via-universe to-universe space-y-4">
  <div class="flex flex-row justify-center xs:space-x-2 sm:space-x-6">
    <button>
      <a href="https://discord.gg/PEEUfrbQ9c" target="_blank">
        <Discord/>
      </a>
    </button>
    <button>
      <a href="https://twitter.com/TradingLabXYZ" target="_blank">
        <Twitter/>
      </a>
    </button>
    <button>
      <a href="https://github.com/TradingLabXYZ" target="_blank">
        <Github/>
      </a>
    </button>
    <button>
      <a href="https://www.metafora.app/tradinglab" target="_blank">
        <Metafora/>
      </a>
    </button>
    <button>
      <a href="https://www.youtube.com/channel/UC0MysGuteFUSLrTpzSHdoIg" target="_blank">
        <Youtube/>
      </a>
    </button>
  </div>
  <div class="flex flex-row justify-center space-x-2">
    <img src="logo.png" class="h-8" alt="Logo">
    <div class="text-2xl font-semibold text-magentashine">
      TradingLab
    </div>
  </div>
  <div class="font-normal text-cream text-md">
    Copyright © tradinglab.xyz 2022
  </div>
</div>
