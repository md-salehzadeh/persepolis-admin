<script>
	import DocSection from '$components/Docs/Section.svelte';
	import FileUpload from '$components/Forms/FileUpload.svelte';
	import Label from '$components/Forms/Label.svelte';
	import Helper from '$components/Forms/Helper.svelte';
	import Dropzone from '$components/Forms/Dropzone.svelte';
	import ListGroup from '$components/ListGroups/Index.svelte';
	import ListGroupItem from '$components/ListGroups/ListGroupItem.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let value;

	let files;

	let codeBlocks = [
`
<script>
	let value;
<\/script>

<Label class="space-y-2 mb-2">
	<span>Upload file</span>

	<FileUpload bind:value/>
</Label>

<Label>File: {value}</Label>
`,

`
<Label for="with_helper" class="pb-2">Upload file</Label>

<FileUpload id="with_helper" class="mb-2" />

<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
`,

`
<script>
	let files;
<\/script>

<Label class="pb-2" for='multiple_files' >Upload multiple files</Label>

<FileUpload id='multiple_files' multiple bind:files />

<ListGroup items={files} let:item class="mt-2">
	{#if item}
		{item.name} 
	{:else}
		<ListGroupItem>No files</ListGroupItem>
	{/if}
</ListGroup>
`,

`
<Label class="pb-2" for='small_size' >Small file input</Label>
<FileUpload id="small_size" size='sm' />

<Label class="py-2" for='default_size' >Default size</Label>
<FileUpload id="default_size" />

<Label class="py-2" for='larg_size' >Large file input</Label>
<FileUpload id="larg_size" size='lg' />
`,

`
<Dropzone id='dropzone'>
	<Icon name="cloud-arrow-up" size="3x" class="mb-4 text-gray-400" />

	<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>

	<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
</Dropzone>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="file-upload-example" title="File upload example" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label class="space-y-2 mb-2">
				<span>Upload file</span>

				<FileUpload bind:value/>
			</Label>

			<Label>File: {value}</Label>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="helper-text" title="Helper text" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label for="with_helper" class="pb-2">Upload file</Label>

			<FileUpload id="with_helper" class="mb-2" />

			<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="multiple-files" title="Multiple files" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label class="pb-2" for='multiple_files' >Upload multiple files</Label>

			<FileUpload id='multiple_files' multiple bind:files />

			<ListGroup items={files} let:item class="mt-2">
				{#if item}
					{item.name} 
				{:else}
					<ListGroupItem>No files</ListGroupItem>
				{/if}
			</ListGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label class="pb-2" for='small_size' >Small file input</Label>
			<FileUpload id="small_size" size='sm' />

			<Label class="py-2" for='default_size' >Default size</Label>
			<FileUpload id="default_size" />

			<Label class="py-2" for='larg_size' >Large file input</Label>
			<FileUpload id="larg_size" size='lg' />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="dropzone" title="Dropzone" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Dropzone id='dropzone'>
				<Icon name="cloud-arrow-up" size="3x" class="mb-4 text-gray-400" />

				<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>

				<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
			</Dropzone>
		</div>
	</DocSection>
</div>