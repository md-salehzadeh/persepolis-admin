<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Table from '$components/Tables/Index.svelte';
	import TableSearch from '$components/Tables/TableSearch.svelte';
	import Thead from '$components/Tables/Thead.svelte';
	import Tbody from '$components/Tables/Tbody.svelte';
	import Tr from '$components/Tables/Tr.svelte';
	import Th from '$components/Tables/Th.svelte';
	import Td from '$components/Tables/Td.svelte';

	let searchTerm = '';

	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 },
	];

	$: filteredItems = items.filter(
		(item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
	);

	let codeBlocks = [
`
<Table>
	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table striped={true}>
	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
		<Th>
			<span class="sr-only"> Edit </span>
		</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Google Pixel Phone</Td>
			<Td>Gray</Td>
			<Td>Phone</Td>
			<Td>$799</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Apple Watch 5</Td>
			<Td>Red</Td>
			<Td>Wearables</Td>
			<Td>$999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table hoverable={true}>
	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
		<Th>
			<span class="sr-only"> Edit </span>
		</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table hoverable={true}>
	<Thead>
		<Th class="!p-4">
			<!-- <Checkbox /> -->
		</Th>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
		<Th>
			<span class="sr-only"> Edit </span>
		</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td class="!p-4">
				<!-- <Checkbox /> -->
			</Td>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td class="!p-4">
				<!-- <Checkbox /> -->
			</Td>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td class="!p-4">
				<!-- <Checkbox /> -->
			</Td>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<script>
	let searchTerm = '';

	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 },
	];

	$: filteredItems = items.filter(
		(item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
	);
<\/script>

<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
	<Thead>
		<Th>ID</Th>
		<Th>Maker</Th>
		<Th>Type</Th>
		<Th>Make</Th>
	</Thead>

	<Tbody class="divide-y">
		{#each filteredItems as item}
			<Tr>
				<Td>{item.id}</Td>
				<Td>{item.maker}</Td>
				<Td>{item.type}</Td>
				<Td>{item.make}</Td>
			</Tr>
		{/each}
	</Tbody>
</TableSearch>
`,

`
<Table>
	<Thead defaultRow={false}>
		<tr>
			<Th colspan="2">Product</Th>
			<Th colspan="3">Info</Th>
		</tr>

		<tr>
			<Th>Brand</Th>
			<Th>Product name</Th>
			<Th>Color</Th>
			<Th>Category</Th>
			<Th>Price</Th>
		</tr>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple</Td>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
		</Tr>

		<Tr>
			<Td>Microsoft</Td>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
		</Tr>

		<Tr>
			<Td>Apple</Td>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table noborder={true}>
	<Thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
		<Th>Product name</Th>
		<Th>Qty</Th>
		<Th>Price</Th>
	</Thead>

	<Tbody>
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>1</Td>
			<Td>$2999</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>1</Td>
			<Td>$1999</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>1</Td>
			<Td>$99</Td>
		</Tr>
	</Tbody>

	<tfoot>
		<tr class="font-semibold text-gray-900 dark:text-white">
			<th scope="row" class="py-3 px-6 text-base">Total</th>
			<td class="py-3 px-6">3</td>
			<td class="py-3 px-6">21,000</td>
		</tr>
	</tfoot>
</Table>
`,

`
<Table>
	<caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
		Our products
		<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
			Browse a list of Flowbite products designed to help you work and play, stay organized,
			get answers, keep in touch, grow your business, and more.
		</p>
	</caption>

	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
		<Th>
			<span class="sr-only">Edit</span>
		</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table noborder={true}>
	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
	</Thead>

	<Tbody>
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table shadow>
	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table>
	<Thead>
		<Th class="!p-4">
			<!-- <Checkbox /> -->
		</Th>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>ACCESORIES</Th>
		<Th>AVAILABLE</Th>
		<Th>Price</Th>
		<Th>WEIGHT</Th>
		<Th>ACTION</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td class="!p-4">
				<!-- <Checkbox /> -->
			</Td>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>Yes</Td>
			<Td>Yes</Td>
			<Td>$2999</Td>
			<Td>3.0 lb.</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>

				<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
					Remove
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td class="!p-4">
				<!-- <Checkbox /> -->
			</Td>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>No</Td>
			<Td>Yes</Td>
			<Td>$1999</Td>
			<Td>1.0 lb.</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>

				<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
					Remove
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td class="!p-4">
				<!-- <Checkbox /> -->
			</Td>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>Yes</Td>
			<Td>No</Td>
			<Td>$99</Td>
			<Td>0.2 lb.</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>

				<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
					Remove
				</a>
			</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table color="blue" hoverable={true}>
	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Table striped={true} color="purple">
	<Thead>
		<Th>Product name</Th>
		<Th>Color</Th>
		<Th>Category</Th>
		<Th>Price</Th>
		<Th>
			<span class="sr-only">Edit</span>
		</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>Apple MacBook Pro 17"</Td>
			<Td>Sliver</Td>
			<Td>Laptop</Td>
			<Td>$2999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Microsoft Surface Pro</Td>
			<Td>White</Td>
			<Td>Laptop PC</Td>
			<Td>$1999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Magic Mouse 2</Td>
			<Td>Black</Td>
			<Td>Accessories</Td>
			<Td>$99</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Google Pixel Phone</Td>
			<Td>Gray</Td>
			<Td>Phone</Td>
			<Td>$799</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>

		<Tr>
			<Td>Apple Watch 5</Td>
			<Td>Red</Td>
			<Td>Wearables</Td>
			<Td>$999</Td>
			<Td>
				<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
					Edit
				</a>
			</Td>
		</Tr>
	</Tbody>
</Table>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-table" title="Default table" code={codeBlocks[0]}>
		<div slot="preview">
			<Table>
				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="striped-rows" title="Striped rows" code={codeBlocks[1]}>
		<div slot="preview">
			<Table striped={true}>
				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
					<Th>
						<span class="sr-only"> Edit </span>
					</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Google Pixel Phone</Td>
						<Td>Gray</Td>
						<Td>Phone</Td>
						<Td>$799</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Apple Watch 5</Td>
						<Td>Red</Td>
						<Td>Wearables</Td>
						<Td>$999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="hover-state" title="Hover state" code={codeBlocks[2]}>
		<div slot="preview">
			<Table hoverable={true}>
				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
					<Th>
						<span class="sr-only"> Edit </span>
					</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="checkbox" title="Checkbox" code={codeBlocks[3]}>
		<div slot="preview">
			<Table hoverable={true}>
				<Thead>
					<Th class="!p-4">
						<!-- <Checkbox /> -->
					</Th>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
					<Th>
						<span class="sr-only"> Edit </span>
					</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td class="!p-4">
							<!-- <Checkbox /> -->
						</Td>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td class="!p-4">
							<!-- <Checkbox /> -->
						</Td>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td class="!p-4">
							<!-- <Checkbox /> -->
						</Td>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="search-input" title="Search input" code={codeBlocks[4]}>
		<div slot="preview">
			<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
				<Thead>
					<Th>ID</Th>
					<Th>Maker</Th>
					<Th>Type</Th>
					<Th>Make</Th>
				</Thead>

				<Tbody class="divide-y">
					{#each filteredItems as item}
						<Tr>
							<Td>{item.id}</Td>
							<Td>{item.maker}</Td>
							<Td>{item.type}</Td>
							<Td>{item.make}</Td>
						</Tr>
					{/each}
				</Tbody>
			</TableSearch>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="table-head" title="Table head" code={codeBlocks[5]}>
		<div slot="preview">
			<Table>
				<Thead defaultRow={false}>
					<tr>
						<Th colspan="2">Product</Th>
						<Th colspan="3">Info</Th>
					</tr>

					<tr>
						<Th>Brand</Th>
						<Th>Product name</Th>
						<Th>Color</Th>
						<Th>Category</Th>
						<Th>Price</Th>
					</tr>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple</Td>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
					</Tr>

					<Tr>
						<Td>Microsoft</Td>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
					</Tr>

					<Tr>
						<Td>Apple</Td>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="table-foot" title="Table foot" code={codeBlocks[6]}>
		<div slot="preview">
			<Table noborder={true}>
				<Thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
					<Th>Product name</Th>
					<Th>Qty</Th>
					<Th>Price</Th>
				</Thead>

				<Tbody>
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>1</Td>
						<Td>$2999</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>1</Td>
						<Td>$1999</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>1</Td>
						<Td>$99</Td>
					</Tr>
				</Tbody>

				<tfoot>
					<tr class="font-semibold text-gray-900 dark:text-white">
						<th scope="row" class="py-3 px-6 text-base">Total</th>
						<td class="py-3 px-6">3</td>
						<td class="py-3 px-6">21,000</td>
					</tr>
				</tfoot>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="table-caption" title="Table caption" code={codeBlocks[7]}>
		<div slot="preview">
			<Table>
				<caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
					Our products
					<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
						Browse a list of Flowbite products designed to help you work and play, stay organized,
						get answers, keep in touch, grow your business, and more.
					</p>
				</caption>

				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
					<Th>
						<span class="sr-only">Edit</span>
					</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="without-border" title="Without border" code={codeBlocks[8]}>
		<div slot="preview">
			<Table noborder={true}>
				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
				</Thead>

				<Tbody>
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="table-with-shadow" title="Table with shadow" code={codeBlocks[9]}>
		<div slot="preview">
			<Table shadow>
				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="overflow-scrolling" title="Overflow scrolling" code={codeBlocks[10]}>
		<div slot="preview">
			<Table>
				<Thead>
					<Th class="!p-4">
						<!-- <Checkbox /> -->
					</Th>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>ACCESORIES</Th>
					<Th>AVAILABLE</Th>
					<Th>Price</Th>
					<Th>WEIGHT</Th>
					<Th>ACTION</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td class="!p-4">
							<!-- <Checkbox /> -->
						</Td>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>Yes</Td>
						<Td>Yes</Td>
						<Td>$2999</Td>
						<Td>3.0 lb.</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>

							<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
								Remove
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td class="!p-4">
							<!-- <Checkbox /> -->
						</Td>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>No</Td>
						<Td>Yes</Td>
						<Td>$1999</Td>
						<Td>1.0 lb.</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>

							<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
								Remove
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td class="!p-4">
							<!-- <Checkbox /> -->
						</Td>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>Yes</Td>
						<Td>No</Td>
						<Td>$99</Td>
						<Td>0.2 lb.</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>

							<a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">
								Remove
							</a>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="table-colors" title="Table colors" code={codeBlocks[11]}>
		<div slot="preview">
			<Table color="blue" hoverable={true}>
				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="striped-rows-color" title="Striped rows color" code={codeBlocks[12]}>
		<div slot="preview">
			<Table striped={true} color="purple">
				<Thead>
					<Th>Product name</Th>
					<Th>Color</Th>
					<Th>Category</Th>
					<Th>Price</Th>
					<Th>
						<span class="sr-only">Edit</span>
					</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>Apple MacBook Pro 17"</Td>
						<Td>Sliver</Td>
						<Td>Laptop</Td>
						<Td>$2999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Microsoft Surface Pro</Td>
						<Td>White</Td>
						<Td>Laptop PC</Td>
						<Td>$1999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Magic Mouse 2</Td>
						<Td>Black</Td>
						<Td>Accessories</Td>
						<Td>$99</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Google Pixel Phone</Td>
						<Td>Gray</Td>
						<Td>Phone</Td>
						<Td>$799</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>

					<Tr>
						<Td>Apple Watch 5</Td>
						<Td>Red</Td>
						<Td>Wearables</Td>
						<Td>$999</Td>
						<Td>
							<a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
								Edit
							</a>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>
</div>
