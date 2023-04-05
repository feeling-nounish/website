import { For, createSignal } from "solid-js";

const types = ["project", "person"] as const;

export default function Form() {
  const [type, setType] = createSignal<(typeof types)[number]>("project");

  return (
    <div class="max-w-2xl flex flex-col gap-8">
      <h1 class="font-londrina-solid text-6xl">Submit something nounish</h1>
      <p>Submit a nounish person or project to get featured on this site!</p>
      <div class="flex font-londrina-solid text-2xl">
        <h2>I am submitting a</h2>
        <select
          value={type()}
          onChange={(e) => {
            setType(e.currentTarget.value as (typeof types)[number]);
          }}
          class="bg-transparent capitalize text-purple-800 outline-none cursor-pointer"
        >
          <For each={types}>
            {(type) => <option class="capitalize">{type}</option>}
          </For>
        </select>
      </div>
      <div class="flex flex-col gap-8">
        <input type="text" placeholder={`Link to ${type()}`} />
      </div>
    </div>
  );
}
