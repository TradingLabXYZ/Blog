<script context="module" lang="ts">
	export const prerender = true;
  import { MetaTags } from 'svelte-meta-tags';
  import Header from '../components/Header.svelte';
  import Articles from '../components/Articles.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div>
  <Header/>
  <Articles/>
  <Footer/>
</div>

<MetaTags
  title="TradingLab - Crypto Community Blog"
  description="TradingLab aims to create a fun, entertaining, never ending user experience in which crypto passionate can converge, learning and earning from each others simply sharing their crypto portfolios."
  canonical="https://blog.tradinglab.xyz"
  openGraph={{
    url: 'https://blog.tradinglab.xyz',
    type: 'website',
    title: 'TradingLab - Crypto Community Blog',
    description: 'TradingLab aims to create a fun, entertaining, never ending user experience in which crypto passionate can converge, learning and earning from each others simply sharing their crypto portfolios.',
    images: [
      {
        url: 'https://tradinglab.xyz/img/logo.181ac5cb.png',
        width: 617,
        height: 619,
        alt: 'TradigingLab logo'
      }
    ]
  }}
  twitter={{
    cardType: 'summary',
    title: 'TradingLab - Crypto Community Blog',
    description: 'TradingLab aims to create a fun, entertaining, never ending user experience in which crypto passionate can converge, learning and earning from each others simply sharing their crypto portfolios.',
    image: 'https://tradinglab.xyz/img/logo.181ac5cb.png',
    imageAlt: 'TradingLab logo'
  }}
/>
