<script>
	import DocSection from '$components/Docs/Section.svelte';
	import AccordionItem from '$components/Accordions/AccordionItem.svelte';
	import AccordionFlush from '$components/Accordions/AccordionFlush.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let codeBlocks = [
`
<AccordionItem id="1">
	<h2 slot="header">My Header 1</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
		...
	</div>
</AccordionItem>

<AccordionItem id="2">
	<h2 slot="header">My Header 2</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
		...
	</div>
</AccordionItem>
`,

`
<AccordionItem id="1" open>
	<h2 slot="header">Header 2-1</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo ...
		</p>
	</div>
</AccordionItem>

<AccordionItem id="2">
	<h2 slot="header">Header 2-2</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo ...
		</p>
	</div>
</AccordionItem>
`,

`
<AccordionItem id="1" color>
	<h2 slot="header">Header 2-1</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo ...
		</p>
	</div>
</AccordionItem>

<AccordionItem id="2" color>
	<h2 slot="header">Header 2-2</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo...
		</p>
	</div>
</AccordionItem>
`,

`
<AccordionFlush id="1" >
	<h2 slot="header">Header 2-1</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo ...
		</p>
	</div>
</AccordionFlush>

<AccordionFlush id="2">
	<h2 slot="header">Header 2-2</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo ...
		</p>
	</div>
</AccordionFlush>
`,

`
<AccordionItem id="1" icon={{up: 'chevron-up', down: 'chevron-down'}}>
	<h2 slot="header">Header 2-1</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo ...
		</p>
	</div>
</AccordionItem>

<AccordionItem id="2" icon={{up: 'chevron-up', down: 'chevron-down', type: 'fa-duotone'}}>
	<h2 slot="header">Header 2-2</h2>
	
	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
			necessitatibus sint explicabo ...
		</p>
	</div>
</AccordionItem>
`,

`
<AccordionItem id="1">
	<h2 slot="header">
		<span class="flex">
			<span class="mr-2"><Icon type="fa-regular" icon="box-archive" /></span> 
			My Header 1
		</span>
	</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing ...</p>
		...
	</div>
</AccordionItem>

<AccordionItem id="2">
	<h2 slot="header"><span class="flex ">
		<span class="mr-2"><Icon type="fa-regular" icon="flask" /></span> 
			My Header 2
		</span>
	</h2>

	<div slot="body">
		<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing ...</p>
		...
	</div>
</AccordionItem>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-accordion" title="Default accordion" code={codeBlocks[0]}>
		<div slot="preview">
			<AccordionItem id="1">
				<h2 slot="header">My Header 1</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
					...
				</div>
			</AccordionItem>

			<AccordionItem id="2">
				<h2 slot="header">My Header 2</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
					...
				</div>
			</AccordionItem>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="always-open" title="Always open" code={codeBlocks[1]}>
		<div slot="preview">
			<AccordionItem id="1" open>
				<h2 slot="header">Header 2-1</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo ...
					</p>
				</div>
			</AccordionItem>

			<AccordionItem id="2">
				<h2 slot="header">Header 2-2</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo ...
					</p>
				</div>
			</AccordionItem>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="color-option" title="Color option" code={codeBlocks[2]}>
		<div slot="preview">
			<AccordionItem id="1" color>
				<h2 slot="header">Header 2-1</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo ...
					</p>
				</div>
			</AccordionItem>

			<AccordionItem id="2" color>
				<h2 slot="header">Header 2-2</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo...
					</p>
				</div>
			</AccordionItem>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="flush-accordion" title="Flush accordion" code={codeBlocks[3]}>
		<div slot="preview">
			<AccordionFlush id="1" >
				<h2 slot="header">Header 2-1</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo ...
					</p>
				</div>
			</AccordionFlush>

			<AccordionFlush id="2">
				<h2 slot="header">Header 2-2</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo ...
					</p>
				</div>
			</AccordionFlush>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="arrow-style" title="Arrow style" code={codeBlocks[4]}>
		<div slot="preview">
			<AccordionItem id="1" icon={{up: 'chevron-up', down: 'chevron-down'}}>
				<h2 slot="header">Header 2-1</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo ...
					</p>
				</div>
			</AccordionItem>

			<AccordionItem id="2" icon={{up: 'chevron-up', down: 'chevron-down', type: 'fa-duotone'}}>
				<h2 slot="header">Header 2-2</h2>
				
				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
						necessitatibus sint explicabo ...
					</p>
				</div>
			</AccordionItem>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="icon-accordion" title="Icon Accordion" code={codeBlocks[5]}>
		<div slot="preview">
			<AccordionItem id="1">
				<h2 slot="header">
					<span class="flex">
						<span class="mr-2"><Icon type="fa-regular" icon="box-archive" /></span> 
						My Header 1
					</span>
				</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing ...</p>
					...
				</div>
			</AccordionItem>

			<AccordionItem id="2">
				<h2 slot="header"><span class="flex ">
					<span class="mr-2"><Icon type="fa-regular" icon="flask" /></span> 
						My Header 2
					</span>
				</h2>

				<div slot="body">
					<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing ...</p>
					...
				</div>
			</AccordionItem>
		</div>
	</DocSection>
</div>
