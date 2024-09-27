import { HydrateClient } from "~/trpc/server";

export default async function Dashboard() {
  return (
    <HydrateClient>
      <main>{"test"}</main>
    </HydrateClient>
  );
}
