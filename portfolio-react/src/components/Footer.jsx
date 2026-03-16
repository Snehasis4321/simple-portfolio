import { FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-5 py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Snehasis Ghosh. Built with ❤️
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Snehasis4321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.youtube.com/@Snehasis4321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-red-500 dark:hover:bg-white/10 dark:hover:text-red-400"
            aria-label="YouTube"
          >
            <FaYoutube size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
