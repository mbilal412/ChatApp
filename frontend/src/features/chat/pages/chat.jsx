import { UserButton, useUser } from "@clerk/react";

function Chat() {
  const { user } = useUser();
  const displayName = user?.username || user?.firstName || user?.primaryEmailAddress?.emailAddress || "there";

  return (
    <main className="min-h-screen bg-linear-to-br from-[#f4f0e8] to-[#e5eee2] px-6 py-12 md:px-[8vw]">
      <header className="mx-auto flex max-w-[980px] items-center justify-between gap-5 max-[520px]:items-start max-[520px]:flex-col">
        <div>
          <p className="mb-7 font-sans text-[0.95rem] text-[#687168]">Your private space</p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.05em]">Hello, {displayName}</h1>
        </div>
        <UserButton afterSignOutUrl="/login" />
      </header>
      <section className="mx-auto mt-12 min-h-[420px] max-w-[980px] rounded-lg border border-[#d8d4ca] bg-[#fffdf8]/80 p-7" aria-label="Chat area">
        <p className="font-sans text-[#687168]">Your chat is ready. Messages will appear here.</p>
      </section>
    </main>
  );
}

export default Chat;
