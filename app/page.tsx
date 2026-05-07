export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Subtrack</h2>

          <button className="text-sm font-medium">Dashboard</button>
        </header>

        <section className="py-24">
          <h1 className="max-w-5xl text-6xl font-light leading-none tracking-tight md:text-8xl">
            Track Every Subscription Without Losing Control Of Your Budget.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-500">
            Monitor recurring payments, organize expenses, and understand where
            your monthly spending goes.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="border border-neutral-300 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Monthly Cost
            </p>

            <h3 className="mt-6 text-5xl font-light">$0</h3>
          </div>

          <div className="border border-neutral-300 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Yearly Cost
            </p>

            <h3 className="mt-6 text-5xl font-light">$0</h3>
          </div>

          <div className="border border-neutral-300 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Active Plans
            </p>

            <h3 className="mt-6 text-5xl font-light">0</h3>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-light">Add Subscription</h2>
            <form className="mt-10 border border-neutral-300 bg-white p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-500">
                    Subscription Name
                  </label>

                  <input
                    type="text"
                    placeholder="Netflix"
                    className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-500">
                    Monthly Price
                  </label>

                  <input
                    type="number"
                    placeholder="15"
                    className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-500">Category</label>

                  <select className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900">
                    <option>Entertainment</option>
                    <option>Music</option>
                    <option>Software</option>
                    <option>Fitness</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-neutral-500">
                    Billing Cycle
                  </label>

                  <select className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900">
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>

              <button className="mt-8 border border-neutral-900 px-8 py-3 text-sm transition hover:bg-neutral-900 hover:text-white">
                Save Subscription
              </button>
            </form>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-light">Your Subscriptions</h2>

            <button className="border border-neutral-900 px-6 py-3 text-sm transition hover:bg-neutral-900 hover:text-white">
              Add Subscription
            </button>
          </div>

          <div className="mt-10 border border-dashed border-neutral-400 p-20 text-center">
            <p className="text-lg text-neutral-500">
              No subscriptions added yet.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
