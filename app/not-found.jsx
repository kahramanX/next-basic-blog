import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-5">Not Found</h2>
      <p className="font-thin mb-10">Could not find requested resource</p>
      <Link
        className="border rounded-full p-2 font-medium hover:text-black hover:bg-white text-sm"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
