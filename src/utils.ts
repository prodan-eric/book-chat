import { Timestamp } from "firebase/firestore"
import moment from "moment"

export const getFormattedDate = (timestamp: Timestamp) =>{
    return moment(timestamp.toDate()).format('ddd, h:mm')

}
