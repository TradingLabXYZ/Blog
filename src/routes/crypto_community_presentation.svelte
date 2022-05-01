<script context="module" lang="ts">
	/* export const prerender = true; */
  import { MetaTags } from 'svelte-meta-tags';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<script>
  import { page } from '$app/stores';
import { listen } from 'svelte/internal';
  const source = $page.url.searchParams.get('source');
</script>

<div>
  <Header/>
  <div class="bg-universe text-cream py-12 tracking-wider leading-8 text-xl">
    <div class="xs:w-10/12 lg:w-1/2 m-auto">
      <h1 class=" mb-3 xs:text-5xl sm:text-6xl">
        Crypto Community Presentation
      </h1>
      <div class="xs:text-left sm:text-justify">
        <p>
          They say that the first time is the most difficult one,
          not sure if it is true, but our first public speaking
          to a crypto community could not have been better.
          We have been invited from the Million Token
          community in their discord server to present 
          TradingLab.
        </p>
        <div class="my-8">
          <a href="https://www.youtube.com/watch?v=knR8wWc5jNo" target="_blank">
            <button
              class="p-2 flex m-auto font-bold rounded hover:bg-blueshine bg-magentashine"
              >
              Go to the YoutTube video
            </button>
          </a>
        </div>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          The importance of being prepared
        </h2>
        <p>
          A few days earlier the presentation to the crypto community
          we have been preparing our strategy. Strategy? Yes strategy!
          Everything needs to be carefully planned ahead, following a precise strategy.
          Initially we have created a  
          <a href="https://github.com/TradingLabXYZ/Docs/blob/main/Marketing/Videos/20220423_discord.md" target="_blank">
            <u>plot</u>
          </a>:
          <li>The goal is giving a good first impression of TradingLab.</li>
          <li>Initial greeting and brief personal presentation.</li>
          <li>TradingLab vision.</li>
          <li>Explaining why the idea of laboratory and why hyper hybrid.</li>
          <li>TradingLab's roadmap, development, marketing and decentralization.</li>
          <li>Live demo.</li>
          <li>Different marketing strategies.</li>
          <li>What the future will bring to TradingLab.</li>
          Moreover to be fully prepared, we have been udpating our social media with posts
          saying how the live session was going live. On Discord we have created an official
          event which was subscribed by over 20 discord members.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Technicalities
        </h2>
        <p>
        The inital idea was to simply share our laptop screen on Discord, and at the same time
        streaming on YouTube, relying for such purpose on one of the greatest software 
        ever made: <a href="https://obsproject.com/" target="_blank"><u>OBS</u></a>.
        Unfortunately a few minutes before the presentation we realized how YouTube did 
        not enable our account for live streaming. Well, somehow our life got easier.
        We prepared OBS with a few scenes ready:
        <li>A Google Drive presentation with a few cool slides</li>
        <li>A Chrome tab ready for the main demo</li> 
        <li>An incognito Chrome tab ready for the privacy demo</li> 
        The tricky part has been being able to switch on Obs to change correctly 
        and on time the scenes, during the presentation a few mistakes have been made.
        Moreover, we had a proper microphone to increase audio quality as much as possible.
        NEVER underestimate the importance of audio quality.
        <p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Going live and getting ready for the uncertain
        </h2>
        <p>
          Despite we were well prepared, during the live session a few things could have been
          better managed. For example the switch between scenes, the speed of the talk, 
          audience's questions not audible, the bad explanation of the future plans.
          Well, the room for improvement is pretty big, and we are happy with the final result.
          We have been able to record the session, and after a few changes it fully lives 
          YouTube.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Feedback received from the community
        </h2>
        <p>
          The response from Million Token community has been impressive, and again,
          we want to thank everybody for their kindness. We have received many
          interesting questions during the final AMA, and we are already working
          on a few ideas suggested by the audience. Moreover, we have been told
          how the whole community has collaborated at once, creating a really
          positive environment in which anonymous people have been able
          to feeling part of something bigger. It is really incredible and
          we can't wait to repeate this experiment.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Engagement and conclusion
        </h2>
        <p>
          This live session has been able to have a really positive impact
          from a website traffic standpoint. We have registered a spike
          of visits, due to the Discord Event as well as a few tweets
          from different Twitter influencers. Now also a YouTube video
          is available, which will continute to generate visualisations 
          over time. This public speaking session has been a really great
          idea also because it has allowed TradingLab's team to train 
          and enforce public speaking skills. We all feel more confident
          now and we are looking forward to speaking soon again.
        </p>
      </div>
    </div>
  </div>
  <Footer/>
</div>

<MetaTags
  title="TradingLab - Crypto Community Presentation"
  description="They say that the first time is the most difficult one, not sure if it is true, but our first public speaking to a crypto community could not have been better. We have been invited from the Million Token community in their discord server to present TradingLab."
  canonical="https://blog.tradinglab.xyz"
  openGraph={{
    url: 'https://blog.tradinglab.xyz/crypto_community_presentation',
    type: 'article',
    title: 'TradingLab - Crypto Community Presentation',
    description: 'They say that the first time is the most difficult one, not sure if it is true, but our first public speaking to a crypto community could not have been better. We have been invited from the Million Token community in their discord server to present TradingLab.',
    images: [
      {
        url: 'https://dashboard-assets.dappradar.com/document/15493/tradinglab-dapp-social-matic-image3_b56a55e633f4804163b76694de1ab4a8.png',
        width: 1268,
        height: 845,
        alt: 'TradingLab Homepage'
      }
    ]
  }}
  twitter={{
    cardType: 'summary',
    title: 'TradingLab - Crypto Community Presentation',
    description: 'They say that the first time is the most difficult one, not sure if it is true, but our first public speaking to a crypto community could not have been better. We have been invited from the Million Token community in their discord server to present TradingLab.',
    image: 'https://dashboard-assets.dappradar.com/document/15493/tradinglab-dapp-social-matic-image3_b56a55e633f4804163b76694de1ab4a8.png',
    imageAlt: 'TradingLab Homepage'
  }}
/>
