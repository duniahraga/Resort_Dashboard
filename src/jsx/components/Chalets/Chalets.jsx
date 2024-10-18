import React, { useState, useRef, useEffect } from 'react';
import Tables from '../Tables/Tables';
import ChaletsMmodelAdd from './ChaletsMmodelAdd';
import axios from 'axios';
import ChaletShowModel from './ChaletShowModel';
import ChaletsMmodelUpdate from './ChaletsMmodelUpdate';






export default function Chalets() {
    const [APIdata, setAPIdata] = useState([])
  const employe = useRef();
  const [viweModelData, setviweModelData] = useState([])
  const invite = useRef();



//============================Display all data=====================================
  function getAllData() {

    axios.get(`http://localhost:8082/Chalets`).then(res => {
     setAPIdata(res.data)

   })
     .catch(err => console.log(err))

 }

 // ===================================================================================

 //showin items in tabel
 useEffect(() => {

    getAllData()
  }
    , [])
 

  
  // ==================================viweModel===========================

  function ViweModel(id) {
    invite.current.showInviteModal()
    APIdata.map((item) => {
        if (id === item.id) {
            setviweModelData(item)
        }
        

    })

}
    const headersTitle = [
        { label: ' ID', key: 'id' },
        { label: 'Title', key: 'Title' },
        { label: 'Publish', key: 'Publish' },

        
    ]
    
    
    
    return <>
        
        
        
       

      <Tables
        data={APIdata}
        headers={headersTitle}
        employe={employe}
        ViweModel={ViweModel}
        Title=" + Add Chalets " />
           
            
          <ChaletsMmodelAdd
            ref={employe}
            Title="Add Chalets"
            getAllData={getAllData}
            />

      <ChaletsMmodelUpdate />

      <ChaletShowModel
         ref={invite}
         viweModelData={viweModelData}
         Title="Show Chates "
        
      
      />      

    
    </>
}

