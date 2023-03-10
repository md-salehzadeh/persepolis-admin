<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Avatar from '$components/Avatars/Index.svelte';
	import Tooltip from '$components/Tooltips/Index.svelte';
	import Dropdown from '$components/Dropdowns/Index.svelte';
	import DropdownHeader from '$components/Dropdowns/DropdownHeader.svelte';
	import DropdownDivider from '$components/Dropdowns/DropdownDivider.svelte';
	import DropdownItem from '$components/Dropdowns/DropdownItem.svelte';

	let codeBlocks = [
`
<Avatar src="https://i.pravatar.cc/300" />
<Avatar src="https://i.pravatar.cc/300" rounded/>
`,

`
<Avatar src="https://i.pravatar.cc/300" border/>
<Avatar src="https://i.pravatar.cc/300" border class="ring-danger-400 dark:ring-danger-300"/>
`,

`
<Avatar />
<Avatar rounded />
<Avatar border />
<Avatar rounded border />
`,

`
<Avatar>JL</Avatar>
`,

`
<Avatar data-name="Jese Leos" rounded src="https://i.pravatar.cc/300"/>
<Avatar data-name="Robert Gouth" rounded src="https://i.pravatar.cc/300"/>
<Avatar data-name="Bonnie Green" rounded src="https://i.pravatar.cc/300"/>

<Tooltip triggeredBy="[data-name]" on:show={e => name = e.target.dataset.name}>{name}</Tooltip>
`,

`
<Avatar src="https://i.pravatar.cc/300" dot={{color: "danger"}}/>
<Avatar src="https://i.pravatar.cc/300" dot={{placement: "top-right", color: "danger"}} rounded />
<Avatar src="https://i.pravatar.cc/300" dot={{placement: "bottom-right", color: "success"}} />
<Avatar src="https://i.pravatar.cc/300" dot={{placement: "bottom-right"}} rounded />

<Avatar dot={{}}/>
`,

`
<div class="flex mb-5">
	<Avatar src="https://i.pravatar.cc/300" stacked/>
	<Avatar src="https://i.pravatar.cc/300" stacked />
	<Avatar src="https://i.pravatar.cc/300" stacked />
	<Avatar stacked />
</div>

<div class="flex">
	<Avatar src="https://i.pravatar.cc/300" stacked />
	<Avatar src="https://i.pravatar.cc/300" stacked />
	<Avatar src="https://i.pravatar.cc/300" stacked />
	<Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+99</Avatar>
</div>
`,

`
<div class="flex items-center space-x-4">
	<Avatar src="https://i.pravatar.cc/300" rounded/>

	<div class="space-y-1 font-medium dark:text-white">
		<div>Jese Leos</div>

		<div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
	</div>
</div>
`,

`
<Avatar id="user-drop" src="https://i.pravatar.cc/300" dot={{color:'green'}} />

<Dropdown triggeredBy="#user-drop">
	<DropdownHeader>
		<span class="block text-sm"> Bonnie Green </span>
		<span class="block truncate text-sm font-medium"> name@flowbite.com </span>
	</DropdownHeader>

	<DropdownItem>Dashboard</DropdownItem>

	<DropdownItem>Settings</DropdownItem>

	<DropdownItem>Earnings</DropdownItem>

	<DropdownDivider />

	<DropdownItem>Sign out</DropdownItem>
</Dropdown>
`,

`
<div class="flex flex-wrap justify-center space-x-4">
	<Avatar src="https://i.pravatar.cc/300" rounded size="xs" />
	<Avatar src="https://i.pravatar.cc/300" rounded size="sm" />
	<Avatar src="https://i.pravatar.cc/300" rounded size="md" />
	<Avatar src="https://i.pravatar.cc/300" rounded size="lg" />
	<Avatar src="https://i.pravatar.cc/300" rounded size="xl" />
</div>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-avatar" title="Default avatar" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-4">
			<Avatar src="https://i.pravatar.cc/300" />
	 		<Avatar src="https://i.pravatar.cc/300" rounded/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="bordered" title="Bordered" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-4">
			<Avatar src="https://i.pravatar.cc/300" border/>
			<Avatar src="https://i.pravatar.cc/300" border class="ring-danger-400 dark:ring-danger-300"/>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="placeholder" title="Placeholder" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-4">
			<Avatar />
			<Avatar rounded />
			<Avatar border />
			<Avatar rounded border />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="placeholder-initials" title="Placeholder initials" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-4">
			<Avatar>JL</Avatar>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="avatar-tooltip" title="Avatar tooltip" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-4">
			<Avatar data-name="Jese Leos" rounded src="https://i.pravatar.cc/300"/>
			<Avatar data-name="Robert Gouth" rounded src="https://i.pravatar.cc/300"/>
			<Avatar data-name="Bonnie Green" rounded src="https://i.pravatar.cc/300"/>

			<Tooltip triggeredBy="[data-name]" on:show={e => name = e.target.dataset.name}>{name}</Tooltip>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="dot-indicator" title="Dot indicator" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-4">
			<Avatar src="https://i.pravatar.cc/300" dot={{color: "danger"}}/>
			<Avatar src="https://i.pravatar.cc/300" dot={{placement: "top-right", color: "danger"}} rounded />
			<Avatar src="https://i.pravatar.cc/300" dot={{placement: "bottom-right", color: "success"}} />
			<Avatar src="https://i.pravatar.cc/300" dot={{placement: "bottom-right"}} rounded />

			<Avatar dot={{}}/>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="stacked" title="Stacked" code={codeBlocks[6]}>
		<div slot="preview" class="pl-3.5">
			<div class="flex mb-5">
				<Avatar src="https://i.pravatar.cc/300" stacked/>
				<Avatar src="https://i.pravatar.cc/300" stacked />
				<Avatar src="https://i.pravatar.cc/300" stacked />
				<Avatar stacked />
			</div>

			<div class="flex">
				<Avatar src="https://i.pravatar.cc/300" stacked />
				<Avatar src="https://i.pravatar.cc/300" stacked />
				<Avatar src="https://i.pravatar.cc/300" stacked />
				<Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+99</Avatar>
			</div>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="avatar-text" title="Avatar text" code={codeBlocks[7]}>
		<div slot="preview">
			<div class="flex items-center space-x-4">
				<Avatar src="https://i.pravatar.cc/300" rounded/>

				<div class="space-y-1 font-medium dark:text-white">
					<div>Jese Leos</div>

					<div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
				</div>
			</div>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="user-dropdown" title="User dropdown" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Avatar id="user-drop" src="https://i.pravatar.cc/300" dot={{color:'green'}} />

			<Dropdown triggeredBy="#user-drop">
				<DropdownHeader>
					<span class="block text-sm"> Bonnie Green </span>
					<span class="block truncate text-sm font-medium"> name@flowbite.com </span>
				</DropdownHeader>

				<DropdownItem>Dashboard</DropdownItem>

				<DropdownItem>Settings</DropdownItem>

				<DropdownItem>Earnings</DropdownItem>

				<DropdownDivider />

				<DropdownItem>Sign out</DropdownItem>
			</Dropdown>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[9]}>
		<div slot="preview">
			<div class="flex flex-wrap justify-center space-x-4">
				<Avatar src="https://i.pravatar.cc/300" rounded size="xs" />
				<Avatar src="https://i.pravatar.cc/300" rounded size="sm" />
				<Avatar src="https://i.pravatar.cc/300" rounded size="md" />
				<Avatar src="https://i.pravatar.cc/300" rounded size="lg" />
				<Avatar src="https://i.pravatar.cc/300" rounded size="xl" />
			</div>
		</div>
	</DocSection>
</div>
