<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Input from '$components/Forms/Input.svelte';
	import NumberInput from '$components/Forms/NumberInput.svelte';
	import Label from '$components/Forms/Label.svelte';
	import Helper from '$components/Forms/Helper.svelte';
	import InputAddon from '$components/Forms/InputAddon.svelte';
	import Checkbox from '$components/Forms/Checkbox.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import ButtonGroup from '$components/ButtonGroups/Index.svelte';
	import CloseButton from '$lib/utils/CloseButton.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import Dropdown from '$components/Dropdowns/Index.svelte';
	import DropdownItem from '$components/Dropdowns/DropdownItem.svelte';

	let show = false;

	let show1 = false;

	let value = 5;

	let codeBlocks = [
`
<form>
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<Label for="first_name" class="mb-2">First name</Label>

			<Input type="text" id="first_name" placeholder="John" required  />
		</div>

		<div>
			<Label for="last_name" class="mb-2">Last name</Label>

			<Input type="text" id="last_name" placeholder="Doe" required />
		</div>

		<div>
			<Label for="company" class="mb-2">Company</Label>

			<Input type="text" id="company" placeholder="Flowbite" required />
		</div>

		<div>
			<Label for="phone" class="mb-2">Phone number</Label>

			<Input type="tel" id="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
		</div>

		<div>
			<Label for="website" class="mb-2">Website URL</Label>

			<Input type="url" id="website" placeholder="flowbite.com" required />
		</div>

		<div>
			<Label for="visitors" class="mb-2">Unique visitors (per month)</Label>

			<Input type="number" id="visitors" placeholder="" required />
		</div>
	</div>

	<div class="mb-6">
		<Label for="email" class="mb-2">Email address</Label>

		<Input type="email" id="email" placeholder="john.doe@company.com" required />
	</div>

	<div class="mb-6">
		<Label for="password" class="mb-2">Password</Label>

		<Input type="password" id="password" placeholder="•••••••••" required />
	</div>

	<div class="mb-6">
		<Label for="confirm_password" class="mb-2">Confirm password</Label>

		<Input type="password" id="confirm_password" placeholder="•••••••••" required />
	</div>

	<Checkbox class="mb-6 space-x-1" required>I agree with the <a href="/">terms and conditions</a>.</Checkbox>

	<Button type="submit">Submit</Button>
</form>
`,

`
<Label class="space-y-2">
	<span>Small icon input</span>

	<Input type="email" placeholder="Small input" size="sm" />
</Label>

<Label class="space-y-2">
	<span>Default icon input</span>

	<Input type="email" placeholder="Default input" size="md" />
</Label>

<Label class="space-y-2">
	<span>Large icon input</span>

	<Input type="email" placeholder="Large input" size="lg" />
</Label>
`,

`
<Input class="mb-6" disabled value="Disabled input" />

<Input class="mb-6" disabled readonly value="Disabled readonly input" />
`,

`
<div class="mb-6">
	<Label for="success" color="success" class="block mb-2">Your name</Label>

	<Input id="success" color="success" placeholder="Success input" />

	<Helper class="mt-2" color="success">
		<span class="font-medium">Well done!</span> Some success messsage.
	</Helper>
</div>

<div class="mb-6">
	<Label for="error" color="danger" class="block mb-2">Your name</Label>

	<Input id="success" color="danger" placeholder="Success input" />

	<Helper class="mt-2" color="danger">
		<span class="font-medium">Oh, snapp!</span> Some error message.
	</Helper>
</div>
`,

`
<Label class="space-y-2">
	<span>Small input - left icon</span>

	<Input type="email" placeholder="name@flowbite.com" size="sm">
		<Icon slot="left" name="envelope" type="fa-solid" class="text-gray-500" />
	</Input>
</Label>

<Label class="space-y-2">
	<span>Default input - right icon</span>

	<Input type="email" placeholder="name@flowbite.com" size="md">
		<Icon slot="right" name="envelope" type="fa-solid" size="lg" class="text-gray-500" />
	</Input>
</Label>

<Label class="space-y-2">
	<span>Large input - both icons</span>

	<Input type="email" placeholder="name@flowbite.com" size="lg">
		<Icon slot="left" name="envelope" type="fa-solid" size="xl" class="text-gray-500" />
		<CloseButton slot="right" />
	</Input>
</Label>
`,

`
<div>
	<Label class="mb-2" for="input-addon-sm">Small additional text</Label>

	<ButtonGroup class="w-full" size="sm">
		<InputAddon>@</InputAddon>

		<Input id="input-addon-sm" type="email" placeholder="elonmusk" />
	</ButtonGroup>
</div>

<div>
	<Label class="mb-2" for="input-addon-md">Default additional text</Label>

	<ButtonGroup class="w-full" size="md">
		<Input id="input-addon-md" type="email" placeholder="elonmusk" />

		<InputAddon>.com</InputAddon>
	</ButtonGroup>
</div>

<div>
	<Label class="mb-2" for="input-addon-lg">Large additional text</Label>

	<ButtonGroup class="w-full" size="lg">
		<InputAddon>@</InputAddon>

		<Input id="input-addon-lg" type="email" placeholder="elonmusk" />

		<InputAddon>.com</InputAddon>
	</ButtonGroup>
</div>

<div class="pt-8">
	<Label for="input-addon" class="mb-2">Groupped with button</Label>

	<ButtonGroup class="w-full">
		<InputAddon>@</InputAddon>

		<Input id="input-addon" type="email" placeholder="elonmusk" />

		<Button color="primary">Search</Button>
	</ButtonGroup>
</div>

<div>
	<Label for="input-addon" class="mb-2">Crazy example</Label>

	<ButtonGroup class="w-full">
		<InputAddon><Checkbox /></InputAddon>
			<Button color="primary">Search</Button>
		<InputAddon>http://</InputAddon>

		<Input id="input-addon" type="email" placeholder="elonmusk" />
			<InputAddon>@</InputAddon>
		<InputAddon><Checkbox /></InputAddon>

		<Button color="danger">Send</Button>

		<InputAddon>kg</InputAddon>
	</ButtonGroup>
</div>
`,

`
<script>
  let show = false;
  let show1 = false;
<\/script>

<div>
	<Label for="show-password" class="mb-2">Your password</Label>

	<Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg">
		<button slot="left" on:click={() => (show = !show)} class="pointer-events-auto">
			{#if show}
				<Icon name="eye" class="text-gray-500 w-5" />
			{:else}
				<Icon name="eye-slash" class="text-gray-500 w-5" />
			{/if}
		</button>
	</Input>
</div>

<div>
	<Label for="show-password1" class="mb-2">Your password</Label>

	<ButtonGroup class="w-full">
		<InputAddon>
			<button on:click={() => (show1 = !show1)}>
				{#if show1}
					<Icon name="eye" class="text-gray-500 w-5" />
				{:else}
					<Icon name="eye-slash" class="text-gray-500 w-5" />
				{/if}
			</button>
		</InputAddon>

		<Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here" />
	</ButtonGroup>
</div>
`,

`
<Label class="block space-y-2">
	<span>Your email</span>

	<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />

	<Helper class="text-sm">We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Privacy Policy</a>.</Helper>
</Label>
`,

`
<script>
  let value = 5;
<\/script>

<Label class="space-y-2 mb-4">
	<span>Your Email</span>

	<NumberInput bind:value />
</Label>

<p>Value: {value}</p>

<p>Type of value: {typeof value}</p>
`,

`
<form>
	<Label for="search" class="block mb-2">Your Email</Label>

	<Input id="search" placeholder="Search" size="lg">
		<Icon slot="left" name="magnifying-glass" size="lg" class="text-gray-500" />

		<Button slot="right" size="sm" type="submit">Search</Button>
	</Input>
</form>
`,

`
<ButtonGroup class="w-full">
	<Button color="none" class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
		All categories
		<Icon name="chevron-down" class="ml-2" />
	</Button>

	<Dropdown>
		<DropdownItem>Shopping</DropdownItem>
		<DropdownItem>Images</DropdownItem>
		<DropdownItem>News</DropdownItem>
		<DropdownItem>Finance</DropdownItem>
	</Dropdown>

	<Input placeholder="Search" />

	<Button color="primary" class="!p-2.5" type="submit">
		<Icon name="magnifying-glass" />
	</Button>
</ButtonGroup>
`,

`
<script>
  let value = 5;
<\/script>

<Input let:props>
	<div slot="left">#</div>

	<input type="number" {...props} bind:value />
</Input>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="input-fields" title="Input fields" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-col">
			<form>
				<div class="grid gap-6 mb-6 md:grid-cols-2">
					<div>
						<Label for="first_name" class="mb-2">First name</Label>

						<Input type="text" id="first_name" placeholder="John" required  />
					</div>

					<div>
						<Label for="last_name" class="mb-2">Last name</Label>

						<Input type="text" id="last_name" placeholder="Doe" required />
					</div>

					<div>
						<Label for="company" class="mb-2">Company</Label>

						<Input type="text" id="company" placeholder="Flowbite" required />
					</div>

					<div>
						<Label for="phone" class="mb-2">Phone number</Label>

						<Input type="tel" id="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
					</div>

					<div>
						<Label for="website" class="mb-2">Website URL</Label>

						<Input type="url" id="website" placeholder="flowbite.com" required />
					</div>

					<div>
						<Label for="visitors" class="mb-2">Unique visitors (per month)</Label>

						<Input type="number" id="visitors" placeholder="" required />
					</div>
				</div>

				<div class="mb-6">
					<Label for="email" class="mb-2">Email address</Label>

					<Input type="email" id="email" placeholder="john.doe@company.com" required />
				</div>

				<div class="mb-6">
					<Label for="password" class="mb-2">Password</Label>

					<Input type="password" id="password" placeholder="•••••••••" required />
				</div>

				<div class="mb-6">
					<Label for="confirm_password" class="mb-2">Confirm password</Label>

					<Input type="password" id="confirm_password" placeholder="•••••••••" required />
				</div>

				<Checkbox class="mb-6 space-x-1" required>I agree with the <a href="/">terms and conditions</a>.</Checkbox>

				<Button type="submit">Submit</Button>
			</form>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="input-sizes" title="Input sizes" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-col gap-4">
			<Label class="space-y-2">
				<span>Small icon input</span>

				<Input type="email" placeholder="Small input" size="sm" />
			</Label>

			<Label class="space-y-2">
				<span>Default icon input</span>

				<Input type="email" placeholder="Default input" size="md" />
			</Label>

			<Label class="space-y-2">
				<span>Large icon input</span>

				<Input type="email" placeholder="Large input" size="lg" />
			</Label>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disabled-state" title="Disabled state" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-col">
			<Input class="mb-6" disabled value="Disabled input" />

			<Input class="mb-6" disabled readonly value="Disabled readonly input" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="validation" title="Validation" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-col">
			<div class="mb-6">
				<Label for="success" color="success" class="block mb-2">Your name</Label>

				<Input id="success" color="success" placeholder="Success input" />

				<Helper class="mt-2" color="success">
					<span class="font-medium">Well done!</span> Some success messsage.
				</Helper>
			</div>

			<div class="mb-6">
				<Label for="error" color="danger" class="block mb-2">Your name</Label>

				<Input id="success" color="danger" placeholder="Success input" />

				<Helper class="mt-2" color="danger">
					<span class="font-medium">Oh, snapp!</span> Some error message.
				</Helper>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="input-with-icon" title="Input with icon" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-col gap-4">
			<Label class="space-y-2">
				<span>Small input - left icon</span>

				<Input type="email" placeholder="name@flowbite.com" size="sm">
					<Icon slot="left" name="envelope" type="fa-solid" class="text-gray-500" />
				</Input>
			</Label>

			<Label class="space-y-2">
				<span>Default input - right icon</span>

				<Input type="email" placeholder="name@flowbite.com" size="md">
					<Icon slot="right" name="envelope" type="fa-solid" size="lg" class="text-gray-500" />
				</Input>
			</Label>

			<Label class="space-y-2">
				<span>Large input - both icons</span>

				<Input type="email" placeholder="name@flowbite.com" size="lg">
					<Icon slot="left" name="envelope" type="fa-solid" size="xl" class="text-gray-500" />

					<CloseButton slot="right" />
				</Input>
			</Label>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="input-group" title="Input group" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-col gap-4">
			<div>
				<Label class="mb-2" for="input-addon-sm">Small additional text</Label>

				<ButtonGroup class="w-full" size="sm">
					<InputAddon>@</InputAddon>

					<Input id="input-addon-sm" type="email" placeholder="elonmusk" />
				</ButtonGroup>
			</div>

			<div>
				<Label class="mb-2" for="input-addon-md">Default additional text</Label>

				<ButtonGroup class="w-full" size="md">
					<Input id="input-addon-md" type="email" placeholder="elonmusk" />

					<InputAddon>.com</InputAddon>
				</ButtonGroup>
			</div>

			<div>
				<Label class="mb-2" for="input-addon-lg">Large additional text</Label>

				<ButtonGroup class="w-full" size="lg">
					<InputAddon>@</InputAddon>

					<Input id="input-addon-lg" type="email" placeholder="elonmusk" />

					<InputAddon>.com</InputAddon>
				</ButtonGroup>
			</div>

			<div class="pt-8">
				<Label for="input-addon" class="mb-2">Groupped with button</Label>

				<ButtonGroup class="w-full">
					<InputAddon>@</InputAddon>

					<Input id="input-addon" type="email" placeholder="elonmusk" />

					<Button color="primary">Search</Button>
				</ButtonGroup>
			</div>

			<div>
				<Label for="input-addon" class="mb-2">Crazy example</Label>

				<ButtonGroup class="w-full">
					<InputAddon><Checkbox /></InputAddon>
						<Button color="primary">Search</Button>
					<InputAddon>http://</InputAddon>

					<Input id="input-addon" type="email" placeholder="elonmusk" />
						<InputAddon>@</InputAddon>
					<InputAddon><Checkbox /></InputAddon>

					<Button color="danger">Send</Button>

					<InputAddon>kg</InputAddon>
				</ButtonGroup>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="icon-click-handler" title="Icon click handler" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-col gap-4">
			<div>
				<Label for="show-password" class="mb-2">Your password</Label>

				<Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg">
					<button slot="left" on:click={() => (show = !show)} class="pointer-events-auto">
						{#if show}
							<Icon name="eye" class="text-gray-500 w-5" />
						{:else}
							<Icon name="eye-slash" class="text-gray-500 w-5" />
						{/if}
					</button>
				</Input>
			</div>

			<div>
				<Label for="show-password1" class="mb-2">Your password</Label>

				<ButtonGroup class="w-full">
					<InputAddon>
						<button on:click={() => (show1 = !show1)}>
							{#if show1}
								<Icon name="eye" class="text-gray-500 w-5" />
							{:else}
								<Icon name="eye-slash" class="text-gray-500 w-5" />
							{/if}
						</button>
					</InputAddon>

					<Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here" />
				</ButtonGroup>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="helper-text" title="Helper text" code={codeBlocks[7]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label class="block space-y-2">
				<span>Your email</span>

				<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />

				<Helper class="text-sm">We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Privacy Policy</a>.</Helper>
			</Label>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="number-input" title="Number input" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Label class="space-y-2 mb-4">
				<span>Your Email</span>

				<NumberInput bind:value />
			</Label>

			<p>Value: {value}</p>

			<p>Type of value: {typeof value}</p>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="search-input" title="Search input" code={codeBlocks[9]}>
		<div slot="preview" class="flex flex-col gap-2">
			<form>
				<Label for="search" class="block mb-2">Your Email</Label>

				<Input id="search" placeholder="Search" size="lg">
					<Icon slot="left" name="magnifying-glass" size="lg" class="text-gray-500" />

					<Button slot="right" size="sm" type="submit">Search</Button>
				</Input>
			</form>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="dropdown" title="Dropdown" code={codeBlocks[10]}>
		<div slot="preview" class="flex flex-col gap-2">
			<ButtonGroup class="w-full">
				<Button color="none" class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
					All categories
					<Icon name="chevron-down" class="ml-2" />
				</Button>

				<Dropdown>
					<DropdownItem>Shopping</DropdownItem>
					<DropdownItem>Images</DropdownItem>
					<DropdownItem>News</DropdownItem>
					<DropdownItem>Finance</DropdownItem>
				</Dropdown>

				<Input placeholder="Search" />

				<Button color="primary" class="!p-2.5" type="submit">
					<Icon name="magnifying-glass" />
				</Button>
			</ButtonGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="advanced-usag" title="Advanced usag" code={codeBlocks[11]}>
		<div slot="preview" class="flex flex-col gap-2">
			<Input let:props>
				<div slot="left">#</div>

				<input type="number" {...props} bind:value />
			</Input>
		</div>
	</DocSection>
</div>