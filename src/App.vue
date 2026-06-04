<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MyIp from './components/MyIp.vue'
import Md5Generator from './components/Md5Generator.vue'
import CpfGenerator from './components/CpfGenerator.vue'
import CnpjGenerator from './components/CnpjGenerator.vue'
import SocialMetaTags from './components/SocialMetaTags.vue'

const theme = ref('dark')

/**
 * Toggle between light and dark themes
 */
const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('devutils-theme', theme.value)
}

/**
 * Initialize theme from localStorage or system preference
 */
onMounted(() => {
    const savedTheme = localStorage.getItem('devutils-theme')
    if (savedTheme) {
        theme.value = savedTheme
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme.value = 'light'
    }
    document.documentElement.setAttribute('data-theme', theme.value)
})

const sections = [
    { id: 'my-ip', label: '01', name: 'Rede' },
    { id: 'md5-generator', label: '02', name: 'Criptografia' },
    { id: 'cpf-generator', label: '03', name: 'Documentos' },
    { id: 'cnpj-generator', label: '04', name: 'Documentos' },
    { id: 'meta-tags-generator', label: '05', name: 'SEO' },
]
</script>

<template>
    <div class="min-h-screen bg-base-200 text-base-content flex flex-col">
        <!-- Header -->
        <header
            class="sticky top-0 z-50 border-b border-base-300 bg-base-100/70 backdrop-blur-xl">
            <div class="container mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
                <a class="flex items-center gap-2.5 group" href="#top">
                    <span
                        class="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 text-primary shadow-glow transition group-hover:bg-primary/15">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </span>
                    <span class="text-lg font-bold tracking-tight">
                        Dev<span class="text-primary">Utils</span>
                    </span>
                </a>

                <button @click="toggleTheme"
                    class="grid place-items-center h-9 w-9 rounded-lg border border-base-300 text-base-content/70 hover:text-primary hover:border-primary/40 transition"
                    aria-label="Alternar tema">
                    <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.071 16.071l.707.707M7.757 7.757l.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
        </header>

        <!-- Main Content -->
        <main id="top" class="flex-grow">
            <!-- Hero -->
            <section class="hero-grid border-b border-base-300">
                <div class="container mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center">
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/60 px-3 py-1 text-xs font-medium text-base-content/70">
                        <span class="h-1.5 w-1.5 rounded-full bg-success animate-pulse"></span>
                        100% no navegador · sem rastreamento
                    </span>
                    <h1 class="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
                        Ferramentas para
                        <span class="text-primary">desenvolvedores</span>
                    </h1>
                    <p class="mt-4 text-base sm:text-lg text-base-content/60 max-w-xl mx-auto">
                        Detecte seu IP, gere hashes, documentos de teste e meta tags sociais —
                        tudo num só lugar, rápido e direto ao ponto.
                    </p>
                </div>
            </section>

            <!-- Tools -->
            <div class="container mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col gap-12">
                <section v-for="(s, i) in sections" :id="s.id" :key="s.id" class="scroll-mt-24">
                    <div class="mb-4 flex items-center gap-3">
                        <span class="font-mono text-xs text-primary/70">{{ s.label }}</span>
                        <span class="text-xs font-medium uppercase tracking-wider text-base-content/40">{{ s.name }}</span>
                        <span class="h-px flex-1 bg-base-300"></span>
                    </div>
                    <MyIp v-if="i === 0" />
                    <Md5Generator v-else-if="i === 1" />
                    <CpfGenerator v-else-if="i === 2" />
                    <CnpjGenerator v-else-if="i === 3" />
                    <SocialMetaTags v-else-if="i === 4" />
                </section>
            </div>
        </main>

        <!-- Footer -->
        <footer class="border-t border-base-300 bg-base-100">
            <div
                class="container mx-auto max-w-5xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-sm text-base-content/50">© 2026 DevUtils · Feito para devs</p>
                <a href="https://github.com/devutils/devutils.github.io" target="_blank" rel="noopener"
                    class="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-primary transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                        class="fill-current">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                </a>
            </div>
        </footer>
    </div>
</template>
