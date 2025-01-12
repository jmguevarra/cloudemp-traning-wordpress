import { MESSAGE_STATUSES } from "../enums/statuses.enum";

export interface Notifier{
    message: string,
    status: MESSAGE_STATUSES,
    data: any
}