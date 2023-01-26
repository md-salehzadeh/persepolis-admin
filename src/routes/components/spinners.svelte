<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Spinner from '$components/Spinners/Index.svelte';
	import Button from '$components/Buttons/Index.svelte';

	let codeBlocks = [
`
<Spinner />
`,

`
<Spinner color="primary" />
<Spinner color="gray" />
<Spinner color="success" />
<Spinner color="danger" />
<Spinner color="warning" />
<Spinner color="pink" />
<Spinner color="purple" />
`,

`
<Spinner size={4} />
<Spinner size={6} />
<Spinner size={8} />
`,

`
<div class="flex flex-wrap items-center gap-2">
	<Button>
		<Spinner class="mr-3" size="4" color="white" />
		Loading ...
	</Button>

	<Button outline color="dark">
		<Spinner class="mr-3" size="4" />
		Loading ...
	</Button>
</div>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-spinner" title="Default spinner" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Spinner />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="colors" title="Colors" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Spinner color="primary" />
			<Spinner color="success" />
			<Spinner color="warning" />
			<Spinner color="danger" />
			<Spinner color="gray" />
			<Spinner color="pink" />
			<Spinner color="purple" />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Spinner size={4} />
			<Spinner size={6} />
			<Spinner size={8} />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="buttons" title="Buttons" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<div class="flex flex-wrap items-center gap-2">
				<Button loading={true}>
					Loading ...
				</Button>

				<Button outline color="dark">
					<Spinner class="mr-3" size="4" />
					Loading ...
				</Button>
			</div>
		</div>
	</DocSection>
</div>
