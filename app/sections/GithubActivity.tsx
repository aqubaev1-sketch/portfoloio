import GithubActivity from "@/components/GithubActivity";

export default function GithubCalendar() {
  return (
    <>
      <div className="relative mx-8 flex scrollbar-none items-center justify-start overflow-x-auto py-5 md:justify-center md:mx-12">
        <div className="relative z-10 w-200 shrink-0 md:w-auto">
          <GithubActivity />
        </div>
      </div>
    </>
  );
}
