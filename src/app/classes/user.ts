export type Root = us2[]

export interface us2 {
  id: number
  username: string
  passwordHash: string
  userAdmissionss: UserAdmissionss[]
}

export interface UserAdmissionss {
  id: number
  cardNumber: string
  admissionDt: string
  medicalCase: string
  estimatedCost: number
  remarks?: string
}
