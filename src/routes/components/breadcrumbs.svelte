<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Breadcrumb from '$components/Breadcrumbs/Index.svelte';
	import BreadcrumbItem from '$components/Breadcrumbs/BreadcrumbItem.svelte';
	
	let codeBlocks = [
`
<Breadcrumb>
	<BreadcrumbItem href="/" icon={{name: "home", type: "fa-solid"}}>Home</BreadcrumbItem>
	<BreadcrumbItem href="/">Projects</BreadcrumbItem>
	<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
`,

`
<Breadcrumb class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
	<BreadcrumbItem href="/" icon={{name: "home", type: "fa-solid"}}>Home</BreadcrumbItem>
	<BreadcrumbItem href="/">Projects</BreadcrumbItem>
	<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-breadcrumb" title="Default Breadcrumb" code={codeBlocks[0]}>
		<div slot="preview">
			<Breadcrumb>
				<BreadcrumbItem href="/" icon={{name: "home", type: "fa-solid"}}>Home</BreadcrumbItem>
				<BreadcrumbItem href="/">Projects</BreadcrumbItem>
				<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
			</Breadcrumb>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="solid-breadcrumb" title="Solid Breadcrumb" code={codeBlocks[1]}>
		<div slot="preview">
			<Breadcrumb class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
				<BreadcrumbItem href="/" icon={{name: "home", type: "fa-solid"}}>Home</BreadcrumbItem>
				<BreadcrumbItem href="/">Projects</BreadcrumbItem>
				<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
			</Breadcrumb>
		</div>
	</DocSection>
</div>
