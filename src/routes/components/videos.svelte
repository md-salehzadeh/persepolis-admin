<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Video from '$components/Videos/Index.svelte';

	let codeBlocks = [
`
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls trackSrc="flowbite.mp4" />
`,

`
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" autoplay controls trackSrc="flowbite.mp4" />
`,

`
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" autoplay muted controls trackSrc="flowbite.mp4" />
`,

`
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="w-96" trackSrc="flowbite.mp4" />
`,

`
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="h-80" trackSrc="flowbite.mp4" />
`,

`
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="w-full max-w-full h-auto" trackSrc="flowbite.mp4" />
`,

`
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="video-player" title="Video player" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls trackSrc="flowbite.mp4" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="autoplay" title="Autoplay" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" autoplay controls trackSrc="flowbite.mp4" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="muted" title="Muted" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" autoplay muted controls trackSrc="flowbite.mp4" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="width" title="Width" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="w-96" trackSrc="flowbite.mp4" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="height" title="Height" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="h-80" trackSrc="flowbite.mp4" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="responsive" title="Responsive" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="w-full max-w-full h-auto" trackSrc="flowbite.mp4" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="custom-styles" title="Custom styles" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" controls class="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
		</div>
	</DocSection>
</div>
