<template>
	<div class="h-full w-full flex items-start justify-start bg-gray-50">
		<div class="flex items-start justify-start h-full">
			<div class="flex flex-col justify-between w-full h-full">
				<div>
					<h1 class="text-[80px] pl-20 pt-20 font-black text-left">
						{{ title }}
					</h1>
					<h5
						class="
							text-[40px]
							pb-10
							px-20
							font-bold
							mb-0
							text-gray-600
						"
					>
						{{ description }}
					</h5>
				</div>

				<p class="text-2xl pb-10 px-20 font-bold mb-0">
					boomin.pages.dev
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
	title: string;
	description: string;
}>(), {
	title: 'title',
	description: 'description',
});
</script>
