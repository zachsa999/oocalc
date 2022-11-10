<script>
	import { supabaseClient } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	// import './styles.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<nav>
	<a href="/forms">Forms</a>
	<a href="/color">Color</a>
	<a href="/calc">calc</a>
</nav>
<slot />

<style>
	slot {
		width: 100%;
		height: 100%;
		background: lightgray;
	}
</style>
