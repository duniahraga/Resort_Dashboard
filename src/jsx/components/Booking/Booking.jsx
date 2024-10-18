import React, { useState, useRef, useEffect } from 'react';
import { IMAGES } from '../../constant/theme';
import Tables from '../Tables/Tables';
import { Link } from 'react-router-dom';
import BookingAddModal from './BookingAddModal';
import axios from 'axios';
import BookingShowModel from './BookingShowModel';
import BookingInvoicesModel from './BookingInvoicesModel';



const status = [
    {  status: 'confirmed' },
    { status: 'cancelled' },
]

const headersTitle = [
    { label: ' ID', key: 'id' },
    { label: 'Chalet Name', key: 'ChaletName' },
    { label: 'Date of entry', key: 'EntryDate' },
    { label: 'Exit date', key: 'ExitDate' },
    { label: 'UserName', key: 'firstName' },
    { label: 'Phone Numebr', key: 'phoneNumber' },
    { label: 'Total', key: '' },
    { label: 'deposit', key: '' },
    { label: 'Booking Statues', key: '' },
    { label: 'payment method', key: 'paymentMethod' },


]

const customCellRenderer = {
    status: (row) => (
        <span >

            {row.status === 'cancelled' ? (
                <Link className=' badge badge-danger ' to={`/Chalets/${row.id}`}>{row.status}</Link>
            ) : (
                <Link className='badge badge-success ' to={`/inactive/${row.id}`}>{row.status}</Link>
            )}
        </span>
    )
};

export default function Booking() {

//Staes
    const [APIdata, setAPIdata] = useState([])
    const employe = useRef();
    const Update = useRef();
    const invite = useRef();
    const Invoices = useRef();
    const [viweModelData, setviweModelData] = useState([])
    const [InvoicesBooking, setInvoicesBooking] = useState([])
    const [updateRestore, setupdateRestore] = useState([])


    //============================Display all data=====================================
    function getAllData() {

        axios.get(`http://localhost:8082/Booking`).then(res => {
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



    // ====================update===============================
    function update(id) {
        console.log('id', id)
        Update.current.showUpdateModal()
        APIdata.map((item) => {
            if (id === item.id) {
                return setupdateRestore(item)


            }
        })




    }

    // ===================================================================================

    //showin items in tabel
    useEffect(() => {

        getAllData()
    }
        , [])

    //====================================================InvoicesModel========================
    function InvoicesModel(id) {
        Invoices.current.showInvoicesModal()
        APIdata.map((item) => {
            if (id === item.id) {
                setInvoicesBooking(item)
            }
        })
    }

    // ==================================viweModel===========================

    function ViweModel(id) {
        invite.current.showInviteModal()
        APIdata.map((item) => {
            if (id === item.id) {
                setviweModelData(item)
            }


        })

    }



    return <>
        <Tables data={APIdata} headers={headersTitle} employe={employe}
            customCellRenderer={customCellRenderer} ViweModel={ViweModel}
            InvoicesModel={InvoicesModel}
            Title=" + Add Booking "
        />

        <BookingAddModal
            ref={employe}
            Title="Add Booking"
            getAllData={getAllData}
            ApiDAte={APIdata}
        />

        <BookingShowModel
            ref={invite}
            viweModelData={viweModelData}
            Title="Show Booking"
        />
        <BookingInvoicesModel
            ref={Invoices}
            InvoicesBooking={InvoicesBooking}
           Title="Show Invoices"
        
        />

    </>


}