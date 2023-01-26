<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Tabs from '$components/Tabs/Index.svelte';
	import TabItem from '$components/Tabs/TabItem.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let codeBlocks = [
`
<Tabs>
	<TabItem open title="Profile">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem ttile="Settings">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem title="Users">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem title="Dashboard">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem disabled>
		<span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>
</Tabs>
`,

`
<Tabs style="underline">
	<TabItem open title="Profile">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem title="Dashboard">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem title="Settings">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem title="Users">
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem disabled>
		<span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>
</Tabs>
`,

`
<Tabs style="underline">
	<TabItem open>
		<div slot="title" class="flex items-center gap-2">
			<Icon type="fa-solid" name="user" />
			Profile
		</div>

		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<Icon type="fa-solid" name="gauge" />
			Dashboard
		</div>

		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<Icon type="fa-solid" name="sliders-up" />
			Settings
		</div>

		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<Icon type="fa-solid" name="address-book" />
			Contacts
		</div>

		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Contacts:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>
</Tabs>
`,

`
<Tabs style="pill">
	<TabItem open>
		<span slot="title">Profile</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<span slot="title">Dashboard</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<span slot="title">Settings</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<span slot="title">Users</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>
</Tabs>
`,

`
<Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
	<TabItem class="w-full" open>
		<span slot="title">Profile</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem class="w-full">
		<span slot="title">Dashboard</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem class="w-full">
		<span slot="title">Settings</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem class="w-full">
		<span slot="title">Users</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>
</Tabs>
`,

`
<Tabs>
	<TabItem open>
		<span slot="title">Profile</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<span slot="title">Dashboard</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<span slot="title">Settings</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>

	<TabItem>
		<span slot="title">Users</span>
		<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</TabItem>
</Tabs>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-tabs" title="Default tabs" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tabs>
				<TabItem open title="Profile">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem ttile="Settings">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem title="Users">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem title="Dashboard">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem disabled>
					<span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>
			</Tabs>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="tabs-with-underline" title="Tabs with underline" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tabs style="underline">
				<TabItem open title="Profile">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem title="Dashboard">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem title="Settings">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem title="Users">
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem disabled>
					<span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>
			</Tabs>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="tabs-with-icons" title="Tabs with icons" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tabs style="underline">
				<TabItem open>
					<div slot="title" class="flex items-center gap-2">
						<Icon type="fa-solid" name="user" />
						Profile
					</div>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<div slot="title" class="flex items-center gap-2">
						<Icon type="fa-solid" name="gauge" />
						Dashboard
					</div>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<div slot="title" class="flex items-center gap-2">
						<Icon type="fa-solid" name="sliders-up" />
						Settings
					</div>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<div slot="title" class="flex items-center gap-2">
						<Icon type="fa-solid" name="address-book" />
						Contacts
					</div>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Contacts:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>
			</Tabs>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="pills-tabs" title="Pills tabs" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tabs style="pill">
				<TabItem open>
					<span slot="title">Profile</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<span slot="title">Dashboard</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<span slot="title">Settings</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<span slot="title">Users</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>
			</Tabs>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="full-width-tabs" title="Full width tabs" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
				<TabItem class="w-full" open>
					<span slot="title">Profile</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem class="w-full">
					<span slot="title">Dashboard</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem class="w-full">
					<span slot="title">Settings</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem class="w-full">
					<span slot="title">Users</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>
			</Tabs>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="components-in-tab-contents" title="Components in tab contents" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Tabs>
				<TabItem open>
					<span slot="title">Profile</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<span slot="title">Dashboard</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<span slot="title">Settings</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>

				<TabItem>
					<span slot="title">Users</span>

					<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</TabItem>
			</Tabs>
		</div>
	</DocSection>
</div>
