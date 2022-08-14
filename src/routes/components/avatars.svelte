<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Avatar from '$components/Avatars/Index.svelte';
	import Tooltip from '$components/Tooltips/Index.svelte';

	let codeBlocks = [
`
<Avatar src="https://i.pravatar.cc/300" rounded="md" />
<Avatar src="https://i.pravatar.cc/300" rounded/>
`,

`
<Avatar src="https://i.pravatar.cc/300" rounded="md" border />
<Avatar src="https://i.pravatar.cc/300" rounded="md" border class="ring-danger-400 dark:ring-danger-300" />
`,

`
<Avatar rounded="md" />
<Avatar rounded="full" />
<Avatar rounded="md" border />
<Avatar rounded border />
`,

`
<Avatar rounded="md">JL</Avatar>
`,

`
<Tooltip content="Jese Leos">
	<Avatar rounded src="https://i.pravatar.cc/300"/>
</Tooltip>

<Tooltip content="Jese Leos">
	<Avatar rounded src="https://i.pravatar.cc/300"/>
</Tooltip>

<Tooltip content="Bonnie Green">
	<Avatar rounded src="https://i.pravatar.cc/300"/>
</Tooltip>
`,

`
<Avatar src="https://i.pravatar.cc/300" dot={{top: true, color: "bg-danger-400"}}/>
<Avatar	src="https://i.pravatar.cc/300" dot={{top: true, color: "bg-danger-400"}} rounded />
<Avatar	src="https://i.pravatar.cc/300" dot={{color: "bg-green-400"}}/>
<Avatar	src="https://i.pravatar.cc/300" dot={{color: "bg-green-400"}} rounded/>
`,

`
<div class="flex mb-5">
	<Avatar src="https://i.pravatar.cc/300" rounded stacked />
	<Avatar src="https://i.pravatar.cc/300" rounded stacked />
	<Avatar src="https://i.pravatar.cc/300" rounded stacked />
	<Avatar rounded stacked />
</div>

<div class="flex">
	<Avatar src="https://i.pravatar.cc/300" rounded stacked />
	<Avatar src="https://i.pravatar.cc/300" rounded stacked />
	<Avatar src="https://i.pravatar.cc/300" rounded stacked />
	<Avatar rounded stacked href="/" class="text-white bg-gray-700 dark:bg-gray-700 hover:bg-gray-600">+99</Avatar>
</div>
`,

`
<Avatar src="https://i.pravatar.cc/300" rounded="lg" />

<div class="space-y-1 font-medium dark:text-white">
	<div>Jese Leos</div>
	<div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
</div>
`,

`
<Dropdown>
	<Avatar slot="trigger" src="https://i.pravatar.cc/300" dot={{color:'bg-green-400'}} />

	<DropdownHeader>
		<span class="block text-sm"> Bonnie Green </span>
		<span class="block text-sm font-medium truncate"> name@flowbite.com </span>
	</DropdownHeader>

	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownItem>Earnings</DropdownItem>

	<DropdownDivider />
	
	<DropdownItem>Sign out</DropdownItem>
</Dropdown>
`,

`
<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="xs" />
<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="sm" />
<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="md" />
<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="lg" />
<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="xl" />
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-avatar" title="Default avatar" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Avatar src="https://i.pravatar.cc/300" rounded="md" />
	 		<Avatar src="https://i.pravatar.cc/300" rounded/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="bordered" title="Bordered" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Avatar src="https://i.pravatar.cc/300" rounded="md" border />
			<Avatar src="https://i.pravatar.cc/300" rounded="md" border class="ring-danger-400 dark:ring-danger-300" />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="placeholder" title="Placeholder" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Avatar rounded="md" />
			<Avatar rounded="full" />
			<Avatar rounded="md" border />
			<Avatar rounded border />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="placeholder-initials" title="Placeholder initials" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Avatar rounded="md">JL</Avatar>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="avatar-tooltip" title="Avatar tooltip" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tooltip content="Jese Leos">
				<Avatar rounded src="https://i.pravatar.cc/300"/>
			</Tooltip>
			
			<Tooltip content="Jese Leos">
				<Avatar rounded src="https://i.pravatar.cc/300"/>
			</Tooltip>

			<Tooltip content="Bonnie Green">
				<Avatar rounded src="https://i.pravatar.cc/300"/>
			</Tooltip>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="dot-indicator" title="Dot indicator" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Avatar src="https://i.pravatar.cc/300" dot={{top: true, color: "bg-danger-400"}} rounded="lg" />
			<Avatar	src="https://i.pravatar.cc/300" dot={{top: true, color: "bg-danger-400"}} rounded />
			<Avatar	src="https://i.pravatar.cc/300" dot={{color: "bg-green-400"}} rounded="lg" />
			<Avatar	src="https://i.pravatar.cc/300" dot={{color: "bg-green-400"}} rounded />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="stacked" title="Stacked" code={codeBlocks[6]}>
		<div slot="preview" class="pl-3.5">
			<div class="flex mb-5">
				<Avatar src="https://i.pravatar.cc/300" rounded stacked />
				<Avatar src="https://i.pravatar.cc/300" rounded stacked />
				<Avatar src="https://i.pravatar.cc/300" rounded stacked />
				<Avatar rounded stacked />
			</div>
			
			<div class="flex">
				<Avatar src="https://i.pravatar.cc/300" rounded stacked />
				<Avatar src="https://i.pravatar.cc/300" rounded stacked />
				<Avatar src="https://i.pravatar.cc/300" rounded stacked />
				<Avatar rounded stacked href="/" class="text-white bg-gray-700 dark:bg-gray-700 hover:bg-gray-600">+99</Avatar>
			</div>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="avatar-text" title="Avatar text" code={codeBlocks[7]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<div class="flex items-center space-x-4">
				<Avatar src="https://i.pravatar.cc/300" rounded="lg" />

				<div class="space-y-1 font-medium dark:text-white">
					<div>Jese Leos</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
				</div>
			</div>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="user-dropdown" title="User dropdown" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			Dropdown
			<!-- <Dropdown>
				<Avatar slot="trigger" src="https://i.pravatar.cc/300" dot={{color:'bg-green-400'}} />
				<DropdownHeader>
				  <span class="block text-sm"> Bonnie Green </span>
				  <span class="block text-sm font-medium truncate"> name@flowbite.com </span>
				</DropdownHeader>
				<DropdownItem>Dashboard</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Earnings</DropdownItem>
				<DropdownDivider />
				<DropdownItem>Sign out</DropdownItem>
			</Dropdown> -->
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[9]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="xs" />
			<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="sm" />
			<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="md" />
			<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="lg" />
			<Avatar src="https://i.pravatar.cc/300" rounded="lg" size="xl" />
		</div>
	</DocSection>
</div>
