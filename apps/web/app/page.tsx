import prisma from "db/client";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <>
      <div className="hello">{JSON.stringify(users)}</div>

    </>
  )
}
export const dynamic = "force-dynamic";
