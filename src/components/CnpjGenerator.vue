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
    <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
            <h2 class="card-title text-primary">Gerador de CNPJ</h2>

            <div class="flex flex-col gap-4">
                <div class="text-3xl font-mono font-bold text-center py-4 bg-base-200 rounded-lg">
                    {{ cnpj }}
                </div>

                <div class="flex flex-wrap gap-2 justify-center">
                    <button @click="generateCnpj" class="btn btn-primary">
                        Gerar Novo CNPJ
                    </button>
                    <button @click="copyCnpj" class="btn btn-outline" :class="{ 'btn-success': copied }">
                        {{ copied ? 'Copiado!' : 'Copiar CNPJ' }}
                    </button>
                </div>

                <div class="alert alert-info py-2">
                    <span class="text-xs">Uso exclusivo para testes de desenvolvimento. Não utilize estes dados em
                        sistemas reais.</span>
                </div>
            </div>
        </div>
    </div>
</template>
