<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generate, format } from '@fnando/cnpj'

const cnpj = ref('')
const copied = ref(false)

/**
 * Generate a new valid CNPJ
 */
const generateCnpj = () => {
    cnpj.value = format(generate(true))
}

/**
 * Handle copy to clipboard with visual feedback
 */
const copyCnpj = async () => {
    if (!cnpj.value) return
    try {
        await navigator.clipboard.writeText(cnpj.value)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy CNPJ:', err)
    }
}

onMounted(() => {
    generateCnpj()
})
</script>

<template>
    <div class="tool-card p-6 sm:p-7">
        <div class="flex items-center gap-3 mb-5">
            <span
                class="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary border border-primary/15">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m6-14h.01M9 11h.01M9 15h.01M13 7h.01M13 11h.01M13 15h.01" />
                </svg>
            </span>
            <div>
                <h2 class="font-semibold leading-tight">Gerador de CNPJ</h2>
                <p class="text-xs text-base-content/50">Inclui o padrão alfanumérico</p>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3 rounded-lg border border-base-300 bg-base-200 px-4 py-3">
                <span :key="cnpj"
                    class="flex-1 font-mono text-2xl sm:text-3xl font-semibold tracking-tight animate-fade-in">{{ cnpj
                    }}</span>
                <button @click="copyCnpj" :aria-label="copied ? 'Copiado' : 'Copiar CNPJ'"
                    class="grid place-items-center h-9 w-9 shrink-0 rounded-md border transition"
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

            <button @click="generateCnpj"
                class="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-base-300 bg-base-200 px-3.5 py-2 text-sm font-medium text-base-content/80 transition hover:border-primary/40 hover:text-primary active:translate-y-px">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Gerar novo CNPJ
            </button>

            <p class="text-xs text-base-content/40">
                Uso exclusivo para testes. Não utilize estes dados em sistemas reais.
            </p>
        </div>
    </div>
</template>
