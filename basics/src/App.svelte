<script>
	import ContactCard from './ContactCard.svelte'

	export let name;
	let age = 30
	let jobTitle = ''
	let description = ''
	let imageURL = 'https://via.placeholder.com/150'

	$: uppercaseName = name.toUpperCase()

	$: console.log(name)

	$: if (age === 33) {
		console.log('Label statement condition ran')
	}

	function incrementAge() {
		age += 1
	}

	function changeName(e) {
		name = e.target.value
	}
</script>

<main>
	<h1>Hello {uppercaseName}!</h1>
	<h2>I am {age} years old.</h2>

	<!-- <input value={name} on:input={changeName} type="text"  /> -->
	<input bind:value={name} type="text"  />
	<input bind:value={jobTitle} type="text" />
	<textarea bind:value={description}></textarea>

	<button on:click="{incrementAge}">Increase Age</button>
	<button on:click="{changeName}" value="Cool">Change Name</button>

	<ContactCard name={name} age={age} jobTitle={jobTitle} description={description} imageURL={imageURL} />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>