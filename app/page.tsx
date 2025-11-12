import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/events">
        <button className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Event</button>
      </Link>
    </div>
  );
}