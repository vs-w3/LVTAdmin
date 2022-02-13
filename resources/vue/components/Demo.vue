<template>
    <div>
        <h1>Demo Component</h1>
        <p>{{ DemoText }}</p>

        <button
            class="mb-4 px-4 py-2 rounded-md bg-indigo-600 text-white"
            @click="toggleDIV = !toggleDIV"
        >
            Toggle DIV
        </button>
        <div class="px-4 py-2 bg-indigo-500" v-show="toggleDIV">Div Text</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            DemoText: "Demo Text",
            toggleDIV: true,
        };
    },
};
</script>

<style></style>
