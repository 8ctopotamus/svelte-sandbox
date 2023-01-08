<script>
	import CustomInput from "./CustomInput.svelte";
	import Toggle from "./Toggle.svelte";

	export let val = "Test";

	$: console.log(val)

	const setVal = e => val = e.target.value

</script>

<main>
	<CustomInput type="text" bind:val={val} />

	<Toggle />
</main>