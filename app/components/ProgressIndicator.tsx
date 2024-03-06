import { Colors } from "~/types";

export function ProgressIndicator({ percentComplete, color }: { percentComplete: number, color: Colors } ) {
  const p = percentComplete <= 100 ? percentComplete < 0 ? 0 : percentComplete : 100

  const buildPolygonWithPercentage = () => {
    let coordinates = [[100, 0], [100, 0], [100, 0], [100, 0], [100, 0], [50, 50]]

    if (p <= 25) {
      coordinates = [[100, 0], [100, (100 / 25) * p], [100, (100 / 25) * p], [100, (100 / 25) * p], [100, (100 / 25) * p], [50, 50]]
    } else if (p <= 50) {
      coordinates = [[100, 0], [100, 100], [(100 / 25) * (50 - p), 100], [(100 / 25) * (50 - p), 100], [(100 / 25) * (50 - p), 100], [50, 50]]
    } else if (p <= 75) {
      coordinates = [[100, 0], [100, 100], [0, 100], [0, (100 / 25) * (75 - p)], [0, (100 / 25) * (75 - p)], [50, 50]]
    } else if (p <= 100) {
      coordinates = [[100, 0], [100, 100], [0, 100], [0, 0], [100 - (100 / 25) * (100 - p), 0], [50, 50]]
    }

    return coordinates.map(c => {
      return c.map(point => point + "%").join(" ")
    }).join(", ")
  }

  return (
    <div>
      <div id="progress-container" className="relative h-14 w-14 rounded-full overflow-hidden">
        <div
          style={{
            clipPath: `polygon(${buildPolygonWithPercentage()})`,
            background: `var(--${color}-gradient) border-box`
          }}
          id="progress"
          className="h-full w-full"
        >
        </div>
        <div className={`absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-full border-2 ${color} p-2 bg-gray-200`}>
          <svg id="logo" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.959 15.0312C26.7616 17.5123 25.8562 19.8845 24.3502 21.866C22.8442 23.8476 20.8012 25.3552 18.4635 26.2096C16.126 27.0642 13.5923 27.2298 11.1634 26.6868C8.7345 26.1436 6.51256 24.9148 4.76154 23.146C3.01052 21.3774 1.80402 19.1432 1.28539 16.709C0.766753 14.2747 0.957781 11.7428 1.83578 9.41396C2.71378 7.08512 4.24184 5.05726 6.23842 3.5713C8.235 2.08534 10.6162 1.20374 13.099 1.03125" stroke={`var(--${color})`} stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.58 16.1799C19.2189 17.1095 18.6317 17.9344 17.8716 18.58C17.1115 19.2257 16.2024 19.6716 15.2266 19.8776C14.2509 20.0836 13.2391 20.0432 12.2829 19.7599C11.3267 19.4766 10.4562 18.9594 9.75013 18.2551C9.04403 17.5509 8.52463 16.6817 8.23887 15.7262C7.95313 14.7707 7.91005 13.7591 8.11353 12.7828C8.31701 11.8065 8.76065 10.8963 9.40431 10.1345C10.048 9.37278 10.8714 8.78348 11.8 8.41992" stroke={`var(--${color})`} stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 14L19 9" stroke={`var(--${color})`} stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 10L19 9L18 5L22 1L23 5L27 6L23 10Z" stroke={`var(--${color})`} stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
