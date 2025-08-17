import { QuartzComponent, QuartzComponentProps } from "./types"

export default (() => {
  function SpeedInsights(_: QuartzComponentProps) {
    return <script type="module" src="/js/speed-insights.js" defer></script>
  }
  return SpeedInsights
}) satisfies QuartzComponent