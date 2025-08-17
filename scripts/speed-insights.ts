import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights({
  sampleRate: 1,
})