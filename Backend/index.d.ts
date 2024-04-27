// Expanding the Request interface
import * as express from 'express-serve-static-core'
declare global{
    namespace Express{
        interface Request{
            customfield?:string
        }
    }
}