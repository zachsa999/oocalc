<script>
	import { supabaseClient } from '$lib/supabaseClient';

	let loading = false;
	let email;
	let password;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabaseClient.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const handleLoginEmail = async () => {
		try {
			loading = true;
			const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const handleSignUp = async () => {
		try {
			loading = true;
			const { data, error } = await supabaseClient.auth.signUp({
				email,
				password
			});
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="header">Supabase + SvelteKit</h1>

<form class="row flex-center flex" on:submit|preventDefault={handleSignUp}>
	<div class="col-6 form-widget">
		<p class="description">Sign Up with Email and Password</p>
		<div>
			<input class="inputFieldPass" type="email" placeholder="Your email" bind:value={email} />
			<input
				class="inputFieldPass"
				type="password"
				placeholder="Your password"
				bind:value={password}
			/>
		</div>
		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Sign Up'}
				disabled={loading}
			/>
		</div>
	</div>
</form>

<form class="row flex-center flex" on:submit|preventDefault={handleLoginEmail}>
	<div class="col-6 form-widget">
		<p class="description">Sign In with Email and Password</p>
		<div>
			<input class="inputFieldPass" type="email" placeholder="Your email" bind:value={email} />
			<input
				class="inputFieldPass"
				type="password"
				placeholder="Your password"
				bind:value={password}
			/>
		</div>
		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Login'}
				disabled={loading}
			/>
		</div>
	</div>
</form>

<form class="row flex-center flex" on:submit|preventDefault={handleLogin}>
	<div class="col-6 form-widget">
		<p class="description">Sign in via magic link with your email below</p>
		<div>
			<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
		</div>
		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Send magic link'}
				disabled={loading}
			/>
		</div>
	</div>
</form>
