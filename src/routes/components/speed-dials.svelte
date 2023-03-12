<script>
	import DocSection from '$components/Docs/Section.svelte';
	import SpeedDial from '$components/SpeedDials/Index.svelte';
	import SpeedDialButton from '$components/SpeedDials/SpeedDialButton.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import ListGroup from '$components/ListGroups/Index.svelte';
	import ListGroupItem from '$components/ListGroups/ListGroupItem.svelte';

	const placements = [
		["left-2 top-2", "right", "bottom"],
		["right-6 top-2", "bottom", "left"],
		["right-6 bottom-6", "left", "top"],
		["left-2 bottom-6", "top", "right"],
	];

	let codeBlocks = [
`
<SpeedDial defaultClass="absolute right-6 bottom-6">
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Download">
		<Icon name="download" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" size="xl" />
	</SpeedDialButton>
</SpeedDial>
`,

`
<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false}>
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Download">
		<Icon name="download" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" size="xl" />
	</SpeedDialButton>
</SpeedDial>
`,

`
<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none">
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" class="h-6" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" class="h-6" />
	</SpeedDialButton>

	<SpeedDialButton name="Save">
		<Icon name="download" class="h-6" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" class="h-6" />
	</SpeedDialButton>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false} tooltip="none">
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" class="h-6" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" class="h-6" />
	</SpeedDialButton>

	<SpeedDialButton name="Save">
		<Icon name="download" class="h-6" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" class="h-6" />
	</SpeedDialButton>
</SpeedDial>
`,

`
<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" textOutside>
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Save">
		<Icon name="download" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" size="xl" />
	</SpeedDialButton>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false} tooltip="none" textOutside>
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Save">
		<Icon name="download" size="xl" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" size="xl" />
	</SpeedDialButton>
</SpeedDial>
`,

`
<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" placement="top-end">
	<Icon slot="icon" name="ellipsis" size="2xl" class="w-8 h-8 leading-8" />

	<ListGroup class="divide-none" active>
		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="share-nodes" />
			Share
		</ListGroupItem>

		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="print" />
			Print
		</ListGroupItem>

		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="download" />
			Save
		</ListGroupItem>

		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="clipboard" />
			Copy
		</ListGroupItem>
	</ListGroup>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" tooltip="none" pill={false} placement="top-end">
	<Icon slot="icon" name="ellipsis" size="2xl" class="w-8 h-8 leading-8" />

	<ListGroup class="divide-none" active>
		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="share-nodes" />
			Share
		</ListGroupItem>

		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="print" />
			Print
		</ListGroupItem>

		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="download" />
			Save
		</ListGroupItem>

		<ListGroupItem class="flex gap-2 md:px-5">
			<Icon name="clipboard" />
			Copy
		</ListGroupItem>
	</ListGroup>
</SpeedDial>
`,

`
<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" placement="top-end">
	<Icon slot="icon" name="pencil" size="xl" class="w-8 h-8 leading-8" />

	<ListGroup class="w-24" active>
		<ListGroupItem class="flex">
			<Icon name="share-nodes" class="mr-5" />
			Share
		</ListGroupItem>

		<ListGroupItem class="flex">
			<Icon name="print" class="mr-5" />
			Print
		</ListGroupItem>

		<ListGroupItem class="flex">
			<Icon name="download" class="mr-5" />
			Save
		</ListGroupItem>

		<ListGroupItem class="flex">
			<Icon name="clipboard" class="mr-5" />
			Copy
		</ListGroupItem>
	</ListGroup>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" tooltip="none" pill={false} placement="top-end">
	<ListGroup class="w-24" active>
		<ListGroupItem class="flex">
			<Icon name="share-nodes" class="mr-5" />
			Share
		</ListGroupItem>

		<ListGroupItem class="flex">
			<Icon name="print" class="mr-5" />
			Print
		</ListGroupItem>

		<ListGroupItem class="flex">
			<Icon name="download" class="mr-5" />
			Save
		</ListGroupItem>

		<ListGroupItem class="flex">
			<Icon name="clipboard" class="mr-5" />
			Copy
		</ListGroupItem>
	</ListGroup>
</SpeedDial>
`,

`
<script>
	const placements = [
		["left-2 top-2", "right", "bottom"],
		["right-6 top-2", "bottom", "left"],
		["right-6 bottom-6", "left", "top"],
		["left-2 bottom-6", "top", "right"],
	];	
<\/script>

{#each placements as [position, placement, tooltip]}
	<SpeedDial defaultClass="absolute {position}" {placement}>
		<SpeedDialButton name="Share" placement={tooltip}>
			<Icon name="share-nodes" size="lg" />
		</SpeedDialButton>

		<SpeedDialButton name="Print" placement={tooltip}>
			<Icon name="print" size="lg" />
		</SpeedDialButton>

		<SpeedDialButton name="Download" placement={tooltip}>
			<Icon name="download" size="lg" />
		</SpeedDialButton>

		<SpeedDialButton name="Copy" placement={tooltip}>
			<Icon name="clipboard" size="lg" />
		</SpeedDialButton>
	</SpeedDial>
{/each}
`,

`
<SpeedDial defaultClass="absolute left-2 bottom-6" trigger="hover" tooltip="right">
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" size="lg" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" size="lg" />
	</SpeedDialButton>

	<SpeedDialButton name="Download">
		<Icon name="download" size="lg" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" size="lg" />
	</SpeedDialButton>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" trigger="click">
	<SpeedDialButton name="Share">
		<Icon name="share-nodes" size="lg" />
	</SpeedDialButton>

	<SpeedDialButton name="Print">
		<Icon name="print" size="lg" />
	</SpeedDialButton>

	<SpeedDialButton name="Download">
		<Icon name="download" size="lg" />
	</SpeedDialButton>

	<SpeedDialButton name="Copy">
		<Icon name="clipboard" size="lg" />
	</SpeedDialButton>
</SpeedDial>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-speed-dial" title="Default speed dial" code={codeBlocks[0]}>
		<div slot="preview" class="relative h-72">
			<SpeedDial defaultClass="absolute right-6 bottom-6">
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Download">
					<Icon name="download" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" size="xl" />
				</SpeedDialButton>
			</SpeedDial>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="square-speed-dial" title="Square speed dial" code={codeBlocks[1]}>
		<div slot="preview" class="relative h-72">
			<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false}>
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Download">
					<Icon name="download" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" size="xl" />
				</SpeedDialButton>
			</SpeedDial>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="text-inside-button" title="Text inside button" code={codeBlocks[2]}>
		<div slot="preview" class="relative h-72">
			<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none">
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" class="h-6" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" class="h-6" />
				</SpeedDialButton>

				<SpeedDialButton name="Save">
					<Icon name="download" class="h-6" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" class="h-6" />
				</SpeedDialButton>
			</SpeedDial>

			<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false} tooltip="none">
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" class="h-6" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" class="h-6" />
				</SpeedDialButton>

				<SpeedDialButton name="Save">
					<Icon name="download" class="h-6" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" class="h-6" />
				</SpeedDialButton>
			</SpeedDial>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="text-outside-button" title="Text outside button" code={codeBlocks[3]}>
		<div slot="preview" class="relative h-72">
			<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" textOutside>
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Save">
					<Icon name="download" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" size="xl" />
				</SpeedDialButton>
			</SpeedDial>

			<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false} tooltip="none" textOutside>
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Save">
					<Icon name="download" size="xl" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" size="xl" />
				</SpeedDialButton>
			</SpeedDial>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="dropdown-menu" title="Dropdown menu" code={codeBlocks[4]}>
		<div slot="preview" class="relative h-72">
			<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" placement="top-end">
				<Icon slot="icon" name="ellipsis" size="2xl" class="w-8 h-8 leading-8" />

				<ListGroup class="divide-none" active>
					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="share-nodes" />
						Share
					</ListGroupItem>

					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="print" />
						Print
					</ListGroupItem>

					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="download" />
						Save
					</ListGroupItem>

					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="clipboard" />
						Copy
					</ListGroupItem>
				</ListGroup>
			</SpeedDial>

			<SpeedDial defaultClass="absolute right-6 bottom-6" tooltip="none" pill={false} placement="top-end">
				<Icon slot="icon" name="ellipsis" size="2xl" class="w-8 h-8 leading-8" />

				<ListGroup class="divide-none" active>
					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="share-nodes" />
						Share
					</ListGroupItem>

					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="print" />
						Print
					</ListGroupItem>

					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="download" />
						Save
					</ListGroupItem>

					<ListGroupItem class="flex gap-2 md:px-5">
						<Icon name="clipboard" />
						Copy
					</ListGroupItem>
				</ListGroup>
			</SpeedDial>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="alternative-menu" title="Alternative menu" code={codeBlocks[5]}>
		<div slot="preview" class="relative h-72">
			<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" placement="top-end">
				<Icon slot="icon" name="pencil" size="xl" class="w-8 h-8 leading-8" />

				<ListGroup class="w-24" active>
					<ListGroupItem class="flex">
						<Icon name="share-nodes" class="mr-5" />
						Share
					</ListGroupItem>

					<ListGroupItem class="flex">
						<Icon name="print" class="mr-5" />
						Print
					</ListGroupItem>

					<ListGroupItem class="flex">
						<Icon name="download" class="mr-5" />
						Save
					</ListGroupItem>

					<ListGroupItem class="flex">
						<Icon name="clipboard" class="mr-5" />
						Copy
					</ListGroupItem>
				</ListGroup>
			</SpeedDial>

			<SpeedDial defaultClass="absolute right-6 bottom-6" tooltip="none" pill={false} placement="top-end">
				<ListGroup class="w-24" active>
					<ListGroupItem class="flex">
						<Icon name="share-nodes" class="mr-5" />
						Share
					</ListGroupItem>

					<ListGroupItem class="flex">
						<Icon name="print" class="mr-5" />
						Print
					</ListGroupItem>

					<ListGroupItem class="flex">
						<Icon name="download" class="mr-5" />
						Save
					</ListGroupItem>

					<ListGroupItem class="flex">
						<Icon name="clipboard" class="mr-5" />
						Copy
					</ListGroupItem>
				</ListGroup>
			</SpeedDial>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="alignment-position" title="Alignment - Position" code={codeBlocks[6]}>
		<div slot="preview" class="relative h-96">
			{#each placements as [position, placement, tooltip]}
				<SpeedDial defaultClass="absolute {position}" {placement}>
					<SpeedDialButton name="Share" placement={tooltip}>
						<Icon name="share-nodes" size="lg" />
					</SpeedDialButton>

					<SpeedDialButton name="Print" placement={tooltip}>
						<Icon name="print" size="lg" />
					</SpeedDialButton>

					<SpeedDialButton name="Download" placement={tooltip}>
						<Icon name="download" size="lg" />
					</SpeedDialButton>

					<SpeedDialButton name="Copy" placement={tooltip}>
						<Icon name="clipboard" size="lg" />
					</SpeedDialButton>
				</SpeedDial>
			{/each}
		</div>
	</DocSection>

	<DocSection class="mb-10" id="triggering" title="Triggering" code={codeBlocks[7]}>
		<div slot="preview" class="relative h-72">
			<SpeedDial defaultClass="absolute left-2 bottom-6" trigger="hover" tooltip="right">
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" size="lg" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" size="lg" />
				</SpeedDialButton>

				<SpeedDialButton name="Download">
					<Icon name="download" size="lg" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" size="lg" />
				</SpeedDialButton>
			</SpeedDial>

			<SpeedDial defaultClass="absolute right-6 bottom-6" trigger="click">
				<SpeedDialButton name="Share">
					<Icon name="share-nodes" size="lg" />
				</SpeedDialButton>

				<SpeedDialButton name="Print">
					<Icon name="print" size="lg" />
				</SpeedDialButton>

				<SpeedDialButton name="Download">
					<Icon name="download" size="lg" />
				</SpeedDialButton>

				<SpeedDialButton name="Copy">
					<Icon name="clipboard" size="lg" />
				</SpeedDialButton>
			</SpeedDial>
		</div>
	</DocSection>
</div>
