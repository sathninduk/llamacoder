import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-3 mt-5 flex h-16 w-full flex-col items-center justify-between space-y-3 px-3 pt-4 text-center sm:mb-0 sm:h-20 sm:flex-row sm:pt-2">
      <div>
        <div className="font-medium">
          Built with{" "}
          <a
            href="https://dub.sh/together-ai/?utm_source=example-app&utm_medium=llamacoder&utm_campaign=llamacoder-app-signup"
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
          >
            Llama 3.1 405B
          </a>{" "}
          and{" "}
          <a
            href="https://dub.sh/together-ai/?utm_source=example-app&utm_medium=llamacoder&utm_campaign=llamacoder-app-signup"
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
          >
            Together AI
          </a>
          .
        </div>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <p>Forked by{" "}<a href="https://bysatha.com" target="_blank" className={"text-blue-600"}>Sathnindu Kottage</a></p>
      </div>
    </footer>
  );
}
