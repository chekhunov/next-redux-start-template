export const IS_BROWSER: boolean = typeof window !== 'undefined'
export const IS_STAGING = process.env.CI_ENV === 'staging'
export const IS_PRODUCTION = process.env.CI_ENV === 'production'
