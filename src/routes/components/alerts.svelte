<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Alert from '$components/Alerts/Index.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';

	const handleAlert = () => {
    	alert('Clicked handleAlert.')
  	}

	let codeBlocks = [
`
<Alert color="info">
	<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="success">
	<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="warning">
	<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="danger">
	<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="dark">
	<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
`,

`
<Alert color="info" icon>
	<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="success" icon>
	<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="warning" icon>
	<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="danger" icon>
	<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="dark" icon="radiation">
	<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
`,

`
<Alert color="info" icon>
	<span class="sr-only">Info</span>
	<span class="font-medium">Ensure that these requirements are met:</span>

	<ul slot="extra" class="mt-0 ml-8 list-disc list-inside">
		<li>At least 10 characters (and up to 100 characters)</li>
		<li>At least one lowercase character</li>
		<li>Inclusion of at least one special character, e.g., ! @ # ?</li>
	</ul>
</Alert>

<Alert color="danger" icon>
	<span class="sr-only">Info</span>
	<span class="font-medium">Ensure that these requirements are met:</span>
	
	<ul slot="extra" class="mt-0 ml-8 list-disc list-inside">
		<li>At least 10 characters (and up to 100 characters)</li>
		<li>At least one lowercase character</li>
		<li>Inclusion of at least one special character, e.g., ! @ # ?</li>
	</ul>
</Alert>
`,

`
<Alert color="info" icon dismissable>
	A simple info alert with an <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
</Alert>

<Alert color="success" icon dismissable>
	A simple info alert with an <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>. Give it a click if you like.
</Alert>

<Alert color="warning" icon dismissable>
	A simple info alert with an <a href="/" class="font-semibold underline hover:text-yellow-800 dark:hover:text-yellow-900">example link</a>. Give it a click if you like.
</Alert>

<Alert color="danger" icon dismissable>
	A simple info alert with an <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>. Give it a click if you like.
</Alert>

<Alert color="dark" icon="radiation" dismissable>
	A simple info alert with an <a href="/" class="font-semibold underline hover:text-gray-800 dark:hover:text-white">example link</a>. Give it a click if you like.
</Alert>
`,

`
<Alert color="info" accent rounded="{false}" icon>
	<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="success" accent rounded="{false}" icon>
	<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="warning" accent rounded="{false}" icon>
	<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="danger" accent rounded="{false}" icon>
	<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>

<Alert color="dark" accent rounded="{false}" icon="radiation">
	<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
`,

`
<Alert color="info" icon>
	<span class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</span>

	<div slot="extra">
		<div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
			More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
		</div>
		
		<div class="flex gap-2">
			<Button size="xs"><Icon icon="eye" class="mr-2" />View more</Button>
			<Button size="xs" outline color="info">Go to Home</Button>
		</div>
	</div>
</Alert>
`,

`
<script>
	const handleAlert = () => {
    	alert('Clicked handleAlert.')
  	}
<\/script>

<Alert color="info" dismissable on:handleAlert={handleAlert}>Close me</Alert>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-alert" title="Default alert" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Alert color="info">
				<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="success">
				<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="warning">
				<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="danger">
				<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
			</Alert>
			
			<Alert color="dark">
				<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
			</Alert>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="alerts-with-icon" title="Alerts with icon" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Alert color="info" icon>
				<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="success" icon>
				<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="warning" icon>
				<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="danger" icon>
				<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
			</Alert>
			
			<Alert color="dark" icon="radiation">
				<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
			</Alert>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="alerts-with-list" title="Alerts with list" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Alert color="info" icon>
				<span class="sr-only">Info</span>
				<span class="font-medium">Ensure that these requirements are met:</span>

				<ul slot="extra" class="mt-0 ml-8 list-disc list-inside">
					<li>At least 10 characters (and up to 100 characters)</li>
					<li>At least one lowercase character</li>
					<li>Inclusion of at least one special character, e.g., ! @ # ?</li>
				</ul>
			</Alert>
			
			<Alert color="danger" icon>
				<span class="sr-only">Info</span>
				<span class="font-medium">Ensure that these requirements are met:</span>
				
				<ul slot="extra" class="mt-0 ml-8 list-disc list-inside">
					<li>At least 10 characters (and up to 100 characters)</li>
					<li>At least one lowercase character</li>
					<li>Inclusion of at least one special character, e.g., ! @ # ?</li>
				</ul>
			</Alert>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="dismissable-alerts" title="Dismissable alerts" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Alert color="info" icon dismissable>
				A simple info alert with an <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
			</Alert>

			<Alert color="success" icon dismissable>
				A simple info alert with an <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>. Give it a click if you like.
			</Alert>

			<Alert color="warning" icon dismissable>
				A simple info alert with an <a href="/" class="font-semibold underline hover:text-yellow-800 dark:hover:text-yellow-900">example link</a>. Give it a click if you like.
			</Alert>

			<Alert color="danger" icon dismissable>
				A simple info alert with an <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>. Give it a click if you like.
			</Alert>

			<Alert color="dark" icon="radiation" dismissable>
				A simple info alert with an <a href="/" class="font-semibold underline hover:text-gray-800 dark:hover:text-white">example link</a>. Give it a click if you like.
			</Alert>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="border-accent" title="Border accent" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Alert color="info" accent rounded="{false}" icon>
				<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="success" accent rounded="{false}" icon>
				<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="warning" accent rounded="{false}" icon>
				<span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
			</Alert>

			<Alert color="danger" accent rounded="{false}" icon>
				<span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
			</Alert>
			
			<Alert color="dark" accent rounded="{false}" icon="radiation">
				<span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
			</Alert>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="additional-content" title="Additional content" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Alert color="info" icon>
				<span class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</span>

				<div slot="extra">
					<div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
						More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
					</div>
					
					<div class="flex gap-2">
						<Button size="xs"><Icon icon="eye" class="mr-2" />View more</Button>
						<Button size="xs" outline color="info">Go to Home</Button>
					</div>
				</div>
			</Alert>
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="events" title="Events" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Alert color="info" dismissable on:handleAlert={handleAlert}>Close me</Alert>
		</div>
	</DocSection>
</div>
