<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Popover from '$components/Popovers/Index.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Avatar from '$components/Avatars/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import { blur, fade, slide } from 'svelte/transition';

	let placement;

	let codeBlocks = [
`
<Button id="b1">Default popover</Button>

<Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#b1">
	And here's some amazing content. It's very engaging. Right?
</Popover>
`,

`
<Button id="b2" class="-mb-2">User profile</Button>

<Popover triggeredBy="#b2" class="w-64 text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
	<div class="p-3">
		<div class="flex justify-between items-center mb-2">
			<Avatar href="/" src="https://i.pravatar.cc/300" rounded alt="Jese Leos" />

			<Button size="xs">Follow</Button>
		</div>

		<div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
			<a href="/">Jese Leos</a>
		</div>

		<div class="mb-3 text-sm font-normal">
			<a href="/" class="hover:underline">@jeseleos</a>
		</div>

		<div class="mb-4 text-sm font-light">
			Open-source contributor. Building
			<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.
		</div>

		<ul class="flex text-sm font-light">
			<li class="mr-2">
				<a href="/" class="hover:underline">
					<span class="font-semibold text-gray-900 dark:text-white">799</span>
					<span>Following</span>
				</a>
			</li>

			<li>
				<a href="/" class="hover:underline">
					<span class="font-semibold text-gray-900 dark:text-white">3,758</span>
					<span>Followers</span>
				</a>
			</li>
		</ul>
	</div>
</Popover>
`,

`
<Button class="-mb-4">Company profile</Button>

<Popover class="w-80 text-sm">  
	<div class="flex">
		<div class="mr-3 shrink-0">
			<a href="/" class="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
				<img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo">
			</a>
		</div>

		<div>
			<p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
				<a href="/" class="hover:underline">Flowbite</a>
			</p>

			<p class="mb-3 text-sm font-normal">Tech company</p>

			<p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p>

			<ul class="text-sm font-light">
				<li class="flex items-center mb-2">
					<svg class="w-4 h-4 mr-1 font-semibold text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
					<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">https://flowbite.com/</a>
				</li>

				<li class="flex items-start mb-2">
					<svg class="mr-1 w-6 font-semibold text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
					<span>4,567,346 people like this including 5 of your friends</span>
				</li>
			</ul>

			<div class="flex mb-3 ml-4">
				<Avatar src="https://i.pravatar.cc/300" stacked rounded />
				<Avatar src="https://i.pravatar.cc/300" stacked rounded />
				<Avatar src="https://i.pravatar.cc/300" stacked rounded />
				<Avatar stacked rounded href="/" class="bg-gray-700 dark:bg-gray-700 text-white hover:bg-gray-600">+3</Avatar>
			</div>

			<div class="flex">
				<Button color="alternative" class="mr-2 w-full">
					<svg class="mr-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
					Like page
				</Button>

				<Button color="alternative">
					<svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
				</Button>
			</div>
		</div>
	</div>
</Popover>
`,

`
<p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="/" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" id="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p>

<Popover triggeredBy="#popover-image" class="w-96 text-sm font-light">
	<div class="grid grid-cols-5">
		<div class="col-span-3 p-3">
			<div class="space-y-2">
				<h3 class="font-semibold text-gray-900 dark:text-white">About Italy</h3>

				<p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>

				<a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
			</div>
		</div>

		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Italy_regions.png/400px-Italy_regions.png" class="col-span-2 h-full rounded-r-lg" alt="Italy map" />
	</div>
</Popover>
`,

`
<div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">
	<span>This is just some informational text</span>

	<span id="b3">
		<Icon name="circle-question" type="fa-solid" class="ml-2" />
	</span>
</div>

<Popover triggeredBy="#b3" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
	<div class="p-3 space-y-2">
		<h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
		Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend.
		<h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
		For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n.
		<a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <Icon name="chevron-right" class="ml-2" size="xs" /></a>
	</div>
</Popover>
`,

`
<Button id="progress">
	<Icon type="fa-solid" name="database" class="mr-2" /> Storage status
</Button>

<Popover triggeredBy="#progress" class="text-sm w-64 font-light">
	<div class="space-y-2">
		<h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>

		<p class="text-gray-500 dark:text-gray-400">This server has <span class="font-semibold text-gray-900 dark:text-white">30</span> of <span class="font-semibold text-gray-900 dark:text-white">150 GB</span> of block storage remaining.</p>

		<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
			<div class="bg-red-600 h-2.5 rounded-full" style="width: 85%"></div>
		</div>

		<a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">
			Upgrade now <Icon name="chevron-right" class="ml-2" size="xs" />
		</a>
	</div>
</Popover>
`,

`
<script>
	let placement;
<\/script>

<Button id="placement-top" on:mouseenter={() => placement="top"}>Top popover</Button>

<div class="space-x-4">
	<Button id="placement-left" on:mouseenter={() => placement="left"}>Left popover</Button>

	<Button id="placement-right" on:mouseenter={() => placement="right"}>Right popover</Button>
</div>

<Button id="placement-bottom" on:mouseenter={() => placement="bottom"}>Bottom popover</Button>

<Popover triggeredBy="[id^='placement-']" {placement} class="w-64 text-sm font-light " title="Popover left">
	And here's some amazing content. It's very engaging. Right?
</Popover>
`,

`
<Button id='hover'>Hover popover</Button>

<Button id='click'>Click popover</Button>

<Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#hover" trigger="hover">
	And here's some amazing content. It's very engaging. Right?
</Popover>

<Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#click" trigger="click">
	And here's some amazing content. It's very engaging. Right?
</Popover>
`,

`
<Button id="offset">Default popover</Button>

<Popover offset="30" class="w-64 text-sm font-light" title="Popover title" triggeredBy="#offset">
	And here's some amazing content. It's very engaging. Right?
</Popover>
`,

`
<script>
	import { blur, fade, slide } from 'svelte/transition';
<\/script>

<Button>Fade popover</Button>

<Popover class="w-64 text-sm font-light" title="Popover title" transition={fade} params={{duration: 700}}>
	And here's some amazing content. It's very engaging. Right?
</Popover>

<Button>Blur popover</Button>

<Popover class="w-64 text-sm font-light" title="Popover title" transition={blur} params={{duration: 500}}>
	And here's some amazing content. It's very engaging. Right?
</Popover>

<Button>Slide popover</Button>

<Popover class="w-64 text-sm font-light" title="Popover title" transition={slide}>
	And here's some amazing content. It's very engaging. Right?
</Popover>
`,

`
<Button  id="arrow">Default popover</Button>

<Popover arrow={false} class="w-64 text-sm font-light" title="Popover title" triggeredBy="#arrow">
	And here's some amazing content. It's very engaging. Right?
</Popover>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-popover" title="Default popover" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button  id="b1">Default popover</Button>

			<Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#b1">
				And here's some amazing content. It's very engaging. Right?
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="user-profile" title="User profile" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id="b2" class="-mb-2">User profile</Button>

			<Popover triggeredBy="#b2" class="w-64 text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
				<div class="p-3">
					<div class="flex justify-between items-center mb-2">
						<Avatar href="/" src="https://i.pravatar.cc/300" rounded alt="Jese Leos" />

						<Button size="xs">Follow</Button>
					</div>

					<div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
						<a href="/">Jese Leos</a>
					</div>

					<div class="mb-3 text-sm font-normal">
						<a href="/" class="hover:underline">@jeseleos</a>
					</div>

					<div class="mb-4 text-sm font-light">
						Open-source contributor. Building
						<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.
					</div>

					<ul class="flex text-sm font-light">
						<li class="mr-2">
							<a href="/" class="hover:underline">
								<span class="font-semibold text-gray-900 dark:text-white">799</span>
								<span>Following</span>
							</a>
						</li>

						<li>
							<a href="/" class="hover:underline">
								<span class="font-semibold text-gray-900 dark:text-white">3,758</span>
								<span>Followers</span>
							</a>
						</li>
					</ul>
				</div>
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="company-profile" title="Company profile" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button class="-mb-4">Company profile</Button>

			<Popover class="w-80 text-sm">  
				<div class="flex">
					<div class="mr-3 shrink-0">
						<a href="/" class="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
							<img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo">
						</a>
					</div>

					<div>
						<p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
							<a href="/" class="hover:underline">Flowbite</a>
						</p>

						<p class="mb-3 text-sm font-normal">Tech company</p>

						<p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p>

						<ul class="text-sm font-light">
							<li class="flex items-center mb-2">
								<svg class="w-4 h-4 mr-1 font-semibold text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
								<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">https://flowbite.com/</a>
							</li>

							<li class="flex items-start mb-2">
								<svg class="mr-1 w-6 font-semibold text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
								<span>4,567,346 people like this including 5 of your friends</span>
							</li>
						</ul>

						<div class="flex mb-3 ml-4">
							<Avatar src="https://i.pravatar.cc/300" stacked rounded />
							<Avatar src="https://i.pravatar.cc/300" stacked rounded />
							<Avatar src="https://i.pravatar.cc/300" stacked rounded />
							<Avatar stacked rounded href="/" class="bg-gray-700 dark:bg-gray-700 text-white hover:bg-gray-600">+3</Avatar>
						</div>

						<div class="flex">
							<Button color="alternative" class="mr-2 w-full">
								<svg class="mr-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
								Like page
							</Button>

							<Button color="alternative">
								<svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
							</Button>
						</div>
					</div>
				</div>
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="image-popover" title="Image popover" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="/" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" id="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p>

			<Popover triggeredBy="#popover-image" class="w-96 text-sm font-light">
				<div class="grid grid-cols-5">
					<div class="col-span-3 p-3">
						<div class="space-y-2">
							<h3 class="font-semibold text-gray-900 dark:text-white">About Italy</h3>

							<p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>

							<a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
						</div>
					</div>

					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Italy_regions.png/400px-Italy_regions.png" class="col-span-2 h-full rounded-r-lg" alt="Italy map" />
				</div>
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="description-popover" title="Description popover" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">
				<span>This is just some informational text</span>

				<span id="b3">
					<Icon name="circle-question" type="fa-solid" class="ml-2" />
				</span>
			</div>

			<Popover triggeredBy="#b3" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
				<div class="p-3 space-y-2">
					<h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
					Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend.
					<h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
					For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n.
					<a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <Icon name="chevron-right" class="ml-2" size="xs" /></a>
				</div>
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="progress-popover" title="Progress popover" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id="progress">
				<Icon type="fa-solid" name="database" class="mr-2" /> Storage status
			</Button>

			<Popover triggeredBy="#progress" class="text-sm w-64 font-light">
				<div class="space-y-2">
					<h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>

					<p class="text-gray-500 dark:text-gray-400">This server has <span class="font-semibold text-gray-900 dark:text-white">30</span> of <span class="font-semibold text-gray-900 dark:text-white">150 GB</span> of block storage remaining.</p>

					<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
						<div class="bg-red-600 h-2.5 rounded-full" style="width: 85%"></div>
					</div>

					<a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">
						Upgrade now <Icon name="chevron-right" class="ml-2" size="xs" />
					</a>
				</div>
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="placement" title="Placement" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-col items-center gap-4">
			<Button id="placement-top" on:mouseenter={() => placement="top"}>Top popover</Button>

			<div class="space-x-4">
				<Button id="placement-left" on:mouseenter={() => placement="left"}>Left popover</Button>

				<Button id="placement-right" on:mouseenter={() => placement="right"}>Right popover</Button>
			</div>

			<Button id="placement-bottom" on:mouseenter={() => placement="bottom"}>Bottom popover</Button>

			<Popover triggeredBy="[id^='placement-']" {placement} class="w-64 text-sm font-light " title="Popover left">
				And here's some amazing content. It's very engaging. Right?
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="triggering" title="Triggering" code={codeBlocks[7]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id='hover'>Hover popover</Button>

			<Button id='click'>Click popover</Button>

			<Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#hover" trigger="hover">
				And here's some amazing content. It's very engaging. Right?
			</Popover>

			<Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#click" trigger="click">
				And here's some amazing content. It's very engaging. Right?
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="offset" title="Offset" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button id="offset">Default popover</Button>

			<Popover offset="30" class="w-64 text-sm font-light" title="Popover title" triggeredBy="#offset">
				And here's some amazing content. It's very engaging. Right?
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="animation" title="Animation" code={codeBlocks[9]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button>Fade popover</Button>

			<Popover class="w-64 text-sm font-light" title="Popover title" transition={fade} params={{duration: 700}}>
				And here's some amazing content. It's very engaging. Right?
			</Popover>

			<Button>Blur popover</Button>

			<Popover class="w-64 text-sm font-light" title="Popover title" transition={blur} params={{duration: 500}}>
				And here's some amazing content. It's very engaging. Right?
			</Popover>

			<Button>Slide popover</Button>

			<Popover class="w-64 text-sm font-light" title="Popover title" transition={slide}>
				And here's some amazing content. It's very engaging. Right?
			</Popover>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disable-arrow" title="Disable arrow" code={codeBlocks[10]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button  id="arrow">Default popover</Button>

			<Popover arrow={false} class="w-64 text-sm font-light" title="Popover title" triggeredBy="#arrow">
				And here's some amazing content. It's very engaging. Right?
			</Popover>
		</div>
	</DocSection>
</div>
