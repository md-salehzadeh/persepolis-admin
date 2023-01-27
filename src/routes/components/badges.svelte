<script>
	import DocSection from '$components/Docs/Section.svelte';
	import Badge from '$components/Badges/Index.svelte';
	import Button from '$components/Buttons/Index.svelte';
	import Icon from '$components/Icons/Index.svelte';

	let codeBlocks = [
`
<Badge>Default</Badge>
<Badge color="dark">Dark</Badge>
<Badge color="danger">danger</Badge>
<Badge color="success">success</Badge>
<Badge color="warning">warning</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
`,

`
<Badge large>Default</Badge>
<Badge large color="dark">Dark</Badge>
<Badge large color="danger">danger</Badge>
<Badge large color="success">success</Badge>
<Badge large color="warning">warning</Badge>
<Badge large color="indigo">Indigo</Badge>
<Badge large color="purple">Purple</Badge>
<Badge large color="pink">Pink</Badge>
`,

`
<Badge border>Default</Badge>
<Badge border color="dark">Dark</Badge>
<Badge border color="danger">danger</Badge>
<Badge border color="success">success</Badge>
<Badge border color="warning">warning</Badge>
<Badge border color="indigo">Indigo</Badge>
<Badge border color="purple">Purple</Badge>
<Badge border color="pink">Pink</Badge>
`,

`
<Badge rounded>Default</Badge>
<Badge rounded color="dark">Dark</Badge>
<Badge rounded color="danger">danger</Badge>
<Badge rounded color="success">success</Badge>
<Badge rounded color="warning">warning</Badge>
<Badge rounded color="indigo">Indigo</Badge>
<Badge rounded color="purple">Purple</Badge>
<Badge rounded color="pink">Pink</Badge>
`,

`
<Badge href="/">Badge link</Badge>
<Badge href="/" large>Badge link</Badge>
<Badge href="/" border>Badge link</Badge>
<Badge href="/" rounded>Badge link</Badge>
`,

`
<Badge color="dark" border>
	<Icon type="fa-solid" name="clock" class="mr-1" />
	3 days ago
</Badge>

<Badge border>
	<Icon type="fa-solid" name="clock" class="mr-1" />
	2 minutes ago
</Badge>
`,

`
<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!primary">20</Badge>
</Button>

<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!dark">20</Badge>
</Button>

<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!danger">20</Badge>
</Button>

<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!success">20</Badge>
</Button>

<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!warning">20</Badge>
</Button>

<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!indigo">20</Badge>
</Button>

<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!purple">20</Badge>
</Button>

<Button class="relative" size='sm'>
	<Icon type="fa-regular" name="envelope" size="2x" />
	<Badge rounded index color="!pink">20</Badge>
</Button>
`,

`
<Button>
	Messages
	<Badge rounded class="w-4 h-4 ml-2 !p-0 !font-semibold text-primary-800 bg-primary-200 dark:text-primary-800 dark:bg-primary-200">
		2
	</Badge>
</Button>
`,

`
<Badge color="dark" rounded large class="!p-1 !font-semibold">
	<Icon type="fa-regular" name="check" />
</Badge>

<Badge rounded large class="!p-1 !font-semibold">
	<Icon type="fa-regular" name="check" />
</Badge>

<Badge color="dark" rounded large class="!p-1.5 !font-semibold">
	<Icon type="fa-regular" name="check" class="w-3.5 h-3.5" />
</Badge>

<Badge rounded large class="!p-1.5 !font-semibold">
	<Icon type="fa-regular" name="check" class="w-3.5 h-3.5" />
</Badge>
`,

`
<Badge dismissable large>Default</Badge>
<Badge dismissable large color="dark">Dark</Badge>
<Badge dismissable large color="danger">danger</Badge>
<Badge dismissable large color="success">success</Badge>
<Badge dismissable large color="warning">warning</Badge>
<Badge dismissable large color="indigo">Indigo</Badge>
<Badge dismissable large color="purple">Purple</Badge>
<Badge dismissable large color="pink">Pink</Badge>
`,
	];
</script>

