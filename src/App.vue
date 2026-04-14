<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MyIp from './components/MyIp.vue'
import Md5Generator from './components/Md5Generator.vue'
import CpfGenerator from './components/CpfGenerator.vue'
import CnpjGenerator from './components/CnpjGenerator.vue'
import SocialMetaTags from './components/SocialMetaTags.vue'

const theme = ref('light')

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
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.value = 'dark'
    }
    document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<template>
    <div class="min-h-screen bg-base-200 flex flex-col">
        <!-- Header -->
        <header class="navbar bg-base-100 shadow-md px-4 sm:px-8">
            <div class="flex-1">
                <a class="text-2xl font-bold text-primary flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    DevUtils
                </a>
            </div>
            <div class="flex-none">
                <button @click="toggleTheme" class="btn btn-ghost btn-circle" aria-label="Toggle Theme">
                    <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.071 16.071l.707.707M7.757 7.757l.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-8 flex-grow flex flex-col gap-8 max-w-5xl">
            <!-- 1. Meu IP -->
            <section id="my-ip">
                <MyIp />
            </section>

            <!-- 2. Gerador MD5 -->
            <section id="md5-generator">
                <Md5Generator />
            </section>

            <!-- 3. Gerador de CPF -->
            <section id="cpf-generator">
                <CpfGenerator />
            </section>

            <!-- 4. Gerador de CNPJ -->
            <section id="cnpj-generator">
                <CnpjGenerator />
            </section>

            <!-- 5. Gerador de Meta Tags -->
            <section id="meta-tags-generator">
                <SocialMetaTags />
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer footer-center p-10 bg-base-100 text-base-content rounded border-t border-base-300">
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a href="https://github.com/devutils/devutils.github.io" target="_blank"
                        class="link link-hover flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="fill-current">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Repository
                    </a>
                </div>
                <p>© 2026 DevUtils</p>
            </div>
        </footer>
    </div>
</template>

<style>
/* Smooth scrolling for anchor links if needed */
html {
    scroll-behavior: smooth;
}
</style>
