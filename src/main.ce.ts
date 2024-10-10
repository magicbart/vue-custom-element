import { defineCustomElement } from 'vue'
import SimpleSampleComponent from '@/components/SimpleSample.ce.vue'

const SimpleSample = defineCustomElement(SimpleSampleComponent)

customElements.define('simple-sample', SimpleSample)
