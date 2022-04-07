<script context="module" lang="ts">
	export const prerender = true;
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div>
  <Header/>
  <div class="grid grid-cols-3 bg-universe text-cream tracking-wider py-20">
    <div></div>
    <div>
      <div></div>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Nullam dictum felis eu pede mollis pretium. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br>
      Aenean commodo ligula eget dolor.
      Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.<br>
      Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
      Phasellus viverra nulla ut metus varius laoreet.
      Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
    </div>
  </div>
  <Footer/>
</div>

