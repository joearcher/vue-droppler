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
        'openOn',
        'classes',
        'constrainToWindow',
        'constrainToScrollParent',
        'hoverOpenDelay',
        'hoverCloseDelay',
        'focusDelay',
        'blurDelay',
        'tetherOptions',
        'remove'
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
            openOn: this.openOn ? this.openOn : 'click',
            classes: this.classes ? this.classes : 'drop-theme-basic',
            constrainToWindow: this.constrainToWindow ? true : false,
            constrainToScrollParent: this.constrainToScrollParent ? true : false,
            hoverOpenDelay: this.hoverOpenDelay ? this.hoverOpenDelay : 0,
            hoverCloseDelay: this.hoverCloseDelay ? this.hoverCloseDelay : 50,
            focusDelay: this.focusDelay ? this.focusDelay : 0,
            blurDelay: this.blurDelay ? this.blurDelay : 50,
            tetherOptions: this.tetherOptions ? this.tetherOptions : {},
            remove: this.remove ? true : false,
        });
    }
}
</script>
