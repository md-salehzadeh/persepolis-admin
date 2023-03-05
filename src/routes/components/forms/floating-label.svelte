<script>
	import DocSection from '$components/Docs/Section.svelte';
	import FloatingLabelInput from '$components/Forms/FloatingLabelInput.svelte';
	import Label from '$components/Forms/Label.svelte';
	import Helper from '$components/Forms/Helper.svelte';

	let codeBlocks = [
`
<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
	<FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Floating filled"/>

	<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Floating outlined" />

	<FloatingLabelInput id="floating_standard" name="floating_standard" type="text" label="Floating standard" />
</div>
`,

`
<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
	<FloatingLabelInput style="filled" id="disabled_filled" name="disabled_filled" type="text" label="Disabled filled" disabled/>

	<FloatingLabelInput style="outlined" id="disabled_outlined" name="disabled_outlined" type="text" label="Disabled outlined" disabled/>

	<FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" label="Disabled standard" disabled/>
</div>
`,

`
<!-- Success messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
	<div>
		<FloatingLabelInput color="success" style="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text" label="Filled success"/>

		<Helper color="success"><span class="font-medium">Well done!</span> Some success message.</Helper>
	</div>

	<div>
		<FloatingLabelInput color="success" style="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text" label="Outlined success"/>

		<Helper color="success"><span class="font-medium">Well done!</span> Some success message.</Helper>
	</div>

	<div>
		<FloatingLabelInput color="success" style="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text" label="Standard success"/>

		<Helper color="success"><span class="font-medium">Well done!</span> Some success message.</Helper>
	</div>
</div>

<!-- Error messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
	<div>
		<FloatingLabelInput color="danger" style="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text" label="Filled error"/>

		<Helper color="danger"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
	</div>

	<div>
		<FloatingLabelInput color="danger" style="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text" label="Outlined error"/>

		<Helper color="danger"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
	</div>

	<div>
		<FloatingLabelInput color="danger" style="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text" label="Standard error"/>

		<Helper color="danger"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
	</div>
</div>
`,

`
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
	<FloatingLabelInput size="small" style="filled" id="small_filled" name="small_filled" type="text" label="Small filled"/>

	<FloatingLabelInput size="small" style="outlined" id="small_outlined" name="small_outlined" type="text" label="Small outlined" />

	<FloatingLabelInput size="small" id="small_standard" name="small_standard" type="text" label="Small standard" />
</div>

<div class="grid gap-6 items-end md:grid-cols-3">
	<FloatingLabelInput style="filled" id="default_filled" name="default_filled" type="text" label="Default filled"/>

	<FloatingLabelInput style="outlined" id="default_outlined" name="default_outlined" type="text" label="Default outlined" />

	<FloatingLabelInput id="default_standard" name="default_standard" type="text" label="Default standard" />
</div>
`,

`
<FloatingLabelInput style="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text" label="Floating helper"/>

<Helper class="pt-2">
	Remember, contributions to this topic should follow our
	<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.
</Helper>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="floating-label-examples" title="Floating label examples" code={codeBlocks[0]}>
		<div slot="preview">
			<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
				<FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Floating filled"/>

				<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Floating outlined" />

				<FloatingLabelInput id="floating_standard" name="floating_standard" type="text" label="Floating standard" />
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="disabled-state" title="Disabled state" code={codeBlocks[1]}>
		<div slot="preview">
			<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
				<FloatingLabelInput style="filled" id="disabled_filled" name="disabled_filled" type="text" label="Disabled filled" disabled/>

				<FloatingLabelInput style="outlined" id="disabled_outlined" name="disabled_outlined" type="text" label="Disabled outlined" disabled/>

				<FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" label="Disabled standard" disabled/>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="validation" title="Validation" code={codeBlocks[2]}>
		<div slot="preview">
			<!-- Success messages -->
			<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
				<div>
					<FloatingLabelInput color="success" style="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text" label="Filled success"/>

					<Helper color="success"><span class="font-medium">Well done!</span> Some success message.</Helper>
				</div>

				<div>
					<FloatingLabelInput color="success" style="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text" label="Outlined success"/>

					<Helper color="success"><span class="font-medium">Well done!</span> Some success message.</Helper>
				</div>

				<div>
					<FloatingLabelInput color="success" style="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text" label="Standard success"/>

					<Helper color="success"><span class="font-medium">Well done!</span> Some success message.</Helper>
				</div>
			</div>

			<!-- Error messages -->
			<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
				<div>
					<FloatingLabelInput color="danger" style="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text" label="Filled error"/>

					<Helper color="danger"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
				</div>

				<div>
					<FloatingLabelInput color="danger" style="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text" label="Outlined error"/>

					<Helper color="danger"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
				</div>

				<div>
					<FloatingLabelInput color="danger" style="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text" label="Standard error"/>

					<Helper color="danger"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
				</div>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="sizes" title="Sizes" code={codeBlocks[3]}>
		<div slot="preview">
			<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
				<FloatingLabelInput size="small" style="filled" id="small_filled" name="small_filled" type="text" label="Small filled"/>

				<FloatingLabelInput size="small" style="outlined" id="small_outlined" name="small_outlined" type="text" label="Small outlined" />

				<FloatingLabelInput size="small" id="small_standard" name="small_standard" type="text" label="Small standard" />
			</div>

			<div class="grid gap-6 items-end md:grid-cols-3">
				<FloatingLabelInput style="filled" id="default_filled" name="default_filled" type="text" label="Default filled"/>

				<FloatingLabelInput style="outlined" id="default_outlined" name="default_outlined" type="text" label="Default outlined" />

				<FloatingLabelInput id="default_standard" name="default_standard" type="text" label="Default standard" />
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="helper-text" title="Helper text" code={codeBlocks[4]}>
		<div slot="preview">
			<FloatingLabelInput style="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text" label="Floating helper"/>

			<Helper class="pt-2">
				Remember, contributions to this topic should follow our
				<a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.
			</Helper>
		</div>
	</DocSection>
</div>