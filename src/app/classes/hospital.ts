export type Root = Root2[]

export interface Root2 {
  id: number
  name: string
  hospitalAdmissionss: HospitalAdmissionss[]
}

export interface HospitalAdmissionss {
  id: number
  cardNumber: string
  admissionDt: string
  medicalCase: string
  estimatedCost: number
  remarks?: string
}