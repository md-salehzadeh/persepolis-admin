<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Textarea from '$components/Forms/Textarea.svelte';
	import Label from '$components/Forms/Label.svelte';
	import Toolbar from '$components/Toolbars/Index.svelte';
	import ToolbarGroup from '$components/Toolbars/ToolbarGroup.svelte';
	import ToolbarButton from '$components/Toolbars/ToolbarButton.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import Alert from '$components/Alerts/Index.svelte';

	let codeBlocks = [
`
<Label for="textarea-id" class="mb-2">Your message</Label>

<Textarea id="textarea-id" placeholder="Your message" rows="4" name="message"/>
`,

`
<form>
	<label for="editor" class="sr-only">Publish post</label>

	<Textarea id="editor" rows="8" class="mb-4" placeholder="Write a comment">
		<Toolbar slot="header" embedded>
			<ToolbarGroup>
				<ToolbarButton name="Attach file">
					<Icon name="paperclip" size="lg" />
				</ToolbarButton>
				
				<ToolbarButton name="Embed map">
					<Icon name="location-dot" size="lg" />
				</ToolbarButton>
				
				<ToolbarButton name="Upload image">
					<Icon name="image" size="lg" />
				</ToolbarButton>
			</ToolbarGroup>

			<ToolbarGroup>
				<ToolbarButton name="Format code">
					<Icon name="code" size="lg" />
				</ToolbarButton>

				<ToolbarButton name="Add emoji">
					<Icon name="face-smile" size="lg" />
				</ToolbarButton>
			</ToolbarGroup>

			<ToolbarButton name="send" slot="end">
				<Icon name="paper-plane-top" size="lg" />
			</ToolbarButton>
		</Toolbar>
	</Textarea>

	<Button>Publish post</Button>
</form>
`,

`
<form>
	<Textarea class="mb-4" placeholder="Write a comment">
		<div slot="footer" class="flex items-center justify-between">
			<Button type="submit">Post comment</Button>

			<Toolbar embedded>
				<ToolbarButton name="Attach file">
					<Icon name="paperclip" size="lg" />
				</ToolbarButton>

				<ToolbarButton name="Set location">
					<Icon name="location-dot" size="lg" />
				</ToolbarButton>

				<ToolbarButton name="Upload image">
					<Icon name="image" size="lg" />
				</ToolbarButton>
			</Toolbar>
		</div>
	</Textarea>
</form>

<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
`,

`
<div class="flex flex-wrap items-center gap-2 p-4 bg-gray-50 rounded-lg">
	<form class="w-full">
		<label for="chat" class="sr-only">Your message</label>

		<div class="flex items-center">
			<ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
				<Icon name="image" size="lg" />

				<span class="sr-only">Upload image</span>
			</ToolbarButton>

			<ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
				<Icon name="face-smile" size="lg" />

				<span class="sr-only">Add emoji</span>
			</ToolbarButton>

			<Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..." background/>

			<ToolbarButton type="submit" color="blue" class="rounded-full text-blue-600 dark:text-blue-500">
				<Icon name="paper-plane-top" size="lg" />

				<span class="sr-only">Send message</span>
			</ToolbarButton>
		</div>
	</form>
</div>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="textarea-example" title="Textarea example" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-col">
			<Label for="textarea-id" class="mb-2">Your message</Label>

			<Textarea id="textarea-id" placeholder="Your message" rows="4" name="message"/>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="wysiwyg-editor" title="WYSIWYG Editor" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-col">
			<form>
				<label for="editor" class="sr-only">Publish post</label>

				<Textarea id="editor" rows="8" class="mb-4" placeholder="Write a comment">
					<Toolbar slot="header" embedded>
						<ToolbarGroup>
							<ToolbarButton name="Attach file">
								<Icon name="paperclip" size="lg" />
							</ToolbarButton>
							
							<ToolbarButton name="Embed map">
								<Icon name="location-dot" size="lg" />
							</ToolbarButton>
							
							<ToolbarButton name="Upload image">
								<Icon name="image" size="lg" />
							</ToolbarButton>
						</ToolbarGroup>

						<ToolbarGroup>
							<ToolbarButton name="Format code">
								<Icon name="code" size="lg" />
							</ToolbarButton>

							<ToolbarButton name="Add emoji">
								<Icon name="face-smile" size="lg" />
							</ToolbarButton>
						</ToolbarGroup>

						<ToolbarButton name="send" slot="end">
							<Icon name="paper-plane-top" size="lg" />
						</ToolbarButton>
					</Toolbar>
				</Textarea>

				<Button>Publish post</Button>
			</form>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="comment-box" title="Comment box" code={codeBlocks[2]}>
		<div slot="preview">
			<form>
				<Textarea class="mb-4" placeholder="Write a comment">
					<div slot="footer" class="flex items-center justify-between">
						<Button type="submit">Post comment</Button>

						<Toolbar embedded>
							<ToolbarButton name="Attach file">
								<Icon name="paperclip" size="lg" />
							</ToolbarButton>

							<ToolbarButton name="Set location">
								<Icon name="location-dot" size="lg" />
							</ToolbarButton>

							<ToolbarButton name="Upload image">
								<Icon name="image" size="lg" />
							</ToolbarButton>
						</Toolbar>
					</div>
				</Textarea>
			</form>

			<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="chatroom-input" title="Chatroom input" code={codeBlocks[3]}>
		<div slot="preview">
			<div class="flex flex-wrap items-center gap-2 p-4 bg-gray-50 rounded-lg">
				<form class="w-full">
					<label for="chat" class="sr-only">Your message</label>

					<div class="flex items-center">
						<ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
							<Icon name="image" size="lg" />

							<span class="sr-only">Upload image</span>
						</ToolbarButton>

						<ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
							<Icon name="face-smile" size="lg" />

							<span class="sr-only">Add emoji</span>
						</ToolbarButton>

						<Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..." background/>

						<ToolbarButton type="submit" color="blue" class="rounded-full text-blue-600 dark:text-blue-500">
							<Icon name="paper-plane-top" size="lg" />

							<span class="sr-only">Send message</span>
						</ToolbarButton>
					</div>
				</form>
			</div>
		</div>
	</DocSection>
</div>