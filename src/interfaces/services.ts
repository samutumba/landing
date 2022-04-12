export interface Services{
    type: ServiceType,
    title: String,
    description: String,
}

export enum ServiceType{
    Dev = "Development",
    Maintenance = "Maintenance",
    Advice = "Advice",
    Consult = "Consultation",

}