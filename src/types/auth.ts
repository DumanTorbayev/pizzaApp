export interface IAuthorization {
  email: string
  password: string
}

export interface IRegistration extends IAuthorization {
  confirm?: string
}
