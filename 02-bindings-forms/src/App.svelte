<script>
	import CustomInput from "./components/CustomInput.svelte";
	import Toggle from "./components/Toggle.svelte";

	let val = "Test";
	let opt = 1

	$: console.log(val); 
	$: console.log(opt);
</script>

<main>
	<CustomInput type="text" bind:val={val} />

	<Toggle bind:chosenOption={opt} /> Chosen: {opt}
</main>