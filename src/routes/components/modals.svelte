<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Modal from '$components/Modals/Index.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let defaultModal, popupModal, formModal;
	
	let sizesModal, sizesModalSize;
	
	let placementModal, placement;

	const setPlacement = (value) => () => {
		placement = value;
		
		placementModal = true
	};

	let codeBlocks = [
`
<script>
	let defaultModal;
<\/script>

<Button on:click={() => (defaultModal = true)}>Default modal</Button>
			
<Modal title="Terms of Service" bind:open={defaultModal}>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"> With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
	
	<svelte:fragment slot='footer'>
		<Button>I accept</Button>
		<Button color="alternative">Decline</Button>
	</svelte:fragment>
</Modal>
`,

`
<script>
	let popupModal;
<\/script>

<Button on:click={() => popupModal = true}>Pop-up modal</Button>

<Modal bind:open={popupModal}>
	<div class="text-center">
		<Icon type="fa-light" icon="circle-exclamation" size="4x" class="mx-auto mb-4 text-gray-400 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
		
		<Button color="red" class="mr-2">Yes, I'm sure</Button>
		<Button color="alternative">No, cancel</Button>
	</div>
</Modal>
`,

`
<script>
	let formModal;
<\/script>

<Button on:click={() => formModal = true}>Form modal</Button>
			
<Modal bind:open={formModal} size="xs">
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>

		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>

		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>

		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a>
		</div>

		<Button type="submit" class="w-full1">Login to your account</Button>
		
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			Not registered? <a href="/" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
		</div>
	</form>
</Modal>
`,

`
<script>
	let sizesModal, sizesModalSize;
<\/script>

<Button size="xs" on:click={() => {sizesModalSize = 'xs'; sizesModal = true} }>xs</Button>
<Button size="sm" on:click={() => {sizesModalSize = 'sm'; sizesModal = true} }>sm</Button>
<Button size="md" on:click={() => {sizesModalSize = 'md'; sizesModal = true} }>md</Button>
<Button size="lg" on:click={() => {sizesModalSize = 'lg'; sizesModal = true} }>lg</Button>
<Button size="xl" on:click={() => {sizesModalSize = 'xl'; sizesModal = true} }>xl</Button>

<Modal title="Terms of Service" bind:open={sizesModal} size={sizesModalSize}>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
	
	<svelte:fragment slot='footer'>
		<Button>I accept</Button>
		<Button color="alternative">Decline</Button>
	</svelte:fragment>
</Modal>
`,

`
<script>
	let placementModal, placement;

	const setPlacement = (value) => () => {
		placement = value;
		
		placementModal = true
	};
<\/script>

<div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
	<Button on:click={setPlacement('top-left')}>top-left</Button>
	<Button on:click={setPlacement('top-center')}>top-center</Button>
	<Button on:click={setPlacement('top-right')}>top-right</Button>
	<Button on:click={setPlacement('center-left')}>center-left</Button>
	<Button on:click={setPlacement('center')}>center</Button>
	<Button on:click={setPlacement('center-right')}>center-right</Button>
	<Button on:click={setPlacement('bottom-left')}>bottom-left</Button>
	<Button on:click={setPlacement('bottom-center')}>bottom-center</Button>
	<Button on:click={setPlacement('bottom-right')}>bottom-right</Button>
</div>
	
<Modal title="Terms of Service" bind:open={placementModal} {placement}>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
	
	<svelte:fragment slot='footer'>
		<Button>I accept</Button>
		<Button color="alternative">Decline</Button>
	</svelte:fragment>
</Modal>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-modal" title="Default modal" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button on:click={() => (defaultModal = true)}>Default modal</Button>
			
			<Modal title="Terms of Service" bind:open={defaultModal}>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"> With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
				
				<svelte:fragment slot='footer'>
					<Button>I accept</Button>
					<Button color="alternative">Decline</Button>
				</svelte:fragment>
			</Modal>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="Pop-up-modal" title="Pop-up modal" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button on:click={() => popupModal = true}>Pop-up modal</Button>

			<Modal bind:open={popupModal}>
				<div class="text-center">
					<Icon type="fa-light" icon="circle-exclamation" size="4x" class="mx-auto mb-4 text-gray-400 dark:text-gray-200" />
					<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
					
					<Button color="red" class="mr-2">Yes, I'm sure</Button>
					<Button color="alternative">No, cancel</Button>
				</div>
			</Modal>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="form-element" title="Form element" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button on:click={() => formModal = true}>Form modal</Button>
			
			<Modal bind:open={formModal} size="xs">
				<form class="flex flex-col space-y-6" action="/">
					<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>

					<!-- <Label class="space-y-2">
						<span>Email</span>
						<Input type="email" name="email" placeholder="name@company.com" required />
					</Label>

					<Label class="space-y-2">
						<span>Your password</span>
						<Input type="password" name="password" placeholder="•••••" required />
					</Label> -->

					<div class="flex items-start">
						<!-- <Checkbox>Remember me</Checkbox> -->
						<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a>
					</div>

					<Button type="submit" class="w-full1">Login to your account</Button>
					
					<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
						Not registered? <a href="/" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
					</div>
				</form>
			</Modal>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button size="xs" on:click={() => {sizesModalSize = 'xs'; sizesModal = true} }>xs</Button>
			<Button size="sm" on:click={() => {sizesModalSize = 'sm'; sizesModal = true} }>sm</Button>
			<Button size="md" on:click={() => {sizesModalSize = 'md'; sizesModal = true} }>md</Button>
			<Button size="lg" on:click={() => {sizesModalSize = 'lg'; sizesModal = true} }>lg</Button>
			<Button size="xl" on:click={() => {sizesModalSize = 'xl'; sizesModal = true} }>xl</Button>

			<Modal title="Terms of Service" bind:open={sizesModal} size={sizesModalSize}>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
				
				<svelte:fragment slot='footer'>
					<Button>I accept</Button>
					<Button color="alternative">Decline</Button>
				</svelte:fragment>
			</Modal>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="placement" title="Placement" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
				<Button on:click={setPlacement('top-left')}>top-left</Button>
				<Button on:click={setPlacement('top-center')}>top-center</Button>
				<Button on:click={setPlacement('top-right')}>top-right</Button>
				<Button on:click={setPlacement('center-left')}>center-left</Button>
				<Button on:click={setPlacement('center')}>center</Button>
				<Button on:click={setPlacement('center-right')}>center-right</Button>
				<Button on:click={setPlacement('bottom-left')}>bottom-left</Button>
				<Button on:click={setPlacement('bottom-center')}>bottom-center</Button>
				<Button on:click={setPlacement('bottom-right')}>bottom-right</Button>
			</div>
			  
			<Modal title="Terms of Service" bind:open={placementModal} {placement}>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
				
				<svelte:fragment slot='footer'>
					<Button>I accept</Button>
					<Button color="alternative">Decline</Button>
				</svelte:fragment>
			</Modal>
		</div>
	</DocSection>
</div>
