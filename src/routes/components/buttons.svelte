<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let codeBlocks = [
`
<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
`,

`
<Button pill={true}>Default</Button>
<Button color="alternative" pill={true}>Alternative</Button>
<Button color="dark" pill={true}>Dark</Button>
<Button color="light" pill={true}>Light</Button>
<Button color="green" pill={true}>Green</Button>
<Button color="red" pill={true}>Red</Button>
<Button color="yellow" pill={true}>Yellow</Button>
<Button color="purple" pill={true}>Purple</Button>
`,

`
<Button outline>Default</Button>
<Button outline color="dark">Dark</Button>
<Button outline color="green">Green</Button>
<Button outline color="red">Red</Button>
<Button outline color="yellow">Yellow</Button>
<Button outline color="purple">Purple</Button>
`,

`
<Button gradient color="blue">Blue</Button>
<Button gradient color="green">Green</Button>
<Button gradient color="cyan">Cyan</Button>
<Button gradient color="teal">Teal</Button>
<Button gradient color="lime">Lime</Button>
<Button gradient color="red">Red</Button>
<Button gradient color="pink">Pink</Button>
<Button gradient color="purple">Purple</Button>
`,

`
<Button gradient color="purpleToBlue">Purple to Blue</Button>
<Button gradient color="cyanToBlue">Cyan to Blue</Button>
<Button gradient color="greenToBlue">Green to Blue</Button>
<Button gradient color="purpleToPink">Purple to Pink</Button>
<Button gradient color="pinkToOrange">Pink to Orange</Button>
<Button gradient color="tealToLime">Teal to Lime</Button>
<Button gradient color="redToYellow">Red to Yellow</Button>
`,

`
<Button outline gradient color="purpleToBlue">Purple to Blue</Button>
<Button outline gradient color="cyanToBlue">Cyan to Blue</Button>
<Button outline gradient color="greenToBlue">Green to Blue</Button>
<Button outline gradient color="purpleToPink">Purple to Pink</Button>
<Button outline gradient color="pinkToOrange">Pink to Orange</Button>
<Button outline gradient color="tealToLime">Teal to Lime</Button>
<Button outline gradient color="redToYellow">Red to Yellow</Button>
`,

`
<Button shadow="blue" gradient color="blue">Blue</Button>
<Button shadow="green" gradient color="green">Green</Button>
<Button shadow="cyan" gradient color="cyan">Cyan</Button>
<Button shadow="teal" gradient color="teal">Teal</Button>
<Button shadow="lime" gradient color="lime">Lime</Button>
<Button shadow="red" gradient color="red">Red</Button>
<Button shadow="pink" gradient color="pink">Pink</Button>
<Button shadow="purple" gradient color="purple">Purple</Button>
`,

`
<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Base</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>
`,

`
<Button icon="user" iconType="fa-solid" iconSize="md" iconAlign="right" iconClass="...">Profile</Button>
<Button><Icon type="fa-regular" icon="cart-shopping" class="mr-2" /> Buy Now</Button>
<Button>Choose Plan <Icon type="fa-regular" icon="arrow-right" class="ml-2" /></Button>
`,

`
<Button icon="arrow-right"></Button>
<Button pill="{true}" icon="arrow-right"></Button>
<Button outline="{true}" icon="arrow-right"></Button>
<Button pill="{true}" icon="arrow-right" outline="{true}"></Button>
`,

`
<Button loading>Loading ...</Button>
<Button loading outline>Loading ...</Button>
`,

`
<Button disabled>Button disabled</Button>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-button" title="Default button" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button>Default</Button>
			<Button color="alternative">Alternative</Button>
			<Button color="dark">Dark</Button>
			<Button color="light">Light</Button>
			<Button color="green">Green</Button>
			<Button color="red">Red</Button>
			<Button color="yellow">Yellow</Button>
			<Button color="purple">Purple</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="button-pills" title="Button pills" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button pill={true}>Default</Button>
			<Button color="alternative" pill={true}>Alternative</Button>
			<Button color="dark" pill={true}>Dark</Button>
			<Button color="light" pill={true}>Light</Button>
			<Button color="green" pill={true}>Green</Button>
			<Button color="red" pill={true}>Red</Button>
			<Button color="yellow" pill={true}>Yellow</Button>
			<Button color="purple" pill={true}>Purple</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="outline-buttons" title="Outline buttons" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button outline>Default</Button>
			<Button outline color="dark">Dark</Button>
			<Button outline color="green">Green</Button>
			<Button outline color="red">Red</Button>
			<Button outline color="yellow">Yellow</Button>
			<Button outline color="purple">Purple</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="gradient-monochrome" title="Gradient monochrome" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button gradient color="blue">Blue</Button>
			<Button gradient color="green">Green</Button>
			<Button gradient color="cyan">Cyan</Button>
			<Button gradient color="teal">Teal</Button>
			<Button gradient color="lime">Lime</Button>
			<Button gradient color="red">Red</Button>
			<Button gradient color="pink">Pink</Button>
			<Button gradient color="purple">Purple</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="gradient-duotone" title="Gradient duotone" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button gradient color="purpleToBlue">Purple to Blue</Button>
			<Button gradient color="cyanToBlue">Cyan to Blue</Button>
			<Button gradient color="greenToBlue">Green to Blue</Button>
			<Button gradient color="purpleToPink">Purple to Pink</Button>
			<Button gradient color="pinkToOrange">Pink to Orange</Button>
			<Button gradient color="tealToLime">Teal to Lime</Button>
			<Button gradient color="redToYellow">Red to Yellow</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="gradient-outline" title="Gradient outline" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button outline gradient color="purpleToBlue">Purple to Blue</Button>
			<Button outline gradient color="cyanToBlue">Cyan to Blue</Button>
			<Button outline gradient color="greenToBlue">Green to Blue</Button>
			<Button outline gradient color="purpleToPink">Purple to Pink</Button>
			<Button outline gradient color="pinkToOrange">Pink to Orange</Button>
			<Button outline gradient color="tealToLime">Teal to Lime</Button>
			<Button outline gradient color="redToYellow">Red to Yellow</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="colored-shadows" title="Colored shadows" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button shadow="blue" gradient color="blue">Blue</Button>
			<Button shadow="green" gradient color="green">Green</Button>
			<Button shadow="cyan" gradient color="cyan">Cyan</Button>
			<Button shadow="teal" gradient color="teal">Teal</Button>
			<Button shadow="lime" gradient color="lime">Lime</Button>
			<Button shadow="red" gradient color="red">Red</Button>
			<Button shadow="pink" gradient color="pink">Pink</Button>
			<Button shadow="purple" gradient color="purple">Purple</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="button-sizes" title="Button sizes" code={codeBlocks[7]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button size="xs">Extra small</Button>
			<Button size="sm">Small</Button>
			<Button size="md">Base</Button>
			<Button size="lg">Large</Button>
			<Button size="xl">Extra large</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="buttons-with-icon" title="Buttons with icon" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button icon="user" iconType="fa-solid" iconSize="md" iconAlign="right">Profile</Button>
			<Button><Icon type="fa-regular" icon="cart-shopping" class="mr-2" /> Buy Now</Button>
			<Button>Choose Plan <Icon type="fa-regular" icon="arrow-right" class="ml-2" /></Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="icon-buttons" title="Icon buttons" code={codeBlocks[9]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button icon="arrow-right"></Button>
			<Button pill="{true}" icon="arrow-right"></Button>
			<Button outline="{true}" icon="arrow-right"></Button>
			<Button pill="{true}" icon="arrow-right" outline="{true}"></Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="loader" title="Loader" code={codeBlocks[10]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button loading>Loading ...</Button>
			<Button loading outline>Loading ...</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disabled" title="Disabled" code={codeBlocks[11]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button disabled>Button disabled</Button>
		</div>
	</DocSection>
</div>