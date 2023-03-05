<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Search from '$components/Forms/Search.svelte';
	import Label from '$components/Forms/Label.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';

	function handleVoiceBtn() {
		alert('You clicked voice button');
	}

	let value = '';

	const submitted = () => {
		alert(`You are searching: ${value}`);
	};

	let codeBlocks = [
`
<Search>
	<Button>Search</Button>
</Search>
`,

`
<form class="flex gap-2">
	<Search size="md" />
		<Button class="!p-2.5">

		<Icon name="magnifying-glass" size="lg" class="w-5" />
	</Button>
</form>
`,

`
<script>
	function handleVoiceBtn() {
		alert('You clicked voice button');
	}
<\/script>

<form class="flex gap-2">
	<Search size='md' class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
		<button type="button" on:click={handleVoiceBtn} class="outline-none">
			<Icon name="microphone" class="w-4" />
		</button>
	</Search>

	<Button size='sm'>
		<Icon name="magnifying-glass" class="w-5 mr-2" />
		Search
	</Button>
</form>
`,

`
<script>
	let value = '';

	const submitted = () => {
		alert(\`You are searching: ${value}\`);
	};
<\/script>

<form id="example-form" on:submit={submitted}>
	<Search bind:value />

	<p>You are seaching: {value}</p>

	<Button type="submit">Submit</Button>
</form>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="search-bar-example" title="Search bar example" code={codeBlocks[0]}>
		<div slot="preview">
			<Search>
				<Button>Search</Button>
			</Search>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="simple-search-input" title="Simple search input" code={codeBlocks[1]}>
		<div slot="preview">
			<form class="flex gap-2">
				<Search size="md" />
					<Button class="!p-2.5">

					<Icon name="magnifying-glass" size="lg" class="w-5" />
				</Button>
			</form>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="voice-Search" title="Voice Search" code={codeBlocks[2]}>
		<div slot="preview">
			<form class="flex gap-2">
				<Search size='md' class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
					<button type="button" on:click={handleVoiceBtn} class="outline-none">
						<Icon name="microphone" class="w-4" />
					</button>
				</Search>

				<Button size='sm'>
					<Icon name="magnifying-glass" class="w-5 mr-2" />
					Search
				</Button>
			</form>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="events" title="Events" code={codeBlocks[3]}>
		<div slot="preview">
			<form id="example-form" on:submit={submitted}>
				<Search bind:value />

				<p>You are seaching: {value}</p>

				<Button type="submit">Submit</Button>
			</form>
		</div>
	</DocSection>
</div>