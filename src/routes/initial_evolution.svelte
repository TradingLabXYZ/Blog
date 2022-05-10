<script context="module" lang="ts">
	export const prerender = true;
  import { MetaTags } from 'svelte-meta-tags';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div>
  <Header/>
  <div class="bg-universe text-cream py-12 tracking-wider leading-8 text-xl">
    <div class="xs:w-10/12 lg:w-1/2 m-auto">
      <h1 class=" mb-3 xs:text-5xl sm:text-6xl py-6">
        Initial Evolution
      </h1>
      <div class="xs:text-left sm:text-justify">
        <p>
          Despite we are only at the beginning,
          it has been an incredible journey so far.
          We have been able to transform a small idea
          into a basic yet fully functional crypto portfolio.
          It is time to pause the experiments for a moment
          and update our crypto community about a few important 
          considerations about what has been achieved 
          till now and how we plan to manage the next steps.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Managing a crypto portfolio is not trivial
        </h2>
        <p>
          The idea behind TradingLab took shape during the first months
          of 2021. At that time a wild crypto bull run was happening,
          and keeping track of a wallet became a critical activity
          in order to be able to optimize return as well as keeping
          everything in the right place.
          A first rough crypto portfolio tracker version was created using
          Google Sheet, and a few macros behind it. Admiring its effectiveness,
          friends raised their hands asking something similar for their own,
          considering also how the market was not offering anything enough
          easy to use in order to facilitate their life. Keeping track
          of a crypto portfolio still remains a struggle for many 
          newbies out there.
        </p>
        <p>
          The goal was clear: building a crypto portfolio disconnected
          from exchanges, allowing flexibility and ease of interaction, 
          with a minimal yet attractive user interface.
          After months of development, countless iterations,
          starting from scratch many times, as well as the need to learn many new technologies,
          a first version of TradingLab was ready to rumble.
          In the meanwhile, removing complexities and features,
          leaving TradingLab almost completely naked.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
          Celebrating achievements with the community
        </h2>
        <p>
          Probably the most important aspect of this first phase of TradingLab
          has been the identification of a brand identify on which building it is possibile
          a create a design and a marketing strategy.
          It is almost embarassing and funny to see the first versions of TradingLab.
          During several design iterations it has been possible to create a really
          cool idea around a "crypto laboratory" in which creating any kind of experiment.
          After having identified the brand identity, many things came easily:
          a new logo, a new landing page, a youtube page, a twitter profile, a discord community,
          and now also this highly customised blog.
        </p>
        <p>
          For the techies out there, TradingLab shines because of its simplicity:
          a Golang back-end, a Vuejs front-end, a web3 authentication system,
          a Postgresql database and a few CI/CD pipelines. There would be so much
          more to say about technology, but this might be a topic to address
          in a proper blog article.
        </p>
        <h2 class="mt-6 mb-3 font-bold text-3xl">
            Now, what is the future of TradingLab?
        </h2>
        <p>
          We have identified three macro phases in order to fully fulfill
          our (initial) ambitions. The first one is the one you just read about,
          creating a lean working product potentially ready to scale with a fresh brand identity.
          Now starts the second one, which is totally about marketing.
          It is completely stupid keeping adding features or improving the codebase
          if no users are able to arrive to the platform starting using it.
          So it comes a really fascinating challenge, which is creating traffic
          and a crypto community. A few ideas are currently under evaluation,
          and one in particular looks so exciting and promising that makes us
          all so thrilled about it. Stay tuned, more is coming.
        </p>
        <p>
          Above we mentioned three macro phases right? Well, the third one is
          to finally fully convert TradingLab into a Web3 toy regulated by
          smart contracts. A lot of time has been invested already in this direction,
          and we can't wait to be able to finally apply our knowledge into it.
        </p>
        <h3 class="font-bold mt-4">
          Thanks so much for finding the time to read these few words.
        </h3>
      </div>
    </div>
  </div>
  <Footer/>
</div>

<MetaTags
  title="TradingLab - Initial Evolution"
  description="Despite we are only at the beginning, it has been an incredible journey so far. We have been able to
               transform a small idea into a basic yet fully functional crypto portfolio. It is time to pause the
               experiments for a moment and update our crypto community about a few importantconsiderations about what
               has been achieved till now and how we plan to manage the next steps."
  canonical="https://blog.tradinglab.xyz/initial_evolution"
  openGraph={{
    url: 'https://blog.tradinglab.xyz/initial_evolution',
    type: 'article',
    title: 'TradingLab - Initial Evolution',
    description: 'Despite we are only at the beginning, it has been an incredible journey so far. We have been able to transform a small idea into a basic yet fully functional crypto portfolio. It is time to pause the experiments for a moment and update our crypto community about a few important considerations about what has been achieved till now and how we plan to manage the next steps.',
    images: [
      {
        url: 'https://blog.tradinglab.xyz/articles/1_EndFirstPhase/evolution.png',
        width: 841,
        height: 461,
        alt: 'TradigingLab initial evolution'
      }
    ]
  }}
  twitter={{
    cardType: 'summary',
    title: 'TradingLab - Initial Evolution',
    description: 'Despite we are only at the beginning, it has been an incredible journey so far. We have been able to transform a small idea into a basic yet fully functional crypto portfolio. It is time to pause the experiments for a moment and update our crypto community about a few important considerations about what has been achieved till now and how we plan to manage the next steps.',
    image: 'https://blog.tradinglab.xyz/articles/1_EndFirstPhase/evolution.png',
    imageAlt: 'TradingLab initial evolution'
  }}
/>
