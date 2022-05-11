<script context="module" lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import Arrow from '../components/svg/Arrow.svelte';
</script>

<script>
const platforms = {
  DappRadar: {
    url: "https://dappradar.com/polygon/defi/tradinglab",
    textDisplay: "1 - DappRadar",
    text: `DappRadar provides a global app store for decentralized applications.
           The platform enables users to track, analyze, and discover 
           decentralized applications. It tracks over 3,000  dapps across 
           10+ blockchains, including Ethereum, EOS, ONT, and TRON, 
           with plans to expand to others.`
  },
  StateOfTheDapps: {
    url: "https://www.stateofthedapps.com/dapps/tradinglab",
    textDisplay: "2 - State of the Dapp",
    text: `State of the DApps is a not-for-profit curated directory of 
           Decentralized Applications, also called DApps, which run on 
           various several blockchains. State of the DApps was initially 
           created to categorize and showcase developed projects built on 
           the Ethereum Blockchain, but more recently we have added support 
           for EOS, Steem and Hive.`
  },
  "Dapp.com": {
    url: "https://www.dapp.com/app/tradinglab",
    textDisplay: "3 - Dapp.com",
    text: `Where decentralization becomes reality for all.
           Dapp.com is the cross-chain platform for everyone to discover, 
           use, and enjoy dapps with ease. Explore 3,000+ dapps built on 
           Ethereum, EOS, Tron, Klaytn, NEO, Steem, IOST, TomoChain, and more.`
  },
  TheHiveIndex: {
    url: "https://thehiveindex.com/communities/trading-lab/",
    textDisplay: "4 - The Hive Index",
    text: `Free resource for professionals, creatives, students, teachers, 
           entrepreneurs, and those that are just looking for some likeminded souls 
           to hang out with.`
  },
  DappExpert: {
    url: "https://dapp.expert/dapp/en-matic-tradinglab",
    textDisplay: "5 - Dapp Expert",
    text: `An up-to-date, exciting and high-quality analysis of decentralized 
    applications, allowing to always ve aware of all events on the blockchain.`
  },
}
</script>

<div>
  <Header/>
  <div class="bg-universe text-cream py-12 tracking-wider leading-8 text-xl">
    <div class="xs:w-10/12 lg:w-1/2 m-auto">
      <h1 class=" mb-3 xs:text-5xl sm:text-6xl py-6">
        Tradinglab Gains Visibility
      </h1>
      <div class="xs:text-left sm:text-justify">
        <p>
        For TradingLab, being listed by crypto communities is a mandatory 
        step to keep growing. This article describes the main reasons, 
        as well as an overview of all our partners.
        </p><br>
        <p>
          First of all, to get listed it is necessary to 
          pass an initial screen of questions. If those questions are not
          properly addressed, the application is rejected. So it is always a 
          good exercise trying to get listed because it is possible to 
          identify weaknesses and dark spots within your idea.
        </p><br>
        <p>
          A second beneficial point comes from improving SEO exposition
          of a page. Google and other search engines will start realizing that
          your project is relevant, increasing your chances to appear on 
          search engines' results.
        </p><br>
        <p>
          As third point, being listed means giving strength 
          to a project, because of the coumponded effect of the web. Users see
          TradingLab on a certain page, remember the brand, and potentially
          return to it in the future.
        </p><br>
        <p>Lastly, being listed means having a ton of cool material to share and 
        post on the different social networks, engaging users, and creating a 
        positive network effect.
        </p><br>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Where TradingLab has been listed on?
        </h2>
        <img
          src="/articles/4_CommunityLinks/community_logos.png"
          class="xs:h-64 sm:h-96 rounded-xl p-2 m-auto"
          alt="Crypto Community Listed">
        {#each Object.entries(platforms) as [_, platform]}
        <div>
          <a href="{platform.url}" target="_blank">
            <h3 class="mt-6 mb-3 font-bold text-2xl flex flex-row justify-start items-center space-x-2">
              <div>
                {platform.textDisplay}
              </div>
              <Arrow color={'text-indigo-400'}/>
            </h3>
          </a>
          <p>
            {platform.text} 
          </p>
        </div>
        {/each}
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          A final word
        </h2>
        <p>
        TradingLab wants to officially and publicly thank all the crypto 
        communities listed above for their kindness and availability. 
        They all have demonstrated professionalism and fast responses, 
        so guys, thank you so much!
      </div>
    </div>
  </div>
  <Footer/>
</div>

<MetaTags
  title="Tradinglab Gains Visibility"
  description="For TradingLab, being listed by crypto communities is a mandatory step to grow for several reasons. First of all, to get listed it is necessary to  pass an initial screen of questions. If those questions are not properly addressed, the application is rejected. So it is always a good exercise trying to get listed."
  canonical="https://blog.tradinglab.xyz/"
  openGraph={{
    url: 'https://blog.tradinglab.xyz/tradinglab_crypto_community_gains_visibility',
    type: 'article',
    title: 'Tradinglab Gains Visibility',
    description: 'For TradingLab, being listed by crypto communities is a mandatory step to grow for several reasons. First of all, to get listed it is necessary to  pass an initial screen of questions. If those questions are not properly addressed, the application is rejected. So it is always a good exercise trying to get listed.',
    images: [
      {
        url: 'https://blog.tradinglab.xyz/articles/4_CommunityLinks/community_logos.png',
        width: 804,
        height: 755,
        alt: 'Crypto Community in which TradingLab is listed on'
      }
    ]
  }}
  twitter={{
    cardType: 'summary',
    title: 'Tradinglab Gains Visibility',
    description: 'For TradingLab, being listed by crypto communities is a mandatory step to grow for several reasons. First of all, to get listed it is necessary to  pass an initial screen of questions. If those questions are not properly addressed, the application is rejected. So it is always a good exercise trying to get listed.',
    image: 'https://blog.tradinglab.xyz/articles/4_CommunityLinks/community_logos.png',
    imageAlt: 'Crypto communities in which Tradinglab is listed on'
  }}
/>
