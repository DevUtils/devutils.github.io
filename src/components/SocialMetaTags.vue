<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

const form = reactive({
    title: '',
    description: '',
    image: '',
    type: 'website',
    url: '',
    keywords: ''
})

const copied = ref(false)

/**
 * Generate HTML code based on form inputs
 */
const generatedCode = computed(() => {
    const lines = [
        '<!-- Basic HTML Meta Tags -->',
        `<title>${form.title}</title>`,
        `<meta name="title" content="${form.title}">`,
        `<meta name="description" content="${form.description}">`,
        `<meta name="keywords" content="${form.keywords}">`,
        '',
        '<!-- Facebook Meta Tags -->',
        `<meta property="og:url" content="${form.url}">`,
        `<meta property="og:type" content="${form.type}">`,
        `<meta property="og:title" content="${form.title}">`,
        `<meta property="og:description" content="${form.description}">`,
        `<meta property="og:image" content="${form.image}">`,
        '',
        '<!-- Twitter Meta Tags -->',
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta property="twitter:domain" content="${form.url ? new URL(form.url).hostname : ''}">`,
        `<meta property="twitter:url" content="${form.url}">`,
        `<meta name="twitter:title" content="${form.title}">`,
        `<meta name="twitter:description" content="${form.description}">`,
        `<meta name="twitter:image" content="${form.image}">`
    ]
    return lines.join('\n')
})

/**
 * Handle copy to clipboard
 */
const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(generatedCode.value)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy code:', err)
    }
}
</script>

<template>
    <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
            <h2 class="card-title text-primary">Gerador de Meta Tags Sociais</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Form Section -->
                <div class="flex flex-col gap-4">
                    <div class="form-control w-full">
                        <label class="label"><span class="label-text">Título / Nome</span></label>
                        <input v-model="form.title" type="text" placeholder="Ex: Meu Site Incrível"
                            class="input input-bordered w-full" />
                    </div>

                    <div class="form-control w-full">
                        <label class="label"><span class="label-text">Descrição</span></label>
                        <textarea v-model="form.description" class="textarea textarea-bordered h-24"
                            placeholder="Uma breve descrição sobre o seu site"></textarea>
                    </div>

                    <div class="form-control w-full">
                        <label class="label"><span class="label-text">URL da Imagem</span></label>
                        <input v-model="form.image" type="url" placeholder="https://exemplo.com/imagem.png"
                            class="input input-bordered w-full" />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="form-control w-full">
                            <label class="label"><span class="label-text">Tipo</span></label>
                            <input v-model="form.type" type="text" placeholder="website"
                                class="input input-bordered w-full" />
                        </div>
                        <div class="form-control w-full">
                            <label class="label"><span class="label-text">URL do Site</span></label>
                            <input v-model="form.url" type="url" placeholder="https://exemplo.com"
                                class="input input-bordered w-full" />
                        </div>
                    </div>

                    <div class="form-control w-full">
                        <label class="label"><span class="label-text">Keywords (separadas por vírgula)</span></label>
                        <input v-model="form.keywords" type="text" placeholder="dev, tools, utils"
                            class="input input-bordered w-full" />
                    </div>
                </div>

                <!-- Preview Section -->
                <div class="flex flex-col gap-4">
                    <label class="label"><span class="label-text">Código HTML Gerado</span></label>
                    <div class="relative group">
                        <pre
                            class="bg-base-300 p-4 rounded-lg overflow-x-auto text-xs font-mono h-[400px]"><code>{{ generatedCode }}</code></pre>
                        <button @click="copyCode" class="btn btn-sm btn-primary absolute top-2 right-2"
                            :class="{ 'btn-success': copied }">
                            {{ copied ? 'Copiado!' : 'Copiar Código' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
