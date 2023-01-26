<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Toast from '$components/Toasts/Index.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';
	import Avatar from '$components/Avatars/Index.svelte';

	import { slide } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	import { blur } from 'svelte/transition';
	import { fly } from 'svelte/transition';

	let show = true;
	let counter = 6;

	function trigger() {
		show = true;
		counter = 6;
		timeout();
	}

	function timeout() {
		if (--counter > 0)
		return setTimeout(timeout, 1000);
		show = false;
	}

	let codeBlocks = [
`
<Toast>
	<svelte:fragment slot="icon">
		<Icon type="fa-solid" name="fire" />
	</svelte:fragment>

	Dismissable user notification.
</Toast>
`,

`
<Toast simple={true}>
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="envelope" />
	</svelte:fragment>

	New message arrived.
</Toast>
`,

`
<Toast color="green" class="mb-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="check" />
		<span class="sr-only">Check icon</span>
	</svelte:fragment>

	Item moved successfully.
</Toast>

<Toast color="red" class="mb-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="xmark" />
		<span class="sr-only">Error icon</span>
	</svelte:fragment>

	Color set to green.
</Toast>

<Toast color="pink">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="triangle-exclamation" />
		<span class="sr-only">Warning icon</span>
	</svelte:fragment>

	Improve password difficulty.
</Toast>
`,

`
<Toast class="mb-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="bucket" />
	</svelte:fragment>

	Default color is blue.
</Toast>

<Toast color="green" class="mb-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="bucket" />
	</svelte:fragment>

	Color set to green.
</Toast>

<Toast  color="" class="mb-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="bucket" />
	</svelte:fragment>

	No color set.
</Toast>

<Toast>
	No icon at all.
</Toast>
`,

`
<script>
	import { slide } from 'svelte/transition';
  
	let show = true;
	let counter = 6;

	function trigger() {
		show = true;
		counter = 6;
		timeout();
	}

	function timeout() {
		if (--counter > 0)
		return setTimeout(timeout, 1000);
		show = false;
	}	
<\/script>

<div class="flex gap-10">
	<Button on:click={trigger} class="my-3">Restart</Button>

	<Toast simple transition={slide} bind:open={show}>
		<svelte:fragment slot="icon">
			<Icon type="fa-regular" name="circle-check" />
		</svelte:fragment>

		Autohide in {counter}s.
	</Toast>
</div>
`,

`
<script>
	import { slide } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';	
<\/script>

<Toast transition={slide} class="my-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="circle-check" />
	</svelte:fragment>

	Transition type: slide
</Toast>

<Toast transition={slide} params="{{delay: 250, duration: 300, easing: quintOut}}" class="my-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="circle-check" />
	</svelte:fragment>

	Transition type: slide, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast transition={slide} params="{{delay: 250, duration: 2000, easing: elasticOut}}">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="circle-check" />
	</svelte:fragment>

	Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
</Toast>
`,

`
<script>
	import { blur } from 'svelte/transition';	
<\/script>

<Toast transition={blur} color='purple' params="{{amount: 10}}" class="my-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="circle-plus" />
	</svelte:fragment>

	Transition type: blur, amount: 10
</Toast>

<Toast transition={blur} color='purple' params="{{amount: 50, delay: 1000}}">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="circle-plus" />
	</svelte:fragment>

	Transition type: blur, amount: 50, delay 1000
</Toast>
`,

`
<script>
	import { fly } from 'svelte/transition';
<\/script>

<Toast transition={fly} params="{{x: 200}}" color="green" class="mb-2">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="bucket" />
	</svelte:fragment>

	Transition type: fly right
</Toast>

<Toast transition={fly} params="{{y: 200}}" color="green">
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="bucket" />
	</svelte:fragment>

	Transition type: fly down
</Toast>
`,

`
<Toast>
	<div class="inline-flex justify-between items-center w-full">
		Conversation archived.
		<a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
	</div>
</Toast>
`,

`
<Toast>
	<div class="flex" slot="extra">
		<Avatar rounded src='https://i.pravatar.cc/300' />

		<div class="ml-3 text-sm font-normal">
			<span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
			<div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
			<Button size="xs">Replay</Button>
		</div>
	</div>
</Toast>
`,

`
<Toast>
	<span class="font-semibold text-gray-900 dark:text-white">New notification</span>

	<div class="flex items-center mt-3" slot="extra">
		<Avatar rounded src='https://i.pravatar.cc/300'/>

		<div class="ml-3">
			<h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
			<div class="text-sm font-normal">commmented on your photo</div>
			<span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
		</div>
	</div>
</Toast>
`,

`
<Toast>
	<svelte:fragment slot="icon">
		<Icon type="fa-regular" name="retweet" />
	</svelte:fragment>

	<span class="font-semibold text-gray-900 dark:text-white">Update available</span>

	<div class="mt-3" slot="extra">
		<div class="mb-2 text-sm font-normal">A new software version is available for download.</div>

		<div class="grid grid-cols-2 gap-2">
			<Button size="xs" class="w-full">Update</Button>

			<Button size="xs" class="w-full" color="dark">Not now</Button>
		</div>
	</div>
</Toast>
`,

`
<div class="relative h-56">
	<Toast simple position="top-left">Top left positioning.</Toast>
	<Toast simple position="top-right">Top right positioning.</Toast>
	<Toast simple position="bottom-left">Bottom left positioning.</Toast>
	<Toast simple position="bottom-right">Bottom right positioning.</Toast>
</div>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-toast" title="Default toast" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Toast>
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="fire" />
				</svelte:fragment>

				Dismissable user notification.
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="simple-toast" title="Simple toast" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Toast simple={true}>
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="envelope" />
				</svelte:fragment>

				New message arrived.
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="colors" title="Colors" code={codeBlocks[2]}>
		<div slot="preview">
			<Toast color="green" class="mb-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="check" />
					<span class="sr-only">Check icon</span>
				</svelte:fragment>

				Item moved successfully.
			</Toast>

			<Toast color="red" class="mb-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="xmark" />
					<span class="sr-only">Error icon</span>
				</svelte:fragment>

				Color set to green.
			</Toast>

			<Toast color="pink">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="triangle-exclamation" />
					<span class="sr-only">Warning icon</span>
				</svelte:fragment>

				Improve password difficulty.
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="icons" title="Icons" code={codeBlocks[3]}>
		<div slot="preview">
			<Toast class="mb-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="bucket" />
				</svelte:fragment>

				Default color is blue.
			</Toast>

			<Toast color="green" class="mb-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="bucket" />
				</svelte:fragment>

				Color set to green.
			</Toast>

			<Toast  color="" class="mb-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="bucket" />
				</svelte:fragment>

				No color set.
			</Toast>

			<Toast>
				No icon at all.
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="autohide-example" title="Autohide example" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<div class="flex gap-10">
				<Button on:click={trigger} class="my-3">Restart</Button>

				<Toast simple transition={slide} bind:open={show}>
					<svelte:fragment slot="icon">
						<Icon type="fa-regular" name="circle-check" />
					</svelte:fragment>

					Autohide in {counter}s.
				</Toast>
			</div>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="transitions" title="Transitions" code={codeBlocks[5]}>
		<div slot="preview">
			<Toast transition={slide} class="my-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="circle-check" />
				</svelte:fragment>

				Transition type: slide
			</Toast>

			<Toast transition={slide} params="{{delay: 250, duration: 300, easing: quintOut}}" class="my-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="circle-check" />
				</svelte:fragment>

				Transition type: slide, delay: 250, duration: 300, easing: quintOut
			</Toast>

			<Toast transition={slide} params="{{delay: 250, duration: 2000, easing: elasticOut}}">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="circle-check" />
				</svelte:fragment>

				Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="blur-examples" title="Blur examples" code={codeBlocks[6]}>
		<div slot="preview">
			<Toast transition={blur} color='purple' params="{{amount: 10}}" class="my-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="circle-plus" />
				</svelte:fragment>

				Transition type: blur, amount: 10
			</Toast>

			<Toast transition={blur} color='purple' params="{{amount: 50, delay: 1000}}">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="circle-plus" />
				</svelte:fragment>

				Transition type: blur, amount: 50, delay 1000
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="fly-examples" title="Fly examples" code={codeBlocks[7]}>
		<div slot="preview">
			<Toast transition={fly} params="{{x: 200}}" color="green" class="mb-2">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="bucket" />
				</svelte:fragment>

				Transition type: fly right
			</Toast>

			<Toast transition={fly} params="{{y: 200}}" color="green">
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="bucket" />
				</svelte:fragment>

				Transition type: fly down
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="undo-button" title="Undo button" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Toast>
				<div class="inline-flex justify-between items-center w-full">
					Conversation archived.
					<a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
				</div>
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="extra-content " title="Extra content " code={codeBlocks[9]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Toast>
				<div class="flex" slot="extra">
					<Avatar rounded src='https://i.pravatar.cc/300' />

					<div class="ml-3 text-sm font-normal">
						<span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
						<div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
						<Button size="xs">Replay</Button>
					</div>
				</div>
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="push-notification" title="Push notification" code={codeBlocks[10]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Toast>
				<span class="font-semibold text-gray-900 dark:text-white">New notification</span>

				<div class="flex items-center mt-3" slot="extra">
					<Avatar rounded src='https://i.pravatar.cc/300'/>

					<div class="ml-3">
						<h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
						<div class="text-sm font-normal">commmented on your photo</div>
						<span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
					</div>
				</div>
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="interactive-toast" title="Interactive toast" code={codeBlocks[11]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Toast>
				<svelte:fragment slot="icon">
					<Icon type="fa-regular" name="retweet" />
				</svelte:fragment>

				<span class="font-semibold text-gray-900 dark:text-white">Update available</span>

				<div class="mt-3" slot="extra">
					<div class="mb-2 text-sm font-normal">A new software version is available for download.</div>

					<div class="grid grid-cols-2 gap-2">
						<Button size="xs" class="w-full">Update</Button>

						<Button size="xs" class="w-full" color="dark">Not now</Button>
					</div>
				</div>
			</Toast>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="positioning" title="Positioning" code={codeBlocks[11]}>
		<div slot="preview">
			<div class="relative h-56">
				<Toast simple position="top-left">Top left positioning.</Toast>
				<Toast simple position="top-right">Top right positioning.</Toast>
				<Toast simple position="bottom-left">Bottom left positioning.</Toast>
				<Toast simple position="bottom-right">Bottom right positioning.</Toast>
			</div>
		</div>
	</DocSection>
</div>
