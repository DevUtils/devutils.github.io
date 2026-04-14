<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { generate, format } from '@fnando/cpf'

const cpf = ref('')
const copied = ref(false)

/**
 * Generate a new valid CPF
 */
const generateCpf = () => {
    cpf.value = format(generate())
}

/**
 * Handle copy to clipboard with visual feedback
 */
const copyCpf = async () => {
    if (!cpf.value) return
    try {
        await navigator.clipboard.writeText(cpf.value)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy CPF:', err)
    }
}

onMounted(() => {
    generateCpf()
})
</script>

<template>
    <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
            <h2 class="card-title text-primary">Gerador de CPF</h2>

            <div class="flex flex-col gap-4">
                <div class="text-3xl font-mono font-bold text-center py-4 bg-base-200 rounded-lg">
                    {{ cpf }}
                </div>

                <div class="flex flex-wrap gap-2 justify-center">
                    <button @click="generateCpf" class="btn btn-primary">
                        Gerar Novo CPF
                    </button>
                    <button @click="copyCpf" class="btn btn-outline" :class="{ 'btn-success': copied }">
                        {{ copied ? 'Copiado!' : 'Copiar CPF' }}
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
