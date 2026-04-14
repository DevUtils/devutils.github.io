<script setup lang="ts">
import { ref, onMounted } from 'vue'

const ip = ref('')
const loading = ref(true)
const error = ref(false)

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

onMounted(() => {
    fetchIp()
})
</script>

<template>
    <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
            <h2 class="card-title text-primary">Meu IP Público</h2>
            <div v-if="loading" class="flex items-center gap-2">
                <span class="loading loading-spinner loading-md text-primary"></span>
                <p>Detectando IP...</p>
            </div>
            <div v-else-if="error" class="alert alert-error">
                <span>Erro ao detectar IP. Por favor, tente novamente mais tarde.</span>
                <button class="btn btn-sm btn-ghost" @click="fetchIp">Tentar novamente</button>
            </div>
            <div v-else class="flex flex-col gap-4">
                <div class="text-3xl font-mono font-bold text-center py-4 bg-base-200 rounded-lg">
                    {{ ip }}
                </div>
                <div class="text-xs text-base-content/60 italic">
                    Este componente utiliza a API pública do
                    <a href="https://www.ipify.org" target="_blank" class="link link-primary">ipify.org</a>
                    para detectar seu endereço IP atual.
                </div>
            </div>
        </div>
    </div>
</template>
