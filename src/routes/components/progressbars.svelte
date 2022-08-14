<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Progressbar from '$components/Progressbar/Index.svelte';

	let codeBlocks = [
`
<Progressbar progress="50" />
`,

`
<div class="w-full">
	<div class="mb-1 font-weight-bold">Small</div>
	<Progressbar progress="50" size="h-1.5" />
</div>

<div class="w-full">
	<div class="mb-1 font-weight-bold">Default</div>
	<Progressbar progress="50" size="h-2.5" />
</div>

<div class="w-full">
	<div class="mb-1 font-weight-bold">Large</div>
	<Progressbar progress="50" size="h-4" />
</div>

<div class="w-full">
	<div class="mb-1 font-weight-bold">Extra Large</div>
	<Progressbar progress="50" size="h-6" />
</div>
`,

`
<Progressbar progress="50" size="h-4" labelInside />
`,

`
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
`,

`
<div class="w-full">
	<div class="mb-1 text-secondary-700 font-weight-bold">Secondary</div>
	<Progressbar progress="50" color="secondary" />
</div>

<div class="w-full">
	<div class="mb-1 text-primary-700 font-weight-bold">Primary</div>
	<Progressbar progress="50" color="primary" />
</div>

<div class="w-full">
	<div class="mb-1 text-danger-700 font-weight-bold">Danger</div>
	<Progressbar progress="50" color="danger" />
</div>

<div class="w-full">
	<div class="mb-1 text-success-700 font-weight-bold">Success</div>
	<Progressbar progress="50" color="success" />
</div>

<div class="w-full">
	<div class="mb-1 text-warning-700 font-weight-bold">Warning</div>
	<Progressbar progress="50" color="warning" />
</div>

<div class="w-full">
	<div class="mb-1 text-indigo-700 font-weight-bold">Indigo</div>
	<Progressbar progress="50" color="indigo" />
</div>

<div class="w-full">
	<div class="mb-1 text-purple-700 font-weight-bold">Purple</div>
	<Progressbar progress="50" color="purple" />
</div>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-progress-bar" title="Default progress bar" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Progressbar progress="50" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-3">
			<div class="w-full">
				<div class="mb-1 font-weight-bold">Small</div>
				<Progressbar progress="50" size="h-1.5" />
			</div>

			<div class="w-full">
				<div class="mb-1 font-weight-bold">Default</div>
				<Progressbar progress="50" size="h-2.5" />
			</div>

			<div class="w-full">
				<div class="mb-1 font-weight-bold">Large</div>
				<Progressbar progress="50" size="h-4" />
			</div>

			<div class="w-full">
				<div class="mb-1 font-weight-bold">Extra Large</div>
				<Progressbar progress="50" size="h-6" />
			</div>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="with-label-inside" title="With label inside" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Progressbar progress="50" size="h-4" labelInside />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="with-label-outside" title="With label outside" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="colors" title="Colors" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-3">
			<div class="w-full">
				<div class="mb-1 text-secondary-700 font-weight-bold">Secondary</div>
				<Progressbar progress="50" color="secondary" />
			</div>

			<div class="w-full">
				<div class="mb-1 text-primary-700 font-weight-bold">Primary</div>
				<Progressbar progress="50" color="primary" />
			</div>

			<div class="w-full">
				<div class="mb-1 text-danger-700 font-weight-bold">Danger</div>
				<Progressbar progress="50" color="danger" />
			</div>

			<div class="w-full">
				<div class="mb-1 text-success-700 font-weight-bold">Success</div>
				<Progressbar progress="50" color="success" />
			</div>

			<div class="w-full">
				<div class="mb-1 text-warning-700 font-weight-bold">Warning</div>
				<Progressbar progress="50" color="warning" />
			</div>

			<div class="w-full">
				<div class="mb-1 text-indigo-700 font-weight-bold">Indigo</div>
				<Progressbar progress="50" color="indigo" />
			</div>

			<div class="w-full">
				<div class="mb-1 text-purple-700 font-weight-bold">Purple</div>
				<Progressbar progress="50" color="purple" />
			</div>
		</div>
	</DocSection>
</div>
