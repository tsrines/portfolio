import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChessKnight, faMugHot } from "@fortawesome/free-solid-svg-icons"

export default function Projects() {
  return (
    <div className="mt-8 mb-6">
      <h2 className="text-center text-sm font-medium text-gray-400 mb-4 tracking-wider uppercase">
        Projects
      </h2>
      <div className="flex justify-center gap-6">
        <Link
          href="https://chess.rines.io"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center justify-center w-28 h-28 bg-gray-800 rounded-2xl border border-gray-700 transition-all duration-300 hover:scale-110 hover:bg-gray-750 hover:border-gray-600 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <FontAwesomeIcon
            icon={faChessKnight}
            className="h-10 w-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-400"
          />
          <span className="mt-2 text-xs text-gray-400 transition-colors duration-300 group-hover:text-blue-400">
            Chess Analyzer
          </span>
        </Link>

        <Link
          href="https://coffee.rines.io"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center justify-center w-28 h-28 bg-gray-800 rounded-2xl border border-gray-700 transition-all duration-300 hover:scale-110 hover:bg-gray-750 hover:border-gray-600 hover:shadow-lg hover:shadow-amber-500/20"
        >
          <FontAwesomeIcon
            icon={faMugHot}
            className="h-10 w-10 text-gray-400 transition-colors duration-300 group-hover:text-amber-400"
          />
          <span className="mt-2 text-xs text-gray-400 transition-colors duration-300 group-hover:text-amber-400">
            Don Rafa Coffee
          </span>
        </Link>
      </div>
    </div>
  )
}

