<script>
	import DocSection from '$components/Docs/Section.svelte';
	import FileUpload from '$components/Forms/FileUpload.svelte';
	import Label from '$components/Forms/Label.svelte';

	let codeBlocks = [
`
`,

`
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="file-upload-example" title="File upload example" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-col gap-2">
			xxx
		</div>
	</DocSection>

	<DocSection class="mb-10" id="xxx" title="xxx" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-col gap-2">
			xxx
		</div>
	</DocSection>

	<DocSection class="mb-10" id="xxx" title="xxx" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-col gap-2">
			xxx
		</div>
	</DocSection>

	<DocSection class="mb-10" id="xxx" title="xxx" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-col gap-2">
			xxx
		</div>
	</DocSection>

	<DocSection class="mb-10" id="xxx" title="xxx" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-col gap-2">
			xxx
		</div>
	</DocSection>
</div>