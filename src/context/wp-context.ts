import React from "react";
import { Dispatch, SetStateAction } from "react";
import { CarPost } from "../types/carpost";
import { Notifier } from "../types/notifier";
import { MESSAGE_STATUSES } from "../enums/statuses.enum";
import { PagePostType } from "../types/page-post-type";

//initialize interface property
interface props {
    page: PagePostType, //current page
    setPage: Dispatch<SetStateAction<PagePostType>>,
    cars: CarPost[],
    setCars: Dispatch<SetStateAction<CarPost[]>>,
    notifier: Notifier,
    setNotifier: Dispatch<SetStateAction<Notifier>>
}
  
//create context and export it
const WPContext = React.createContext<props>({
    page: {} as PagePostType,
    setPage: ()=> {},
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