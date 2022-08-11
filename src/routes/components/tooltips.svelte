<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Tooltip from '$components/Tooltips/Index.svelte';

	let codeBlocks = [
`
<Tooltip content="Tooltip content">
	<Button>Default tooltip</Button>
</Tooltip>
`,

`
<Tooltip content="Tooltip content" theme="light">
	<Button>Light tooltip</Button>
</Tooltip>

<Tooltip content="Tooltip content" theme="dark">
	<Button>Dark tooltip</Button>
</Tooltip>
`,

`
<Tooltip content="Tooltip content" placement="top">
	<Button>Tooltip top</Button>
</Tooltip>

<Tooltip content="Tooltip content" placement="right">
	<Button>Tooltip right</Button>
</Tooltip>

<Tooltip content="Tooltip content" placement="bottom">
	<Button>Tooltip bottom</Button>
</Tooltip>

<Tooltip content="Tooltip content" placement="left">
	<Button>Tooltip left</Button>
</Tooltip>
`,

`
<Tooltip content="Tooltip content" trigger="hover">
	<Button>Tooltip hover</Button>
</Tooltip>

<Tooltip content="Tooltip content" trigger="click">
	<Button>Tooltip click</Button>
</Tooltip>
`,

`
<Tooltip content="Tooltip content" arrow={false}>
	<Button>Default tooltip</Button>
</Tooltip>
`,

`
<Tooltip
	content="tooltip content"
	placement="auto"
	tipClass="absolute inline-block rounded-lg p-24 text-lg font-medium shadow-sm text-white"
	theme="custom"
	tipColor="bg-red-900 dark:bg-red-700"
>
	<Button>Custom style</Button>
</Tooltip>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-tooltip" title="Default tooltip" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tooltip content="Tooltip content">
				<Button>Default tooltip</Button>
			</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="tooltip-styles" title="Tooltip styles" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tooltip content="Tooltip content" theme="light">
				<Button>Light tooltip</Button>
			</Tooltip>
			
			<Tooltip content="Tooltip content" theme="dark">
				<Button>Dark tooltip</Button>
			</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="placement" title="Placement" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tooltip content="Tooltip content" placement="top">
				<Button>Tooltip top</Button>
			</Tooltip>
			
			<Tooltip content="Tooltip content" placement="right">
				<Button>Tooltip right</Button>
			</Tooltip>

			<Tooltip content="Tooltip content" placement="bottom">
				<Button>Tooltip bottom</Button>
			</Tooltip>

			<Tooltip content="Tooltip content" placement="left">
				<Button>Tooltip left</Button>
			</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="triggering" title="Triggering" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tooltip content="Tooltip content" trigger="hover">
				<Button>Tooltip hover</Button>
			</Tooltip>
			
			<Tooltip content="Tooltip content" trigger="click">
				<Button>Tooltip click</Button>
			</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disable-arrow" title="Disable arrow" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tooltip content="Tooltip content" arrow={false}>
				<Button>Default tooltip</Button>
			</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="custom-style" title="Custom style" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tooltip
				content="tooltip content"
				placement="auto"
				tipClass="absolute inline-block rounded-lg p-24 text-lg font-medium shadow-sm text-white"
				theme="custom"
				tipColor="bg-red-900 dark:bg-red-700"
			>
				<Button>Custom style</Button>
			</Tooltip>
		</div>
	</DocSection>
</div>
