import { Form, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { ProgressIndicator } from "~/components/ProgressIndicator";
import { Colors } from "~/types";

export default function ProgressIndicatorScreen() {
  const [color, setColor] = useState<Colors>("blue")
  const [percent, setPercent] = useState<number>(0)
  const navigate = useNavigate()
  
  return (
    <div
      className="p-4 container [background:var(--purple-gradient)] h-full flex flex-col justify-evenly align-center"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <button className="text-2xl text-white font-semibold" onClick={() => navigate("/")} type="button">{"< Home"}</button>

      <div className="flex item-center justify-center">
        <div className="scale-150">
          <div className="scale-150">
            <div className="scale-150">
              <ProgressIndicator color={color} percentComplete={percent} />
            </div>
          </div>
        </div>
      </div>

      <Form
        className="text-xl font-semibold p-4 rounded-xl bg-white border border-solid border-purple-100 flex flex-col justify-evenly space-y-4"
      >
        <label htmlFor="percent">Percent</label>
        <input onChange={(e) => setPercent(Number(e.target.value))} name="percent" type="range" defaultValue={percent} min={0} max={100} />

        <label htmlFor="color">Color</label>
        <select onChange={e => setColor(e.target.value as Colors)} className="focus:outline-none focus-visible:border-0" defaultValue={color} name="color">
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>
      </Form>
    </div>
  );
}
