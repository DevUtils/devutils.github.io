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
    <div class="tool-card p-6 sm:p-7">
        <div class="flex items-center gap-3 mb-5">
            <span
                class="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary border border-primary/15">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </span>
            <div>
                <h2 class="font-semibold leading-tight">Gerador de Hash MD5</h2>
                <p class="text-xs text-base-content/50">Em tempo real, enquanto você digita</p>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between text-xs text-base-content/50">
                <span>Texto de entrada</span>
                <span class="font-mono" :class="{ 'text-warning': input.length === MAX_LENGTH }">{{ input.length }}/{{
                    MAX_LENGTH }}</span>
            </div>
            <textarea v-model="input" :maxlength="MAX_LENGTH" rows="3"
                class="w-full resize-y rounded-lg border border-base-300 bg-base-200 px-3.5 py-2.5 text-sm placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none transition"
                placeholder="Ex: Minha mensagem secreta"></textarea>
        </div>

        <div class="mt-5 flex flex-col gap-2">
            <span class="text-xs text-base-content/50">Hash MD5 (hexadecimal)</span>
            <div class="flex items-center gap-3 rounded-lg border border-base-300 bg-base-200 px-4 py-3">
                <span class="flex-1 truncate font-mono text-sm sm:text-base"
                    :class="md5Hash ? 'text-base-content' : 'text-base-content/30'">{{ md5Hash || 'O hash aparecerá aqui...' }}</span>
                <button @click="copyHash" :disabled="!md5Hash" :aria-label="copied ? 'Copiado' : 'Copiar hash'"
                    class="grid place-items-center h-9 w-9 shrink-0 rounded-md border transition disabled:opacity-40 disabled:cursor-not-allowed"
                    :class="copied ? 'border-success/40 text-success bg-success/10' : 'border-base-300 text-base-content/60 hover:text-primary hover:border-primary/40'">
                    <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
