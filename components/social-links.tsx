import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faAirbnb,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons"

export const LinkedIn = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/rines/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
    </Link>
  )
}

export const Twitter = () => {
  return (
    <Link
      href="https://twitter.com/tweetrines"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
    </Link>
  )
}

export const Github = () => {
  return (
    <Link
      href="https://www.github.com/tsrines"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
    </Link>
  )
}

export const Resume = () => {
  return (
    <Link
      href="https://www.learn.co/tsrines/resume"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      <FontAwesomeIcon icon={faFileAlt} className="h-5 w-5" />
    </Link>
  )
}

export const Email = () => {
  return (
    <Link
      href="mailto:tim@rines.io"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
    </Link>
  )
}

export const Airbnb = () => {
  return (
    <Link
      href="https://www.airbnb.com/users/show/45316653"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      <FontAwesomeIcon icon={faAirbnb} className="h-5 w-5" />
    </Link>
  )
}

export const Medium = () => {
  return (
    <Link
      href="https://medium.com/@tim.rines.io"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-300 transition-colors"
    >
      <FontAwesomeIcon icon={faMedium} className="h-5 w-5" />
    </Link>
  )
}
