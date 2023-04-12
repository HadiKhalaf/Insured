export type Root = Phys2[]

export interface Phys2 {
  id: number
  name: string
  physicianAdmissionss: PhysicianAdmissionss[]
}

export interface PhysicianAdmissionss {
  id: number
  cardNumber: string
  admissionDt: string
  medicalCase: string
  estimatedCost: number
  remarks?: string
}
