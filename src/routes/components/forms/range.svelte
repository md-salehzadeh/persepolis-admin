<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Range from '$components/Forms/Range.svelte';
	import Label from '$components/Forms/Label.svelte';

	let minmaxValue = 5;

	let stepValue = 2.5;

	let codeBlocks = [
`
<Label>Default range</Label>

<Range id="range1" />
`,

`
<Label>Disabled range</Label>

<Range id="range-disabled" disabled/>
`,

`
<Label>Min-max range</Label>

<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue}/>

<p>Value: {minmaxValue}</p>
`,

`
<Label>Range steps</Label>

<Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5"/>

<p>Value: {stepValue}</p>
`,

`
<Label>Small range</Label>
<Range id="small-range" size="sm" />

<Label>Default range</Label>
<Range id="default-range" size="md"/>

<Label>Large range</Label>
<Range id="large-range" size="lg" />
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="range-slider-example" title="Range slider example" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label>Default range</Label>

			<Range id="range1" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disabled-state" title="Disabled state" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label>Disabled range</Label>

			<Range id="range-disabled" disabled/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="min-and-max" title="Min and max" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label>Min-max range</Label>

			<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue}/>

			<p>Value: {minmaxValue}</p>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="steps" title="Steps" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label>Range steps</Label>

			<Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5"/>

			<p>Value: {stepValue}</p>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-col gap-4">
			<Label>Small range</Label>
			<Range id="small-range" size="sm" />

			<Label>Default range</Label>
			<Range id="default-range" size="md"/>

			<Label>Large range</Label>
			<Range id="large-range" size="lg" />
		</div>
	</DocSection>
</div>