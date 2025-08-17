import { QuartzComponent, QuartzComponentProps } from "./types"

export default (() => {
  function SpeedInsights(_: QuartzComponentProps) {
    return (
      <script
        src="https://vitals.vercel-insights.com/v1/speed-insights.js"
        defer
      ></script>
    )
  }
  return SpeedInsights
}) satisfies QuartzComponent