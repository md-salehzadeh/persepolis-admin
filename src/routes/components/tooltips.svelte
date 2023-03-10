<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Tooltip from '$components/Tooltips/Index.svelte';

	let style = 'dark';

	let placement = 'left';

	let codeBlocks = [
`
<Button>Default tooltip</Button>

<Tooltip>Tooltip content</Tooltip>
`,

`
<script>
	let style = 'dark';
<\/script>

<Button id="style-light">Light tooltip</Button>

<Button id="style-auto">Default tooltip</Button>

<Button id="style-dark">Dark tooltip</Button>

<Tooltip {style} triggeredBy="[id^='style-']" on:show={ev => style = ev.target.id.split('-')[1]}>Tooltip content</Tooltip>
`,

`
<script>
	let placement = 'left';
<\/script>

<Button id="placement-left">Tooltip left</Button>

<Button id="placement-top">Tooltip top</Button>

<Button id="placement-bottom">Tooltip bottom</Button>

<Button id="placement-right">Tooltip right</Button>

<Tooltip triggeredBy="[id^='placement-']" {placement} on:show={(e)=> [, placement] = e.target.id.split('-')}>
	Tooltip content - {placement}
</Tooltip>
`,

`
<Button id="hover">Tooltip hover</Button>

<Button id="click">Tooltip click</Button>

<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>

<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
`,

`
<Button id="disable-arrow">Default tooltip</Button>

<Tooltip arrow={false} triggeredBy='#disable-arrow'>Tooltip content</Tooltip>
`,

`
<Button>Green tooltip</Button>

<Tooltip color="success">Tooltip content</Tooltip>

<Button>Yellow tooltip</Button>

<Tooltip color="warning">Tooltip content</Tooltip>

<Button>Custom style</Button>

<Tooltip
	placement="right"
	style="custom"
	defaultClass=""
	class="p-4 text-lg font-medium bg-purple-500 text-gray-100"
	arrow={false}
	>
	Tooltip content
</Tooltip>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-tooltip" title="Default tooltip" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button>Default tooltip</Button>

			<Tooltip>Tooltip content</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="tooltip-styles" title="Tooltip styles" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id="style-light">Light tooltip</Button>

			<Button id="style-auto">Default tooltip</Button>

			<Button id="style-dark">Dark tooltip</Button>

			<Tooltip {style} triggeredBy="[id^='style-']" on:show={ev => style = ev.target.id.split('-')[1]}>Tooltip content</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="placement" title="Placement" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id="placement-left">Tooltip left</Button>

			<Button id="placement-top">Tooltip top</Button>

			<Button id="placement-bottom">Tooltip bottom</Button>

			<Button id="placement-right">Tooltip right</Button>

			<Tooltip triggeredBy="[id^='placement-']" {placement} on:show={(e)=> [, placement] = e.target.id.split('-')}>
				Tooltip content - {placement}
			</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="triggering" title="Triggering" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id="hover">Tooltip hover</Button>

			<Button id="click">Tooltip click</Button>

			<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>

			<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disable-arrow" title="Disable arrow" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id="disable-arrow">Default tooltip</Button>

			<Tooltip arrow={false} triggeredBy='#disable-arrow'>Tooltip content</Tooltip>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="custom-style" title="Custom style" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button>Green tooltip</Button>

			<Tooltip color="success">Tooltip content</Tooltip>

			<Button>Yellow tooltip</Button>

			<Tooltip color="warning">Tooltip content</Tooltip>

			<Button>Custom style</Button>

			<Tooltip
				placement="right"
				style="custom"
				defaultClass=""
				class="p-4 text-lg font-medium bg-purple-500 text-gray-100"
				arrow={false}
				>
				Tooltip content
			</Tooltip>
		</div>
	</DocSection>
</div>
