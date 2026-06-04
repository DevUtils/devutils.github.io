<script setup lang="ts">
import { ref, onMounted } from 'vue'

const ip = ref('')
const loading = ref(true)
const error = ref(false)
const copied = ref(false)

/**
 * Fetch public IP from ipify API
 */
const fetchIp = async () => {
    loading.value = true
    error.value = false
    try {
        const response = await fetch('https://api.ipify.org?format=json')
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        ip.value = data.ip
    } catch (e) {
        console.error('Error fetching IP:', e)
        error.value = true
    } finally {
        loading.value = false
    }
}

/**
 * Handle copy to clipboard with visual feedback
 */
const copyIp = async () => {
    if (!ip.value) return
    try {
        await navigator.clipboard.writeText(ip.value)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy IP:', err)
    }
}

onMounted(() => {
    fetchIp()
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
                        d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
                </svg>
            </span>
            <div>
                <h2 class="font-semibold leading-tight">Meu IP Público</h2>
                <p class="text-xs text-base-content/50">Seu endereço de rede atual</p>
            </div>
        </div>

        <div v-if="loading" class="flex items-center gap-3 rounded-lg border border-base-300 bg-base-200 px-4 py-4">
            <span class="loading loading-spinner loading-sm text-primary"></span>
            <p class="text-sm text-base-content/60">Detectando IP...</p>
        </div>

        <div v-else-if="error"
            class="flex flex-col gap-3 rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-sm">
            <span class="text-error">Erro ao detectar IP. Verifique sua conexão e tente novamente.</span>
            <button class="self-start rounded-md border border-error/40 px-3 py-1.5 text-xs font-medium text-error hover:bg-error/10 transition"
                @click="fetchIp">Tentar novamente</button>
        </div>

        <div v-else class="flex flex-col gap-3">
            <div class="flex items-center gap-3 rounded-lg border border-base-300 bg-base-200 px-4 py-3">
                <span class="flex-1 font-mono text-2xl sm:text-3xl font-semibold tracking-tight animate-fade-in">{{ ip
                    }}</span>
                <button @click="copyIp" :aria-label="copied ? 'Copiado' : 'Copiar IP'"
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
            <p class="text-xs text-base-content/40">
                Detectado via API pública do
                <a href="https://www.ipify.org" target="_blank" rel="noopener"
                    class="text-base-content/60 hover:text-primary underline underline-offset-2 transition">ipify.org</a>.
            </p>
        </div>
    </div>
</template>
