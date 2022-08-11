<script>
	import Icon from '$components/Icons/Index.svelte';

	import { Highlight } from 'svelte-highlight';
	import html from 'svelte-highlight/languages/vbscript-html';

	let sectionId = $$props.id || null;
	let sectionTitle = $$props.title || null;
	export let code = null;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/svelte-highlight/styles/atom-one-dark.css" />
</svelte:head>

<div class="mb-10" id="doc-{sectionId}">
	<div class="group relative">
		<a href="#doc-{sectionId}" class="absolute top-[2px] -left-9 hidden group-hover:block">
			<Icon type="fa-duotone" icon="anchor" size="xl" class="text-blue-600" />
		</a>
	
		<h1 class="mb-8 text-xl -ml-10 pl-10">{sectionTitle}</h1>
	</div>

	<div class="mb-5">
		<slot name="preview" />
	</div>

	<div class="code-block">
		<Highlight language={html} code={code.trim()} />
	</div>
</div>