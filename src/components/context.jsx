import { createContext, useState } from "react";


export const Dashboardcontext = createContext(null)

function Contextfunc({children}){
    const [Dashboarditems,setitems] = useState([])
    const [editing,setediting] = useState(false)
    const [data,setdata] = useState({
        title: "",
        writtenby: "",
        isbn: "",
        author: "",
        dop: "",
        dob: "",
        bio: ""
    })
    function deleteitem(item){
        let newarr = Dashboarditems.filter((book)=> book.title !== item.title )
        console.log(newarr)
        setitems([...newarr])
        console.log(Dashboarditems)
    }
    function edit(item){
        setdata(item)
        console.log(data)
        setediting(!editing)
        console.log(editing)
    }
    return(
        <Dashboardcontext.Provider value={{Dashboarditems,setitems,data,setdata,edit,editing,setediting,deleteitem}}>
            {children}
        </Dashboardcontext.Provider>
    )

}
export default Contextfunc