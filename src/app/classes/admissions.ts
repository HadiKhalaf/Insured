export type Root = adm2[]

export interface adm2 {
  cardNumber: String
  admissionDt: Date
  medicalCase: String
  estimatedCost: number
  remarks?: String
  hospital:number
  physician:number
  adm_status:number
  userr_id:number
}