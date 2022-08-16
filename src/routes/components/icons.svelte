<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let codeBlocks = [
`
<Icon type="fa-solid" name="camera" size="1x" class="text-red-500" />
<Icon type="fa-solid" name="camera" size="2x" class="text-blue-500" />
<Icon type="fa-solid" name="camera" size="3x" class="text-purple-500" />
`,

`
<Icon type="fa-solid" name="bags-shopping" size="3x" class="text-slate-500" />
<Icon type="fa-regular" name="bags-shopping" size="3x" class="text-slate-500" />
<Icon type="fa-light" name="bags-shopping" size="3x" class="text-slate-500" />
<Icon type="fa-thin" name="bags-shopping" size="3x" class="text-slate-500" />
<Icon type="fa-duotone" name="bags-shopping" size="3x" class="text-slate-500" />
`,

`
<Icon type="fa-duotone" name="basketball" size="3x" animation="beat" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
<Icon type="fa-duotone" name="basketball" size="3x" animation="fade" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
<Icon type="fa-duotone" name="basketball" size="3x" animation="beat-fade" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
<Icon type="fa-duotone" name="basketball" size="3x" animation="bounce" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
<Icon type="fa-duotone" name="basketball" size="3x" animation="flip" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
<Icon type="fa-duotone" name="basketball" size="3x" animation="shake" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
<Icon type="fa-duotone" name="basketball" size="3x" animation="spin" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
`,

`
<ul class="fa-ul text-slate-700">
	<li><Icon type="fa-solid" name="check-square" list={true} /> List icons can</li>
	<li><Icon type="fa-solid" name="check-square" list={true} /> be used to</li>
	<li><Icon type="fa-solid" name="spinner" list={true} class="fa-pulse" /> replace bullets</li>
	<li><Icon type="fa-regular" name="square" list={true} /> in lists</li>
</ul>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="basics" title="Basics" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Icon type="fa-solid" name="camera" size="1x" class="text-red-500" />
			<Icon type="fa-solid" name="camera" size="2x" class="text-blue-500" />
			<Icon type="fa-solid" name="camera" size="3x" class="text-purple-500" />
		</div>
	</DocSection>

	<DocSection class="mb-10" id="different-font-types" title="Different Font Types" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Icon type="fa-solid" name="bags-shopping" size="3x" class="text-slate-500" />
			<Icon type="fa-regular" name="bags-shopping" size="3x" class="text-slate-500" />
			<Icon type="fa-light" name="bags-shopping" size="3x" class="text-slate-500" />
			<Icon type="fa-thin" name="bags-shopping" size="3x" class="text-slate-500" />
			<Icon type="fa-duotone" name="bags-shopping" size="3x" class="text-slate-500" />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="animation-&-duotone-customization" title="Animation & Duotone Customization" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Icon type="fa-duotone" name="basketball" size="3x" animation="beat" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
			<Icon type="fa-duotone" name="basketball" size="3x" animation="fade" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
			<Icon type="fa-duotone" name="basketball" size="3x" animation="beat-fade" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
			<Icon type="fa-duotone" name="basketball" size="3x" animation="bounce" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
			<Icon type="fa-duotone" name="basketball" size="3x" animation="flip" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
			<Icon type="fa-duotone" name="basketball" size="3x" animation="shake" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
			<Icon type="fa-duotone" name="basketball" size="3x" animation="spin" primaryColor="#47241d" secondaryColor="#b0572f" secondaryOpacity="1" />
		</div>
	</DocSection>
	
	<DocSection class="mb-10" id="icons-in-a-list" title="Icons in a List" code={codeBlocks[3]}>
		<div slot="preview">
			<ul class="fa-ul text-slate-700">
				<li><Icon type="fa-solid" name="check-square" list={true} /> List icons can</li>
				<li><Icon type="fa-solid" name="check-square" list={true} /> be used to</li>
				<li><Icon type="fa-solid" name="spinner" list={true} class="fa-pulse" /> replace bullets</li>
				<li><Icon type="fa-regular" name="square" list={true} /> in lists</li>
			</ul>
		</div>
	</DocSection>
</div>