<script>
	import DocSection from '$components/Docs/Section.svelte';
	import { page } from '$app/stores';
	import Pagination from '$components/Paginations/Index.svelte';
	import PaginationItem from '$components/Paginations/PaginationItem.svelte';
	import Icon from '$components/Icons/Index.svelte';

	$: activeUrl = $page.url.searchParams.get('page');

	let pages = [
		{ name: 1, href: '/components/paginations?page=1' },
		{ name: 2, href: '/components/paginations?page=2' },
		{ name: 3, href: '/components/paginations?page=3' },
		{ name: 4, href: '/components/paginations?page=4' },
		{ name: 5, href: '/components/paginations?page=5' },
	];

	let pages2 = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }];

	$: {
		pages.forEach((page) => {
			let splitUrl = page.href.split('?');

			let queryString = splitUrl.slice(1).join('?');

			const hrefParams = new URLSearchParams(queryString);

			let hrefValue = hrefParams.get('page');

			if (hrefValue === activeUrl) {
				page.active = true;
			} else {
				page.active = false;
			}
		});

		pages = pages;
	}

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};

	const handleClick = () => {
		alert('Page clicked');
	};

	let helper = {start: 1, end: 10, total: 100};

	let codeBlocks = [
`
<script>
	$: activeUrl = $page.url.searchParams.get('page');

	let pages = [
		{ name: 1, href: '/components/paginations?page=1' },
		{ name: 2, href: '/components/paginations?page=2' },
		{ name: 3, href: '/components/paginations?page=3' },
		{ name: 4, href: '/components/paginations?page=4' },
		{ name: 5, href: '/components/paginations?page=5' },
	];

	$: {
		pages.forEach((page) => {
			let splitUrl = page.href.split('?');

			let queryString = splitUrl.slice(1).join('?');

			const hrefParams = new URLSearchParams(queryString);

			let hrefValue = hrefParams.get('page');

			if (hrefValue === activeUrl) {
				page.active = true;
			} else {
				page.active = false;
			}
		});

		pages = pages;
	}

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
<\/script>

<Pagination {pages} on:previous={previous} on:next={next} />
`,

`
<script>
	$: activeUrl = $page.url.searchParams.get('page');

	let pages = [
		{ name: 1, href: '/components/paginations?page=1' },
		{ name: 2, href: '/components/paginations?page=2' },
		{ name: 3, href: '/components/paginations?page=3' },
		{ name: 4, href: '/components/paginations?page=4' },
		{ name: 5, href: '/components/paginations?page=5' },
	];

	$: {
		pages.forEach((page) => {
			let splitUrl = page.href.split('?');

			let queryString = splitUrl.slice(1).join('?');

			const hrefParams = new URLSearchParams(queryString);

			let hrefValue = hrefParams.get('page');

			if (hrefValue === activeUrl) {
				page.active = true;
			} else {
				page.active = false;
			}
		});

		pages = pages;
	}

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
<\/script>

<Pagination {pages} on:previous={previous} on:next={next} icon  >
	<svelte:fragment slot="prev">
		<Icon name="chevron-left" class="w-4"/>
	</svelte:fragment>

	<svelte:fragment slot="next">
		<Icon name="chevron-right" class="w-4"/>
	</svelte:fragment>
</Pagination>
`,

`
<script>
	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
<\/script>

<div class="flex space-x-3">
	<PaginationItem on:click={previous}>Previous</PaginationItem>

	<PaginationItem on:click={next}>Next</PaginationItem>
</div>
`,

`
<script>
	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
<\/script>

<div class="flex space-x-3">
	<PaginationItem class="flex items-center" on:click={previous}>
		<Icon name="arrow-left" class="mr-2 w-4"/>
		Previous
	</PaginationItem>

	<PaginationItem class="flex items-center" on:click={next}>
		Next
		<Icon name="arrow-right" class="ml-2 w-4"/>
	</PaginationItem>
</div>
`,

`
<script>
	let helper = {start: 1, end: 10, total: 100};

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
<\/script>

<div class="flex flex-col items-center justify-center">
	<div class="text-sm text-gray-700 dark:text-gray-400">
		Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to
		<span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
		of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
	</div>

	<Pagination table>
		<span slot="prev">Prev</span>
	</Pagination>
</div>
`,

`

<script>
	let helper = {start: 1, end: 10, total: 100};

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
<\/script>

<div class="flex flex-col items-center justify-center">
	<div class="text-sm text-gray-700 dark:text-gray-400">
		Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to
		<span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
		of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
	</div>

	<Pagination table>
		<div slot="prev" class="flex items-center gap-2">
			<Icon name="arrow-left" class="w-4"/>
			Prev
		</div>

		<div slot="next" class="flex items-center gap-2">
			Next
			<Icon name="arrow-right" class="w-4"/>
		</div>
	</Pagination>
</div>
`,

`
<script>
	let pages2 = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }];

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};

	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};

	const handleClick = () => {
		alert('Page clicked');
	};
<\/script>

<Pagination pages={pages2} on:previous={previous} on:next={next} on:click={handleClick} />
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-pagination" title="Default pagination" code={codeBlocks[0]}>
		<div slot="preview">
			<Pagination {pages} on:previous={previous} on:next={next} />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="pagination-with-icons" title="Pagination with icons" code={codeBlocks[1]}>
		<div slot="preview">
			<Pagination {pages} on:previous={previous} on:next={next} icon  >
				<svelte:fragment slot="prev">
					<Icon name="chevron-left" class="w-4"/>
				</svelte:fragment>

				<svelte:fragment slot="next">
					<Icon name="chevron-right" class="w-4"/>
				</svelte:fragment>
			</Pagination>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="previous-and-next" title="Previous and next" code={codeBlocks[2]}>
		<div slot="preview">
			<div class="flex space-x-3">
				<PaginationItem on:click={previous}>Previous</PaginationItem>

				<PaginationItem on:click={next}>Next</PaginationItem>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="previous-and-next-with-icons" title="Previous and next with icons" code={codeBlocks[3]}>
		<div slot="preview">
			<div class="flex space-x-3">
				<PaginationItem class="flex items-center" on:click={previous}>
					<Icon name="arrow-left" class="mr-2 w-4"/>
					Previous
				</PaginationItem>

				<PaginationItem class="flex items-center" on:click={next}>
					Next
					<Icon name="arrow-right" class="ml-2 w-4"/>
				</PaginationItem>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="table-data-pagination" title="Table data pagination" code={codeBlocks[4]}>
		<div slot="preview">
			<div class="flex flex-col items-center justify-center">
				<div class="text-sm text-gray-700 dark:text-gray-400">
					Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to
					<span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
					of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
				</div>

				<Pagination table>
					<span slot="prev">Prev</span>
				</Pagination>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="table-data-pagination-with-icons" title="Table data pagination with icons" code={codeBlocks[5]}>
		<div slot="preview">
			<div class="flex flex-col items-center justify-center">
				<div class="text-sm text-gray-700 dark:text-gray-400">
					Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span> to
					<span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
					of <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span> Entries
				</div>

				<Pagination table>
					<div slot="prev" class="flex items-center gap-2">
						<Icon name="arrow-left" class="w-4"/>
						Prev
					</div>

					<div slot="next" class="flex items-center gap-2">
						Next
						<Icon name="arrow-right" class="w-4"/>
					</div>
				</Pagination>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="event-example" title="Event example" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Pagination pages={pages2} on:previous={previous} on:next={next} on:click={handleClick} />
		</div>
	</DocSection>
</div>
