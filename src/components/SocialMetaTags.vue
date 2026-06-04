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
    <div class="tool-card p-6 sm:p-7">
        <div class="flex items-center gap-3 mb-5">
            <span
                class="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary border border-primary/15">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
                </svg>
            </span>
            <div>
                <h2 class="font-semibold leading-tight">Meta Tags Sociais</h2>
                <p class="text-xs text-base-content/50">Open Graph + Twitter Cards em tempo real</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Form Section -->
            <div class="flex flex-col gap-3.5">
                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-base-content/50">Título / Nome</label>
                    <input v-model="form.title" type="text" placeholder="Ex: Meu Site Incrível"
                        class="w-full rounded-lg border border-base-300 bg-base-200 px-3.5 py-2.5 text-sm placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none transition" />
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-base-content/50">Descrição</label>
                    <textarea v-model="form.description" rows="3"
                        class="w-full resize-y rounded-lg border border-base-300 bg-base-200 px-3.5 py-2.5 text-sm placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none transition"
                        placeholder="Uma breve descrição sobre o seu site"></textarea>
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-base-content/50">URL da Imagem</label>
                    <input v-model="form.image" type="url" placeholder="https://exemplo.com/imagem.png"
                        class="w-full rounded-lg border border-base-300 bg-base-200 px-3.5 py-2.5 text-sm placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none transition" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div class="flex flex-col gap-1.5">
                        <label class="text-xs text-base-content/50">Tipo</label>
                        <input v-model="form.type" type="text" placeholder="website"
                            class="w-full rounded-lg border border-base-300 bg-base-200 px-3.5 py-2.5 text-sm placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none transition" />
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <label class="text-xs text-base-content/50">URL do Site</label>
                        <input v-model="form.url" type="url" placeholder="https://exemplo.com"
                            class="w-full rounded-lg border border-base-300 bg-base-200 px-3.5 py-2.5 text-sm placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none transition" />
                    </div>
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-xs text-base-content/50">Keywords (separadas por vírgula)</label>
                    <input v-model="form.keywords" type="text" placeholder="dev, tools, utils"
                        class="w-full rounded-lg border border-base-300 bg-base-200 px-3.5 py-2.5 text-sm placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none transition" />
                </div>
            </div>

            <!-- Preview Section -->
            <div class="flex flex-col gap-2">
                <span class="text-xs text-base-content/50">Código HTML gerado</span>
                <div class="relative flex-1 overflow-hidden rounded-lg border border-base-300 bg-base-200">
                    <div
                        class="flex items-center justify-between border-b border-base-300 bg-base-300/40 px-3 py-1.5">
                        <div class="flex items-center gap-1.5">
                            <span class="h-2.5 w-2.5 rounded-full bg-error/60"></span>
                            <span class="h-2.5 w-2.5 rounded-full bg-warning/60"></span>
                            <span class="h-2.5 w-2.5 rounded-full bg-success/60"></span>
                            <span class="ml-2 font-mono text-[11px] text-base-content/40">meta-tags.html</span>
                        </div>
                        <button @click="copyCode" :aria-label="copied ? 'Copiado' : 'Copiar código'"
                            class="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition"
                            :class="copied ? 'border-success/40 text-success bg-success/10' : 'border-base-300 text-base-content/60 hover:text-primary hover:border-primary/40'">
                            <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            {{ copied ? 'Copiado!' : 'Copiar' }}
                        </button>
                    </div>
                    <pre class="overflow-x-auto px-4 py-3 text-xs leading-relaxed font-mono h-[340px] text-base-content/80"><code>{{ generatedCode }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
