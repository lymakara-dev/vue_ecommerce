<template>
    <Manu/>
    <SuccessPage/>
</template>
<script>
import Manu from '@/components/cart/Manu.vue';
import SuccessPage from '@/components/cart/SuccessPage.vue';

export default {
    name:"Success",
    components: {
        Manu,
        SuccessPage ,
    },
};
</script>