<div class="pl-5 pr-5">
	<DocSection class="mb-10" id="default-badge" title="Default badge" code={codeBlocks[0]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge>Default</Badge>
			<Badge color="dark">Dark</Badge>
			<Badge color="danger">danger</Badge>
			<Badge color="success">success</Badge>
			<Badge color="warning">warning</Badge>
			<Badge color="indigo">Indigo</Badge>
			<Badge color="purple">Purple</Badge>
			<Badge color="pink">Pink</Badge>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="large-badges" title="Large badges" code={codeBlocks[1]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge large>Default</Badge>
			<Badge large color="dark">Dark</Badge>
			<Badge large color="danger">danger</Badge>
			<Badge large color="success">success</Badge>
			<Badge large color="warning">warning</Badge>
			<Badge large color="indigo">Indigo</Badge>
			<Badge large color="purple">Purple</Badge>
			<Badge large color="pink">Pink</Badge>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="bordedanger-badge" title="Bordedanger badge" code={codeBlocks[2]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge border>Default</Badge>
			<Badge border color="dark">Dark</Badge>
			<Badge border color="danger">danger</Badge>
			<Badge border color="success">success</Badge>
			<Badge border color="warning">warning</Badge>
			<Badge border color="indigo">Indigo</Badge>
			<Badge border color="purple">Purple</Badge>
			<Badge border color="pink">Pink</Badge>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="pills-badge" title="Pills badge" code={codeBlocks[3]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge rounded>Default</Badge>
			<Badge rounded color="dark">Dark</Badge>
			<Badge rounded color="danger">danger</Badge>
			<Badge rounded color="success">success</Badge>
			<Badge rounded color="warning">warning</Badge>
			<Badge rounded color="indigo">Indigo</Badge>
			<Badge rounded color="purple">Purple</Badge>
			<Badge rounded color="pink">Pink</Badge>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="badges-as-links" title="Badges as links" code={codeBlocks[4]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge href="/">Badge link</Badge>
			<Badge href="/" large>Badge link</Badge>
			<Badge href="/" border>Badge link</Badge>
			<Badge href="/" rounded>Badge link</Badge>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="badges-with-icon" title="Badges with icon" code={codeBlocks[5]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge color="dark" border>
				<Icon type="fa-solid" name="clock" class="mr-1" />
				3 days ago
			</Badge>

			<Badge border>
				<Icon type="fa-solid" name="clock" class="mr-1" />
				2 minutes ago
			</Badge>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="notification-badge" title="Notification badge" code={codeBlocks[6]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!primary">20</Badge>
			</Button>

			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!dark">20</Badge>
			</Button>

			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!danger">20</Badge>
			</Button>

			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!success">20</Badge>
			</Button>

			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!warning">20</Badge>
			</Button>

			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!indigo">20</Badge>
			</Button>

			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!purple">20</Badge>
			</Button>

			<Button class="relative" size='sm'>
				<Icon type="fa-regular" name="envelope" size="2x" />
				<Badge rounded index color="!pink">20</Badge>
			</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="button-with-badge" title="Button with badge" code={codeBlocks[7]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Button>
				Messages
				<Badge rounded class="w-4 h-4 ml-2 !p-0 !font-semibold text-primary-800 bg-primary-200 dark:text-primary-800 dark:bg-primary-200">
					2
				</Badge>
			</Button>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="badge-with-icon-only" title="Badge with icon only" code={codeBlocks[8]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge color="dark" rounded large class="!p-1 !font-semibold">
				<Icon type="fa-regular" name="check" />
			</Badge>

			<Badge rounded large class="!p-1 !font-semibold">
				<Icon type="fa-regular" name="check" />
			</Badge>

			<Badge color="dark" rounded large class="!p-1.5 !font-semibold">
				<Icon type="fa-regular" name="check" class="w-3.5 h-3.5" />
			</Badge>

			<Badge rounded large class="!p-1.5 !font-semibold">
				<Icon type="fa-regular" name="check" class="w-3.5 h-3.5" />
			</Badge>
		</div>
	</DocSection>

	<DocSection class="mb-10" id="dismissable-badges" title="Dismissable badges" code={codeBlocks[9]}>
		<div slot="preview" class="flex flex-wrap items-center gap-2">
			<Badge dismissable large>Default</Badge>
			<Badge dismissable large color="dark">Dark</Badge>
			<Badge dismissable large color="danger">danger</Badge>
			<Badge dismissable large color="success">success</Badge>
			<Badge dismissable large color="warning">warning</Badge>
			<Badge dismissable large color="indigo">Indigo</Badge>
			<Badge dismissable large color="purple">Purple</Badge>
			<Badge dismissable large color="pink">Pink</Badge>
		</div>
	</DocSection>
</div>
