<script setup lang="ts">
import { ref, computed } from 'vue'
import CryptoJS from 'crypto-js'

const input = ref('')
const copied = ref(false)
const MAX_LENGTH = 3000

/**
 * MD5 hash computed from input
 */
const md5Hash = computed(() => {
    if (!input.value) return ''
    return CryptoJS.MD5(input.value).toString()
})

/**
 * Handle copy to clipboard with visual feedback
 */
const copyHash = async () => {
    if (!md5Hash.value) return
    try {
        await navigator.clipboard.writeText(md5Hash.value)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy hash:', err)
    }
}
</script>

<template>
    <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
            <h2 class="card-title text-primary">Gerador MD5 Hash</h2>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Digite seu texto aqui (máximo 3000 caracteres)</span>
                    <span class="label-text-alt">{{ input.length }}/{{ MAX_LENGTH }}</span>
                </label>
                <textarea v-model="input" :maxlength="MAX_LENGTH" class="textarea textarea-bordered h-24 w-full"
                    placeholder="Ex: Minha mensagem secreta"></textarea>
            </div>

            <div class="form-control w-full mt-4">
                <label class="label">
                    <span class="label-text">Hash MD5 (Hexadecimal)</span>
                </label>
                <div class="flex gap-2">
                    <input type="text" readonly :value="md5Hash" placeholder="O hash aparecerá aqui..."
                        class="input input-bordered w-full font-mono bg-base-200" />
                    <button @click="copyHash" :disabled="!md5Hash" class="btn btn-primary"
                        :class="{ 'btn-success': copied }">
                        {{ copied ? 'Copiado!' : 'Copiar Hash' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
