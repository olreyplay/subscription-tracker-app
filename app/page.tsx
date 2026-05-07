"use client";
import { useState } from "react";

type Subscription = {
  id: number;
  name: string;
  price: number;
  category: string;
  billingCycle: string;
  status: "Active" | "Canceled";
};

const categories = [
  "Entertainment",
  "Music",
  "Software",
  "Fitness",
  "Utilities",
  "Education",
];

export default function HomePage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newSubscription: Subscription = {
      id: Date.now(),
      name: formData.get("name") as string,
      price: Number(formData.get("price")),
      category: formData.get("category") as string,
      billingCycle: formData.get("billingCycle") as string,
      status: "Active",
    };

    setSubscriptions([...subscriptions, newSubscription]);

    event.currentTarget.reset();
  }

  function toggleSubscriptionStatus(id: number) {
    setSubscriptions(
      subscriptions.map((subscription) => {
        if (subscription.id === id) {
          return {
            ...subscription,
            status: subscription.status === "Active" ? "Canceled" : "Active",
          };
        }

        return subscription;
      }),
    );
  }

  const monthlyCost = subscriptions.reduce((total, subscription) => {
    if (subscription.billingCycle === "Yearly") {
      return total + subscription.price / 12;
    }

    return total + subscription.price;
  }, 0);

  const yearlyCost = subscriptions.reduce((total, subscription) => {
    if (subscription.billingCycle === "Yearly") {
      return total + subscription.price;
    }

    return total + subscription.price * 12;
  }, 0);

  const activeSubscriptions = subscriptions.length;

  const filteredSubscriptions =
    selectedCategory === "All"
      ? subscriptions
      : subscriptions.filter(
          (subscription) => subscription.category === selectedCategory,
        );

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

            <h3 className="mt-6 text-5xl font-light">
              ${monthlyCost.toFixed(2)}
            </h3>
          </div>

          <div className="border border-neutral-300 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Yearly Cost
            </p>

            <h3 className="mt-6 text-5xl font-light">
              ${yearlyCost.toFixed(2)}
            </h3>
          </div>

          <div className="border border-neutral-300 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Active Plans
            </p>

            <h3 className="mt-6 text-5xl font-light">{activeSubscriptions}</h3>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-light">Add Subscription</h2>
            <form
              onSubmit={handleSubmit}
              className="mt-10 border border-neutral-300 bg-white p-8"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-500">
                    Subscription Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="Netflix"
                    required
                    className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-500">
                    Monthly Price
                  </label>

                  <input
                    name="price"
                    type="number"
                    placeholder="15"
                    required
                    className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="text-sm text-neutral-500">Category</label>

                  <select
                    name="category"
                    className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900"
                  >
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-neutral-500">
                    Billing Cycle
                  </label>

                  <select
                    name="billingCycle"
                    className="mt-3 w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-900"
                  >
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

            <div className="mt-8 flex flex-wrap gap-3">
              {["All", ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`border px-4 py-2 text-sm transition ${
                    selectedCategory === category
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-300 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredSubscriptions.length === 0 ? (
            <div className="mt-10 border border-dashed border-neutral-400 p-20 text-center">
              <p className="text-lg text-neutral-500">
                No subscriptions added yet.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {filteredSubscriptions.map((subscription) => (
                <article
                  key={subscription.id}
                  className={`border border-neutral-300 bg-white p-8 transition ${
                    subscription.status === "Canceled"
                      ? "opacity-50"
                      : "opacity-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex border border-neutral-300 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {subscription.category}
                      </div>

                      <div
                        className={`mt-3 inline-flex px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                          subscription.status === "Active"
                            ? "bg-neutral-900 text-white"
                            : "border border-neutral-300 text-neutral-400"
                        }`}
                      >
                        {subscription.status}
                      </div>

                      <h3 className="mt-4 text-3xl font-light">
                        {subscription.name}
                      </h3>
                    </div>

                    <p className="text-3xl font-light">${subscription.price}</p>
                  </div>

                  <p className="mt-8 text-sm text-neutral-500">
                    Billed {subscription.billingCycle.toLowerCase()}
                  </p>

                  <button
                    onClick={() => toggleSubscriptionStatus(subscription.id)}
                    className="mt-8 border border-neutral-300 px-4 py-2 text-sm transition hover:border-neutral-900"
                  >
                    {subscription.status === "Active"
                      ? "Cancel Subscription"
                      : "Reactivate Subscription"}
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
