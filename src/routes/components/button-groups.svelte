<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import ButtonGroup from '$components/ButtonGroups/Index.svelte';

	const handleClick = () => {
		alert('Clicked');
	};

	let codeBlocks = [
`<ButtonGroup>
	<Button>Proflie</Button>
	<Button>Settings</Button>
	<Button>Messages</Button>
</ButtonGroup>`,

`<div>Pills</div>

<ButtonGroup class="space-x-px">
	<Button pill color="purple">Proflie</Button>
	<Button pill color="purple">Settings</Button>
	<Button pill color="purple">Messages</Button>
</ButtonGroup>

<div>Standard buttons</div>

<ButtonGroup>
	<Button color="danger">Proflie</Button>
	<Button color="success">Settings</Button>
	<Button color="warning">Messages</Button>
</ButtonGroup>

<div>Outline</div>

<ButtonGroup>
	<Button outline color="danger">Proflie</Button>
	<Button outline color="success">Settings</Button>
	<Button outline color="warning">Messages</Button>
</ButtonGroup>

<div>Gradient with shadows</div>

<ButtonGroup>
	<Button gradient shadow="success" color="success">Proflie</Button>
	<Button gradient shadow="pink" color="pink">Settings</Button>
	<Button gradient shadow="teal" color="teal">Messages</Button>
</ButtonGroup>

<div>Dualtone gradient</div>

<ButtonGroup class="space-x-px">
	<Button gradient color="purpleToBlue">Profile</Button>
	<Button gradient color="cyanToBlue">Settings</Button>
	<Button gradient color="greenToBlue">Messages</Button>
</ButtonGroup>`,

`<ButtonGroup>
	<Button href="/">Proflie</Button>
	<Button href="/">Settings</Button>
	<Button href="/">Messages</Button>
</ButtonGroup>`,

`<ButtonGroup>
	<Button icon="user" iconType="fa-solid">Proflie</Button>
	<Button icon="sliders-up" iconType="fa-solid">Settings</Button>
	<Button icon="cloud-arrow-down" iconType="fa-solid">Messages</Button>
</ButtonGroup>`,

`<ButtonGroup>
	<Button outline color="dark">Proflie</Button>
	<Button outline color="dark">Settings</Button>
	<Button outline color="dark">Messages</Button>
</ButtonGroup>`,

`<ButtonGroup>
	<Button outline color="dark" icon="user" iconType="fa-solid">Proflie</Button>
	<Button outline color="dark" icon="sliders-up" iconType="fa-solid">Settings</Button>
	<Button outline color="dark" icon="cloud-arrow-down" iconType="fa-solid">Messages</Button>
</ButtonGroup>`,

`<script>
	const handleClick = () => {
		alert('Clicked');
	};
<\/script>

<ButtonGroup>
	<Button on:click={handleClick}>Click me</Button>
	<Button>Settings</Button>
	<Button>Messages</Button>
</ButtonGroup>`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default" title="Default" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ButtonGroup>
				<Button>Proflie</Button>

				<Button>Settings</Button>

				<Button>Messages</Button>
			</ButtonGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="more-examples" title="More examples" code={codeBlocks[1]}>
		<div slot="preview" class="grid grid-cols-2 gap-4 w-fit text-gray-900 dark:text-gray-100">
			<div>Pills</div>

			<ButtonGroup class="space-x-px">
				<Button pill color="purple">Proflie</Button>

				<Button pill color="purple">Settings</Button>

				<Button pill color="purple">Messages</Button>
			</ButtonGroup>

			<div>Standard buttons</div>

			<ButtonGroup>
				<Button color="danger">Proflie</Button>

				<Button color="success">Settings</Button>

				<Button color="warning">Messages</Button>
			</ButtonGroup>

			<div>Outline</div>

			<ButtonGroup>
				<Button outline color="danger">Proflie</Button>

				<Button outline color="success">Settings</Button>

				<Button outline color="warning">Messages</Button>
			</ButtonGroup>

			<div>Gradient with shadows</div>

			<ButtonGroup>
				<Button gradient shadow="success" color="success">Proflie</Button>

				<Button gradient shadow="pink" color="pink">Settings</Button>

				<Button gradient shadow="teal" color="teal">Messages</Button>
			</ButtonGroup>

			<div>Dualtone gradient</div>

			<ButtonGroup class="space-x-px">
				<Button gradient color="purpleToBlue">Profile</Button>

				<Button gradient color="cyanToBlue">Settings</Button>

				<Button gradient color="greenToBlue">Messages</Button>
			</ButtonGroup>
		</div>
	</DocSection>

	<DocSection
		class="mb-10"
		id="button-group-as-links"
		title="Button group as links"
		code={codeBlocks[2]}
	>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ButtonGroup>
				<Button href="/">Proflie</Button>

				<Button href="/">Settings</Button>

				<Button href="/">Messages</Button>
			</ButtonGroup>
		</div>
	</DocSection>

	<DocSection
		class="mb-10"
		id="group-buttons-with-icons"
		title="Group buttons with icons"
		code={codeBlocks[3]}
	>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ButtonGroup>
				<Button icon="user" iconType="fa-solid">Proflie</Button>

				<Button icon="sliders-up" iconType="fa-solid">Settings</Button>

				<Button icon="cloud-arrow-down" iconType="fa-solid">Messages</Button>
			</ButtonGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="outline" title="Outline" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ButtonGroup>
				<Button outline color="dark">Proflie</Button>

				<Button outline color="dark">Settings</Button>

				<Button outline color="dark">Messages</Button>
			</ButtonGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="outline-with-icon" title="Outline with icon" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ButtonGroup>
				<Button outline color="dark" icon="user" iconType="fa-solid">Proflie</Button>

				<Button outline color="dark" icon="sliders-up" iconType="fa-solid">Settings</Button>

				<Button outline color="dark" icon="cloud-arrow-down" iconType="fa-solid">Messages</Button>
			</ButtonGroup>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="events" title="Events" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<ButtonGroup>
				<Button on:click={handleClick}>Click me</Button>

				<Button>Settings</Button>

				<Button>Messages</Button>
			</ButtonGroup>
		</div>
	</DocSection>
</div>
