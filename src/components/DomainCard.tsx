import { DomainType } from '@/lib/types'

interface DomainCardProps {
  title: string
  description: string
  supportingText: string
  href: string
  domain: DomainType
}

const getDomainIcon = (domain: DomainType) => {
  switch (domain) {
    case 'Marine':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 16h18l2-3H4l-2 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13v-2h12v2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11v-1.5h6v1.5" />
        </svg>
      )
    case 'Home':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    case 'Content Creators':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    case 'Business':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    default:
      return null
  }
}

const getDomainColors = (domain: DomainType) => {
  switch (domain) {
    case 'Marine':
      return {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        borderHover: 'group-hover:border-blue-200'
      }
    case 'Home':
      return {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        borderHover: 'group-hover:border-green-200'
      }
    case 'Content Creators':
      return {
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        borderHover: 'group-hover:border-purple-200'
      }
    case 'Business':
      return {
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
        borderHover: 'group-hover:border-gray-200'
      }
    default:
      return {
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
        borderHover: 'group-hover:border-gray-200'
      }
  }
}

export default function DomainCard({ title, description, supportingText, href, domain }: DomainCardProps) {
  const colors = getDomainColors(domain)

  return (
    <a
      href={href}
      className="group block bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 p-6 hover:shadow-sm"
    >
      <div className="flex items-start">
        <div className={`${colors.iconBg} ${colors.iconColor} p-2.5 rounded-lg mr-4 flex-shrink-0`}>
          {getDomainIcon(domain)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-trovia-blue transition-colors duration-200 mb-2">
            {title}
          </h3>
          <p className="text-gray-700 mb-3 font-medium text-sm">
            {description}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {supportingText}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 self-start mt-1">
          <svg
            className="h-5 w-5 text-gray-400 group-hover:text-trovia-blue transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  )
}