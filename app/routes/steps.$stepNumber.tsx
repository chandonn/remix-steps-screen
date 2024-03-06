import { LoaderFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, Link, MetaFunction, useLoaderData, useNavigate } from "@remix-run/react"
import { Accordion } from "~/components/Accordion";
import { Coin } from "~/components/Coin"
import { ProgressIndicator } from "~/components/ProgressIndicator"
import { Colors } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Steps" },
    { name: "description", content: "Steps Screen" },
  ];
};

export const loader = ({
  params
}: LoaderFunctionArgs) => {
  const stepNumber = Number(params.stepNumber)
  const totalSteps = 4

  if (typeof stepNumber !== "number") {
    return redirect("/steps/1")
  }

  if (stepNumber < 1) {
    return redirect("/steps/1")
  }

  if (stepNumber > totalSteps) {
    return redirect("/steps/4")
  }

  const percentage = stepNumber / totalSteps * 100
  const currentColor: Colors = "blue"

  return json({ stepNumber, totalSteps, percentage, currentColor })
}

export default function Steps() {
  const { stepNumber, totalSteps, percentage, currentColor } = useLoaderData<typeof loader>()
  const navigate = useNavigate()

  return (
    <div className="h-full pt-4 flex flex-col bg-slate-100">
      <div className="flex-auto space-y-4 mx-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/exit-icon.svg" alt="go back" />
            <Link className="[color:var(--primary-600)] font-semibold text-sm" to="/">Exit</Link>
          </div>
          <Coin />
        </div>
        <div className="space-y-6 font-normal text-base bg-white p-4 rounded-xl border-solid border border-purple-100">
          <div className="flex space-x-4 items-center">
            <ProgressIndicator percentComplete={percentage} color={currentColor} />
            <h1 className="font-bold text-xl">Understanding what funding is right for your business</h1>
            <span className="text-gray-400 text-sm">{`${stepNumber}/${totalSteps}`}</span>
          </div>
          <p>Here is a step that has lots of information on it, so we put it in collapsable sections to make it easier to flip through.</p>
          <Accordion title="This is an accordion header">
            <>
              <p>This is some accordion content. It event</p>
              <ul className="list-disc pl-6">
                <li>has</li>
                <li>bullets</li>
                <li>to say</li>
                <li>stuff</li>
              </ul>
            </>
          </Accordion>
          <Accordion title="This is an accordion header">
            <>
              <p>This is some accordion content. It event</p>
              <ul className="list-disc pl-6">
                <li>has</li>
                <li>bullets</li>
                <li>to say</li>
                <li>stuff</li>
              </ul>
            </>
          </Accordion>
          <Accordion title="This is an accordion header">
            <>
              <p>This is some accordion content. It event</p>
              <ul className="list-disc pl-6">
                <li>has</li>
                <li>bullets</li>
                <li>to say</li>
                <li>stuff</li>
              </ul>
            </>
          </Accordion>
          <p>Lastly, we’re going to test your knowledge.</p>
        </div>
      </div>

      <Form className="flex p-3 space-x-3 bg-white">
        <button
          className="px-4 py-3 text-gray-500 rounded-xl border-solid border border-gray-300"
          disabled={stepNumber === 1}
          onClick={() => navigate(-1)}
          type="button"
        >{"< Back"}</button>
        <button className="rounded-xl text-white flex-auto px-4 py-3 bg-[color:var(--brand-blue)]" disabled={stepNumber === 4} onClick={() => navigate("/steps/" + (stepNumber + 1))} type="button">{"Next >"}</button>
      </Form>
    </div>
  )
}