import { QuartzComponent, QuartzComponentProps } from "./types"

export default (() => {
  function SpeedInsights(_: QuartzComponentProps) {
    return (
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
import { injectSpeedInsights } from "https://esm.sh/@vercel/speed-insights";
injectSpeedInsights({ sampleRate: 1 });
`,
        }}
      ></script>
    )
  }
  return SpeedInsights
}) satisfies QuartzComponent