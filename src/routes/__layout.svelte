<svelte:head>
	<!-- <script defer src="/fonts/fontawesome-pro-6.1.1/js/all.js"></script> -->
	<link href="/fonts/fontawesome-pro-6.1.1/css/all.css" rel="stylesheet">
</svelte:head>

<script>
	import '../app.css';
	import Navbar from "./fragments/_navbar.svelte"
	import Breadcrumb from '$components/Breadcrumbs/Breadcrumb.svelte';
	import BreadcrumbItem from '$components/Breadcrumbs/BreadcrumbItem.svelte';
</script>

<header class="relative z-10">
	<Navbar />
</header>

<div >
	<nav class="fixed top-0 left-0 w-64 h-screen px-4 pt-20 pb-8 overflow-y-auto bg-slate-500 border-gray-200 shadow-lg">
		Nav
	</nav>
	
	<main class="py-5 px-6 ml-64">
		<div class="mb-10">
			<Breadcrumb class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
				<BreadcrumbItem href="/" iconType="fa-solid" iconName="house">Home</BreadcrumbItem>
				<BreadcrumbItem href="/">Projects</BreadcrumbItem>
				<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<slot />
	</main>
</div>