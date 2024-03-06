export function Coin() {
  return (
    <div className="flex space-x-2 p-1 rounded-3xl border border-solid border-yellow-200 bg-yellow-100">
      <img src="/coin.svg" alt="coins" />
      <span className="font-bold text-base text-yellow-600">10,340</span>
    </div>
  )
}