<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Kbd from '$components/Kbd/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import Table from '$components/Tables/Index.svelte';
	import Thead from '$components/Tables/Thead.svelte';
	import Tbody from '$components/Tables/Tbody.svelte';
	import Tr from '$components/Tables/Tr.svelte';
	import Th from '$components/Tables/Th.svelte';
	import Td from '$components/Tables/Td.svelte';

	let codeBlocks = [
`
<Kbd class='px-2 py-1.5'>Shift</Kbd>
<Kbd class='px-2 py-1.5'>Ctrl</Kbd>
<Kbd class='px-2 py-1.5'>Tab</Kbd>
<Kbd class='px-2 py-1.5'>Caps Lock</Kbd>
<Kbd class='px-2 py-1.5'>Esc</Kbd>
<Kbd class='px-4 py-1.5'>Spacebar</Kbd>
<Kbd class='px-2 py-1.5'>Enter</Kbd>
`,

`
<p class="text-gray-500 dark:text-gray-400">
	Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
</p>
`,

`
<Table>
	<Thead>
		<Th>Key</Th>

		<Th>Description</Th>
	</Thead>

	<Tbody class="divide-y">
		<Tr>
			<Td>
				<Kbd class='px-2 py-1.5'>Shift</Kbd> or <Kbd class='px-2 py-1.5'>Tab</Kbd>
			</Td>

			<Td>Navigate to interactive elements</Td>
		</Tr>

		<Tr>
			<Td>
				<Kbd class='px-2 py-1.5'>Enter</Kbd> or <Kbd class='px-4 py-1.5'>Space bar</Kbd>
			</Td>
			<Td>Ensure elements with ARIA role="button" can be activated with both key commands.</Td>
		</Tr>

		<Tr>
			<Td>
				<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
					<Icon name="caret-up" type="fa-solid" />
				</Kbd>

				<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
					<Icon name="caret-down" type="fa-solid" />
				</Kbd> or 

				<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
					<Icon name="caret-left" type="fa-solid" />
				</Kbd>

				<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
					<Icon name="caret-right" type="fa-solid" />
				</Kbd>
			</Td>

			<Td>Choose and activate previous/next tab.</Td>
		</Tr>
	</Tbody>
</Table>
`,

`
<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
	<Icon name="caret-up" type="fa-solid" />
</Kbd>

<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
	<Icon name="caret-down" type="fa-solid" />
</Kbd>

<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
	<Icon name="caret-left" type="fa-solid" />
</Kbd>

<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
	<Icon name="caret-right" type="fa-solid" />
</Kbd>
`,

`
<Kbd class="px-2 py-1.5">Q</Kbd>
<Kbd class="px-2 py-1.5">W</Kbd>
<Kbd class="px-2 py-1.5">E</Kbd>
<Kbd class="px-2 py-1.5">R</Kbd>
<Kbd class="px-2 py-1.5">T</Kbd>
<Kbd class="px-2 py-1.5">Y</Kbd>
<Kbd class="px-2 py-1.5">U</Kbd>
<Kbd class="px-2 py-1.5">I</Kbd>
<Kbd class="px-2 py-1.5">O</Kbd>
<Kbd class="px-2 py-1.5">P</Kbd>
<Kbd class="px-2 py-1.5">A</Kbd>
<Kbd class="px-2 py-1.5">S</Kbd>
<Kbd class="px-2 py-1.5">D</Kbd>
<Kbd class="px-2 py-1.5">F</Kbd>
<Kbd class="px-2 py-1.5">G</Kbd>
<Kbd class="px-2 py-1.5">H</Kbd>
<Kbd class="px-2 py-1.5">J</Kbd>
<Kbd class="px-2 py-1.5">K</Kbd>
<Kbd class="px-2 py-1.5">L</Kbd>
<Kbd class="px-2 py-1.5">Z</Kbd>
<Kbd class="px-2 py-1.5">X</Kbd>
<Kbd class="px-2 py-1.5">C</Kbd>
<Kbd class="px-2 py-1.5">V</Kbd>
<Kbd class="px-2 py-1.5">B</Kbd>
<Kbd class="px-2 py-1.5">N</Kbd>
<Kbd class="px-2 py-1.5">M</Kbd>
`,

`
<Kbd class="px-2 py-1.5">1</Kbd>
<Kbd class="px-2 py-1.5">2</Kbd>
<Kbd class="px-2 py-1.5">3</Kbd>
<Kbd class="px-2 py-1.5">4</Kbd>
<Kbd class="px-2 py-1.5">5</Kbd>
<Kbd class="px-2 py-1.5">6</Kbd>
<Kbd class="px-2 py-1.5">7</Kbd>
<Kbd class="px-2 py-1.5">8</Kbd>
<Kbd class="px-2 py-1.5">9</Kbd>
<Kbd class="px-2 py-1.5">0</Kbd>
`,

`
<Kbd class="px-2 py-1.5">F1</Kbd>
<Kbd class="px-2 py-1.5">F2</Kbd>
<Kbd class="px-2 py-1.5">F3</Kbd>
<Kbd class="px-2 py-1.5">F4</Kbd>
<Kbd class="px-2 py-1.5">F5</Kbd>
<Kbd class="px-2 py-1.5">F6</Kbd>
<Kbd class="px-2 py-1.5">F7</Kbd>
<Kbd class="px-2 py-1.5">F8</Kbd>
<Kbd class="px-2 py-1.5">F9</Kbd>
<Kbd class="px-2 py-1.5">F10</Kbd>
<Kbd class="px-2 py-1.5">F11</Kbd>
<Kbd class="px-2 py-1.5">F12</Kbd>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-kbd" title="Default KBD" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Kbd class='px-2 py-1.5'>Shift</Kbd>
			<Kbd class='px-2 py-1.5'>Ctrl</Kbd>
			<Kbd class='px-2 py-1.5'>Tab</Kbd>
			<Kbd class='px-2 py-1.5'>Caps Lock</Kbd>
			<Kbd class='px-2 py-1.5'>Esc</Kbd>
			<Kbd class='px-4 py-1.5'>Spacebar</Kbd>
			<Kbd class='px-2 py-1.5'>Enter</Kbd>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="kbd-inside-text" title="KBD inside text" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-items gap-2">
			<p class="text-gray-500 dark:text-gray-400">
				Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
			</p>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="kbd-inside-table" title="KBD inside table" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Table>
				<Thead>
					<Th>Key</Th>

					<Th>Description</Th>
				</Thead>

				<Tbody class="divide-y">
					<Tr>
						<Td>
							<Kbd class='px-2 py-1.5'>Shift</Kbd> or <Kbd class='px-2 py-1.5'>Tab</Kbd>
						</Td>

						<Td>Navigate to interactive elements</Td>
					</Tr>

					<Tr>
						<Td>
							<Kbd class='px-2 py-1.5'>Enter</Kbd> or <Kbd class='px-4 py-1.5'>Space bar</Kbd>
						</Td>
						<Td>Ensure elements with ARIA role="button" can be activated with both key commands.</Td>
					</Tr>

					<Tr>
						<Td>
							<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
								<Icon name="caret-up" type="fa-solid" />
							</Kbd>

							<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
								<Icon name="caret-down" type="fa-solid" />
							</Kbd> or 

							<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
								<Icon name="caret-left" type="fa-solid" />
							</Kbd>

							<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
								<Icon name="caret-right" type="fa-solid" />
							</Kbd>
						</Td>

						<Td>Choose and activate previous/next tab.</Td>
					</Tr>
				</Tbody>
			</Table>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="arrow-keys" title="Arrow keys" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
				<Icon name="caret-up" type="fa-solid" />
			</Kbd>

			<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
				<Icon name="caret-down" type="fa-solid" />
			</Kbd>

			<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
				<Icon name="caret-left" type="fa-solid" />
			</Kbd>

			<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
				<Icon name="caret-right" type="fa-solid" />
			</Kbd>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="letter-keys" title="Letter keys" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Kbd class="px-2 py-1.5">Q</Kbd>
			<Kbd class="px-2 py-1.5">W</Kbd>
			<Kbd class="px-2 py-1.5">E</Kbd>
			<Kbd class="px-2 py-1.5">R</Kbd>
			<Kbd class="px-2 py-1.5">T</Kbd>
			<Kbd class="px-2 py-1.5">Y</Kbd>
			<Kbd class="px-2 py-1.5">U</Kbd>
			<Kbd class="px-2 py-1.5">I</Kbd>
			<Kbd class="px-2 py-1.5">O</Kbd>
			<Kbd class="px-2 py-1.5">P</Kbd>
			<Kbd class="px-2 py-1.5">A</Kbd>
			<Kbd class="px-2 py-1.5">S</Kbd>
			<Kbd class="px-2 py-1.5">D</Kbd>
			<Kbd class="px-2 py-1.5">F</Kbd>
			<Kbd class="px-2 py-1.5">G</Kbd>
			<Kbd class="px-2 py-1.5">H</Kbd>
			<Kbd class="px-2 py-1.5">J</Kbd>
			<Kbd class="px-2 py-1.5">K</Kbd>
			<Kbd class="px-2 py-1.5">L</Kbd>
			<Kbd class="px-2 py-1.5">Z</Kbd>
			<Kbd class="px-2 py-1.5">X</Kbd>
			<Kbd class="px-2 py-1.5">C</Kbd>
			<Kbd class="px-2 py-1.5">V</Kbd>
			<Kbd class="px-2 py-1.5">B</Kbd>
			<Kbd class="px-2 py-1.5">N</Kbd>
			<Kbd class="px-2 py-1.5">M</Kbd>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="number-keys" title="Number keys" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Kbd class="px-2 py-1.5">1</Kbd>
			<Kbd class="px-2 py-1.5">2</Kbd>
			<Kbd class="px-2 py-1.5">3</Kbd>
			<Kbd class="px-2 py-1.5">4</Kbd>
			<Kbd class="px-2 py-1.5">5</Kbd>
			<Kbd class="px-2 py-1.5">6</Kbd>
			<Kbd class="px-2 py-1.5">7</Kbd>
			<Kbd class="px-2 py-1.5">8</Kbd>
			<Kbd class="px-2 py-1.5">9</Kbd>
			<Kbd class="px-2 py-1.5">0</Kbd>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="function-keys" title="Function keys" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-items gap-2">
			<Kbd class="px-2 py-1.5">F1</Kbd>
			<Kbd class="px-2 py-1.5">F2</Kbd>
			<Kbd class="px-2 py-1.5">F3</Kbd>
			<Kbd class="px-2 py-1.5">F4</Kbd>
			<Kbd class="px-2 py-1.5">F5</Kbd>
			<Kbd class="px-2 py-1.5">F6</Kbd>
			<Kbd class="px-2 py-1.5">F7</Kbd>
			<Kbd class="px-2 py-1.5">F8</Kbd>
			<Kbd class="px-2 py-1.5">F9</Kbd>
			<Kbd class="px-2 py-1.5">F10</Kbd>
			<Kbd class="px-2 py-1.5">F11</Kbd>
			<Kbd class="px-2 py-1.5">F12</Kbd>
		</div>
	</DocSection>
</div>