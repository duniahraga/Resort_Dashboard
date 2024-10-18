import React, { useState, useRef, useEffect, useCallback } from 'react';
import TheRestoreModelAdd from './TheResortAddModel';
import Tables from '../Tables/Tables';
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import axios from 'axios';
import TheResortUpadteModel from './TheResortAddModel';
import ResortShowModel from './ResortShowModel';

const Resort = () => {
    const [APIdata, setAPIdata] = useState([])
    const invite = useRef();
    const employe = useRef();
    const Update = useRef()
    const [updateRestore, setupdateRestore] = useState([])
    const [viweModelData, setviweModelData] = useState([])
    const [updateResort, setUpdateResort] = useState([]);
    // refs
    const resort = useRef();


    //============================Display all data=====================================
    function getAllData() {

        axios.get(`http://localhost:8082/Restore`).then(res => {
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



    // ====================update========================================================
    // function update(id) {
    //     console.log('id', id)
    //     Update.current.showUpdateModal()
    //     APIdata.map((item) => {
    //         if (id === item.id) {
    //             return setupdateRestore(item)


    //         }
    //     })




    // }

    // update data
  const handleUpdate = useCallback(
    (id) => {
      const item = APIdata.find((item) => id === item.id);
      if (item) {
        setUpdateResort(item);
        Update.current.showUpdateModal();
      }
    },
    [APIdata]
  );

  // delete data
  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8082/Restore/${id}`);
  };

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
        { label: 'Unique ID', key: 'UniqueID' },
        { label: 'Location', key: 'Location' },
        { label: 'Latitude', key: 'latitude' },
        { label: 'Longitude', key: 'longitude' },
        { label: 'Chalet', key: 'status' }, // Adding defaultValue
    ];
    // we need to add from backend
    const customCellRenderer = {
        status: (row) => (
            <span >
                {row.status === "chalet" || row.status === "" ? (
                    <Link className='  badge badge-secondary  ' to={`/Chalets`}>Chalets</Link>
                ) : ''}
            </span>
        )
    };


    return (
        <>
            <Tables data={APIdata} headers={headersTitle} employe={employe}
                customCellRenderer={customCellRenderer} ViweModel={ViweModel}
                Title=" + Add Restore "
                update={Update}
                handleUpdate={handleUpdate}
            />

            <TheRestoreModelAdd
                ref={employe}
                Title="Add Resort"
                getAllData={getAllData}
            />

            {/* <TheResortUpadteModel
                ref={Update}
                updateRestore={updateRestore}
                getAllData={getAllData}

            /> */}
            <ResortShowModel
                ref={invite}
                viweModelData={viweModelData}
                Title="Show Resort"
            />


            {updateResort && (
                <TheResortUpadteModel
                    ref={Update}
                    resortData={updateResort}
                    resortId={updateResort.id}
                    refresh={getAllData}
                />
            )}
       

        </>
    );
};

export default Resort;