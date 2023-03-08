<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Indicator from '$components/Indicators/Index.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import Avatar from '$components/Avatars/Index.svelte';
	import Badge from '$components/Badges/Index.svelte';

	let codeBlocks = [
`
<Indicator color="primary"/>
<Indicator color="success"/>
<Indicator color="warning"/>
<Indicator color="danger"/>
<Indicator color="gray"/>
<Indicator color="dark"/>
<Indicator color="purple"/>
<Indicator color="indigo"/>
<Indicator color="teal"/>
`,

`
<span class="flex items-center">
	<Indicator size="sm" color="primary" class="mr-1.5"/>Visitors
</span>

<span class="flex items-center">
	<Indicator size="sm" color="purple" class="mr-1.5"/>Sessions
</span>

<span class="flex items-center">
	<Indicator size="sm" color="indigo" class="mr-1.5"/>Customers
</span>

<span class="flex items-center">
	<Indicator size="sm" color="teal" class="mr-1.5"/>Revenue
</span>
`,

`
<Button size="lg" class="relative">
	<Icon name="envelope" class="mr-1" />
	Messages    

	<Indicator color="danger" border size="xl" placement="top-right">
		<span class="text-white text-xs font-bold">8</span>
	</Indicator>
</Button>
`,

`
<Avatar src="https://i.pravatar.cc/300" dot={{color: "success", size: "lg", placement: "top-right"}} />

<Avatar src="https://i.pravatar.cc/300" dot={{color: "danger", size: "lg", placement: "top-right"}} />
`,

`
<ul class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 w-full">
	<li class="py-3 sm:py-4">
		<div class="flex items-center space-x-3">
			<Avatar src="https://i.pravatar.cc/300"  alt="Neil image" />

			<div class="flex-1 min-w-0">
				<p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Neil Sims</p>
				<p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
			</div>

			<Badge color="success" rounded class="px-2.5 py-0.5">
				<Indicator color="success" size="xs" class="mr-1"/>Available
			</Badge>
		</div>
	</li>

	<li class="py-3 sm:py-4">
		<div class="flex items-center space-x-3">
			<div class="flex-shrink-0">
				<Avatar src="https://i.pravatar.cc/300"  alt="Bonnie image" />
			</div>

			<div class="flex-1 min-w-0">
				<p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Bonnie Green</p>
				<p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
			</div>

			<Badge color="danger"  rounded class="px-2.5 py-0.5">
				<Indicator color="danger" size="xs" class="mr-1"/>Unavailable
			</Badge>
		</div>
	</li>
</ul>
`,

`
<ol class="flex items-center">
	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<svg aria-hidden="true" class="w-4 h-4 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
			</Indicator>

			<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
		</div>
	</li>

	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<svg aria-hidden="true" class="w-4 h-4 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
			</Indicator>

			<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
		</div>
	</li>

	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<svg aria-hidden="true" class="w-4 h-4 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
			</Indicator>

			<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
		</div>
	</li>

	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<svg aria-hidden="true" class="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			</Indicator>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
		</div>
	</li>
</ol>

<ol class="flex items-center">
	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<Indicator color="primary"/>
			</Indicator>

			<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
		</div>
	</li>

	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<Indicator color="primary"/>
			</Indicator>

			<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
		</div>
	</li>

	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<Indicator color="primary"/>
			</Indicator>

			<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
		</div>
	</li>

	<li class="relative w-full mb-6">
		<div class="flex items-center">
			<Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
				<Indicator color="dark" class="dark:!bg-gray-300"/>
			</Indicator>
		</div>

		<div class="mt-3">
			<h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
		</div>
	</li>
</ol>
`,

`
<Indicator placement="top-left" color="gray"/>
<Indicator placement="top-center" color="dark"/>
<Indicator placement="top-right" color="primary"/>
<Indicator placement="center-left" color="success"/>
<Indicator placement="center" color="danger"/>
<Indicator placement="center-right" color="purple"/>
<Indicator placement="bottom-left" color="indigo"/>
<Indicator placement="bottom-center" color="warning"/>
<Indicator placement="bottom-right" color="teal"/>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-indicator" title="Default indicator" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Indicator color="primary"/>
			<Indicator color="success"/>
			<Indicator color="warning"/>
			<Indicator color="danger"/>
			<Indicator color="gray"/>
			<Indicator color="dark"/>
			<Indicator color="purple"/>
			<Indicator color="indigo"/>
			<Indicator color="teal"/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="legend-indicator" title="Legend indicator" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-items gap-2">
			<span class="flex items-center">
				<Indicator size="sm" color="primary" class="mr-1.5"/>Visitors
			</span>

			<span class="flex items-center">
				<Indicator size="sm" color="purple" class="mr-1.5"/>Sessions
			</span>

			<span class="flex items-center">
				<Indicator size="sm" color="indigo" class="mr-1.5"/>Customers
			</span>

			<span class="flex items-center">
				<Indicator size="sm" color="teal" class="mr-1.5"/>Revenue
			</span>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="indicator-count" title="Indicator count" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Button size="lg" class="relative">
				<Icon name="envelope" class="mr-1" />
				Messages    

				<Indicator color="danger" border size="xl" placement="top-right">
					<span class="text-white text-xs font-bold">8</span>
				</Indicator>
			</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="status-indicator" title="Status indicator" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Avatar src="https://i.pravatar.cc/300" dot={{color: "success", size: "lg", placement: "top-right"}} />

			<Avatar src="https://i.pravatar.cc/300" dot={{color: "danger", size: "lg", placement: "top-right"}} />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="badge-indicator" title="Badge indicator" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-items gap-2">
			<ul class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 w-full">
				<li class="py-3 sm:py-4">
					<div class="flex items-center space-x-3">
						<Avatar src="https://i.pravatar.cc/300"  alt="Neil image" />

						<div class="flex-1 min-w-0">
							<p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Neil Sims</p>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
						</div>

						<Badge color="success" rounded class="px-2.5 py-0.5">
							<Indicator color="success" size="xs" class="mr-1"/>Available
						</Badge>
					</div>
				</li>

				<li class="py-3 sm:py-4">
					<div class="flex items-center space-x-3">
						<div class="flex-shrink-0">
							<Avatar src="https://i.pravatar.cc/300"  alt="Bonnie image" />
						</div>

						<div class="flex-1 min-w-0">
							<p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Bonnie Green</p>
							<p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
						</div>

						<Badge color="danger"  rounded class="px-2.5 py-0.5">
							<Indicator color="danger" size="xs" class="mr-1"/>Unavailable
						</Badge>
					</div>
				</li>
			</ul>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="stepper-indicator" title="Stepper indicator" code={codeBlocks[5]}>
		<div slot="preview">
			<ol class="flex items-center">
				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<svg aria-hidden="true" class="w-4 h-4 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</Indicator>

						<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
					</div>
				</li>

				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<svg aria-hidden="true" class="w-4 h-4 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</Indicator>

						<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
					</div>
				</li>

				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<svg aria-hidden="true" class="w-4 h-4 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</Indicator>

						<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
					</div>
				</li>

				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<svg aria-hidden="true" class="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</Indicator>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
					</div>
				</li>
			</ol>

			<ol class="flex items-center">
				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<Indicator color="primary"/>
						</Indicator>

						<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
					</div>
				</li>

				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<Indicator color="primary"/>
						</Indicator>

						<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
					</div>
				</li>

				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<Indicator color="primary"/>
						</Indicator>

						<div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
					</div>
				</li>

				<li class="relative w-full mb-6">
					<div class="flex items-center">
						<Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
							<Indicator color="dark" class="dark:!bg-gray-300"/>
						</Indicator>
					</div>

					<div class="mt-3">
						<h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
					</div>
				</li>
			</ol>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="indicator-position" title="Indicator position" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-items gap-2">
			<div class="w-56 h-56 relative bg-gray-100 borer border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700" >
				<Indicator placement="top-left" color="gray"/>
				<Indicator placement="top-center" color="dark"/>
				<Indicator placement="top-right" color="primary"/>
				<Indicator placement="center-left" color="success"/>
				<Indicator placement="center" color="danger"/>
				<Indicator placement="center-right" color="purple"/>
				<Indicator placement="bottom-left" color="indigo"/>
				<Indicator placement="bottom-center" color="warning"/>
				<Indicator placement="bottom-right" color="teal"/>
			</div>
		</div>
	</DocSection>
</div>