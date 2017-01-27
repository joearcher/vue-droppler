<template>
<span>
        <span ref="dropTrigger">
            <slot name="drop-trigger"></slot>
        </span>
<div ref="dropContent" class="">
    <slot name="drop-content"></slot>
</div>
</span>
</template>

<script>
const Drop = require('tether-drop');

export default {

    props: [
        'position',
        'open',
        'classes',
        'constrainToWindow',
        'constrainToScrollParent',
        'hoverOpenDelay',
        'hoverCloseDelay',
        'focusDelay',
        'blurDelay',
        'tetherOptions'

    ],

    data() {
        return {
            drop: null
        }
    },

    mounted() {

        this.drop = new Drop({
            target: this.$refs.dropTrigger,
            content: this.$refs.dropContent,
            position: this.position ? this.position : 'bottom left',
            openOn: this.open ? this.open : 'click',
            classes: this.classes ? this.classes : 'drop-theme-basic',
            constrainToWindow: this.constrainToWindow ? this.constrainToWindow : true,
            constrainToScrollParent: this.constrainToScrollParent ? this.constrainToScrollParent : true,
            hoverOpenDelay: this.hoverOpenDelay ? this.hoverOpenDelay : 0,
            hoverCloseDelay: this.hoverOpenDelay ? this.hoverCloseDelay : 50,
            focusDelay: this.focusDelay ? this.focusDelay : 0,
            blurDelay: this.blurDelay ? this.blurDelay : 50,
            tetherOptions: this.tetherOptions ? this.tetherOptions : {}
        });
    }
}
</script>
