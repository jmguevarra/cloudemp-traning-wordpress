import React from "react";
import { Dispatch, SetStateAction } from "react";
import { CarPost } from "../types/carpost";
import { Notifier } from "../types/notifier";
import { MESSAGE_STATUSES } from "../enums/statuses.enum";

//initialize interface property
interface props {
    cars: CarPost[],
    setCars: Dispatch<SetStateAction<CarPost[]>>,
    notifier: Notifier,
    setNotifier: Dispatch<SetStateAction<Notifier>>
}
  
//create context and export it
const WPContext = React.createContext<props>({
    cars: [],
    setCars: ()=> {},
    notifier: {
        message: "",
        status: MESSAGE_STATUSES.NONE,
        data: []
    },
    setNotifier: ()=> {}
});

export default WPContext;