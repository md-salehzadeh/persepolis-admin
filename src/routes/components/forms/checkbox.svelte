<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Checkbox from '$components/Forms/Checkbox.svelte';
	import Label from '$components/Forms/Label.svelte';
	import Helper from '$components/Forms/Helper.svelte';
	import Search from '$components/Forms/Search.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import Dropdown from '$components/Dropdowns/Index.svelte';
	import Table from '$components/Tables/Index.svelte';
	import Thead from '$components/Tables/Thead.svelte';
	import Tbody from '$components/Tables/Tbody.svelte';
	import Tr from '$components/Tables/Tr.svelte';
	import Th from '$components/Tables/Th.svelte';
	import Td from '$components/Tables/Td.svelte';

	let group = [2, 3];

	let codeBlocks = [
`
<Checkbox>Default checkbox</Checkbox>

<Checkbox checked>Checked state</Checkbox>
`,

`
<Checkbox disabled>Disabled checkbox</Checkbox>

<Checkbox disabled checked>Disabled checked</Checkbox>
`,

`
<Table>
	<Thead>
		<Th>Left column</Th>
		<Th>Right column</Th>
	</Thead>

	<Tbody class="divide-y dark:divide-gray-700">
		<Tr class="divide-x dark:divide-gray-700">
			<Td><Label for="checkbox1">Default checkbox</Label></Td>
			<Td><Label for="checkbox2">Disabled checkbox</Label></Td>
		</Tr>

		<Tr class="divide-x dark:divide-gray-700">
			<Td><Checkbox id="checkbox1" checked/></Td>
			<Td><Checkbox id="checkbox2" disabled/></Td>
		</Tr>
	</Tbody>
</Table>

<Label color='red' class="mt-4 flex items-center font-bold italic">
	Label on the other side <Checkbox class="ml-2"/>
</Label>
`,

`
<Checkbox>
	I agree with the
	<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline ml-1">terms and conditions</a>.
</Checkbox>
`,

`
<Checkbox aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Checkbox>

<Helper id="helper-checkbox-text" class="pl-6">For orders shipped from $25 in books or $29 in other categories</Helper>
`,

`
<div class="rounded border border-gray-200 dark:border-gray-700">
	<Checkbox class="w-full p-4">Default radio</Checkbox>
</div>

<div class="rounded border border-gray-200 dark:border-gray-700">
	<Checkbox checked class="w-full p-4">Checked state</Checkbox>
</div>
`,

`
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>

<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
	<li><Checkbox class="p-3">svelte</Checkbox></li>
	<li><Checkbox class="p-3">Vue JS</Checkbox></li>
	<li><Checkbox class="p-3">React</Checkbox></li>
	<li><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
`,

`
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>

<ul	class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
	<li class="w-full"><Checkbox class="p-3">Svelte</Checkbox></li>
	<li class="w-full"><Checkbox class="p-3">Vue JS</Checkbox></li>
	<li class="w-full"><Checkbox class="p-3">React</Checkbox></li>
	<li class="w-full"><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
`,

`
<Button>Project users <Icon name="chevron-down" class="ml-2" /></Button>

<Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
	<div slot="header" class="p-3">
		<Search size="md"/>
	</div>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Checkbox>Robert Gouth</Checkbox>
	</li>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Checkbox>Jese Leos</Checkbox>
	</li>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Checkbox checked>Bonnie Green</Checkbox>
	</li>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Checkbox>Jese Leos</Checkbox>
	</li>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Checkbox>Robert Gouth</Checkbox>
	</li>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Checkbox>Bonnie Green</Checkbox>
	</li>

	<a slot="footer" href="/" class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
		<Icon name="user-minus" class="mr-2" /> Delete user
	</a>
</Dropdown>
`,

`
<Checkbox>Inline 1</Checkbox>
<Checkbox>Inline 2</Checkbox>
<Checkbox checked>Inline checked</Checkbox>
<Checkbox disabled>Inline disabled</Checkbox>
`,

`
<Checkbox checked color='success'>Success</Checkbox>
<Checkbox checked color='warning'>Warning</Checkbox>
<Checkbox checked color='danger'>Danger</Checkbox>
<Checkbox checked color='purple'>Purple</Checkbox>
<Checkbox checked color='teal'>Teal</Checkbox>
<Checkbox checked color='orange'>Orange</Checkbox>
`,

`
<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>

<div class="grid gap-6 w-full md:grid-cols-3">
	<Checkbox custom>
		<div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
			<svg class="mb-2 w-7 h-7 text-sky-500" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>

			<div class="w-full text-lg font-semibold">React Js</div>

			<div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
		</div>
	</Checkbox>

	<Checkbox custom>
		<div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
			<svg class="mb-2 w-7 h-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>

			<div class="w-full text-lg font-semibold">Vue Js</div>

			<div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
		</div>
	</Checkbox>

	<Checkbox custom>
		<div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
			<svg class="mb-2 w-7 h-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>

			<div class="w-full text-lg font-semibold">Angular</div>

			<div class="w-full text-sm">A TypeScript-based web application framework.</div>
		</div>
	</Checkbox>
</div>
`,

`
<script>
	let group = [2, 3];
<\/script>

<div class="flex gap-2">
	<Checkbox bind:group value={1}>One</Checkbox>

	<Checkbox bind:group value={2}>Two</Checkbox>

	<Checkbox bind:group value={3}>Three</Checkbox>
</div>

<div class="my-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 w-44">Group: {group}</div>

<Button on:click={()=> group.length = 0}>Clear</Button>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="checkbox-examples" title="Checkbox examples" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap flex-col gap-4">
			<Checkbox>Default checkbox</Checkbox>

			<Checkbox checked>Checked state</Checkbox>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disabled-state" title="Disabled state" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap flex-col gap-4">
			<Checkbox disabled>Disabled checkbox</Checkbox>

			<Checkbox disabled checked>Disabled checked</Checkbox>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="alternative-syntax" title="Alternative syntax" code={codeBlocks[2]}>
		<div slot="preview">
			<Table>
				<Thead>
					<Th>Left column</Th>
					<Th>Right column</Th>
				</Thead>

				<Tbody class="divide-y dark:divide-gray-700">
					<Tr class="divide-x dark:divide-gray-700">
						<Td><Label for="checkbox1">Default checkbox</Label></Td>
						<Td><Label for="checkbox2">Disabled checkbox</Label></Td>
					</Tr>

					<Tr class="divide-x dark:divide-gray-700">
						<Td><Checkbox id="checkbox1" checked/></Td>
						<Td><Checkbox id="checkbox2" disabled/></Td>
					</Tr>
				</Tbody>
			</Table>

			<Label color='red' class="mt-4 flex items-center font-bold italic">
				Label on the other side <Checkbox class="ml-2"/>
			</Label>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="checkbox-with-a-link" title="Checkbox with a link" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Checkbox>
				I agree with the
				<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline ml-1">terms and conditions</a>.
			</Checkbox>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="helper-text" title="Helper text" code={codeBlocks[4]}>
		<div slot="preview">
			<Checkbox aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Checkbox>

			<Helper id="helper-checkbox-text" class="pl-6">For orders shipped from $25 in books or $29 in other categories</Helper>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="bordered" title="Bordered" code={codeBlocks[5]}>
		<div slot="preview">
			<div class="rounded border border-gray-200 dark:border-gray-700">
				<Checkbox class="w-full p-4">Default radio</Checkbox>
			</div>

			<div class="rounded border border-gray-200 dark:border-gray-700">
				<Checkbox checked class="w-full p-4">Checked state</Checkbox>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="checkbox-list-group" title="Checkbox list group" code={codeBlocks[6]}>
		<div slot="preview">
			<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>

			<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
				<li><Checkbox class="p-3">svelte</Checkbox></li>
				<li><Checkbox class="p-3">Vue JS</Checkbox></li>
				<li><Checkbox class="p-3">React</Checkbox></li>
				<li><Checkbox class="p-3">Angular</Checkbox></li>
			</ul>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="horizontal-list-group" title="Horizontal list group" code={codeBlocks[7]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>

			<ul	class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
				<li class="w-full"><Checkbox class="p-3">Svelte</Checkbox></li>
				<li class="w-full"><Checkbox class="p-3">Vue JS</Checkbox></li>
				<li class="w-full"><Checkbox class="p-3">React</Checkbox></li>
				<li class="w-full"><Checkbox class="p-3">Angular</Checkbox></li>
			</ul>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="checkbox-dropdown" title="Checkbox dropdown" code={codeBlocks[8]}>
		<div slot="preview">
			<Button>Project users <Icon name="chevron-down" class="ml-2" /></Button>

			<Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
				<div slot="header" class="p-3">
					<Search size="md"/>
				</div>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Checkbox>Robert Gouth</Checkbox>
				</li>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Checkbox>Jese Leos</Checkbox>
				</li>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Checkbox checked>Bonnie Green</Checkbox>
				</li>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Checkbox>Jese Leos</Checkbox>
				</li>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Checkbox>Robert Gouth</Checkbox>
				</li>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Checkbox>Bonnie Green</Checkbox>
				</li>

				<a slot="footer" href="/" class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
					<Icon name="user-minus" class="mr-2" /> Delete user
				</a>
			</Dropdown>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="inline-layout" title="Inline layout" code={codeBlocks[9]}>
		<div slot="preview">
			<div class="flex gap-3">
				<Checkbox>Inline 1</Checkbox>
				<Checkbox>Inline 2</Checkbox>
				<Checkbox checked>Inline checked</Checkbox>
				<Checkbox disabled>Inline disabled</Checkbox>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="colors" title="Colors" code={codeBlocks[10]}>
		<div slot="preview">
			<div class="flex gap-4">
				<Checkbox checked color='success'>Success</Checkbox>
				<Checkbox checked color='warning'>Warning</Checkbox>
				<Checkbox checked color='danger'>Danger</Checkbox>
				<Checkbox checked color='purple'>Purple</Checkbox>
				<Checkbox checked color='teal'>Teal</Checkbox>
				<Checkbox checked color='orange'>Orange</Checkbox>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="advanced-layout" title="Advanced layout" code={codeBlocks[11]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>

			<div class="grid gap-6 w-full md:grid-cols-3">
				<Checkbox custom>
					<div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
						<svg class="mb-2 w-7 h-7 text-sky-500" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>

						<div class="w-full text-lg font-semibold">React Js</div>

						<div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
					</div>
				</Checkbox>

				<Checkbox custom>
					<div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
						<svg class="mb-2 w-7 h-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>

						<div class="w-full text-lg font-semibold">Vue Js</div>

						<div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
					</div>
				</Checkbox>

				<Checkbox custom>
					<div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
						<svg class="mb-2 w-7 h-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>

						<div class="w-full text-lg font-semibold">Angular</div>

						<div class="w-full text-sm">A TypeScript-based web application framework.</div>
					</div>
				</Checkbox>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="group-variable" title="Group variable" code={codeBlocks[12]}>
		<div slot="preview">
			<div class="flex gap-2">
				<Checkbox bind:group value={1}>One</Checkbox>

				<Checkbox bind:group value={2}>Two</Checkbox>

				<Checkbox bind:group value={3}>Three</Checkbox>
			</div>

			<div class="my-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 w-44">Group: {group}</div>

			<Button on:click={()=> group.length = 0}>Clear</Button>
		</div>
	</DocSection>
</div>