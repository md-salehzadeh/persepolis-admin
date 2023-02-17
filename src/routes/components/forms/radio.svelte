<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Radio from '$components/Forms/Radio.svelte';
	import Label from '$components/Forms/Label.svelte';
	import Helper from '$components/Forms/Helper.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import Dropdown from '$components/Dropdowns/Index.svelte';
	import Table from '$components/Tables/Index.svelte';
	import Thead from '$components/Tables/Thead.svelte';
	import Tbody from '$components/Tables/Tbody.svelte';
	import Tr from '$components/Tables/Tr.svelte';
	import Th from '$components/Tables/Th.svelte';
	import Td from '$components/Tables/Td.svelte';

	let technology = 'svelte';

	let group3 = 2;

	let inline1 = 'second';

	let colors;

	let codeBlocks = [
`
<Radio name="example">Default radio</Radio>

<Radio name="example">Checked state</Radio>
`,

`
<Radio name="disabled-state" disabled>Disabled radio</Radio>

<Radio name="disabled-state" disabled>Disabled checked</Radio>
`,

`
<Table>
	<Thead>
		<Th>Left column</Th>
		<Th>Right column</Th>
	</Thead>

	<Tbody class="divide-y dark:divide-gray-700">
		<Tr class="divide-x dark:divide-gray-700">
			<Td><Label for="radio1">Default radio</Label></Td>
			<Td><Label for="radio2">Disabled radio</Label></Td>
		</Tr>

		<Tr class="divide-x dark:divide-gray-700">
			<Td><Radio name="separate" id="radio1" /></Td>
			<Td><Radio name="separate" id="radio2" disabled/></Td>
		</Tr>
	</Tbody>
</Table>

<Label color='red' class="mt-4 flex items-center font-bold italic">
	Label on the other side <Radio name="separate" class="ml-2"/>
</Label>
`,

`
<Radio name="with-link">
	I agree with the <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline ml-1">terms and conditions</a>.
</Radio>
`,

`
<Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>

<Helper id="helper-checkbox-text" class="pl-6">For orders shipped from $25 in books or $29 in other categories</Helper>
`,

`
<div class="grid grid-cols-2 gap-6">
	<div class="rounded border border-gray-200 dark:border-gray-700">
		<Radio name="bordered" class="w-full p-4">Default radio</Radio>
	</div>

	<div class="rounded border border-gray-200 dark:border-gray-700">
		<Radio name="bordered" class="w-full p-4">Checked state</Radio>
	</div>
</div>
`,

`
<script>
	let technology = 'svelte';
<\/script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize">{technology}</span></p>

<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
	<li><Radio class="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
	<li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
	<li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
	<li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
</ul>
`,

`
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>

<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
	<li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
	<li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
	<li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
	<li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
</ul>
`,

`
<script>
	let group3 = 2;
<\/script>

<Button>Dropdown radio <Icon name="chevron-down" class="ml-2" /></Button>

<Dropdown class="w-60 p-3 space-y-1">
	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>

		<Helper class="pl-6">Some helpful instruction goes over here.</Helper>
	</li>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>

		<Helper class="pl-6">Some helpful instruction goes over here.</Helper>
	</li>

	<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>

		<Helper class="pl-6">Some helpful instruction goes over here.</Helper>
	</li>
</Dropdown>
`,

`
<script>
	let inline1 = 'second';
<\/script>

<div class="flex gap-3">
	<Radio group={inline1} value="first">Inline 1</Radio>
	<Radio group={inline1} value="second">Inline 2 checked</Radio>
	<Radio group={inline1} value="third">Inline 3</Radio>
	<Radio group={inline1} value="fourth" disabled>Inline disabled</Radio>
</div>
`,

`
<script>
	let colors;
<\/script>

<p class="mb-4 font-semibold {colors}">Select color</p>

<div class="flex gap-4">
	<Radio bind:group={colors} color='success' value='text-success-500'>Success</Radio>
	<Radio bind:group={colors} color='warning' value='text-warning-500'>Warning</Radio>
	<Radio bind:group={colors} color='danger' value='text-danger-500'>Danger</Radio>
	<Radio bind:group={colors} color='purple' value='text-purple-500'>Purple</Radio>
	<Radio bind:group={colors} color='teal' value='text-teal-500'>Teal</Radio>
	<Radio bind:group={colors} color='orange' value='text-orange-500'>Orange</Radio>
</div>
`,

`
<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>

<div class="grid gap-6 w-full md:grid-cols-2">
	<Radio name="custom" custom>
		<div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div>
				<div class="w-full text-lg font-semibold">0-50 MB</div>
				<div class="w-full">Good for small websites</div>
			</div>

			<Icon name="arrow-right-long" size="xl" class="ml-3" />
		</div>
	</Radio>

	<Radio name="custom" custom>
		<div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div class="block">
				<div class="w-full text-lg font-semibold">500-1000 MB</div>
				<div class="w-full">Good for large websites</div>
			</div>

			<Icon name="arrow-right-long" size="xl" class="ml-3" />
		</div>
	</Radio>
</div>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="radio-examples" title="Radio examples" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap flex-col gap-4">
			<Radio name="example">Default radio</Radio>

			<Radio name="example">Checked state</Radio>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disabled-state" title="Disabled state" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap flex-col gap-4">
			<Radio name="disabled-state" disabled>Disabled radio</Radio>

			<Radio name="disabled-state" disabled>Disabled checked</Radio>
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
						<Td><Label for="radio1">Default radio</Label></Td>
						<Td><Label for="radio2">Disabled radio</Label></Td>
					</Tr>

					<Tr class="divide-x dark:divide-gray-700">
						<Td><Radio name="separate" id="radio1" /></Td>
						<Td><Radio name="separate" id="radio2" disabled/></Td>
					</Tr>
				</Tbody>
			</Table>

			<Label color='red' class="mt-4 flex items-center font-bold italic">
				Label on the other side <Radio name="separate" class="ml-2"/>
			</Label>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="radio-with-a-link" title="Radio with a link" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Radio name="with-link">
				I agree with the <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline ml-1">terms and conditions</a>.
			</Radio>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="helper-text" title="Helper text" code={codeBlocks[4]}>
		<div slot="preview">
			<Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>

			<Helper id="helper-checkbox-text" class="pl-6">For orders shipped from $25 in books or $29 in other categories</Helper>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="bordered" title="Bordered" code={codeBlocks[5]}>
		<div slot="preview">
			<div class="grid grid-cols-2 gap-6">
				<div class="rounded border border-gray-200 dark:border-gray-700">
					<Radio name="bordered" class="w-full p-4">Default radio</Radio>
				</div>

				<div class="rounded border border-gray-200 dark:border-gray-700">
					<Radio name="bordered" class="w-full p-4">Checked state</Radio>
				</div>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="radio-list-group" title="Radio list group" code={codeBlocks[6]}>
		<div slot="preview">
			<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize">{technology}</span></p>

			<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
				<li><Radio class="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
				<li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
				<li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
				<li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
			</ul>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="horizontal-list-group" title="Horizontal list group" code={codeBlocks[7]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>

			<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
				<li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
				<li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
				<li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
				<li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
			</ul>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="radio-in-dropdown" title="Radio in dropdown" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button>Dropdown radio <Icon name="chevron-down" class="ml-2" /></Button>

			<Dropdown class="w-60 p-3 space-y-1">
				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>

					<Helper class="pl-6">Some helpful instruction goes over here.</Helper>
				</li>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>

					<Helper class="pl-6">Some helpful instruction goes over here.</Helper>
				</li>

				<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
					<Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>

					<Helper class="pl-6">Some helpful instruction goes over here.</Helper>
				</li>
			</Dropdown>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="inline-layout" title="Inline layout" code={codeBlocks[9]}>
		<div slot="preview">
			<div class="flex gap-3">
				<Radio group={inline1} value="first">Inline 1</Radio>
				<Radio group={inline1} value="second">Inline 2 checked</Radio>
				<Radio group={inline1} value="third">Inline 3</Radio>
				<Radio group={inline1} value="fourth" disabled>Inline disabled</Radio>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="colors" title="Colors" code={codeBlocks[10]}>
		<div slot="preview">
			<p class="mb-4 font-semibold {colors}">Select color</p>

			<div class="flex gap-4">
				<Radio bind:group={colors} color='success' value='text-success-500'>Success</Radio>
				<Radio bind:group={colors} color='warning' value='text-warning-500'>Warning</Radio>
				<Radio bind:group={colors} color='danger' value='text-danger-500'>Danger</Radio>
				<Radio bind:group={colors} color='purple' value='text-purple-500'>Purple</Radio>
				<Radio bind:group={colors} color='teal' value='text-teal-500'>Teal</Radio>
				<Radio bind:group={colors} color='orange' value='text-orange-500'>Orange</Radio>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="advanced-layout" title="Advanced layout" code={codeBlocks[11]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>

			<div class="grid gap-6 w-full md:grid-cols-2">
				<Radio name="custom" custom>
					<div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
						<div>
							<div class="w-full text-lg font-semibold">0-50 MB</div>
							<div class="w-full">Good for small websites</div>
						</div>

						<Icon name="arrow-right-long" size="xl" class="ml-3" />
					</div>
				</Radio>

				<Radio name="custom" custom>
					<div for="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
						<div class="block">
							<div class="w-full text-lg font-semibold">500-1000 MB</div>
							<div class="w-full">Good for large websites</div>
						</div>

						<Icon name="arrow-right-long" size="xl" class="ml-3" />
					</div>
				</Radio>
			</div>
		</div>
	</DocSection>
</div>