export type Root = statuses2[]

export interface statuses2 {
  id: number
  name: string
  admStatusAdmissionss: AdmStatusAdmissionss[]
}

export interface AdmStatusAdmissionss {
  id: number
  cardNumber: string
  admissionDt: string
  medicalCase: string
  estimatedCost: number
  remarks?: string
}
