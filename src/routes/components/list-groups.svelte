<script>
	import DocSection from '$components/Docs/Section.svelte';
	import ListGroup from '$components/ListGroups/Index.svelte';
	import ListGroupItem from '$components/ListGroups/ListGroupItem.svelte';
	import Avatar from '$components/Avatars/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let simpleList = ["Profile", "Settings", "Messages", "Download"]

	let links = [
		{ name: "Accordions", href: "/accordions", current: true },
		{ name: "Alerts", href: "/alerts" },
		{ name: "Badges", href: "/badges"  },
		{ name: "Breadcrumbs", href: "/breadcrumbs" },
	];

	let buttons = [
		{ name: "Profile", mycustomfield: "data1", current: true },
		{ name: "Settings", mycustomfield: "data2" },
		{ name: "Messages", mycustomfield: "data3" },
		{ name: "Download", mycustomfield: "data4",  disabled: true },
	];

	let icons = [
		{ name: "Profile", icon: "circle-user" },
		{ name: "Settings", icon: "circle-info" },
		{ name: "Messages", icon: "circle-user" },
		{ name: "Download", icon: "circle-info" },
	];

	let codeBlocks = [
`
<script>
	let simpleList = ["Profile", "Settings", "Messages", "Download"];
<\/script>

<ListGroup items={simpleList} let:item class="w-48">
	{item}
</ListGroup>
`,

`
<script>
	let links = [
		{ name: "Accordions", href: "/accordions", current: true },
		{ name: "Alerts", href: "/alerts" },
		{ name: "Badges", href: "/badges"  },
		{ name: "Breadcrumbs", href: "/breadcrumbs" },
	];
<\/script>

<ListGroup active items={links} let:item class="w-48">
	{item.name}
</ListGroup>
`,

`
<script>
	let buttons = [
		{ name: "Profile", mycustomfield: "data1", current: true },
		{ name: "Settings", mycustomfield: "data2" },
		{ name: "Messages", mycustomfield: "data3" },
		{ name: "Download", mycustomfield: "data4",  disabled: true },
	];
<\/script>

<ListGroup active items={buttons} let:item class="w-48" on:click={(e) => alert(Object.entries(e.detail))}>
	{item.name}
</ListGroup>
`,

`
<script>
	let icons = [
		{ name: "Profile", icon: "circle-user" },
		{ name: "Settings", icon: "circle-info" },
		{ name: "Messages", icon: "circle-user" },
		{ name: "Download", icon: "circle-info" },
	];
<\/script>

<ListGroup active items={icons} let:item class="w-48" on:click={console.log}>
	<Icon type="fa-regular" name={item.icon} size="lg" class="mr-2" />

	{item.name}
</ListGroup>
`,

`
<ListGroup active class="w-48">
	<h3 class="text-center bg-red-500 text-white font-bold rounded-t-lg">User list</h3>

	<ListGroupItem class="text-base font-semibold gap-2">
		<Avatar src="https://i.pravatar.cc/300" size="xs" rounded/>Jese Leos
	</ListGroupItem>

	<ListGroupItem class="text-base font-semibold gap-2">
		<Avatar src="https://i.pravatar.cc/300" size="xs" rounded/>Robert Gouth
	</ListGroupItem>

	<ListGroupItem class="text-base font-semibold gap-2">
		<Avatar src="https://i.pravatar.cc/300" size="xs" rounded/>Bonnie Green
	</ListGroupItem>

	<a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline rounded-b-lg">
		<Icon type="fa-regular" name="trash-can" size="lg" class="mr-3" />
		Delete user
	</a>
</ListGroup>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-list-group" title="Default list group" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ListGroup items={simpleList} let:item class="w-48">
				{item}
			</ListGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="list-group-with-links" title="List group with links" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ListGroup active items={links} let:item class="w-48">
				{item.name}
			</ListGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="list-group-with-buttons" title="List group with buttons" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ListGroup active items={buttons} let:item class="w-48" on:click={(e) => alert(Object.entries(e.detail))}>
				{item.name}
			</ListGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="list-group-with-icons" title="List group with icons" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ListGroup active items={icons} let:item class="w-48" on:click={console.log}>
				<Icon type="fa-regular" name={item.icon} size="lg" class="mr-2" />

				{item.name}
			</ListGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="advanced" title="Advanced" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ListGroup active class="w-48">
				<h3 class="text-center bg-red-500 text-white font-bold rounded-t-lg">User list</h3>

				<ListGroupItem class="text-base font-semibold gap-2">
					<Avatar src="https://i.pravatar.cc/300" size="xs" rounded/>Jese Leos
				</ListGroupItem>

				<ListGroupItem class="text-base font-semibold gap-2">
					<Avatar src="https://i.pravatar.cc/300" size="xs" rounded/>Robert Gouth
				</ListGroupItem>

				<ListGroupItem class="text-base font-semibold gap-2">
					<Avatar src="https://i.pravatar.cc/300" size="xs" rounded/>Bonnie Green
				</ListGroupItem>

				<a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline rounded-b-lg">
					<Icon type="fa-regular" name="trash-can" size="lg" class="mr-3" />
					Delete user
				</a>
			</ListGroup>
		</div>
	</DocSection>
</div>
