<template>
	<div>
		<h5>
			프로젝트 목록
		</h5>
		<ul>
			<li
				v-for="item in list"
				:key="item.id"
			>
				<router-link :to="item.id">
					{{ item.title }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const list = [
	{
		id: '/project/himke',
		title: '힘캐',
	},
	{
		id: '/project/logifestival',
		title: '로지페스티벌',
	},
];
</script>
