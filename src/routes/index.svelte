<script context="module" lang="ts">
	export const prerender = true;
  import Header from '../components/Header.svelte';
  import Articles from '../components/Articles.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div>
  <Header/>
  <Articles/>
  <Footer/>
</div>
