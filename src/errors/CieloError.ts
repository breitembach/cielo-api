interface err {
  Code: number,
  Message: string
}
export default class CieloError extends Error {
  public errors: err[]
  public statusCode: number

  public constructor(init?:Partial<CieloError>) {
    super(init.message)
    Object.assign(this, init);
  }
}
