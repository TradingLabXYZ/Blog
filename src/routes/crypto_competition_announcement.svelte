<script context="module" lang="ts">
	/* export const prerender = true; */
  import { MetaTags } from 'svelte-meta-tags';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<script>
  import { page } from '$app/stores';
  const source = $page.url.searchParams.get('source');
</script>

<div>
  <Header/>
  <div class="bg-universe text-cream py-12 tracking-wider leading-8 text-xl">
    <div class="xs:w-10/12 lg:w-1/2 m-auto">
      <h1 class=" mb-3 xs:text-5xl sm:text-6xl">
        Crypto Competition Announcement
      </h1>
      <div class="xs:text-left sm:text-justify">
        <p>
          Building a crypto community around an online 
          service requires the development of innovative
          marketing strategies. We are thrilled today
          to publicly announce to our crypto community
          how TradingLab has prepared a first crypto
          competition in which you are invited to guess
          <b>how much a Bitcoin will be worth at the end of 
            May 2022</b>.
        </p>
        <div class="my-8">
          <a href="https://tradinglab.xyz/crypto_competition/guess_btc_price?source={source}" target="_blank">
            <button
              id="connectButton"
              class="p-2 flex m-auto font-bold rounded hover:bg-blueshine bg-magentashine"
              >
              Go to the competition
            </button>
          </a>
        </div>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Competition's prizes
        </h2>
        <p>
          The the total prize pool is around 80$. The three top predictions will win:
          <li>10 MM + 100 LAB</li>
          <li>5 MM + 50 LAB</li>
          <li>3 MM + 3 LAB</li>
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Million Token
        </h2>
        <p>
          We have decided to use Million Token as main coin for our prizes
          because of its unbeatable tokenomics. There are only 1'000'000 tokens in circulation,
          this makes extremely easy to understand the total prize of the competition.
          At the time of this writing 1 MM token is worth around 5$, so in total
          the winner will receive around 50$.
          Check out more about Million Token
          <u><a href="https://www.milliontoken.org/" target="_blank">
          on their official website</a></u>.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          TradingLab Token
        </h2>
        <p>
          In order to engage more our crypto community with TradingLab platform,
          we have created a native token which will be used in the future
          in multiple ways. For the moment this token will be distributed
          amount the competition's participants, rewarding user that will
          interact more and more with the platform.
          Check more information about TradingLab token 
          <u><a href="https://polygonscan.com/token/0x01962c00c783ce44c5b031c07435f2dc4a627394" rel="_blank">on the official page
          on Polyscan</a></u>.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Thanks
        </h2>
        <p>
          We want to express our gratitude to the Million Token community
          for the warm support during the development of this first competition.<br>
          The following members in particular:
          <li><u><a href="https://twitter.com/R3WIREDMM" rel="_blank">R3WIREDMM</a></u></li>
          <li><u><a href="https://twitter.com/simonsaysz" rel="_blank">CryptoQueen24</a></u></li>
          <li><u><a href="https://twitter.com/NFTYoutube" rel="_blank">NFT Daily</a></u></li>
          <li><u><a href="https://twitter.com/MetaMedallist" rel="_blank">Mad Max</a></u></li>
          <li><u><a href="https://twitter.com/Reprobus2" rel="_blank">Reprobus2</a></u></li>
        </p>
      </div>
    </div>
  </div>
  <Footer/>
</div>

<MetaTags
  title="TradingLab - Crypto Competition Announcement"
  description="Building a crypto community around an online  service requires the development of innovative marketing strategies. We are thrilled today to publicly announce to our crypto community how TradingLab has prepared a first crypto competition in which you are invited to guess how much a Bitcoin will be worth at the end of May 2022."
  canonical="https://blog.tradinglab.xyz/"
  openGraph={{
    url: 'https://blog.tradinglab.xyz/crypto_competition_announcement',
    type: 'article',
    title: 'TradingLab - Crypto Comeptition Announcement',
    description: 'Building a crypto community around an online  service requires the development of innovative marketing strategies. We are thrilled today to publicly announce to our crypto community how TradingLab has prepared a first crypto competition in which you are invited to guess how much a Bitcoin will be worth at the end of May 2022.',
    images: [
      {
        url: 'https://blog.tradinglab.xyz/articles/2_FirstCompetition/btcmm.png',
        width: 804,
        height: 755,
        alt: 'Bitcoin and Million Token'
      }
    ]
  }}
  twitter={{
    cardType: 'summary',
    title: 'TradingLab - Crypto Competition Announcement',
    description: 'Building a crypto community around an online  service requires the development of innovative marketing strategies. We are thrilled today to publicly announce to our crypto community how TradingLab has prepared a first crypto competition in which you are invited to guess how much a Bitcoin will be worth at the end of May 2022.',
    image: 'https://blog.tradinglab.xyz/articles/2_FirstCompetition/btcmm.png',
    imageAlt: 'Bitcoin and Million Token'
  }}
/>
