<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Skeleton from '$components/Skeletons/Index.svelte';
	import ImagePlaceholder from '$components/Skeletons/ImagePlaceholder.svelte';
	import VideoPlaceholder from '$components/Skeletons/VideoPlaceholder.svelte';
	import TextPlaceholder from '$components/Skeletons/TextPlaceholder.svelte';
	import CardPlaceholder from '$components/Skeletons/CardPlaceholder.svelte';
	import WidgetPlaceholder from '$components/Skeletons/WidgetPlaceholder.svelte';
	import ListPlaceholder from '$components/Skeletons/ListPlaceholder.svelte';
	import TestimonialPlaceholder from '$components/Skeletons/TestimonialPlaceholder.svelte';

	let codeBlocks = [
`
<Skeleton />
`,

`
<ImagePlaceholder />
`,

`
<VideoPlaceholder />
`,

`
<TextPlaceholder />
`,

`
<CardPlaceholder />
`,

`
<WidgetPlaceholder />
`,

`
<ListPlaceholder />
`,

`
<TestimonialPlaceholder />
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-skeleton" title="Default skeleton" code={codeBlocks[0]}>
		<div slot="preview">
			<Skeleton />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="image-placeholder" title="Image placeholder" code={codeBlocks[1]}>
		<div slot="preview">
			<ImagePlaceholder />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="video-placeholder" title="Video placeholder" code={codeBlocks[2]}>
		<div slot="preview">
			<VideoPlaceholder />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="text-placeholder" title="Text placeholder" code={codeBlocks[3]}>
		<div slot="preview">
			<TextPlaceholder />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="card-placeholder" title="Card placeholder" code={codeBlocks[4]}>
		<div slot="preview">
			<CardPlaceholder />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="widget-placeholder" title="Widget placeholder" code={codeBlocks[5]}>
		<div slot="preview">
			<WidgetPlaceholder />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="list-placeholder" title="List placeholder" code={codeBlocks[6]}>
		<div slot="preview">
			<ListPlaceholder />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="testimonial-placeholder" title="Testimonial placeholder" code={codeBlocks[7]}>
		<div slot="preview">
			<TestimonialPlaceholder />
		</div>
	</DocSection>
</div>
