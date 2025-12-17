export type InterestType = 'Marine' | 'Home' | 'Business' | 'Content creation' | 'Cooking' | 'Other'

export type DomainType = 'Marine' | 'Home' | 'Content Creators' | 'Business'

export interface BetaSignupData {
  name: string
  email: string
  interest: InterestType
}

export interface BetaSignupProps {
  defaultDomain?: DomainType
  className?: string
}