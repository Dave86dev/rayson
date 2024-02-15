
import { JsonCopyProps } from "../interfaces";

export const JsonCopy = ({data}:JsonCopyProps):void => {

    //FORMAT OBJECTTOCOPY TO TS INTERFACE..... WATCH OUT NAMING....... 
    let string = JSON.stringify(data)
    console.log(string)
}