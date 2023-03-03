<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Switch from '$components/Forms/Switch.svelte';

	let codeBlocks = [
`
<Switch>Switch me</Switch>

<Switch checked={true}>Checked switch</Switch>

<Switch disabled>Disabled switch</Switch>

<Switch checked disabled>Disabled checked</Switch>
`,

`
<Switch color="success" checked>Success</Switch>
			
<Switch color="warning" checked>Warning</Switch>

<Switch color="danger" checked>Danger</Switch>

<Switch color="purple" checked>Purple</Switch>

<Switch color="teal" checked>Teal</Switch>

<Switch color="orange" checked>Orange</Switch>
`,

`
<Switch size="small">Small switch</Switch>

<Switch size="default" checked>Default switch</Switch>

<Switch size="large" checked>Large switch</Switch>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="switch-examples" title="Switch examples" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-col gap-4">
			<Switch>Switch me</Switch>

			<Switch checked={true}>Checked switch</Switch>

			<Switch disabled>Disabled switch</Switch>

			<Switch checked disabled>Disabled checked</Switch>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="colors" title="Colors" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-4">
			<Switch color="success" checked>Success</Switch>
			
			<Switch color="warning" checked>Warning</Switch>

			<Switch color="danger" checked>Danger</Switch>

			<Switch color="purple" checked>Purple</Switch>

			<Switch color="teal" checked>Teal</Switch>

			<Switch color="orange" checked>Orange</Switch>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-col gap-4">
			<Switch size="small">Small switch</Switch>

			<Switch size="default" checked>Default switch</Switch>

			<Switch size="large" checked>Large switch</Switch>
		</div>
	</DocSection>
</div>