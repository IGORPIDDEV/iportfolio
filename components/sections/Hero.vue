<template>
  <section
    class="snap-start h-screen w-full relative flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black"
  >
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div
        class="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700/20 via-black to-black opacity-60 animate-pulse"
      />
      <div
        class="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10 animate-float"
      />
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-float-delay"
      />
    </div>

    <motion.h1
      class="relative z-10 text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
      :initial="{ opacity: 0, y: -40 }"
      :animate="{ opacity: 1, y: 0 }"
      transition="{ duration: 1.2 }"
    >
      Hi, my name is Igor!
    </motion.h1>

    <motion.p
      class="relative z-10 mt-6 text-lg md:text-xl text-gray-300 max-w-xl"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      transition="{ delay: 0.3, duration: 1 }"
    >
      A Full-Stack Developer crafting powerful, scalable web & mobile solutions with Nuxt, Laravel &
      Flutter. I love building beautiful user experiences and making things move.
    </motion.p>

    <motion.div
      class="relative z-10 mt-8 flex flex-wrap justify-center gap-4"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      transition="{ delay: 0.6, duration: 1 }"
    >
      <a
        href="#projects"
        class="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-xl hover:bg-gray-200 transition"
      >
        💼 See My Work
      </a>
      <a
        href="#skills"
        class="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
      >
        🧠 My Skills
      </a>
      <a
        href="#contact"
        class="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition"
      >
        📬 Contact Me
      </a>
    </motion.div>

    <!-- Scroll indicator -->
    <div class="relative z-10 mt-16 animate-bounce text-gray-400">
      <span class="text-sm">Scroll down</span>
      <svg
        class="w-6 h-6 mx-auto mt-1"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes float-delay {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 8s ease-in-out infinite;
}
</style>
