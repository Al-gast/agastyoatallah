import React from "react"
import { Link } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="bg-surface0 flex lg:p-8 p-4 rounded-lg items-center side-project gap-8 flex-1">
      <div className="flex-1 w-1/2">
        <h2 className="text-lavender text-2xl font-bold">{props.title}</h2>
        <div className="mb-4 mt-2">
          <p className="text-text">{props.desc}</p>
        </div>
        <Link
          to={props.url}
          className="inline-flex items-center gap-3 rounded-lg bg-lavender opacity-95 py-3 px-5 text-sm leading-5 font-semibold text-surface0 transition-all hover:opacity-100 active:scale-95 active:transform-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Website
          <svg
            data-src="https://s2.svgbox.net/hero-outline.svg?ic=external-link"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color=""
            data-id="svg-loader_2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
      <div className="w-1/2 mx-auto hidden lg:block">
        <img className="bg-cover" src={props.imgUrl} />
      </div>
    </div>
  )
}

export default ProjectCard
