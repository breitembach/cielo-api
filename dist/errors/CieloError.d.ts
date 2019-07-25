interface err {
    Code: number;
    Message: string;
}
export default class CieloError extends Error {
    errors: err[];
    statusCode: number;
    constructor(init?: Partial<CieloError>);
}
export {};
