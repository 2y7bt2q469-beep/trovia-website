export type InterestType = 'Personal' | 'Team' | 'Company'

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