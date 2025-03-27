import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      'semi': false,
      'comma-dangle': ['error', 'never'],
      'indent': 2,
      'quotes': 'single',
    },
  },
})
