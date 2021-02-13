<template>
    <div
        v-if="show"
        :class="statusClass"
        class="toast"
    >
        <button @click="destroy()" class="btn btn-clear float-right"></button>
        {{ message }}
    </div>
</template>

<script>

export default {
    name: 'Toast',
    data: function () {
        return {
            show: true
        }
    },
    props: {
        status: String,
        message: String
    },
    computed: {
        statusClass: function () {
            // primary, success, warning or error
            return 'toast-'.concat(this.status)
        }
    },
    methods: {
        destroy: function () {
            this.show = false;
        }
    }
}

</script>
